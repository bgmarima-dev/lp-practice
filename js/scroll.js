// NEWSのところにスクロールすると画像が出現する

const targets = document.querySelectorAll('.fade-in');

// コールバック関数
const observer = new IntersectionObserver(entries => {
    // entries監視している要素の「変化の情報」
    //　entries.forEach() で監視している各要素をチェック
    entries.forEach(entry => {
        // 真偽値の設定
        if (entry.isIntersecting) {
            entry.target.classList.add('show');


            // 4秒後に非表示にする
            setTimeout(() => {
                entry.target.classList.remove('show');
            }, 4000); // 4000ms = 4秒
        }
        // setTimeoutをいれるのでアニメーション削除のコードはいらない
        //  else {
        //     // false=画面外になったらクラスを削除（再度アニメーションさせるため）
        //   entry.target.classList.remove('show');
        // }

    });
}, { threshold: 0.5 }); // 画面に50%見えたら出現

// forEach() ですべてのtarget要素を監視開始
targets.forEach(target => observer.observe(target));