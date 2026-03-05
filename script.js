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

// 新しい目標グループを作成　オブジェクト
function createGoalCard(text) {
  // 新しいCardを作る、入力された値のテキスト要素を作成
  const newCard = document.createElement("div");
  newCard.className = "goalCard";
  
  const newInput = document.createElement("input");
  newInput.type = "checkbox";

  const newSpan = document.createElement("span");
  newSpan.className = "goalTitle";
  newSpan.textContent = text;

  const newButton = document.createElement("button");
  newButton.className = "deleteBtn";
  newButton.textContent = "×";

  // <div class="goalCard">
  //   <input type="checkbox" />
  //   <span class="goalTitle">サンプル目標</span>
  //   <button class="deleteBtn">×</button>
  // </div>

  // 親要素の末尾に追加
  newCard.appendChild(newInput);
  newCard.appendChild(newSpan);
  newCard.appendChild(newButton);

  // 完成したカードを返す
  return newCard;
};

// クリックを検出
addButton.addEventListener("click", () => {
  // 空だったら追加しない
  if (input.value === "") {
    console.log("空だよ");
    return;
  } else {
    // クリックされたら実行
    console.log(input.value);
    // 新しい目標カード作成関数を呼び出し
    const addCard = createGoalCard(input.value);
    goalList.appendChild(addCard);

    // 追加したら入力欄を空にする
    input.value = "";
  }
});

