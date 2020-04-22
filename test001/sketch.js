let vecLocation = []; //円の中心の位置ベクトル
let vecVelocity = []; //円の速度ベクトル
let diameter = []; //円の直径
let col = []; //円の色
let num = 100;

function setup() {
    createCanvas(windowWidth, windowHeight); //画面を生成
    frameRate(60); //フレームレート
    for (let i = 0; i < num; i++) {
        vecLocation[i] = createVector(width / 2, height / 2);
        vecVelocity[i] = createVector(random(-10, 10), random(-10, 10));
        diameter[i] = random(5, 80);
        col[i] = color(random(255), random(255), random(255), 190);
    }
}

function draw() {
    background(0); //背景を描画
    noStroke(); //枠線なし

    for (let i = 0; i < num; i++) {
        fill(col[i]); //塗りの色
        vecLocation[i].add(vecVelocity[i]); //円の座標を更新
        ellipse(vecLocation[i].x, vecLocation[i].y, diameter[i], diameter[i]); //指定した位置に円を描画

        if (vecLocation[i].x < 0 || vecLocation[i].x > width) { //もし画面の左端、または右端に到達したら
            vecVelocity[i].x = vecVelocity[i].x * -1; //X方向のスピードを反転
        }
        if (vecLocation[i].y < 0 || vecLocation[i].y > height) { //もし画面の下端、または上端に到達したら
            vecVelocity[i].y = vecVelocity[i].y * -1; //Y方向のスピードを反転
        }
    }
}