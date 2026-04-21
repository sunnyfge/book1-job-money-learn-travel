# 《步步紮實》單頁網站

React + Vite + Tailwind CSS + Lucide-react 打造的個人品牌頁，包含：
- Hero 視覺與外部連結
- 寫作進度條（由 checkbox 動態計算）
- 章節 roadmap 與小節連結
- 新書核心價值行銷區塊

## Local 開發

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## 部署到 GitHub Pages

專案已內建 `.github/workflows/deploy-pages.yml`，只要推到 `main` 就會自動部署。

1. 建立 GitHub repo（例如：`book1-job-money-learn-travel`）
2. 在專案根目錄初始化並推送：

```bash
git init
git add .
git commit -m "Initial landing page for 步步紮實"
git branch -M main
git remote add origin <你的 GitHub repo URL>
git push -u origin main
```

3. 到 GitHub repo 設定：
   - `Settings` → `Pages` → `Build and deployment`
   - Source 選 `GitHub Actions`

第一次部署完成後，網站會出現在：
- `https://<你的 GitHub 帳號>.github.io/<repo 名稱>/`
