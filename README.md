# 打包囉網站

## 描述

此應用程式是一個簡單的 React 應用程式，用於管理旅行打包清單。使用者可以新增物品、刪除物品、標記物品是否已打包，以及根據不同的條件來排序清單。

## 功能特點

- **新增物品**：使用者可以輕鬆新增物品到打包清單，包括設定物品數量，並在新增後重設輸入欄位。
- **刪除物品**：每個物品旁邊都有刪除按鈕，允許使用者移除不需要的物品。
- **標記已打包**：可以點選勾選框來標記物品是否已打包，已打包的物品會顯示刪除線，方便使用者快速辨識。
- **排序清單**：
  1. 預設排序：按照物品加入的順序排列。
  2. 筆畫排序：依據物品名稱的筆畫少至多進行排序。
  3. 打包狀態排序：依據物品是否已打包進行排序，未打包的物品會先顯示。
- **統計數據**：提供清單的統計資料，包括總物品數、已打包數量及打包進度百分比，幫助使用者快速了解打包狀態。

## 安裝指南

1. 克隆此儲存庫至本地：
   ```bash
   git clone https://github.com/hsin501/Travel_list.git
   ```
2. 進入專案目錄並安裝依賴：
   ```bash
   npm install
   ```
3. 啟動開發伺服器：
   ```bash
   npm start
   ```

## 使用說明

```bash
# 使用說明

1. **新增物品**：
   - 輸入物品名稱與數量，點擊 **Add** 加入打包清單。

2. **標記已打包**：
   - 勾選物品前的框框，標記為已打包。

3. **刪除物品**：
   - 點擊物品旁的 **❌** 按鈕，刪除該物品。

4. **清空清單**：
   - 點擊 **清除清單** 按鈕，清空所有項目（系統會先確認操作）。

5. **排序清單**：
   - 使用排序選單，可以按新增順序、名稱筆畫、打包狀態進行排序。

6. **查看統計**：
   - 底部會顯示總物品數、已打包數與打包進度百分比。
```

## 檔案結構

```bash
.

├── public/               # 公共資源 (靜態資源，如圖片等)
├── src/                  # 源代碼目錄
│   ├── index.css         # 全局樣式
│   ├── index.js          # 入口文件
│   └── components/       # React 組件目錄
│       ├── App.js          # 主要應用程式組件
│       ├── Form.js         # 表單組件
│       ├── PackingList.js  # 打包清單相關組件
│       ├── Stats.js        # 統計資訊相關組件
│       └── Item.js         # 單個物品相關組件
└── package.json          # npm 專案設定檔

```

## 組件

`App`：主要應用程式組件，管理應用狀態並渲染其他組件。

`Form`：表單組件，負責新增新物品到清單。

`PackingList`：顯示打包清單，並提供排序和刪除功能。

`Item`：顯示單一物品，並可進行刪除及標記打包操作。

`Stats`：顯示清單中的統計數據，包括物品總數、已打包的數量以及打包的進度百分比。

## 使用技術

- React
- JavaScript
- CSS
- HTML
