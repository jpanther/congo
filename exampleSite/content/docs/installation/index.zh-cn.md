---
title: "安装"
date: 2020-08-16
draft: false
description: "如何安装Congo主题"
summary: "学习如何从0开始使用Hugo和Congo。如果您是新用户，这是开始的最佳位置。"
slug: "installation"
tags: ["installation", "docs"]
---

只需按照标准的Hugo [快速入门](https://gohugo.io/getting-started/quick-start/)流程，即可快速启动和运行。

下面提供了详细的安装说明。还有关于[更新主题](#installing-updates)的说明。

## 安装

以下说明将帮助您从0使用Hugo和Congo启动和运行。此指南中提到的大多数依赖项可以使用您平台上选择的包管理器进行安装。

### 安装Hugo

如果您以前没有使用过Hugo，您需要[将其安装到本地计算机上](https://gohugo.io/getting-started/installing)。您可以通过运行命令 `hugo version` 来检查是否已经安装。

{{< alert >}}
确保您使用的是 **Hugo版本0.87.0** 或更高版本，因为该主题利用了一些最新的Hugo功能。
{{< /alert >}}

您可以在[Hugo文档](https://gohugo.io/getting-started/installing)中找到有关您平台的详细安装说明。

### 创建新站点

运行命令 `hugo new site mywebsite` 在名为 `mywebsite` 的目录中创建一个新的Hugo站点。

请注意，您可以将项目目录命名为任何您选择的名称，但下面的说明将假定其名称为 `mywebsite`。如果使用其他名称，请确保相应地进行替换。

### 下载Congo主题

有几种不同的方法可以将Congo主题安装到您的Hugo网站中。从最简单到最难安装和维护的方式，它们分别是：

- [Hugo模块](#使用hugo安装)（推荐）
- [Git子模块](#使用git安装)
- [手动文件复制](#手动安装)

如果不确定，请选择Hugo模块方法。

#### 使用Hugo安装

这种方法是保持主题最新的最快最简单的方法。Hugo使用 **Go** 来初始化和管理模块，因此在继续之前，您需要确保已安装 `go`。

1. [下载](https://golang.org/dl/)并安装Go。您可以通过使用命令 `go version` 来检查是否已安装。

   {{< alert >}}
   确保您使用的是 **Go版本1.12** 或更高版本，因为Hugo需要这个版本以使模块正常工作。
   {{< /alert >}}

2. 从Hugo项目目录（您上面创建的目录）中，为您的网站初始化模块：

   ```shell
   # 如果您在GitHub上管理项目
   hugo mod init github.com/<username>/<repo-name>

   # 如果您在本地管理项目
   hugo mod init my-project
   ```

3. 通过创建一个新文件 `config/_default/module.toml` 并添加以下内容，将主题添加到配置中：

   ```toml
   [[imports]]
   path = "github.com/jpanther/congo/v2"
   ```

4. 使用 `hugo server` 启动您的服务器，主题将自动下载。
5. 继续 [设置主题配置文件](#设置主题配置文件)。

#### 使用Git安装

对于这种方法，您需要确保在本地计算机上安装了 **Git**。

切换到您的Hugo网站目录（上面创建的目录），初始化一个新的 `git` 存储库并将刚果添加为子模块。

```bash
cd mywebsite
git init
git submodule add -b stable https://github.com/jpanther/congo.git themes/congo
```

然后继续 [设置主题配置文件](#设置主题配置文件)。

### 设置主题配置文件

在您的网站根目录中，删除由Hugo生成的 `config.toml` 文件。将主题中的 `*.toml` 配置文件复制到您的 `config/_default/` 文件夹中。这将确保您具有所有正确的主题设置，并使您能够轻松地根据需要自定义主题。

{{< alert >}}
**注意：** 如果您的项目中已存在 `module.toml` 文件，则不应覆盖它！
{{< /alert >}}

根据您安装主题的方式，您将在不同的位置找到主题配置文件：

- **Hugo模块：** 在Hugo缓存目录中，或者从GitHub[下载一份副本](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/jpanther/congo/tree/stable/config/_default)
- **Git子模块或手动安装：** `themes/congo/config/_default`

复制文件后，您的配置文件夹应如下所示：

```shell
config/_default/
├─ config.toml
├─ markup.toml
├─ menus.toml
├─ module.toml  # 如果使用Hugo模块安装
└─ params.toml
```

{{< alert >}}
**重要：** 如果您不是使用Hugo模块的方法安装Congo，则必须在您的 `config.toml` 文件顶部添加 `theme = "congo"` 这一行。
{{< /alert >}}

### 下一步

基本的刚果安装现在已经完成。继续查看 [入门](#入门) 部分，了解有关配置主题的更多信息。

---

## 安装更新

我们不时会发布[新的版本](https://github.com/jpanther/congo/releases)，其中包含对主题的修复和新功能。为了利用这些更改，您需要更新网站上的主题文件。

您执行此操作的方式将取决于主题最初安装时选择的安装方法。下面是每种方法的说明。

- [Hugo模块](#使用Hugo更新)
- [Git子模块](#使用Git更新)
- [手动文件复制](#手动更新)

### 使用Hugo更新

Hugo使更新模块变得非常容易。只需切换到项目目录并执行以下命令：

```shell
hugo mod get -u
```

Hugo将自动更新项目所需的任何模块。它通过检查您的 `module.toml` 和 `go.mod` 文件来完成。如果更新时出现任何问题，请检查这些文件是否仍然正确配置。

然后只需重新构建您的站点，并检查一切是否按预期工作。

{{< alert >}}
在更新模块时，有时Hugo会缓存主题的较旧版本。如果发生这种情况，请使用 `hugo mod clean` 命令清除本地缓存，然后重新构建您的站点。
{{< /alert >}}

### 使用Git更新

可以使用 `git` 命令更新Git子模块。只需执行以下命令，最新版本的主题将被下载到本地存储库中：

```shell
git submodule update --remote --merge
```

一旦子模块已更新，重新构建您的站点并检查一切是否按预期工作。

### 手动更新

手动更新刚果需要您下载主题的最新副本，并替换项目中的旧版本。

{{< alert >}}
请注意，在此过程中，您对主题文件的任何本地自定义将丢失。
{{< /alert >}}

1. 下载主题源代码的最新发布版本。

   {{< button href="https://github.com/jpanther/congo/releases/latest" target="_blank" >}}从Github下载{{< /button >}}

2. 解压缩存档，将文件夹重命名为 `congo`，并将其移动到Hugo项目根文件夹内的 `themes/` 目录。您需要覆盖现有目录以替换所有主题文件。

3. 重新构建您的站点
