# Changelog

All notable changes to Congo will be documented in this file. Things that need attention when upgrading from a prior version are marked ⚠️.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.2.1] - 2022-05-25

### Changed

- Upgrade to Mermaid v9.1.1 ([#194](https://github.com/jpanther/congo/pull/194))
- Upgrade to Fuse.js v6.6.2 ([#195](https://github.com/jpanther/congo/pull/195))
- Upgrade KaTeX to v0.15.6 ([#202](https://github.com/jpanther/congo/pull/202))

### Fixed

- Main content area doesn't grow to window height ([#201](https://github.com/jpanther/congo/issues/201))

## [2.2.0] - 2022-05-09

### Added

- Finnish translation ([#185](https://github.com/jpanther/congo/pull/185))

### Changed

- Updated French translation ([#178](https://github.com/jpanther/congo/pull/178))
- Analytics partial now checks `hugo.IsProduction` instead of `.Site.IsServer` before including scripts ([#179](https://github.com/jpanther/congo/issues/179))
- Upgrade to Tailwind v3.0.24 ([#176](https://github.com/jpanther/congo/pull/176))
- Upgrade to Mermaid v9.0.1 ([#183](https://github.com/jpanther/congo/pull/183))
- Upgrade to Fuse.js v6.6.1 ([#189](https://github.com/jpanther/congo/pull/189))

### Fixed

- Code blocks are rendered incorrectly in RTL languages ([#164](https://github.com/jpanther/congo/issues/164))
- Scroll to top link overlaps footer menu on mobile devices when there are several links ([#172](https://github.com/jpanther/congo/issues/172))

### Removed

- `hugo.Generator` from HTML `<head>` so that the [default Hugo generator behaviour](https://gohugo.io/getting-started/configuration/#disablehugogeneratorinject) works as expected ([#179](https://github.com/jpanther/congo/issues/179))

## [2.1.3] - 2022-04-12

### Added

- Hungarian translation ([#170](https://github.com/jpanther/congo/pull/170))

### Fixed

- Scroll to top link overlaps footer menu on mobile devices ([#172](https://github.com/jpanther/congo/issues/172))

## [2.1.2] - 2022-04-08

### Added

- Romanian translation ([#168](https://github.com/jpanther/congo/pull/168))

### Changed

- Upgrade to Mermaid v9.0.0

## [2.1.1] - 2022-04-03

### Added

- Print styles to hide unnecessary elements when printing ([#155](https://github.com/jpanther/congo/pull/155))
- Hebrew translation ([#163](https://github.com/jpanther/congo/pull/163))

### Fixed

- Footer menu displays incorrectly in RTL languages ([#165](https://github.com/jpanther/congo/pull/165))

## [2.1.0] - 2022-03-14

### Added

- Simple page layout for creating full-width content ([#139](https://github.com/jpanther/congo/issues/139))
- Portuguese (Portugal) translation ([#144](https://github.com/jpanther/congo/pull/144))

### Changed

- Upgrade SVG icons to FontAwesome 6:
  - New icons for Hashnode, bug, check, comment, light bulb, list, pencil, skull, tag, and information.
  - ⚠️ The `exclamation-triangle` icon has been renamed `triangle-exclamation`
  - ⚠️ The `times` icon has been renamed `xmark`
  - ⚠️ The `stackoverflow` icon has been renamed `stack-overflow`
- Upgrade KaTeX to v0.15.3
- Markdown images and `figure` shortcode now search the `assets/` directory if an image cannot be found in page bundle ([#126](https://github.com/jpanther/congo/issues/126))
- Markdown images and `figure` shortcode now fallback to static assets if an image is not provided as a Hugo resource ([#126](https://github.com/jpanther/congo/issues/126))
- Taxonomy term listings now honour the `groupByYear` parameter ([#145](https://github.com/jpanther/congo/pull/145))
- The `alert` shortcode now allows its icon to be specified as a parameter

### Fixed

- Dark appearance shown even when default appearance set to light and auto switching is disabled ([#149](https://github.com/jpanther/congo/issues/149))

## [2.0.5] - 2022-02-20

### Added

- Bengali translation ([#115](https://github.com/jpanther/congo/pull/115))

### Changed

- Upgrade to Tailwind v3.0.23 and Typography v0.5.2
- Upgrade to Mermaid v8.14.0
- Upgrade to Chart.js v3.7.1

### Fixed

- Updated date is displayed even when it is the same as published date
- Structured data on homepage unparsable by Google ([#113](https://github.com/jpanther/congo/issues/113))
- Underline styles not displaying correctly in some browsers ([#125](https://github.com/jpanther/congo/issues/125))

## [2.0.4] - 2022-02-09

### Changed

- Updated German translation ([#110](https://github.com/jpanther/congo/pull/110))
- Upgrade to Tailwind v3.0.19

### Fixed

- Main content area not growing to fill screen vertically
- Search results not cleared when search is dismissed ([#109](https://github.com/jpanther/congo/pull/109))
- Emoji strings not displaying in search results

## [2.0.3] - 2022-02-07

### Changed

- Updated Turkish translation ([#105](https://github.com/jpanther/congo/pull/105))
- Updated Spanish translation ([#106](https://github.com/jpanther/congo/pull/106))

### Fixed

- Markdown images and `figure` shortcode fail to load resource when providing an external URL source
- HTML `figcaption` tags are output for Markdown images even when a caption is not provided
- Light appearance briefly appears on page load before switching to dark appearance ([#102](https://github.com/jpanther/congo/issues/102))

## [2.0.2] - 2022-02-05

### Changed

- Updated French translation ([#100](https://github.com/jpanther/congo/pull/100))

### Fixed

- User's appearance preference is lost on page load when default appearance is dark ([#102](https://github.com/jpanther/congo/issues/102))
- JavaScript warning when appearance switcher is disabled

## [2.0.1] - 2022-02-03

### Fixed

- Hugo module error when downloading version 2
- Emoji strings not displaying in table of contents

## [2.0.0] - 2022-02-03

### Added

- Multilingual support
- Right-to-left (RTL) language support
- Site search powered by Fuse.js
- Automatic Markdown image resizing and srcset generation
- Performance and Accessibility improvements to achieve perfect Lighthouse scores
- Tables of contents on article pages
- Code copy buttons in article content
- Taxonomy and term listings now support Markdown content
- Taxonomies on article and list pages
- Article pagination direction can be inverted
- Author `headline` parameter
- Skip to content and Scroll to top links
- Archetype for generating links to external articles

### Changed

- ⚠️ Required Hugo version is now 0.87.0 or later
- ⚠️ Complete rewrite of dark mode to allow more flexibile configuration
- ⚠️ All theme images are now Hugo assets
- ⚠️ Overhauled `figure` shortcode which now resizes images
- Upgrade to Tailwind v3.0.18
- Inline JavaScript moved to external files
- Improved JSON-LD structured data
- Breadcrumbs now fallback to section name when `title` is not provided
- Minor style and layout improvements

## [1.6.4] - 2022-01-24

### Added

- Turkish translation ([#90](https://github.com/jpanther/congo/pull/90))

### Changed

- Article updated date formatting and i18n ([#91](https://github.com/jpanther/congo/pull/91))
- Upgrade to Mermaid v8.13.10

### Fixed

- Article metadata not wrapping at small viewports ([#91](https://github.com/jpanther/congo/pull/91))

## [1.6.3] - 2022-01-19

### Added

- Icon for Stack Overflow ([#82](https://github.com/jpanther/congo/pull/82))

### Changed

- Upgrade to Mermaid v8.13.9
- Upgrade to KaTeX v0.15.2

### Fixed

- Emoji characters in article titles not appearing on list pages and in HTML metadata ([#84](https://github.com/jpanther/congo/pull/84))

## [1.6.2] - 2022-01-07

### Changed

- Upgrade to Chart.js v3.7.0
- Upgrade to Mermaid v8.13.8

### Fixed

- `lead` shortcode not rendering Markdown formatted text ([#73](https://github.com/jpanther/congo/issues/73))
- JSON-LD keywords data not structured correctly ([#74](https://github.com/jpanther/congo/issues/74))

## [1.6.1] - 2021-12-31

### Added

- Icon for Blogger ([#71](https://github.com/jpanther/congo/pull/71))

### Fixed

- Error when building using older Hugo versions ([#65](https://github.com/jpanther/congo/pull/65))
- Error when serving sites using blogdown ([#66](https://github.com/jpanther/congo/pull/66))

## [1.6.0] - 2021-12-21

### Added

- Article word counts ([#57](https://github.com/jpanther/congo/pull/57))
- Last updated dates on articles
- Icons for Amazon, Apple, Flickr, Google, Kickstarter, Microsoft, Patreon, Telegram, Tumblr and WhatsApp

### Changed

- Adjusted contrast of some items to improve accessibility
- Upgrade to Chart.js v3.6.2
- Upgrade to Mermaid v8.13.6

### Fixed

- Missing ARIA descriptions and alt tags on some images and links

## [1.5.3] - 2021-11-18

### Changed

- Updated Chinese translation ([#32](https://github.com/jpanther/congo/pull/32))

### Fixed

- Article pagination uses date of current article ([#32](https://github.com/jpanther/congo/pull/32))

## [1.5.2] - 2021-11-10

### Added

- German translation ([#27](https://github.com/jpanther/congo/pull/27))
- Portuguese (Brazil) translation ([#28](https://github.com/jpanther/congo/pull/28))
- Spanish translation ([#30](https://github.com/jpanther/congo/pull/30))

### Fixed

- Article pagination link spacing ([#26](https://github.com/jpanther/congo/pull/26))
- Minor icon style issues

## [1.5.1] - 2021-11-04

### Fixed

- Hugo failing to build site when deploying as a module

## [1.5.0] - 2021-11-04

### Added

- Chart.js support using `chart` shortcode
- KaTeX support using `katex` shortcode
- Dark mode toggle with new theme parameters for managing light/dark appearance
- French translation ([#18](https://github.com/jpanther/congo/pull/18))
- Author bio in article footer
- Grouping by year can now be specificed in front matter on list pages

### Changed

- Site name, author and menus will now render Markdown and Emoji
- Bundled Mermaid for better vendor dependency management
- Mermaid diagrams are now themed to match the configured colour scheme
- Upgrade to Tailwind v2.2.19

### Fixed

- Site logo image dimensions are unconstrained ([#19](https://github.com/jpanther/congo/issues/19))
- Article summary styled incorrectly in dark mode
- Links containing `code` blocks styled incorrectly

## [1.4.0] - 2021-10-20

### Added

- Footer menu
- Article summary support
- Slate colour scheme ([#9](https://github.com/jpanther/congo/pull/9))
- Icons for ORCID and ResearchGate ([#9](https://github.com/jpanther/congo/pull/9))
- Pinterest sharing links
- Sharing links can now be specified in front matter

### Changed

- Main menu is now optional
- Upgrade to Mermaid v8.13.3
- Upgrade to Tailwind v2.2.17

### Fixed

- Site logo not linked to home page ([#13](https://github.com/jpanther/congo/issues/13))

## [1.3.0] - 2021-09-29

### Added

- Site logo support
- Chinese translation ([#2](https://github.com/jpanther/congo/pull/2))

### Changed

- Upgrade to Tailwind v2.2.16

## [1.2.1] - 2021-08-26

### Added

- New `robots` parameter to add metadata to guide robots on how to handle specific content

### Changed

- URLs are relative by default which allows the theme to be more flexible in different deployment scenarios

### Fixed

- Missing dark style for group subheadings on article listings
- Fathom Analytics script included twice when using custom domain
- Recent heading on homepage profile layout misaligned

## [1.2.0] - 2021-08-22

### Added

- Multiple colour schemes
- Edit links on article pages
- Icons for Foursquare and Pinterest
- Asset fingerprinting and SRI
- CSS minification for custom stylesheets

### Changed

- Static assets are now managed through Hugo Pipelines

### Fixed

- Minor style issue with `button` shortcode
- Hugo Modules would fail when using default theme config file
- Some content not centred correctly on the profile homepage layout
- Some links missing the correct styles when in Firefox
- `externalUrl` front matter not working on some list pages

## [1.1.1] - 2021-08-19

### Fixed

- Hotfix for exampleSite and GitHub configuration

## [1.1.0] - 2021-08-18

### Added

- Breadcrumbs
- i18n support
- Recent articles partial
- CSS transitions
- Hugo module support
- JSON-LD structured metadata

### Changed

- ⚠️ Renamed parameter: `homepage.showList` -> `homepage.showRecent`
- ⚠️ Renamed parameter: `homepage.listSections` -> `mainSections`
- ⚠️ Consolidated author configuration parameters into `config.toml`
- General style tweaks to enhance design consistency

### Fixed

- URLs being incorrect in some cases when the site is deployed in a subfolder

## [1.0.0] - 2021-08-16

### Added

- Built with Tailwind CSS JIT for minified stylesheets without any excess code
- Fully responsive layout
- Dark mode (auto-switching based upon browser)
- Highly customisable configuration
- Multiple homepage layouts
- Flexible with any content types, taxonomies and menus
- Ability to link to posts on third-party websites
- Diagrams and visualisations using Mermaid JS
- SVG icons from FontAwesome 5
- Heading anchors, Buttons, Badges and more
- HTML and Emoji support in articles
- SEO friendly with links for sharing to social media
- RSS feeds
- Fathom Analytics and Google Analytics support
- Favicons support
- Comments support
- Advanced customisation using simple Tailwind colour definitions and styles
- Fully documented

[unreleased]: https://github.com/jpanther/congo/compare/v2.2.1...HEAD
[2.2.1]: https://github.com/jpanther/congo/compare/v2.2.0...v2.2.1
[2.2.0]: https://github.com/jpanther/congo/compare/v2.1.3...v2.2.0
[2.1.3]: https://github.com/jpanther/congo/compare/v2.1.2...v2.1.3
[2.1.2]: https://github.com/jpanther/congo/compare/v2.1.1...v2.1.2
[2.1.1]: https://github.com/jpanther/congo/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/jpanther/congo/compare/v2.0.5...v2.1.0
[2.0.5]: https://github.com/jpanther/congo/compare/v2.0.4...v2.0.5
[2.0.4]: https://github.com/jpanther/congo/compare/v2.0.3...v2.0.4
[2.0.3]: https://github.com/jpanther/congo/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/jpanther/congo/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/jpanther/congo/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/jpanther/congo/compare/v1.6.4...v2.0.0
[1.6.4]: https://github.com/jpanther/congo/compare/v1.6.3...v1.6.4
[1.6.3]: https://github.com/jpanther/congo/compare/v1.6.2...v1.6.3
[1.6.2]: https://github.com/jpanther/congo/compare/v1.6.1...v1.6.2
[1.6.1]: https://github.com/jpanther/congo/compare/v1.6.0...v1.6.1
[1.6.0]: https://github.com/jpanther/congo/compare/v1.5.3...v1.6.0
[1.5.3]: https://github.com/jpanther/congo/compare/v1.5.2...v1.5.3
[1.5.2]: https://github.com/jpanther/Congo/compare/v1.5.1...v1.5.2
[1.5.1]: https://github.com/jpanther/Congo/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/jpanther/Congo/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/jpanther/Congo/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/jpanther/Congo/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/jpanther/Congo/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/jpanther/Congo/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/jpanther/congo/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/jpanther/congo/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/jpanther/congo/releases/tag/v1.0.0
