# 📄 PDF出力ガイド
## プレゼンテーション資料をPDF化する方法

---

## 🎯 目的

このガイドでは、プレゼンテーションアプリと配布資料をPDF化する方法を説明します。

---

## 📋 PDF化する資料の種類

### 1. **プレゼンテーションアプリ（全13スライド）**
- URL: `http://192.168.8.205/wordpress/sdgs-presentation/`
- 形式: ウェブアプリケーション
- ページ数: 13ページ

### 2. **配布資料（PRESENTATION_HANDOUT.md）**
- ファイル: `/PRESENTATION_HANDOUT.md`
- 形式: Markdown文書
- ページ数: 約10ページ

### 3. **プレゼン原稿（PRESENTATION_SCRIPT.md）**
- ファイル: `/PRESENTATION_SCRIPT.md`
- 形式: Markdown文書
- ページ数: 約5ページ

### 4. **CO2計算根拠資料（CO2_CALCULATION_DETAIL.md）**
- ファイル: `/CO2_CALCULATION_DETAIL.md`
- 形式: Markdown文書
- ページ数: 約8ページ

---

## 🖨️ 方法1: ブラウザの印刷機能でPDF化（推奨）

### **プレゼンテーションアプリのPDF化**

#### **手順**

1. **ブラウザでアプリを開く**
   ```
   http://192.168.8.205/wordpress/sdgs-presentation/
   ```

2. **全スライドをスクロール**
   - マウスホイールまたは矢印キーで全13スライドを確認
   - 各スライドで1〜2秒待機（アニメーションを読み込むため）

3. **印刷メニューを開く**
   - **Windows:** `Ctrl + P`
   - **Mac:** `Command + P`

4. **印刷設定**
   - **送信先:** 「PDFに保存」または「Microsoft Print to PDF」を選択
   - **レイアウト:** 横向き（Landscape）
   - **ページ:** すべて
   - **余白:** なし（カスタム: 0mm）
   - **背景のグラフィック:** オン（重要！）
   - **倍率:** 100%

5. **各スライドを個別に印刷**
   - 1スライドずつスクリーンショットを撮る方法も可（後述）

6. **保存**
   - ファイル名: `SDGs発表資料_ネコカフェ発電所計画_スライド.pdf`
   - 保存場所: 任意

---

### **Markdown資料のPDF化**

#### **方法A: Visual Studio Code + Markdown PDF拡張機能（推奨）**

1. **VS Codeで開く**
   - `/PRESENTATION_HANDOUT.md` を開く

2. **拡張機能のインストール**
   - 拡張機能: `Markdown PDF` by yzane
   - インストール後、VS Codeを再起動

3. **PDF出力**
   - `Ctrl + Shift + P`（Mac: `Command + Shift + P`）
   - `Markdown PDF: Export (pdf)` を選択
   - 同じフォルダに `.pdf` ファイルが生成される

4. **設定（オプション）**
   - `settings.json` で日本語フォント設定
   ```json
   "markdown-pdf.styles": [],
   "markdown-pdf.headerTemplate": "<div></div>",
   "markdown-pdf.footerTemplate": "<div style='font-size:9px; text-align:center; width:100%;'><span class='pageNumber'></span> / <span class='totalPages'></span></div>"
   ```

#### **方法B: オンラインMarkdown→PDF変換サービス**

1. **推奨サービス**
   - https://www.markdowntopdf.com/
   - https://md2pdf.netlify.app/
   - https://cloudconvert.com/md-to-pdf

2. **手順**
   - サイトにアクセス
   - Markdownファイルをアップロード
   - 「Convert」または「変換」をクリック
   - PDFをダウンロード

#### **方法C: ブラウザのMarkdownプレビュー経由**

1. **Chrome拡張機能: Markdown Preview Plus**
   - インストール: https://chrome.google.com/webstore
   - Markdownファイルをブラウザにドラッグ&ドロップ
   - `Ctrl + P` で印刷→PDFに保存

---

## 📸 方法2: スクリーンショットでPDF化

### **Windows の場合**

#### **手順**

1. **各スライドを表示**
   - プレゼンテーションアプリで1つずつスライドを表示

2. **スクリーンショット撮影**
   - **方法A:** `Windows + Shift + S`（範囲選択）
   - **方法B:** `PrtScn`（全画面）
   - **方法C:** Snipping Tool を使用

3. **画像を保存**
   - ファイル名: `スライド01.png`, `スライド02.png`, ...

4. **PDFに結合**
   - **方法A:** Adobe Acrobat を使用
   - **方法B:** オンラインサービス
     - https://www.ilovepdf.com/jpg_to_pdf
     - https://smallpdf.com/jp/jpg-to-pdf
   - **方法C:** PowerPoint経由
     - 新しいPowerPointファイルを作成
     - スライドサイズを「ワイド画面（16:9）」に設定
     - 各画像を1スライドずつ挿入
     - 「ファイル」→「エクスポート」→「PDF/XPSの作成」

