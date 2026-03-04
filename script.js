// ボタンの要素を定義、取得
// const addButton = document.querySelector("button");

// // 定義したボタンのクリックを監視
// // addButton.addEventListener("click", () => {
// // // クリックされたら実行
// //     console.log("目標が追加されました。");
// // });

// const input = document.querySelector("input");

// // 追加ボタンを押すと、目標フォームの中身をコンソールに表示
// addButton.addEventListener("click", () => {
//   console.log(input.value);
// });


// 入力した値を画面に追加する
// 追加ボタンを定義
const addButton = document.querySelector("button");
// 入力フォームを定義
const input = document.querySelector("input");

// 挿入する親要素を定義
const goalList = document.querySelector(".goalList");
// 挿入する子要素を定義
const goalCard = document.querySelector(".goalCard");

// クリックを検出
addButton.addEventListener("click", () => {
// // クリックされたら実行
  console.log(input.value);
  // 新しいCardを作る、入力された値のテキスト要素を作成
  const newCard = document.createElement("div");
  newCard.className = "goalCard";
  
  const newInput = document.createElement("input");
  newInput.type = "checkbox";

  const newSpan = document.createElement("span");
  newSpan.className = "goalTitle";
  newSpan.textContent = input.value;

  const newButton = document.createElement("button");
  newButton.className = "deleteBtn";
  newButton.textContent = "×";

  // <div class="goalCard">
  //   <input type="checkbox" />
  //   <span class="goalTitle">サンプル目標</span>
  //   <button class="deleteBtn">×</button>
  // </div>

  // 親要素の末尾に追加
  goalList.appendChild(newCard);
  newCard.appendChild(newInput);
  newCard.appendChild(newSpan);
  newCard.appendChild(newButton);
});

