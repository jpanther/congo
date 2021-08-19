# Changelog

All notable changes to Congo will be documented in this file.

Things that need attention when upgrading from a prior version are marked ⚠️.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- Icons for Foursquare and Pinterest

### Fixed

- Minor style issue with `button` shortcode
- Hugo Modules would fail when using default theme config file
- Some content not centred correctly on the profile homepage layout

## [1.1.1] - 2020-08-19

### Fixed

- Hotfix for exampleSite and GitHub configuration

## [1.1.0] - 2020-08-18

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

## [1.0.0] - 2020-08-16

### Initial release 🎉

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

[unreleased]: https://github.com/jpanther/congo/compare/v1.1.1...HEAD
[1.1.1]: https://github.com/jpanther/congo/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/jpanther/congo/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/jpanther/congo/releases/tag/v1.0.0
