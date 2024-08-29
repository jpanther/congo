{{- partial "partials/functions/warnings.html" .Site -}}
{{- partial "partials/functions/init.html" . -}}
<!doctype html>
<html
  lang="{{- site.Language.LanguageCode | default "" -}}"
  dir="{{- site.Language.LanguageDirection | default "ltr" -}}"
  class="scroll-smooth"
  data-default-appearance="{{- .Site.Params.defaultAppearance | default "light" -}}"
  data-auto-appearance="{{- .Site.Params.autoSwitchAppearance | default "true" -}}"
>
  {{- partial "head.html" . -}}
  <body
    class="m-auto flex h-screen max-w-7xl flex-col bg-neutral px-6 text-lg leading-7 text-neutral-900 dark:bg-neutral-800 dark:text-neutral sm:px-14 md:px-24 lg:px-32"
  >
    <div id="the-top" class="absolute flex self-center">
      <a
        class="-translate-y-8 rounded-b-lg bg-primary-200 px-3 py-1 text-sm focus:translate-y-0 dark:bg-neutral-600"
        href="#main-content"
        ><span class="pe-2 font-bold text-primary-600 dark:text-primary-400">&darr;</span
        >{{ i18n "nav.skip_to_main" }}</a
      >
    </div>
    {{ $header := print "partials/header/" .Site.Params.header.layout ".html" }}
    {{ if templates.Exists $header }}
      {{ partial $header . }}
    {{ else }}
      {{ partial "partials/header/basic.html" . }}
    {{ end }}
    <div class="relative flex grow flex-col">
      <main id="main-content" class="grow">
        {{ block "main" . }}{{ end }}
      </main>
      {{ if .Site.Params.footer.showScrollToTop | default true }}
        <div
          class="pointer-events-none absolute bottom-0 end-0 top-[100vh] w-12"
          id="to-top"
          hidden="{{ .Site.Params.footer.showScrollToTop | default true -}}"
        >
          <a
            href="#the-top"
            class="pointer-events-auto sticky top-[calc(100vh-5.5rem)] flex h-12 w-12 items-center justify-center rounded-full bg-neutral/50 text-xl text-neutral-700 backdrop-blur hover:text-primary-600 dark:bg-neutral-800/50 dark:text-neutral dark:hover:text-primary-400"
            aria-label="{{ i18n "nav.scroll_to_top_title" }}"
            title="{{ i18n "nav.scroll_to_top_title" }}"
          >
            &uarr;
          </a>
        </div>
      {{ end }}
      {{- partial "footer.html" . -}}
      {{ if .Site.Params.enableSearch | default false }}
        {{- partial "search.html" . -}}
      {{ end }}
    </div>
  </body>
</html>
