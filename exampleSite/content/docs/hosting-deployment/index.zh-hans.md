---
title: "部署"
date: 2020-08-07
draft: false
description: "学习如何部署 Congo 网站。"
summary: "Congo 被设计为在几乎任何部署场景中都具有灵活性。了解如何将项目部署到一些常见的主机平台。"
slug: "hosting-deployment"
tags: ["hosting", "deployment", "docs", "github", "netlify", "render"]
---

有许多方法可以部署使用 Congo 构建的 Hugo 网站。该主题被设计为在几乎任何部署场景中都具有灵活性。

Congo 在整个主题中使用相对 URL。这使得站点可以轻松部署到子文件夹和像 GitHub Pages 这样的主机。通常情况下，只要在 config.toml 文件中配置了 baseURL 参数，就不需要特殊的配置。

要学习如何部署您的站点，Hugo 官方的主机与部署文档是最佳选择。下面的部分包含一些特定的主题配置细节，可以帮助您在某些提供商那里顺利部署。

**选择您的提供商：**

- [GitHub Pages](#github-pages)
- [Netlify](#netlify)
- [Render](#render)
- [Cloudflare Pages](#cloudflare-pages)
- [共享主机、VPS 或私有 Web 服务器](#shared-hosting-vps-or-private-web-server)

---

## GitHub Pages

GitHub 允许使用 [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) 在 Actions 中托管网站。要启用此功能，请在您的存储库上启用 Pages，并创建一个新的 Actions 工作流来构建和部署您的站点。

该文件需要采用 YAML 格式，放置在您的 GitHub 存储库的 `.github/workflows/` 目录中，并以 `.yml` 扩展名命名。

{{< alert >}}
**重要提示：**确保在 `branches` 下设置正确的分支名称，并在部署步骤的 `if` 参数中设置用于项目的源分支。
{{< /alert >}}

```yaml
# .github/workflows/gh-pages.yml

name: GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    concurrency:
      group: ${{ github.workflow }}-${{ github.ref }}
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          submodules: true
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: "latest"

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        if: ${{ github.ref == 'refs/heads/main' }}
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./public
```

将配置文件推送到 GitHub，操作应会自动运行。第一次可能会失败，您需要访问 GitHub 存储库的 **Settings > Pages** 部分以检查源是否正确。它应该设置为使用 `gh-pages` 分支。

{{< screenshot src="github-pages-source.jpg" alt="GitHub Pages source settings 屏幕截图" >}}

您还应该访问 **Settings > Actions > General** 部分，检查工作流权限是否允许操作对您的存储库进行更改。

{{< screenshot src="github-workflow-permissions.jpg" alt="GitHub Workflow Permissions 设置屏幕截图" >}}

配置设置后，重新运行操作，站点应该能够正确构建和部署。您可以查看操作日志以确保一切都成功部署。

## Netlify

要部署到 [Netlify](https://www.netlify.com)，创建一个新的持续部署站点并将其链接到您的源代码。在 Netlify UI 中，可以将构建设置留空。您只需要配置将要使用的域。

{{< screenshot src="netlify-build-settings.jpg" alt="Netlify 构建设置屏幕截图" >}}

然后在您站点存储库的根目录中，创建一个 `netlify.toml` 文件：

```toml
# netlify.toml

[build]
  command = "hugo mod get -u && hugo --gc --minify -b $URL"
  publish = "public"

[build.environment]
  HUGO_VERSION = "0.118.2"
  NODE_ENV = "production"
  GO_VERSION = "1.20"
  TZ = "UTC"  # Set to preferred timezone

[context.production.environment]
  HUGO_ENV = "production"
```

此配置假设您正在将 Congo 部署为 Hugo 模块。如果您使用其他方法安装了主题，请将构建命令更改为简单的 `hugo --gc --minify -b $URL`。

当您将配置文件推送到存储库时，Netlify 应会自动部署您的站点。您可以在 Netlify UI 中检查部署日志以查看是否有任何错误。

## Render

部署到 [Render](https://render.com) 非常简单，所有配置都通过 Render UI 进行。

创建一个新的 **Static Site** 并将其链接到项目的代码存储库。然后简单地配置构建命令为 `hugo --gc --minify`，发布目录为 `public`。

{{< screenshot src="render-settings.jpg" alt="Render 设置屏幕截图" >}}

只要您对存储库进行更改，站点将自动构建和部署。

## Cloudflare Pages

Cloudflare 提供 [Pages](https://pages.cloudflare.com/) 服务，可以托管 Hugo 博客。它从 git 存储库构建站点，然后在 Cloudflare 的 CDN 上托管。请按照他们的 [Hugo 部署指南](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site) 开始使用。

Cloudflare 提供的 Rocket Loader™ 功能试图加速带有 JavaScript 的网页渲染，但它会破坏主题中的外观切换器。它还可能导致浏览站点时因脚本加载顺序错误而出现令人讨厌的浅色/深色屏幕闪烁。

可以通过禁用此功能来解决这个问题：

- 转到 [Cloudflare 仪表板](https://dash.cloudflare.com)
- 在列表中点击您的域名
- 在 _Speed_ 部分中点击 _Optimization_
- 滚动到 _Rocket Loader™_ 并禁用它

使用 Congo 构建的 Hugo 站点即使禁用此功能仍然加载非常快。

## 共享托管、VPS 或私有 Web 服务器

使用传统的 Web 托管，或部署到自己的 Web 服务器，只需构建 Hugo 站点并将文件传输到主机即可。

确保 `config.toml` 中的 `baseURL` 参数设置为您网站根目录的完整 URL（包括任何子域或子文件夹）。

然后使用 `hugo` 构建您的站点，将输出目录的内容复制到 Web 服务器的根目录，您就准备好了。默认情况下，输出目录的名称为 `public`。

_如果您需要托管提供商，请查看 [Vultr](https://www.vultr.com/?ref=8957394-8H) 或 [DigitalOcean](https://m.do.co/c/36841235e565)。使用这些推广链接注册将为您提供最多 100 美元的免费信用，以便您可以尝试该服务。_
