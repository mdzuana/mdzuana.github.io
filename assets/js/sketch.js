
let dots = [];
const dotSize = 3;
class Dot {
    constructor(x, y) {
        this.radius = dist(x, y, width / 2, height / 2)
        this.angle = atan2(y - height / 2, x - width / 2);
        this.angularSpeed = random(0.0006, 0.0003)*(random() > 0.5 ? 1 : -1);
        this.isStatic = random() < 0.3;
        this.maxAlpha = random(50, 255);
        this.alpha = random(this.maxAlpha);
        this.fadeSpeed = random(0.5, 2);
        this.fadingIn = Math.random() > 0.5;
    }


    update() {
        if (this.fadingIn) {
            this.alpha += this.fadeSpeed;
            if (this.alpha >= this.maxAlpha) {
                this.alpha = this.maxAlpha;
                this.fadingIn = false;
            }
        } else {
            this.alpha -= this.fadeSpeed;
            if (this.alpha <= 0) {
                this.alpha = 0;
                this.fadingIn = true;
            }
        }
        if (!this.isStatic) {
            this.angle += this.angularSpeed;
        }
    }

    show() {
        const x = width / 2 + this.radius * cos(this.angle);
        const y = height / 2 + this.radius * sin(this.angle);

        noStroke();
        fill(225, 225, 255, this.alpha);
        ellipse(x, y, dotSize, dotSize);
    }
}

function setup() {
    const canvasContainer = select('#canvas-container');
    const cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent(canvasContainer);
    initializeDots();
}

function draw() {
    background(3, 6, 55);

    for (const dot of dots) {
        dot.update();
        dot.show();
    }
}

function initializeDots() {
    dots = []; // Kosongkan array yang lama

    // Tentukan jumlah titik berdasarkan area layar untuk menjaga kepadatan yang konsisten.
    // Anda bisa mengubah angka 8000 untuk menambah atau mengurangi kepadatan titik.
    let numDots = (width * height) / 40000;

    for (let i = 0; i < numDots; i++) {
        // Buat posisi x dan y secara acak di seluruh kanvas
        let x = random(width);
        let y = random(height);
        dots.push(new Dot(x, y));
    }
}

// Fungsi ini dipanggil setiap kali jendela browser diubah ukurannya.
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    // Membuat ulang semua titik agar sesuai dengan ukuran layar baru
    initializeDots();
}