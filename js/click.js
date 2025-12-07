// クリックしたらアニメーションが実行されるようにする　マウスの座標を使用できるようにfunction(e)を使う
document.addEventListener('click', function(e) {
    // 最大10個出るように定数で指定する
  const maxHearts = 10;
// Math.floorで少数切り捨て0～9　Math.randomは0～1のランダムな少数→Math.random() * maxHearts → 0〜9.999… の小数を生成する　1～10の数字にしたいので最後に+1
  const number = Math.floor(Math.random() * maxHearts) + 1;

//   forで繰り返しの処理をする
  for (let i = 0; i < number; i++) {
    // div要素を作成して、CSSを適用させる
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤";

    // クリックした位置の情報を取得　Xは横でYは縦
    const baseX = e.clientX;
    const baseY = e.clientY;

    // -50～50px間でランダムに❤をズレさせる
    const offsetX = Math.random() * 100 - 50;
    const offsetY = Math.random() * 100 - 50;

    // ハートの画面上の位置を設定　offsetは↑で設定したランダムな位置
    heart.style.left = baseX + offsetX + "px";
    heart.style.top = baseY + offsetY + "px";

    // ❤サイズを5〜30pxでランダムに
    heart.style.fontSize = (Math.random() * 30 + 5) + "px";

    // HTMLのbodyにheartを組み込んで、❤を画面に表示させる
    document.body.appendChild(heart);

    // setTimeoutで5秒後（5000）に消えるように設定する
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
});