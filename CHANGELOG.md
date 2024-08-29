# Changelog

All notable changes to Congo will be documented in this file. Things that need particular attention when upgrading from a prior version are marked ⚠️.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.9.0] - 2024-08-29

### Added

- New `profile` shortcode
- Umami Analytics support ([#832](https://github.com/jpanther/congo/pull/832))
- Theme parameter to set a default HTML theme colour ([#849](https://github.com/jpanther/congo/pull/849))
- New icon for `bluesky` ([#851](https://github.com/jpanther/congo/pull/851))
- Support for article sharing to Threads ([#869](https://github.com/jpanther/congo/issues/869))
- Norwegian Bokmål translation ([#872](https://github.com/jpanther/congo/pull/872))
- Breadcrumb metadata to page schema ([#885](https://github.com/jpanther/congo/pull/885))

### Changed

- ⚠️ Simplified Chinese language code has changed from `zh-cn` to `zh-Hans`
- ⚠️ Traditional Chinese language code has changed from `zh-tw` to `zh-Hant`
- Scroll to top links now use JavaScript to determine when to display ([#806](https://github.com/jpanther/congo/pull/806))
- Upgrade to Tailwind v3.4.10 ([#930](https://github.com/jpanther/congo/pull/930))
- Upgrade to Typography v0.5.15 ([#864](https://github.com/jpanther/congo/pull/864), [#927](https://github.com/jpanther/congo/pull/927))
- Upgrade to ChartJS v4.4.4 ([#881](https://github.com/jpanther/congo/pull/881),[#928](https://github.com/jpanther/congo/pull/928))
- Upgrade to KaTeX v0.16.11 ([#925](https://github.com/jpanther/congo/pull/925))
- Upgrade to Mermaid v11.0.2 ([#880](https://github.com/jpanther/congo/pull/880), [#926](https://github.com/jpanther/congo/pull/926))

### Fixed

- Featured images overlap page title when article metadata hidden ([#827](https://github.com/jpanther/congo/issues/827))
- Inconsistent picture rendering between `figure` shortcode and Markdown render hook ([#828](https://github.com/jpanther/congo/issues/828))
- Animated GIF files are static when `enableImageWebp` is enabled ([#866](https://github.com/jpanther/congo/issues/866))
- Next article pagination link animation is inverted ([#870](https://github.com/jpanther/congo/issues/870))
- Unsafe URL warning in README link ([#901](https://github.com/jpanther/congo/pull/901))

## [2.8.2] - 2024-04-17

### Added

- Tamil translation ([#830](https://github.com/jpanther/congo/pull/830))
- Vietnamese translation ([#845](https://github.com/jpanther/congo/pull/845))
- Swedish translation ([#852](https://github.com/jpanther/congo/pull/852))

### Changed

- Upgrade to KaTeX v0.16.10 ([#839](https://github.com/jpanther/congo/pull/839))
- Upgrade to Typography v0.5.12 ([#841](https://github.com/jpanther/congo/pull/841), [#860](https://github.com/jpanther/congo/pull/860))
- Upgrade to Tailwind v3.4.3 ([#843](https://github.com/jpanther/congo/pull/843))

### Fixed

- Background color inconsistent on mobile when dark mode enabled ([#796](https://github.com/jpanther/congo/issues/796))

## [2.8.1] - 2024-03-09

### Changed

- Upgrade to ChartJS v4.4.2 ([#817](https://github.com/jpanther/congo/pull/817))
- Upgrade to Mermaid v10.9.0 ([#825](https://github.com/jpanther/congo/pull/825))

### Fixed

- Table of Contents missing left border detail ([#794](https://github.com/jpanther/congo/issues/794))
- `x-twitter` option missing when using sharing links ([#809](https://github.com/jpanther/congo/issues/809))
- Chinese default config contains incorrect `author` block name ([#807](https://github.com/jpanther/congo/pull/807))
- Links in articles are prefixed with a blank space ([#813](https://github.com/jpanther/congo/pull/813))
- HTML tables would not fill the container width on desktop ([#826](https://github.com/jpanther/congo/issues/826))

## [2.8.0] - 2024-01-22

### Added

- Quicklink support ([#646](https://github.com/jpanther/congo/pull/646))
- Automatic support for WebP images ([#693](https://github.com/jpanther/congo/pull/693))
- Warning when building if links to Markdown files cannot be resolved ([#691](https://github.com/jpanther/congo/pull/691))
- Ability to share articles to Telegram and Line ([#719](https://github.com/jpanther/congo/pull/719))
- New icons for `line`, `google-scholar`, `mendeley` and `weibo` ([#719](https://github.com/jpanther/congo/pull/719), [#755](https://github.com/jpanther/congo/pull/755), [#756](https://github.com/jpanther/congo/pull/756))
- Weibo sharing links ([#756](https://github.com/jpanther/congo/pull/756))
- Support for Tailwind '950' colour variants ([#751](https://github.com/jpanther/congo/pull/751))
- Table of contents will now scroll if taller than the browser height ([#733](https://github.com/jpanther/congo/pull/733))
- External URL article stubs now auto-redirect if leaf pages are generated ([#778](https://github.com/jpanther/congo/pull/778))
- Korean translation ([#731](https://github.com/jpanther/congo/pull/731))
- Chinese translation of Example site and Docs ([#776](https://github.com/jpanther/congo/pull/776))

### Changed

- ⚠️ Hugo extended version is now required when building sites
- ⚠️ Author params block in language configuration has been moved to `params.author` ([#704](https://github.com/jpanther/congo/pull/704))
- Refactored image logic into a new `picture.html` partial ([#693](https://github.com/jpanther/congo/pull/693))
- Upgrade to ChartJS v4.4.1 ([#736](https://github.com/jpanther/congo/pull/736))
- Upgrade to Tailwind v3.4.1 ([#737](https://github.com/jpanther/congo/pull/737), [#752](https://github.com/jpanther/congo/pull/752), [#759](https://github.com/jpanther/congo/pull/759), [#774](https://github.com/jpanther/congo/pull/774))
- Upgrade to Mermaid v10.7.0 ([#782](https://github.com/jpanther/congo/pull/782))
- Updated Japanese translation ([#750](https://github.com/jpanther/congo/pull/750))

### Fixed

- Hamburger menu is not dismissed when links are clicked ([#705](https://github.com/jpanther/congo/pull/705))
- KaTeX, table and code elements wider than the page are not formatted correctly ([#753](https://github.com/jpanther/congo/pull/753))
- 'ß' character is output at the top of articles ([#764](https://github.com/jpanther/congo/pull/764))
- Article metadata element is output when there is no metadata to display ([#786](https://github.com/jpanther/congo/pull/786))
- Header elements not vertically centered when using locale switcher ([#788](https://github.com/jpanther/congo/pull/788))

### Removed

- Fathom Analytics custom domain parameter, as this is no longer supported by Fathom

## [2.7.6] - 2023-11-26

### Fixed

- Some Mermaid diagram elements not styled correctly in dark mode ([#706](https://github.com/jpanther/congo/issues/706))

## [2.7.5] - 2023-11-25

### Added

- Ukrainian translation ([#703](https://github.com/jpanther/congo/pull/703))
- Bulgarian translation ([#718](https://github.com/jpanther/congo/pull/718))

### Changed

- Updated Dutch translation ([#696](https://github.com/jpanther/congo/pull/696))
- Upgrade to Mermaid v10.6.1 ([#697](https://github.com/jpanther/congo/pull/697))

### Fixed

- Some files have unnecessary execute permissions ([#714](https://github.com/jpanther/congo/pull/714))
- Empty block is output when locale switcher is hidden ([#699](https://github.com/jpanther/congo/pull/699))

## [2.7.4] - 2023-11-05

### Fixed

- Links with non-whitespace characters preceeding them are prefixed with a space ([#695](https://github.com/jpanther/congo/issues/695))

## [2.7.3] - 2023-10-31

### Fixed

- Article metadata HTML is output as text when using Hugo v0.120.0 ([#689](https://github.com/jpanther/congo/pull/689))

## [2.7.2] - 2023-10-26

### Changed

- Upgrade to Tailwind v3.3.5 ([#681](https://github.com/jpanther/congo/pull/681), [#686](https://github.com/jpanther/congo/pull/686))
- Upgrade to Mermaid v10.6.0 ([#684](https://github.com/jpanther/congo/pull/684))
- Upgrade to FuseJS v7.0.0 ([#685](https://github.com/jpanther/congo/pull/685))

### Fixed

- Empty block is output when locale switcher is hidden ([#678](https://github.com/jpanther/congo/issues/678))
- Extra whitespace added after links ([#679](https://github.com/jpanther/congo/issues/679))

## [2.7.1] - 2023-10-24

### Changed

- Minor refactor to improve memory efficiency in search results ([#650](https://github.com/jpanther/congo/pull/650))
- Links in Markdown content are now portable ([#655](https://github.com/jpanther/congo/pull/655))

### Fixed

- JavaScript error setting theme colour when site is loaded in dark mode ([#676](https://github.com/jpanther/congo/issues/676))

## [2.7.0] - 2023-10-23

### Added

- New portable locale picker that can be placed in any menu using the `locale` action ([#583](https://github.com/jpanther/congo/issues/583))
- New icons for `chevron-down`, `chevron-up`, `globe`, `translate`, `coffee` and `x-twitter` ([#669](https://github.com/jpanther/congo/pull/669))
- Plausible Analytics support ([#584](https://github.com/jpanther/congo/pull/584))
- Spanish translation of example site samples ([#606](https://github.com/jpanther/congo/pull/606))
- Japanese translation of docs and example site ([#618](https://github.com/jpanther/congo/pull/618))
- German translation of example site ([#631](https://github.com/jpanther/congo/pull/631))

### Changed

- ⚠️ Renamed the `params.rtl` language parameter to `languageDirection` as this is now supported by Hugo ([#583](https://github.com/jpanther/congo/issues/583))
- Robots.txt file now allows all by default without concern for whether the environment is set to production ([#620](https://github.com/jpanther/congo/pull/620))
- Refactored the `head.html` partial to improve perceived performance on page load
- Upgrade to Mermaid v10.5.1 ([#577](https://github.com/jpanther/congo/pull/577), [#582](https://github.com/jpanther/congo/pull/582), [#626](https://github.com/jpanther/congo/pull/626), [#638](https://github.com/jpanther/congo/pull/638), [#663](https://github.com/jpanther/congo/pull/663), [#674](https://github.com/jpanther/congo/pull/674))
- Upgrade to KaTeX v0.16.9 ([#590](https://github.com/jpanther/congo/pull/590), [#664](https://github.com/jpanther/congo/pull/664))
- Upgrade to Tailwind v3.3.3 ([#602](https://github.com/jpanther/congo/pull/602))
- Upgrade to ChartJS v4.3.3 ([#616](https://github.com/jpanther/congo/pull/616), [#627](https://github.com/jpanther/congo/pull/627), [#635](https://github.com/jpanther/congo/pull/635))
- Upgrade to Typography v0.5.10 ([#641](https://github.com/jpanther/congo/pull/641))

### Fixed

- Prominent images in content and site layout are lazy loaded ([#591](https://github.com/jpanther/congo/issues/591))
- TypeError is output to console when viewing leaf pages ([#596](https://github.com/jpanther/congo/issues/596))
- URL to Congo project in footer used deprecated git.io short link ([#605](https://github.com/jpanther/congo/issues/605))
- Various typos in the docs and example site ([#608](https://github.com/jpanther/congo/pull/608), [#609](https://github.com/jpanther/congo/pull/609), [#613](https://github.com/jpanther/congo/pull/613))
- Incorrect `render` value is used in the 'external' archetype ([#630](https://github.com/jpanther/congo/pull/630))
- Images are missing `width` and `height` attributes ([#645](https://github.com/jpanther/congo/pull/645))
- Extended head partial does not include page context ([#658](https://github.com/jpanther/congo/pull/658))
- Taxonomy tags aren't padded when wrapping onto a new line ([#671](https://github.com/jpanther/congo/pull/671))
- Minor CSS improvements, mainly relating to RTL styling
- Minor typos

### Removed

- Locales no longer appear next to the site name/logo as they are now part of the menu system ([#583](https://github.com/jpanther/congo/issues/583))
- Language parameters `isoCode` and `displayName` are no longer supported ([#583](https://github.com/jpanther/congo/issues/583))
- Meta `content-language` tag as it was not conveying the intended data (which is already included via the HTML `lang` attribute)

## [2.6.1] - 2023-06-04

### Changed

- Images are now marked for lazy loading by default ([#552](https://github.com/jpanther/congo/pull/552))
- Current language is no longer displayed in language selection ([#565](https://github.com/jpanther/congo/issues/565))
- Updated Simplified Chinese (China) translation ([#573](https://github.com/jpanther/congo/pull/573))

### Fixed

- Language selection repeats current language on multilingual sites instead of linking to translated content ([#565](https://github.com/jpanther/congo/issues/565))
- Icon padding inconsistent when using `--minify` option to build site ([#568](https://github.com/jpanther/congo/pull/568))
- Copyright string in the language configuration does not apply ([#572](https://github.com/jpanther/congo/issues/572))
- Upgrade to Mermaid v10.2.1 ([#569](https://github.com/jpanther/congo/pull/569))

## [2.6.0] - 2023-05-25

### Added

- Support for Hugo v0.112.0
- Ability to specify an alternate logo image when dark appearance is active ([#533](https://github.com/jpanther/congo/pull/533), [#543](https://github.com/jpanther/congo/pull/543))
- Ability to specify the hashing algorithm that is used when fingerprinting assets ([#478](https://github.com/jpanther/congo/issues/478))
- Arabic translation ([#521](https://github.com/jpanther/congo/pull/521))
- Slovak translation ([#541](https://github.com/jpanther/congo/pull/541))
- Czech translation ([#541](https://github.com/jpanther/congo/pull/541))

### Changed

- ⚠️ Some parameters in the root of the Languages config file have been nested under the `params` block
- Search results now respect `showDate` value when displaying article metadata ([#511](https://github.com/jpanther/congo/pull/511))
- Adopted new Tailwind logical properties for RTL styling
- Article sharing links now open in a new tab/window
- Updated Dutch translation ([#544](https://github.com/jpanther/congo/pull/544))
- Upgrade to Tailwind v3.3.1 ([#523](https://github.com/jpanther/congo/pull/523))
- Upgrade to KaTeX v0.16.7 ([#538](https://github.com/jpanther/congo/pull/538), [#549](https://github.com/jpanther/congo/pull/549))
- Upgrade to Chart.js v4.3.0 ([#551](https://github.com/jpanther/congo/pull/551))
- Upgrade to Mermaid v10.2.0 ([#563](https://github.com/jpanther/congo/pull/563))

### Fixed

- Some `srcset` values are broken when using Hugo `--minify` option ([#508](https://github.com/jpanther/congo/pull/508))
- Author images are cropped off-centre during image processing ([#527](https://github.com/jpanther/congo/pull/527))
- Site doesn't build when using Hugo v0.112.0 ([#561](https://github.com/jpanther/congo/pull/561))

## [2.5.4] - 2023-03-20

### Added

- Polish translation ([#497](https://github.com/jpanther/congo/pull/497))

### Changed

- Updated Russian translation ([#502](https://github.com/jpanther/congo/pull/502))

### Fixed

- Bengali translation prevents site building in certain configurations ([#503](https://github.com/jpanther/congo/issues/503))

## [2.5.3] - 2023-03-05

### Added

- Russian translation ([#485](https://github.com/jpanther/congo/pull/485))

### Changed

- Updated German translation ([#475](https://github.com/jpanther/congo/pull/475))
- Upgrade to Chart.js v4.2.1 ([#472](https://github.com/jpanther/congo/pull/472))
- Upgrade to Mermaid v9.4.0 ([#473](https://github.com/jpanther/congo/pull/473))
- Upgrade to Tailwind v3.2.7 ([#491](https://github.com/jpanther/congo/pull/491))

### Fixed

- Caching the analytics partial prevents some advanced analytics use cases ([#480](https://github.com/jpanther/congo/issues/480))

## [2.5.2] - 2023-01-24

### Added

- New icons for `mobile` and `phone`

### Fixed

- Author links containing URLs in non-hypertext schemes (ie. `tel:`) would not be created as links ([#452](https://github.com/jpanther/congo/pull/452))
- Extra whitespace inserted after links within Markdown content ([#456](https://github.com/jpanther/congo/pull/456))

## [2.5.1] - 2023-01-20

### Changed

- External links are now automatically appended with `rel="noreferrer noopener"` ([#446](https://github.com/jpanther/congo/pull/446))
- Updated Traditional Chinese (Taiwan) translation ([#448](https://github.com/jpanther/congo/pull/448))
- Upgrade to Chart.js v4.2.0 ([#449](https://github.com/jpanther/congo/pull/449))

### Fixed

- Page alignment off-centre when opening hamburger menu at wide viewports ([#445](https://github.com/jpanther/congo/issues/445))

## [2.5.0] - 2023-01-17

### Added

- Support for icons in menus including support for links styled as an icon by itself or an icon with text
- Search and appearance switcher links can now be fully customised and positioned anywhere in the menu
- Front matter support for specifying article thumbnails, covers and featured image details (including filename pattern, alt text and caption)
- Two new colour schemes - `cherry` and `sapphire`
- Support for SVG assets as article thumbnails, covers and featured images
- Front matter keywords support on a per article basis
- Indonesian translation ([#398](https://github.com/jpanther/congo/pull/398))
- Mastodon sharing links ([#405](https://github.com/jpanther/congo/pull/405))
- `homepage.recentLimit` parameter to adjust the maximum number of recent items listed on the homepage ([#411](https://github.com/jpanther/congo/pull/411))

### Changed

- Images smaller than the article width are no longer resized to fill the content area and will now simply align centre ([#394](https://github.com/jpanther/congo/pull/394))
- Upgrade to KaTeX v0.16.4 ([#414](https://github.com/jpanther/congo/pull/414))
- Upgrade to Mermaid v9.3.0 ([#419](https://github.com/jpanther/congo/pull/419))
- Upgrade to Chart.js v4.1.2 ([#420](https://github.com/jpanther/congo/pull/420), [#434](https://github.com/jpanther/congo/pull/434))
- Upgrade to Typography v0.5.9 ([#437](https://github.com/jpanther/congo/pull/437))

### Fixed

- `mainSections` parameter is language dependent and is not referenced from `params.toml` ([#376](https://github.com/jpanther/congo/pull/376))
- Code highlight background cut off in Google Chrome when overflowing content area ([#383](https://github.com/jpanther/congo/pull/383))
- Social icons shift position during CSS transition when hovered in Safari ([#396](https://github.com/jpanther/congo/pull/396))
- Hamburger navigation menu is misaligned in mobile browsers ([#399](https://github.com/jpanther/congo/pull/399))
- Error when attempting to resize SVG assets in page bundles ([#427](https://github.com/jpanther/congo/pull/427))
- Appearance switcher missing `aria-label` ([#438](https://github.com/jpanther/congo/pull/438))
- Article links missing `alt` text and `aria-label` ([#439](https://github.com/jpanther/congo/pull/439))
- Line height in article tag list would cause overlap when wrapping to a new line ([#444](https://github.com/jpanther/congo/pull/444))
- Figure shortcode would not apply `class` or `href` attribtues in some cases
- Charts displaying with incorrect theme colours

## [2.4.2] - 2022-11-22

### Added

- Dutch translation ([#371](https://github.com/jpanther/congo/pull/371))
- HTML `theme-color` meta tag to adjust browser colours according to the active Congo colour scheme ([#379](https://github.com/jpanther/congo/pull/379))

### Changed

- Extended head and footer partials are no longer cached during builds
- Upgrade to Chart.js v4.0.1 ([#373](https://github.com/jpanther/congo/pull/373))

### Fixed

- Code highlight background cut off when overflowing content area ([#374](https://github.com/jpanther/congo/issues/374))
- 'Description' HTML meta tag not set from article description ([#378](https://github.com/jpanther/congo/issues/378))

## [2.4.1] - 2022-11-14

### Changed

- Upgrade to Tailwind v3.2.4 ([#368](https://github.com/jpanther/congo/pull/368))

### Fixed

- List page doesn't render nested list pages ([#365](https://github.com/jpanther/congo/issues/365))
- Pagination is duplicated on term pages ([#366](https://github.com/jpanther/congo/issues/366))
- Link to last pagination page sometimes displays twice
- Recent articles would sometimes display less than five articles

## [2.4.0] - 2022-11-10

### Added

- Support for article thumbnails, covers and featured images
- Hybrid header layout that switches between the hamburger and basic menus at appropriate viewport sizes
- Traditional Chinese (Taiwan) translation ([#262](https://github.com/jpanther/congo/pull/262))
- New `list.paginationWidth` parameter to specify how many pagination links are generated before they are truncated
- Site title display can be toggled on or off independently, allowing for it to be displayed alongside the site logo or removed entirely
- Tailwind plugin for Prettier to standardise the order of CSS classes ([#268](https://github.com/jpanther/congo/pull/268))
- External links in article content will now open in a new browser tab ([#312](https://github.com/jpanther/congo/pull/312))
- Independent control over the display of taxonomy listings on article and list pages ([#326](https://github.com/jpanther/congo/pull/326))
- Button shortcode now supports an optional `download` parameter to instruct browsers to directly download resources rather than navigate to a URL ([#349](https://github.com/jpanther/congo/pull/349))
- Minor style and layout improvements

### Changed

- ⚠️ The `logo` parameter has moved under the `header` group and is now set using `header.logo`
- ⚠️ Simplified Chinese (China) language code has changed from `zh` to `zh-cn`
- Site logo is now in its own `logo.html` partial to allow it to be easily overridden ([#322](https://github.com/jpanther/congo/pull/322))
- Upgrade to Chart.js v3.9.1 ([#261](https://github.com/jpanther/congo/pull/261))
- Upgrade to Tailwind v3.2.2 ([#265](https://github.com/jpanther/congo/pull/265), [#333](https://github.com/jpanther/congo/pull/333), [#352](https://github.com/jpanther/congo/pull/352))
- Upgrade to Mermaid v9.2.2 ([#272](https://github.com/jpanther/congo/pull/272), [#279](https://github.com/jpanther/congo/pull/279), [#296](https://github.com/jpanther/congo/pull/296), [#339](https://github.com/jpanther/congo/pull/339), [#360](https://github.com/jpanther/congo/pull/360))
- Upgrade to KaTeX v0.16.3 ([#284](https://github.com/jpanther/congo/pull/284), [#334](https://github.com/jpanther/congo/pull/334))
- Upgrade to Typography v0.5.8 ([#287](https://github.com/jpanther/congo/pull/287), [#292](https://github.com/jpanther/congo/pull/292), [#353](https://github.com/jpanther/congo/pull/353))

### Fixed

- Appearance switcher title doesn't update when switching appearance ([#235](https://github.com/jpanther/congo/issues/235))
- Article updated date logic doesn't consider formatted date values ([#259](https://github.com/jpanther/congo/issues/259))
- Error calling Paginate when attempting to generate a site with no taxonomies ([#289](https://github.com/jpanther/congo/issues/289))
- Multilingual links are spaced incorrectly when using Hugo minify ([#298](https://github.com/jpanther/congo/issues/298))
- Pagination links overflow the page area on large datasets ([#299](https://github.com/jpanther/congo/issues/299))
- Embedded content disappears when displayed at certain viewport sizes ([#302](https://github.com/jpanther/congo/issues/302), [#335](https://github.com/jpanther/congo/issues/335))
- Order of articles on list pages would not follow Hugo conventions when grouped by year ([#313](https://github.com/jpanther/congo/issues/313))
- Button shortcode overlaps table of contents when at the top of the article content ([#337](https://github.com/jpanther/congo/issues/337))
- Providing a `colorScheme` value containing uppercase characters breaks some deployments ([#347](https://github.com/jpanther/congo/issues/347))

## [2.3.1] - 2022-07-30

### Added

- Japanese translation ([#234](https://github.com/jpanther/congo/pull/234))

### Changed

- Upgrade to Mermaid v9.1.3 ([#233](https://github.com/jpanther/congo/pull/233))
- Upgrade to Tailwind v3.1.6 ([#245](https://github.com/jpanther/congo/pull/245))
- Upgrade to Typography v0.5.4 ([#246](https://github.com/jpanther/congo/pull/246))
- Upgrade to Chart.js v3.8.2 ([#247](https://github.com/jpanther/congo/pull/247))

### Fixed

- Main content misaligned when hamburger menu is opened at large viewport sizes

## [2.3.0] - 2022-06-27

### Added

- Header layouts for selecting a preferred header style
- Hamburger menu header layout with popover main menu ([#167](https://github.com/jpanther/congo/discussions/167), [#88](https://github.com/jpanther/congo/discussions/88), [#43](https://github.com/jpanther/congo/discussions/43), [#29](https://github.com/jpanther/congo/discussions/29))
- Front matter support for showing or hiding comments on a per article basis ([#207](https://github.com/jpanther/congo/discussions/207))
- `showCopyright` and `showThemeAttribution` parameters that allow more control over how the site footer is displayed ([#192](https://github.com/jpanther/congo/discussions/192))
- `bars` SVG icon

### Changed

- ⚠️ Footer configuration parameters are now in their own `footer` sub-group
- Search will now return results for all page types, including lists and taxonomies
- Comments partials are now better considered within the page layout
- Reduced whitespace at the top of the main content block ([#226](https://github.com/jpanther/congo/discussions/226))
- Upgrade to Tailwind v3.1.4 ([#225](https://github.com/jpanther/congo/pull/225))

### Fixed

- Hugo v0.101.0 breaks the link to the homepage ([#230](https://github.com/jpanther/congo/issues/230))
- Search link does not appear in header if main menu has no items to display
- Search only returns results in the primary language when multiple languages are available ([#229](https://github.com/jpanther/congo/issues/229))
- Arrow on external article links not aligned correctly when title wraps onto multiple lines
- Arrow on external article links points the wrong direction for RTL languages
- Scroll to top misaligned with the footer at small viewport heights
- Link to homepage would be incorrect in some deployments if `baseURL` contained sub-directories in the path

## [2.2.3] - 2022-06-22

### Changed

- Profile image alt text now uses author name when available

### Fixed

- Search not working when `baseURL` does not end with a forward slash ([#224](https://github.com/jpanther/congo/pull/224))
- Author `headline` parameter not correctly displaying Markdown or Emoji content

## [2.2.2] - 2022-06-16

### Added

- Breadcrumb display can now be can now be specified in front matter for articles and list pages
- Italian translation ([#209](https://github.com/jpanther/congo/pull/209))

### Changed

- Upgrade to Chart.js v3.8.0 ([#204](https://github.com/jpanther/congo/pull/204))
- Upgrade to KaTeX v0.16.0 ([#208](https://github.com/jpanther/congo/pull/208))
- Upgrade to Mermaid v9.1.2 ([#214](https://github.com/jpanther/congo/pull/214))

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
  - New icons for Hashnode, bug, check, comment, light bulb, list, pencil, skull, tag, and information. ([#136](https://github.com/jpanther/congo/discussions/136))
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
- Tables of contents on article pages ([#47](https://github.com/jpanther/congo/discussions/47))
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
- Grouping by year can now be specified in front matter on list pages

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

[Unreleased]: https://github.com/jpanther/congo/compare/v2.9.0...HEAD
[2.9.0]: https://github.com/jpanther/congo/compare/v2.8.2...v2.9.0
[2.8.2]: https://github.com/jpanther/congo/compare/v2.8.1...v2.8.2
[2.8.1]: https://github.com/jpanther/congo/compare/v2.8.0...v2.8.1
[2.8.0]: https://github.com/jpanther/congo/compare/v2.7.6...v2.8.0
[2.7.6]: https://github.com/jpanther/congo/compare/v2.7.5...v2.7.6
[2.7.5]: https://github.com/jpanther/congo/compare/v2.7.4...v2.7.5
[2.7.4]: https://github.com/jpanther/congo/compare/v2.7.3...v2.7.4
[2.7.3]: https://github.com/jpanther/congo/compare/v2.7.2...v2.7.3
[2.7.2]: https://github.com/jpanther/congo/compare/v2.7.1...v2.7.2
[2.7.1]: https://github.com/jpanther/congo/compare/v2.7.0...v2.7.1
[2.7.0]: https://github.com/jpanther/congo/compare/v2.6.1...v2.7.0
[2.6.1]: https://github.com/jpanther/congo/compare/v2.6.0...v2.6.1
[2.6.0]: https://github.com/jpanther/congo/compare/v2.5.4...v2.6.0
[2.5.4]: https://github.com/jpanther/congo/compare/v2.5.3...v2.5.4
[2.5.3]: https://github.com/jpanther/congo/compare/v2.5.2...v2.5.3
[2.5.2]: https://github.com/jpanther/congo/compare/v2.5.1...v2.5.2
[2.5.1]: https://github.com/jpanther/congo/compare/v2.5.0...v2.5.1
[2.5.0]: https://github.com/jpanther/congo/compare/v2.4.2...v2.5.0
[2.4.2]: https://github.com/jpanther/congo/compare/v2.4.1...v2.4.2
[2.4.1]: https://github.com/jpanther/congo/compare/v2.4.0...v2.4.1
[2.4.0]: https://github.com/jpanther/congo/compare/v2.3.1...v2.4.0
[2.3.1]: https://github.com/jpanther/congo/compare/v2.3.0...v2.3.1
[2.3.0]: https://github.com/jpanther/congo/compare/v2.2.3...v2.3.0
[2.2.3]: https://github.com/jpanther/congo/compare/v2.2.2...v2.2.3
[2.2.2]: https://github.com/jpanther/congo/compare/v2.2.1...v2.2.2
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
