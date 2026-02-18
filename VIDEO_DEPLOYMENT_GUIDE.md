# 🎬 動画ファイル（bike-video.mp4）の配置手順
## サーバーで動画を正しく表示させる方法

---

## ❌ **現在の問題**

サーバーで `bike-video.mp4` が読み込めない

**原因:** 動画ファイルがサーバーに配置されていない

---

## ✅ **解決方法（3ステップ）**

### **ステップ1: 動画を public フォルダに配置（ローカルPC）**

```
プロジェクトフォルダ/
├── public/              ← このフォルダに
│   └── bike-video.mp4   ← 動画を配置
├── src/
├── dist/
├── package.json
└── vite.config.ts
```

#### **具体的な手順**

1. **public フォルダを確認**
   - プロジェクトのルートフォルダに `public` フォルダがあることを確認
   - なければ作成してください

2. **動画ファイルをコピー**
   - `bike-video.mp4` を `public` フォルダにコピー
   - ファイル名は **正確に** `bike-video.mp4` にしてください（大文字小文字も一致）

---

### **ステップ2: ビルド（ローカルPC）**

```bash
npm run build
```

#### **ビルド後の確認**

`dist` フォルダに動画がコピーされているか確認：

```
dist/
├── index.html
├── assets/
│   ├── index-abc123.js
│   └── index-xyz789.css
└── bike-video.mp4  ← これが存在するか確認！
```

**確認方法（Windows）:**
```cmd
dir dist\bike-video.mp4
```

**確認方法（Mac/Linux）:**
```bash
ls -lh dist/bike-video.mp4
```

---

### **ステップ3: サーバーにアップロード**

`dist` フォルダの**中身すべて**をサーバーにアップロード：

```
http://192.168.8.205/wordpress/sdgs-presentation/
├── index.html
├── assets/
│   ├── index-abc123.js
│   └── index-xyz789.css
└── bike-video.mp4  ← これが重要！
```

---

## 🔍 **動作確認**

### **方法1: ブラウザで直接アクセス**

```
http://192.168.8.205/wordpress/sdgs-presentation/bike-video.mp4
```

このURLをブラウザに入力して、動画が再生されればOK！

---

### **方法2: 開発者ツールで確認（F12）**

1. プレゼンテーションアプリを開く
   ```
   http://192.168.8.205/wordpress/sdgs-presentation/
   ```

2. `F12` キーを押して開発者ツールを開く

3. **Network** タブを選択

4. スライド2（ソリューション）まで進む

5. `bike-video.mp4` が読み込まれているか確認
   - ✅ **Status: 200** → 成功！
   - ❌ **Status: 404** → ファイルが見つからない

---

## 📂 **完全な配置手順（まとめ）**

### **ローカルPC で**

```bash
# 1. publicフォルダに動画を配置
# プロジェクトフォルダ/public/bike-video.mp4

# 2. ビルド
npm run build

# 3. distフォルダに動画がコピーされたか確認
ls dist/bike-video.mp4  # Mac/Linux
dir dist\bike-video.mp4  # Windows

# 4. distフォルダの中身を全て選択
# index.html、assets/、bike-video.mp4 など全て
```

### **サーバーへ**

```
# 5. FTPやファイル共有でアップロード
# アップロード先: http://192.168.8.205/wordpress/sdgs-presentation/

アップロードするもの:
├── index.html           ← 全部
├── assets/              ← 全部
│   ├── index-abc123.js
│   └── index-xyz789.css
└── bike-video.mp4       ← これも！

# 重要: `dist` フォルダの中身を**全部**選択してアップロード！

# パスの注意: 
# コードで `src="./bike-video.mp4"` と相対パスを使用しているため、動画ファイルは index.html と同じ階層に配置してください

# 6. ブラウザで確認
http://192.168.8.205/wordpress/sdgs-presentation/bike-video.mp4
```

---

## ⚠️ **よくある間違い**

### ❌ **間違い1: distフォルダに動画がない**

**原因:** publicフォルダに動画を配置せずにビルドした

**解決策:**
```bash
# 1. public/bike-video.mp4 があることを確認
# 2. 再ビルド
npm run build
# 3. dist/bike-video.mp4 が作成されたか確認
```

---

### ❌ **間違い2: ファイル名が違う**

**NGな例:**
- `Bike-Video.mp4` ← 大文字
- `bike-video.MP4` ← 拡張子が大文字
- `bike_video.mp4` ← アンダースコア
- `video.mp4` ← 違う名前

**正しい:**
- `bike-video.mp4` ← 完全一致！

---

