/* eslint-disable no-param-reassign */

import P5 from 'p5';
import '../style.css';

const sketch = (p) => {
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;

  const x = canvasWidth / 2;
  const y = canvasHeight / 2;

  p.setup = function setup() {
    p.createCanvas(canvasWidth, canvasHeight);
  };

  p.draw = function draw() {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };
};

// eslint-disable-next-line no-new
new P5(sketch, window.document.getElementById('app'));
