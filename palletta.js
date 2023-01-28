const colorList = ['#FFD700',
             	'#FF8C00',
              '	#FF4500',
              '#FFA500'
             	];

class Palletta {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    scale() {
      this.d = sin(angle) * diameter;
    }
  
    move() {
      this.x = this.x + sin(angle2) * 10;
      this.y = this.y + cos(angle2) * 10;
    }
  
    show() {
      let colorHex = random(colorList);
      stroke(color(colorHex)); //colore palletta
      strokeWeight(2);
      noFill();
      ellipse(this.x, this.y, this.d, this.d);
    }
  
    border() {
      if (this.x > windowWidth) {
        this.x = 0;
      } else {
        this.x = this.x;
      }
      if (this.x < 0) {
        this.x = windowWidth;
      } else {
        this.x = this.x;
      }
      if (this.y > windowHeight) {
        this.y = 0;
      } else {
        this.y = this.y;
      }
      if (this.y < 0) {
        this.y = windowHeight;
      } else {
        this.y = this.y;
      }
    }
  }