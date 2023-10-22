---
title: "ホスティングとデプロイ"
date: 2020-08-07
draft: false
description: "Congoサイトのデプロイについて"
summary: "Congoは、ほとんどすべてのデプロイシナリオに柔軟に対応できるように設計されています。プロジェクトを一般的なホスティングプラットフォームにデプロイする方法については、こちらをご覧ください。"
slug: "hosting-deployment"
tags: ["hosting", "deployment", "docs", "github", "netlify", "render"]
---

Congoで構築したHugoウェブサイトを展開する方法はたくさんあります。このテーマは、ほとんどすべてのデプロイシナリオに柔軟に対応できるように設計されています。

Congoはテーマ全体で相対URLを使って構築されています。これにより、サイトをサブディレクトリやGitHub Pagesのようなホストに簡単に配置することができます。通常、 `config.toml` ファイルで `baseURL` パラメーターが設定されていれば、特別な設定は必要ありません。

Hugo公式ドキュメントの[Hosting and Deployment](https://gohugo.io/hosting-and-deployment/)は、あなたのサイトをデプロイする方法を学ぶのに最適な場所です。以下のセクションには、特定のプラットフォームで役立つ、特定のテーマ設定の詳細が含まれています。

**デプロイ先を選んでください:**

- [GitHub Pages](#github-pages)
- [Netlify](#netlify)
- [Render](#render)
- [Cloudflare Pages](#cloudflare-pages)
- [共有ホスティング、VPS、または自身のWebサーバー](#共有ホスティングvpsまたは自身のwebサーバー)

---

## GitHub Pages

GitHubでは、Actionsを使って[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)上でホスティングすることができます。この機能を有効にするには、リポジトリでPagesを有効にし、新しいActionsワークフローを作成してサイトをビルド、デプロイします。

ファイルはYAML形式で、GitHubリポジトリの `.github/workflows/` ディレクトリに置き、拡張子を `.yml` とします。

{{< alert >}}
**重要:** `branches` とデプロイステップの `if` パラメーターにプロジェクトで使用しているブランチ名を正しく設定してください。
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

設定ファイルをGitHubにプッシュすると、アクションが自動的に実行されるはずです。初回は失敗するかもしれないので、GitHubリポジトリの **Settings > Pages** にアクセスして、ソースが正しいか確認してください。 `gh-pages` ブランチを使うように設定されているべきです。

{{< screenshot src="github-pages-source.jpg" alt="Screen capture of GitHub Pages source" >}}

設定が完了したら、アクションを再実行し、サイトを正しくビルドしてデプロイします。すべてが正常にデプロイされたことを確認するためにアクションログを参照することができます。

## Netlify

[Netlify](https://www.netlify.com)にデプロイするには、Netlify側に新しいデプロイサイトを作成し、ソースコードとリンクします。Netlify UIでは、ビルド設定は空白のまま、使用するドメインだけを設定する必要があります。

{{< screenshot src="netlify-build-settings.jpg" alt="Screen capture of Netlify build settings" >}}

次に、サイト・リポジトリのルートに `netlify.toml` ファイルを作成します:

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

上の例は、CongoをHugoモジュールとしてデプロイすることを想定しています。別の方法でテーマをインストールした場合は、ビルドコマンドを `hugo --gc --minify -b $URL` に変更してください。

設定ファイルをリポジトリにプッシュすると、Netlifyは自動的にサイトをデプロイします。Netlify UIでデプロイのログを確認し、エラーがないかチェックすることができます。

## Render

[Render](https://render.com)へのデプロイは非常に簡単で、すべての設定はRender UIを介して行います。

新しい**静的サイト**を作成し、プロジェクトのコード・リポジトリにリンクします。そして、ビルドコマンドを `hugo --gc --minify` に、公開ディレクトリを `public` に設定するだけです。

{{< screenshot src="render-settings.jpg" alt="Screen capture of Render settings" >}}

あなたが変更をリポジトリにプッシュするたびに、自動的にビルドとデプロイを行います。

## Cloudflare Pages

CloudflareはHugoサイトをホストできる[Pages](https://pages.cloudflare.com/)サービスを提供しています。Gitリポジトリからサイトを構築し、CloudflareのCDNでホスティングします。[Hugoデプロイメントガイド](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site)に従って始めてください。

The Rocket Loader™ feature offered by Cloudflare tries to speed up rendering of web pages with JavaScript, but it breaks the appearance switcher in the theme. It can also cause an annoying light/dark screen flash when browsing your site due to scripts loading in the wrong order.

Cloudflareが提供するRocket Loader™は、JavaScriptを使用したウェブページのレンダリングを高速化するものですが、テーマの外観スイッチャーを壊してしまいます。また、スクリプトのロード順序が正しくないため、サイトを閲覧する際に煩わしい画面の明暗が点滅することがあります。

これらの問題は下記を無効にすることで解決できます:

- [Cloudflare dashboard](https://dash.cloudflare.com)にアクセスする
- あなたのドメイン名をクリックする
- _Speed_ セクションの中にある _Optimization_ をクリックする
- _Rocket Loader™_ までスクロールし、これを無効にする

Congoで構築されたサイトは、この機能を無効にしても十分に読み込みが速いです。

## 共有ホスティング、VPS、または自身のWebサーバー

従来のウェブホスティングを使用する場合や自分のサーバーにデプロイする場合は、Hugoサイトを構築してファイルをホストに転送するだけです。

`config.toml` の `baseURL` パラメーターに、あなたのウェブサイトのルートへの完全なURLが設定されていることを確認してください。

それから `hugo` コマンドを使ってサイトを構築し、出力ディレクトリの内容をウェブサーバのルートにコピーすれば準備完了です。デフォルトでは、出力ディレクトリは `public` という名前になっています。

_ホスティングプロバイダーが必要な場合は、[Vultr](https://www.vultr.com/?ref=8957394-8H)または[DigitalOcean](https://m.do.co/c/36841235e565)をチェックしてください。これらのアフィリエイトリンクを使用してサインアップすると、最大100ドルの無料クレジットがもらえます。_
