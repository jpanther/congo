---
title: "インストール"
date: 2020-08-16
draft: false
description: "Congoをインストール"
summary: "全く何もない状態からHugoとCongoを使い始める方法を紹介します。初めての方はここから始めるのが最適です。"
slug: "installation"
tags: ["installation", "docs"]
---

Hugoの標準的な[Quick Start](https://gohugo.io/getting-started/quick-start/)に従うだけで、すぐに使い始めることができます。

詳しいインストール方法は以下をご覧ください。[更新のインストール](#更新のインストール)についても解説しています。

## インストール

この手順を読めば、HugoとCongoをまったく何もない状態から使い始めることができます。このガイドで述べられている依存関係のほとんどは、あなたのプラットフォームで選択したパッケージマネージャを使ってインストールできます。

### Hugoのインストール

Hugoを使ったことがない場合は、[インストール](https://gohugo.io/getting-started/installing)する必要があります。すでにインストールされているかは、 `hugo version` コマンドで確認できます。

{{< alert >}}
CongoはHugoの最新機能の一部を利用しているため、 **Hugoバージョン0.87.0** 以降を使用していることを確認してください。
{{< /alert >}}

[Hugo docs](https://gohugo.io/getting-started/installing)に、あなたのプラットフォーム用の詳しいインストール手順があります。

### 新しいサイトを作成

コマンド `hugo new site mywebsite` を実行して、 `mywebsite` というディレクトリに新しいHugoサイトを作成します。

プロジェクト・ディレクトリは好きな名前をつけることができますが、以下では説明の便宜上 `mywebsite` という名前を使います。それ以外の名前を使う場合は、適宜置き換えてください。

### Congoのダウンロード

CongoをHugoのウェブサイトにインストールするには、いくつかの方法があります。インストールとメンテナンスが最も簡単なものから最も難しいものまで、次のとおりです:

- [Hugo module](#install-using-hugo) (recommended)
- [Git submodule](#install-using-git)
- [Manual file copy](#install-manually)

わからない場合は、 _Hugo module_ の方法を選んでください。

#### Install using Hugo

この方法はテーマを最新の状態に保つのに最も早く、簡単です。Hugoはモジュールの初期化と管理に **Go** を使うので、先に進む前に `go` がインストールされていることを確認する必要があります。

1. [Download](https://golang.org/dl/)をクリックし、Goをインストールしてください。すでにインストールされているかは、 `go version` コマンドで確認できます。

   {{< alert >}}
   Hugoがモジュールを正しく動作させるために、 **Goバージョン1.12** 以降を使用していることを確認してください。
   {{< /alert >}}

2. Hugoプロジェクトのディレクトリ (上記で作成したもの)から、ウェブサイトのモジュールを初期化します:

   ```shell
   # GitHubでプロジェクトを管理している場合
   hugo mod init github.com/<username>/<repo-name>

   # ローカルでプロジェクトを管理している場合
   hugo mod init my-project
   ```

3. Congoを設定に追加するには、 `config/_default/module.toml` ファイルを新規作成し、以下を追加します:

   ```toml
   [[imports]]
   path = "github.com/jpanther/congo/v2"
   ```

4. `hugo server` を使用してサーバーを起動すると、テーマが自動的にダウンロードされます。
5. [テーマ設定ファイルのセットアップ](#テーマ設定ファイルのセットアップ)に進みます。

#### Install using Git

この方法では、ローカルマシンに **Git** がインストールされていることを確認する必要があります。

Hugoプロジェクトのディレクトリ（上で作成したもの）に移動し、新しく `git` リポジトリを初期化してCongoをサブモジュールとして追加します。

```bash
cd mywebsite
git init
git submodule add -b stable https://github.com/jpanther/congo.git themes/congo
```

[テーマ設定ファイルのセットアップ](#テーマ設定ファイルのセットアップ)に進みます。

#### Install manually

1. Congoのソースコードの最新リリースをダウンロードする。

   {{< button href="https://github.com/jpanther/congo/releases/latest" target="_blank" >}}Download from Github{{< /button >}}

2. アーカイブを解凍し、ディレクトリ名を `congo` に変更して、Hugoプロジェクト内の `themes/` ディレクトリに移動します。
3. [テーマ設定ファイルのセットアップ](#テーマ設定ファイルのセットアップ)に進みます。

### テーマ設定ファイルのセットアップ

ウェブサイトのルートディレクトリで、Hugoによって生成された `config.toml` ファイルを削除します。テーマの `*.toml` 設定ファイルを `config/_default/` ディレクトリにコピーします。これでCongoの設定がすべて正しくなり、必要に応じてCongoを簡単にカスタマイズできるようになります。

{{< alert >}}
**注記:** プロジェクト内にすでに `module.toml` ファイルが存在する場合は上書きしないでください！
{{< /alert >}}

テーマのインストール方法によって、テーマの設定ファイルは異なる場所にあります。:

- **Hugo Modules:** Hugoのキャッシュディレクトリ、またはGitHubから[コピーをダウンロード](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/jpanther/congo/tree/stable/config/_default)してください。
- **Git submodule or Manual install:** `themes/congo/config/_default`

ファイルをコピーしたら、設定ディレクトリは以下のようになっているはずです:

```shell
config/_default/
├─ config.toml
├─ markup.toml
├─ menus.toml
├─ module.toml  # if you installed using Hugo Modules
└─ params.toml
```

{{< alert >}}
**重要:** Hugoモジュールを使ってCongoをインストールしなかった場合は、 `config.toml` ファイルの先頭に `theme = "congo"` という行を追加する必要があります。
{{< /alert >}}

### Next steps

これで基本的なCongoのインストールは完了です。テーマの設定についての詳細は、[はじめに]({{< ref "getting-started" >}})セクションに進んでください。

---

## 更新のインストール

時折、テーマに修正を適用し、新しい機能を追加した[新しいリリース](https://github.com/jpanther/congo/releases)が投稿されます。これらの変更を利用するには、ウェブサイトのテーマファイルを更新する必要があります。

この方法は、テーマを最初にインストールしたときに選択したインストール方法によって異なります。各方法の手順は以下にあります。

- [Hugo module](#update-using-hugo)
- [Git submodule](#update-using-git)
- [Manual file copy](#update-manually)

### Update using Hugo

Hugoはモジュールのアップデートをとても簡単にしてくれます。プロジェクトディレクトリに移動して、以下のコマンドを実行するだけです:

```shell
hugo mod get -u
```

Hugoはプロジェクトに必要なモジュールを自動的にアップデートします。これは `module.toml` と `go.mod` ファイルを検査することで行われます。アップデートに問題がある場合は、これらのファイルが正しく設定されているか確認してください。

その後、サイトを再構築し、すべてが期待通りに動作することを確認してください。

### Update using git

Gitサブモジュールは `git` コマンドを使って更新できます。次のコマンドを実行するだけで、テーマの最新バージョンがローカルリポジトリにダウンロードされます:

```shell
git submodule update --remote --merge
```

サブモジュールのアップデートが完了したら、サイトを再構築し、すべてが期待通りに動作することを確認してください。

### Update manually

Congoを手動で更新するには、テーマの最新コピーをダウンロードして、プロジェクト内の古いバージョンを置き換える必要があります。

{{< alert >}}
テーマファイルに対して行ったローカルでのカスタマイズは、この処理中に失われますのでご注意ください。
{{< /alert >}}

1. Congoのソースコードの最新リリースをダウンロードする。

   {{< button href="https://github.com/jpanther/congo/releases/latest" target="_blank" >}}Download from Github{{< /button >}}

2. アーカイブを解凍し、ディレクトリ名を `congo` に変更して、Hugoプロジェクトのルートディレクトリ内の `themes/` ディレクトリに移動します。すべてのテーマファイルを置き換えるには、既存のディレクトリを上書きする必要があります。

3. サイトを再構築し、すべてが期待通りに動作することを確認してください。
