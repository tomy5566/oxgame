# 井字遊戲 OOXX 小遊戲 Readme
井字遊戲 OOXX 小遊戲 

## 主要介紹
使用JavaScrip建立圈叉小遊戲，練習程式邏邏輯與CSS排版運用。

## DEMO link
[https://tomy5566.github.io/oxgame/](https://tomy5566.github.io/oxgame/)

## 使用技術
- HTML
- CSS: [::after](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after)
- JavaScript

## 使用技術介紹
1. 使用[ HTML 的 Table](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/table)，搭配CSS建立起井字遊戲的"井"背景樣式。
2. 使用[data-*](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Global_attributes/data-*)設計data-index將每個井字的空格編號，以利後續辨識欄位。
3. 利用CSS偽元素 [::after](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after)去實現O與X在畫面上的呈現。
4. 使用[Array.filter()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)與[Array.every](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/every)判斷填入的空格狀態，以利得知勝負結果。

## 功能介紹
- 進入畫面可以看到經典遊戲OOXX井字介面。
- 兩位玩家設計，可自動與電腦對戰，玩家扮演紅色圈的先攻角色。
- 遊戲結束後會顯示輸贏或是平手結局，也可利用下方按鈕重新開始遊戲。

## 介面展示

![image](https://github.com/tomy5566/oxgame/blob/main/OXgmae_demo.gif)


## 參考資料
ALPHA Camp 網路課程資源
