# IdeaxTech_HP

IdeaxTech のコーポレート／技術ブログサイトを構築・運用するためのリポジトリです。

---

## 🚀 環境構築

### 手順

#### 1. リポジトリをクローン

```bash
git clone https://github.com/IdeaxTech/IdeaxTech_HP.git
cd IdeaxTech_HP
```

```bash
npm install
```

```bash
npm run dev
```

# 📂 ディレクトリ構成

```
src/
├── articles/        # ブログ記事（Markdown ファイル）
│   ├── article1.md
├── assets/          # サイトで使用する静的アセット（画像など）
├── components/      # UI コンポーネント (.astro)
├── layouts/         # ページレイアウト (.astro)
│   ├── Layout.astro
│   └── PostLayout.astro
└── pages/           # ページ（例: index.astro）

public/              # ビルド後にそのまま配信される静的ファイル
```

## ✍️ 記事の編集方法

このリポジトリでは記事を Markdown ファイル（`src/articles/`）として管理します。

### 記事の新規作成

- ファイルを `src/articles/` に作成し、下記のようなYAML frontmatter を記述します。

例: `src/articles/my-new-article.md`

```yaml
---
layout: ../layouts/PostLayout.astro
category: 'イベント'
date: '2025/10/29'
title: 'テスト'
---
本文をここに書きます。
```

編集が終わったら、下記のコマンドを実行してプレビューします。

```bat
npm run dev
```

### 不要な記事を削除

- 不要になった記事ファイルを `src/articles/` から削除します。

### 画像・アセットについて

- 記事で使う画像は `src/assets/` に置きます。

### コミットする時の注意点

Git Actionsでコードの整形チェックを実行しているので、ローカル環境で確認してからコミットするようにしてください。

**チェック**

```bash
npx prettier . --check
```

**自動修正**

```bash
npx prettier . --write
```

---
