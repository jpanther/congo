#!bin/bash

# get current branch
branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

# push any local changes
git push

# checkout stable branch (this will catch uncommitted changes)
git checkout stable || exit 1

# branch validation
if [ $branch = "dev" ]; then
	echo "Enter the release version (eg. v1.0.0):"
	read version

	echo "Started releasing $version for Congo..."

	# pull latest from stable
	git pull

	# merge in changes from dev branch
	git merge --no-ff dev -m "🔖 Release $version"

	# create tag
	git tag $version

	# push commit and tag to remote
	git push
	git push --tags

	echo "$version successfully released!"
	echo "Returning to dev branch..."

	git checkout dev

else 
	echo "Releases can only be published from the dev branch!"
fi