---

### **Mac の場合**

#### **手順**

1. **各スライドを表示**
   - プレゼンテーションアプリで1つずつスライドを表示

2. **スクリーンショット撮影**
   - **全画面:** `Command + Shift + 3`
   - **範囲選択:** `Command + Shift + 4`
   - **ウィンドウ:** `Command + Shift + 4` → `Space`

3. **画像を保存**
   - デスクトップに自動保存される

4. **PDFに結合**
   - **方法A:** プレビューアプリを使用
     - 全画像をプレビューで開く
     - サイドバーで全画像を選択
     - 「ファイル」→「PDFとして書き出す」
   - **方法B:** Automatorを使用
     - Automatorで「イメージをPDFに変換」ワークフローを作成

---

## 🎨 方法3: PowerPoint経由でPDF化（最も安全）

### **手順**

1. **PowerPointで新規ファイル作成**
   - スライドサイズ: ワイド画面（16:9）

2. **各スライドのスクリーンショットを撮影**
   - プレゼンテーションアプリの13スライドすべて

3. **PowerPointに画像を挿入**
   - 1スライド = 1画像
   - 画像をスライド全体にフィット

4. **PDF出力**
   - 「ファイル」→「エクスポート」→「PDF/XPSの作成」
   - ファイル名: `SDGs発表資料_ネコカフェ発電所計画.pdf`

---

## 📦 方法4: 自動化スクリプト（上級者向け）

### **Puppeteer（Node.js）を使用**

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1920, height: 1080 });
  
  for (let i = 0; i < 13; i++) {
    await page.goto(`http://192.168.8.205/wordpress/sdgs-presentation/#${i}`);
    await page.waitForTimeout(2000); // アニメーション待機
    await page.pdf({
      path: `slide-${i + 1}.pdf`,
      width: '1920px',
      height: '1080px',
      printBackground: true
    });
  }
  
  await browser.close();
})();
```

### **Playwright（Node.js）を使用**

```javascript
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  for (let i = 0; i < 13; i++) {
    await page.goto(`http://192.168.8.205/wordpress/sdgs-presentation/#${i}`);
    await page.waitForTimeout(2000);
    await page.pdf({
      path: `slide-${i + 1}.pdf`,
      width: '1920px',
      height: '1080px',
      printBackground: true
    });
  }
  
  await browser.close();
})();
```

---

## 📋 推奨PDFファイル構成

### **配布資料パッケージ**

```
SDGs発表資料_ネコカフェ発電所計画/
├── 01_プレゼンスライド.pdf（13ページ）
├── 02_配布資料_要約版.pdf（10ページ）
├── 03_発表原稿_詳細版.pdf（5ページ）
└── 04_CO2計算根拠_詳細版.pdf（8ページ）
```

---

## ✅ PDF化チェックリスト

### **出力前の確認**

- [ ] 全13スライドが含まれているか
- [ ] 背景グラフィックが表示されているか
- [ ] アニメーションが正しく表示されているか
- [ ] 文字が鮮明に読めるか
- [ ] 画像が高解像度か（ぼやけていないか）
- [ ] ページ番号が正しいか

### **配布前の確認**

- [ ] ファイル名が分かりやすいか
- [ ] ファイルサイズが適切か（大きすぎないか）
- [ ] 印刷プレビューで確認したか
- [ ] 誤字脱字がないか
- [ ] 社外秘情報が含まれていないか

---

## 💡 Tips

### **高品質なPDF作成のコツ**

1. **解像度を高く設定**
   - スクリーンショットは最低1920x1080
   - 印刷用は2倍サイズ（3840x2160）推奨

2. **背景を必ず含める**
   - グラデーション背景が重要なデザイン要素

3. **フォントの埋め込み**
   - PDFにフォントを埋め込む設定を有効化

4. **ファイルサイズの最適化**
   - 画像圧縮を適用（ただし品質は維持）
   - Adobe Acrobatの「PDFを最適化」機能を使用

---

## 🚨 トラブルシューティング

### **問題: 背景が白くなる**
**解決策:** 印刷設定で「背景のグラフィック」を有効化

### **問題: アニメーションが表示されない**
**解決策:** 各スライドで2秒待機してからスクリーンショット

### **問題: 文字がぼやける**
**解決策:** 高解像度（最低1920x1080）でキャプチャ

### **問題: ファイルサイズが大きすぎる**
**解決策:** 
- 画像圧縮ツールを使用
- PDFの最適化機能を使用
- オンライン圧縮サービス（https://www.ilovepdf.com/compress_pdf）

---

## 📞 サポート

PDF化で問題が発生した場合は、以下を確認してください：

1. ブラウザのバージョン（Chrome最新版推奨）
2. PDFビューアーのバージョン
3. エラーメッセージのスクリーンショット

---

**作成日:** 2026年2月17日  
**バージョン:** 1.0  
**SDGsプロジェクトチーム**
