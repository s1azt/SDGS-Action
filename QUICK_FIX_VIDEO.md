# 🚨 クイックフィックス: bike-video.mp4 が表示されない問題

## 📋 **3ステップで解決！**

---

## ステップ1️⃣: 動画を配置（ローカルPC）

**やること:**
`bike-video.mp4` ファイルを `public` フォルダに入れる

**場所:**
```
プロジェクトフォルダ/
├── public/              ← このフォルダを開く
│   └── bike-video.mp4   ← ここに動画を配置
├── src/
└── package.json
```

**注意:**
- ファイル名は正確に `bike-video.mp4`（小文字）
- `src` フォルダではなく `public` フォルダ！

---

## ステップ2️⃣: ビルド（ローカルPC）

**やること:**
コマンドプロンプトまたはターミナルで実行

```bash
npm run build
```

**確認:**
`dist` フォルダに `bike-video.mp4` が作成されたか確認

**Windows:**
```cmd
dir dist\bike-video.mp4
```

**Mac/Linux:**
```bash
ls -lh dist/bike-video.mp4
```

✅ ファイルが表示されればOK！  
❌ エラーが出たら、ステップ1に戻って動画を確認

---

## ステップ3️⃣: アップロード（サーバーへ）

**やること:**
`dist` フォルダの**中身すべて**をサーバーにアップロード

**アップロード先:**
```
http://192.168.8.205/wordpress/sdgs-presentation/
```

**アップロードするもの:**
```
dist/
├── index.html           ← これも
├── assets/              ← これも
│   ├── index-abc123.js  ← これも
│   └── index-xyz789.css ← これも
└── bike-video.mp4       ← これも！全部！
```

**重要:** 
- `dist` フォルダの中身を**全部**選択してアップロード！
- 動画ファイルは index.html と**同じ階層**に配置すること（相対パス `./bike-video.mp4` を使用しているため）

---

## ✅ **動作確認**

### **確認方法1: 直接アクセス**

ブラウザで以下のURLを開く：
```
http://192.168.8.205/wordpress/sdgs-presentation/bike-video.mp4
```

✅ 動画が再生される → **成功！**  
❌ 404エラー → もう一度ステップ3を確認

---

### **確認方法2: プレゼンテーションで確認**

1. プレゼンテーションを開く
   ```
   http://192.168.8.205/wordpress/sdgs-presentation/
   ```

2. スライド2（ソリューション）まで進む

3. 動画が再生されていればOK！

---

## 🔍 **まだ表示されない場合**

### **チェック1: publicフォルダに動画があるか？**

```bash
# Windows
dir public\bike-video.mp4

# Mac/Linux
ls -lh public/bike-video.mp4
```

❌ エラーが出る → 動画がない！もう一度配置してください

---

### **チェック2: distフォルダに動画がコピーされたか？**

```bash
# Windows
dir dist\bike-video.mp4

# Mac/Linux
ls -lh dist/bike-video.mp4
```

❌ エラーが出る → もう一度ビルドしてください（`npm run build`）

---

### **チェック3: サーバーに動画がアップロードされたか？**

ブラウザで開く：
```
http://192.168.8.205/wordpress/sdgs-presentation/bike-video.mp4
```

❌ 404エラー → distフォルダの中身を全部アップロードし直してください

---

## 📂 **完全なチェックリスト**

### **ローカルPC**
- [ ] `public/bike-video.mp4` が存在する
- [ ] ファイル名が正確（小文字、ハイフン）
- [ ] `npm run build` を実行した
- [ ] `dist/bike-video.mp4` が生成された

### **サーバー**
- [ ] `dist` フォルダの**全ファイル**をアップロードした
- [ ] `bike-video.mp4` もアップロードされた
- [ ] ブラウザで http://192.168.8.205/wordpress/sdgs-presentation/bike-video.mp4 が開ける
- [ ] プレゼンテーションで動画が再生される

---

## 💡 **動画ファイルがない場合**

### **代替案: 動画なしで進める**

動画がなくてもプレゼンテーションは動作します。
動画部分が空白になるだけで、他のスライドは正常に表示されます。

**プレゼン当日までに動画を用意できない場合:**
1. 動画なしでプレゼンテーション
2. 口頭で「エアロバイクで発電する様子」を説明
3. 後日、動画を追加

---

## 🎯 **まとめ**

```
1. public/bike-video.mp4 に動画を配置
   ↓
2. npm run build でビルド
   ↓
3. dist/* を全部サーバーにアップロード
   ↓
4. 完了！
```

---

**詳細な手順:** `/VIDEO_DEPLOYMENT_GUIDE.md` を参照  
**作成日:** 2026年2月18日  
**SDGsプロジェクトチーム**