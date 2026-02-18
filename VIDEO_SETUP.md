# 📹 動画差し替え手順書

## 🎬 動画の配置場所

**ファイル:** `/src/app/components/SolutionSection.tsx`  
**行数:** 約120-130行目

---

## ✅ 動画差し替え手順

### **ステップ1: publicフォルダを作成**

プロジェクトのルートディレクトリ（package.jsonがある場所）に`public`フォルダを作成します。

```
プロジェクトフォルダ/
├── public/          ← この フォルダを作成
│   └── bike-video.mp4  ← 動画をここに配置
├── src/
├── package.json
└── vite.config.ts
```

### **ステップ2: 動画ファイルを配置**

作成した動画を `public` フォルダにコピーします。

**推奨ファイル名:**
- `bike-video.mp4`
- `power-generation.mp4`
- `exercise-bike.mp4`

**推奨スペック:**
- 形式: MP4 (H.264)
- 解像度: 1920x1080 または 1280x720
- ファイルサイズ: 10MB以下（ループ再生のため軽量推奨）
- 長さ: 10-30秒

---

## 🔧 コード修正箇所

### **ファイル:** `/src/app/components/SolutionSection.tsx`

以下のコメントがある箇所を見つけてください：

```tsx
{/* 
  ============================================================
  🎬 動画差し替えポイント 🎬
  ============================================================
*/}
```

### **修正前（現在のダミー動画）:**

```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-[500px] object-cover"
  poster="https://images.unsplash.com/photo-1759201092316-e4db7274915e?..."
>
  <source
    src="https://player.vimeo.com/external/371433846.sd.mp4?..."
    type="video/mp4"
  />
  {/* フォールバック */}
</video>
```

### **修正後（自分の動画）:**

```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-[500px] object-cover"
  poster="/bike-thumbnail.jpg"  /* オプション: サムネイル画像 */
>
  <source
    src="./bike-video.mp4"  /* ← ここを変更！ */
    type="video/mp4"
  />
  {/* フォールバック */}
  <img src="/fallback-image.jpg" alt="エアロバイク" />
</video>
```

---

## 📝 変更箇所の詳細

### **必須変更:**

1. **src属性**  
   ```tsx
   src="./bike-video.mp4"
   ```
   `/public/bike-video.mp4` に配置した動画のパス

### **オプション変更:**

2. **poster属性（動画読み込み前のサムネイル）**  
   ```tsx
   poster="/bike-thumbnail.jpg"
   ```
   動画のサムネイル画像（publicフォルダに配置）

3. **autoPlay（自動再生）**  
   ```tsx
   autoPlay={true}   // 自動再生する
   autoPlay={false}  // 自動再生しない
   ```

4. **loop（ループ再生）**  
   ```tsx
   loop={true}   // ループする
   loop={false}  // 1回のみ再生
   ```

5. **muted（音声ミュート）**  
   ```tsx
   muted={true}   // ミュート（自動再生に必須）
   muted={false}  // 音声あり（自動再生不可）
   ```

---

## 🌐 サーバー配置時の注意

Windowsサーバーにデプロイする場合：

1. **ビルド実行:**
   ```bash
   npm run build
   ```

2. **配置:**
   ```
   C:\Bitnami\wordpress\apps\wordpress\htdocs\sdgs-presentation\
   ├── index.html
   ├── assets/
   └── bike-video.mp4  ← 動画もコピー
   ```

3. **distフォルダの中身を全てコピー**
   - 動画ファイルも含めて全てコピーしてください

---

## ❓ トラブルシューティング

### **Q1: 動画が表示されない**

**A:** 以下を確認してください：
- `public` フォルダが正しく作成されているか
- 動画ファイルのパスが `/bike-video.mp4` になっているか（最初のスラッシュ `/` を忘れずに）
- ビルド後、`dist` フォルダに動画がコピーされているか

### **Q2: 動画が自動再生されない**

**A:** 以下を確認してください：
- `muted={true}` になっているか（ブラウザは音声なしの動画のみ自動再生を許可）
- `autoPlay` と `playsInline` 属性設定されているか

### **Q3: 動画のサイズが大きすぎる**

**A:** 以下の方法で圧縮してください：
- オンラインツール: [HandBrake](https://handbrake.fr/) や [CloudConvert](https://cloudconvert.com/)
- 推奨設定: H.264コーデック、解像度1280x720、ビットレート2-3Mbps

### **Q4: 複数の動画形式を用意したい**

**A:** 以下のように複数のsourceタグを追加：
```tsx
<video ...>
  <source src="/bike-video.webm" type="video/webm" />
  <source src="/bike-video.mp4" type="video/mp4" />
  <source src="/bike-video.ogv" type="video/ogg" />
</video>
```

---

## 📍 現在の動画の表示位置

**スライド番号:** 3枚目  
**セクション名:** SolutionSection（解決策）  
**表示位置:** 右側（テキストの右隣）  
**サイズ:** 幅100%、高さ500px  
**エフェクト:** 
- ホバー時に拡大（scale: 1.05）
- 「⚡ 発電中！」のバッジが点滅
- 下にギアアイコンが回転

---

## 🎨 さらなるカスタマイズ

### **動画の高さを変更:**

```tsx
className="w-full h-[500px] object-cover"
              ↓
className="w-full h-[600px] object-cover"
```

### **角丸を変更:**

`SolutionSection.tsx` の94行目付近：
```tsx
className="relative rounded-3xl overflow-hidden shadow-2xl"
              ↓
className="relative rounded-xl overflow-hidden shadow-2xl"
```

### **動画の切り抜き方を変更:**

```tsx
object-cover  // 領域を埋める（一部切り取られる）
object-contain  // 全体を表示（余白ができる）
object-fill  // 引き伸ばして埋める（比率が変わる）
```

---

## ✅ 完了チェックリスト

- [ ] `public` フォルダを作成した
- [ ] 動画ファイルを `public` フォルダに配置した
- [ ] `SolutionSection.tsx` のsrc属性を変更した
- [ ] `npm run build` でビルドした
- [ ] ローカルで動作確認した（`npm run dev`）
- [ ] Windowsサーバーに配置した
- [ ] ブラウザで動画が再生されることを確認した

---

## 📞 サポート

何か問題があれば、以下の情報を添えて質問してください：

1. エラーメッセージ（あれば）
2. ブラウザのコンソールログ（F12キー → Console）
3. 動画ファイルの形式とサイズ
4. 配置したファイルパス

---

**作成日:** 2026年2月17日  
**対象ファイル:** `/src/app/components/SolutionSection.tsx`  
**スライド番号:** 3枚目（解決策セクション）