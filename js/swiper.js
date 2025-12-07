// スライダーの初期化
const swiper = new Swiper('.swiper', {
    // スライダーの設定

    // 画像が最後までいったときに最初に戻るようにする
    // true→有効にするという意味　これをつけないとループしない
    loop: true,
    // autoplayで自動的に画像を切り替える
    autoplay: {
        // 3秒ごとに画像を切り替える　1秒が1000ミリ秒なので3秒は3000と記述する
        delay: 3000,
    },
    // navigationは、前・次とクリックしたら画像が切り替わる設定
    // elはelementの略
    navigation: {
        nextEl: '.swiper-button-next', // 次ボタン
        prevEl: '.swiper-button-prev', // 前ボタン
    },
    // paginationは、下の〇で画像を切り替える
    pagination: {
        el: '.swiper-pagination',
        // true→有効にするという意味
        // 〇をクリックできるようにする
        clickable: true,
    },
});