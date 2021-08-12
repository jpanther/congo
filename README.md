# Congo

Congo is designed to be a fast, lightweight theme for Hugo. It's based upon Tailwind CSS with a clean and minimalist design.

[Screenshot](https://raw.githubusercontent.com/jpanther/Congo/stable/images/screenshot.png)

## Features

- Built with [Tailwind CSS JIT](https://tailwindcss.com/docs/just-in-time-mode) for minified stylesheets without any excess code
- Theme can be easily edited using simple [Tailwind colour definitions and styles](https://tailwindcss.com/docs)
- Dark mode support (auto-switching based upon browser)
- Highly customisable [configuration](#configuration)
- Flexible with any content types, taxonomies and menus
- SVG social icons from [FontAwesome 5](https://fontawesome.com/)
- SEO friendly
- [Fathom Analytics](https://usefathom.com/ref/RLAJSV) and Google Analytics
- Favicons support - Generate using [favicon.io](https://favicon.io)
- [Comments support](https://gohugo.io/content-management/comments/)

## Installation

Simply follow the standard Hugo [Quick Start](https://gohugo.io/getting-started/quick-start/) procedure to get up and running quickly.

Detailed instructions can be found below.

### 1. Install Hugo

You can find specific instructions for your platform in the official [Hugo docs](https://gohugo.io/getting-started/installing.).

Make sure you are using **Hugo version 0.86.1** or later as the theme takes advantage of some of the latest Hugo features.

### 2. Create a new site

Run the command `hugo new site mywebsite` to create a new Hugo site in a folder named `mywebsite`.

### 3. Download the Congo theme

There are a couple of ways to install the Congo theme into your Hugo website. The git method is the easiest to keep the theme up-to-date, but you can also download and install manually if you don't have git available.

#### Install using git

Change into the directory for your Hugo website, initialise a new repository and add Congo as a submodule.

```bash
cd mywebsite
git init
git submodule add https://github.com/jpanther/Congo.git themes/congo
```

_**Note:** You need to substitute `mywebsite` for the correct folder name you used in Step 2._

#### Install manually

Download the latest version of the theme from: [https://github.com/jpanther/Congo/archive/stable.zip](https://github.com/jpanther/Congo/archive/stable.zip)

Extract the archive and you should have a folder named `Congo-stable`.

Rename the folder to `congo` and move it to the `themes/` directory inside your `mywebsite` folder.

_**Note:** You need to substitute `mywebsite` for the correct folder name you used in Step 2._

### 4. Add Congo to your configuration file

Open the `config.toml` file in the root of your website and add `theme = "congo"`

You're now all set up to use Congo. From here you can add some content and start the Hugo server.

Refer to the Hugo docs for more information or read the next section to learn more about configuring the theme.

## Configuration

Congo is a highly customisable theme and uses some of the latest Hugo features to simplify how it is configured.

The theme ships with a default configuration that gets you up and running with a basic blog or static website. This default configuration can be found in the `themes/congo/config/_default/` folder.

> Configuration files bundled with the theme are provided in TOML format as this is the default Hugo syntax. Feel free to convert your config to YAML or JSON as you wish.

The default theme configuration can be overridden on a per-setting basis by copying the relevant setting from the `themes/congo/config/_default/` to your `config.toml` file in the root of your website. Any settings in your config file will take precedence over the theme defaults.

### Getting started

The config files that ship with Congo contain all of the possible settings that the theme recognises. By default, many of these are commented out but you can simply uncomment them to activate or change a specific feature.

A few things you need to set for a new installation:

```toml
# config.toml

theme = "congo"
baseURL = "https://your_domain.com"
languageCode = "en-AU"

title = "My awesome website"
```

It's also useful to add an author configuration by copying the settings from the `themes/congo/config/_default/author.toml` file. You can also add links to your profiles here to enable them in the theme.

```toml
# config.toml

[author]
name = "Your name"
twitter = "https://twitter.com/username"
```

### Organising content

By default, Congo doesn't force you to use a particular content type. In doing so you are free to define your content as you wish. You might prefer _pages_ for a static site, _posts_ for a blog, or _projects_ for a portfolio.

The same logic applies to taxonomies. Some people prefer to use _tags_ and _categories_, others prefer to use _topics_.

Hugo defaults to using posts, tags and categories out of the box and this will work fine if that's what you want. If you wish to customise this, however, you can do so by creating the following files:

```toml
# config.toml

[taxonomies]
topic = "topics"
```

This will replace the default _tags_ and _categories_ with _topics_. Refer to the [Hugo Taxonomy docs](https://gohugo.io/content-management/taxonomies/) for more information on naming taxonomies.

When you create a new taxonomy, you will need to adjust the navigation links on the website to point to the new sections:

```toml
# config.toml

[[menu.main]]
  name = "Blog"
  pageRef = "/posts/"
  weight = 10

[[menu.main]]
  name = "Topics"
  pageRef = "/topics/"
  weight = 20
```

## Customising the theme

There are a couple of ways you can make style changes to Congo.

If you just need to add or override some simple styles, you can do so by creating a `custom.css` file in your project's `static/css/` folder. This file will be loaded automatically after the theme's default styles.

Alternatively, if you'd like to make a major change, you can take advantage of Tailwind CSS's JIT compiler and rebuild the entire theme CSS from scratch.

> **Note:** Building the theme manually is intended for advanced users.

Change into the `themes/congo/` folder and install the project dependencies.

```bash
npm install
```

Once installed, you can edit the `themes/congo/tailwind.config.js` to change the styles that are applied throughout the theme. You can also adjust specific styles in `themes/congo/assets/css/main.css`.

To allow for easy theme colour changes, Congo defines a `primary` and `secondary` colour palette that is used throughout the theme. In order to change the colour across the entire theme, simply edit the `tailwind.config.js` file accordingly.

For example, to change to a green colour scheme, you could apply these changes:

```js
  // themes/congo/tailwind.config.js

  theme: {
    colors: {
      transparent: "transparent",
      white: colors.white,
      gray: colors.gray,
      primary: colors.lime,
      secondary: colors.teal,
    },
    ...
  }
```

For a full list of colours available, and their corresponding configuration values, see the official [Tailwind docs](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

After editing the configuration, you need to rebuild the theme's stylesheets.

```bash
npm run build
```

This will automatically output a minified CSS file to `/themes/congo/static/css/main.css`.

To aid with testing style changes, you can also run the Tailwind JIT comiler in watch mode.

```bash
npm run dev
```

Now whenever you make a change, the (non-minified) CSS files will be rebuilt automatically. This mode is useful to run when using `hugo server` to preview your site during development. Remember to perform a full build before publishing your website.

## Contributing

Congo is still very much a work in progress. I intend to keep adding features and making changes as required.

### Bugs & Suggestions

Feel free to get in touch with any issues or suggestions for new features you'd like to see. Please use GitHub issues for all bug reports and suggestions to help keep everything in one spot.

If you're able to fix a bug or implement a new feature, I welcome PRs for this purpose.