### ❌ **間違い3: 動画だけをサーバーにアップロード**

**NGな例:**
```
sdgs-presentation/
└── bike-video.mp4  ← これだけアップロード
```

**正しい:**
```
sdgs-presentation/
├── index.html       ← 全部必要！
├── assets/
└── bike-video.mp4
```

---

## 🎥 **動画ファイルの要件**

### **推奨仕様**

| 項目 | 推奨値 |
|------|--------|
| **形式** | MP4（H.264コーデック） |
| **解像度** | 1920x1080 または 1280x720 |
| **ファイルサイズ** | 10MB以下（推奨） |
| **ファイル名** | `bike-video.mp4`（小文字） |
| **長さ** | 10〜30秒（ループ再生されます） |

---

## 🔧 **ベースパスの問題がある場合**

### **症状: 動画のパスが `/wordpress/sdgs-presentation/bike-video.mp4` になっていない**

**確認:**
`vite.config.ts` を開いて、`base` の設定を確認：

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/wordpress/sdgs-presentation/', // ← これを確認！
})
```

**修正後:**
```bash
# 再ビルド
npm run build

# dist の中身をサーバーに再アップロード
```

---

## 💡 **動画がない場合の代替案**

### **方法1: フォールバック画像を使う**

動画の代わりに静止画を表示（現在の設定でも対応済み）：

```tsx
<video ...>
  <source src="/bike-video.mp4" type="video/mp4" />
  {/* 動画が読み込めない場合は画像を表示 */}
  お使いのブラウザは動画タグをサポートしていません。
</video>
```

**結果:** 動画がなくても画面は表示される（動画部分が空白になるだけ）

---

### **方法2: 動画を無効化する**

SolutionSection.tsx を編集して、動画セクションをコメントアウト：

```tsx
{/* 動画を一時的に無効化
<div className="...">
  <video ...>
    <source src="/bike-video.mp4" type="video/mp4" />
  </video>
</div>
*/}
```

**結果:** 動画セクション全体が非表示になる

---

## 📝 **チェックリスト**

配置前に確認してください：

### **ローカルPC**
- [ ] `public/bike-video.mp4` ファイルが存在する
- [ ] ファイル名が正確に `bike-video.mp4`（小文字）
- [ ] `npm run build` を実行した
- [ ] `dist/bike-video.mp4` が生成された

### **サーバー**
- [ ] `dist` フォルダの**全ファイル**をアップロードした
- [ ] `http://192.168.8.205/wordpress/sdgs-presentation/bike-video.mp4` にアクセスできる
- [ ] プレゼンテーションアプリで動画が再生される

---

## 🆘 **それでも動画が表示されない場合**

### **デバッグ手順**

1. **ブラウザのコンソールを確認（F12 → Console）**
   ```
   GET http://192.168.8.205/wordpress/sdgs-presentation/bike-video.mp4 404 (Not Found)
   ```
   → ファイルがサーバーにない

2. **Networkタブを確認（F12 → Network）**
   - bike-video.mp4 の行をクリック
   - Status Code を確認
     - `200` → 成功
     - `404` → ファイルが見つからない
     - `403` → アクセス権限がない

3. **ファイルパーミッションを確認（サーバー側）**
   ```bash
   # サーバーで実行
   ls -l /path/to/wordpress/sdgs-presentation/bike-video.mp4
   
   # パーミッションを修正（必要に応じて）
   chmod 644 bike-video.mp4
   ```

---

## 🎯 **クイックスタート（最速手順）**

```bash
# 1. 動画を配置
# public/bike-video.mp4 にコピー

# 2. ビルド
npm run build

# 3. 確認
ls dist/bike-video.mp4  # ファイルがあることを確認

# 4. アップロード
# dist/* を全てサーバーの /wordpress/sdgs-presentation/ にコピー

# 5. テスト
# ブラウザで http://192.168.8.205/wordpress/sdgs-presentation/bike-video.mp4 を開く
```

---

## 📞 **まだ問題がある場合**

以下の情報を確認してください：

1. **ローカルPC の dist フォルダ**
   ```bash
   ls -lh dist/bike-video.mp4
   ```
   出力結果をコピー

2. **サーバーのファイル一覧**
   ```
   http://192.168.8.205/wordpress/sdgs-presentation/
   ```
   このURLをブラウザで開いて、bike-video.mp4 が見えるか確認

3. **ブラウザのエラーメッセージ**
   - F12 → Console タブ
   - エラーメッセージをコピー

---

**作成日:** 2026年2月18日  
**SDGsプロジェクトチーム**