var star_on = false;
var dust_on = false;
var halfmoon_on = false;
var fullmoon_on = true;
var cloud_on = false;
var sun = 0;

function setup() {
  createCanvas(600, 600);
  // background
  reset();
}

function draw() {
  noStroke();
  menu_bar();

  star_draw();
  dust_draw();
}

function star(x, y) {
  var angle = TWO_PI / 5;
  var halfAngle = angle / 2.0;
  var radius1 = 6;
  var radius2 = 14;
  fill(255, 254, 226);
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function reset() {
  noStroke();
  background(9, 63, 114);
  fill(45, 111, 173);
  rect(0, 500, width, 60);
  fill(214, 235, 255);
  rect(0, 560, width, 40);
}

function menu_bar() {
  // menu bar
  fill(9, 63, 114);
  rect(540, 0, 60, 500);
  star_menu();
  dust_menu();
  moon_menu();
  cloud_menu();
  sun_menu();
}

function star_menu() {
  // star
  star(570, 150);
  // when mouse on star
  if (mouseX > 555 && mouseX < 585 && mouseY > 135 && mouseY < 165) {
    fill(9, 63, 114);
    rect(550, 130, 40, 40);
    push();
    translate(570, 150);
    rotate(frameCount / 50);
    star(0, 0);
    pop();
    // when clicked on the star
    if (mouseIsPressed == true) {
      dust_on = false;
      star_on = true;
    }
  }
}

function star_draw() {
  // draw a star
  if (star_on && mouseIsPressed && (mouseX < 540))
    star(mouseX, mouseY);
}

function dust_menu() {
  // dust
  fill(255, 254, 226);
  ellipse(570, 100, 5, 5);
  // when mouse on dust
  if (mouseX > 565 && mouseX < 575 && mouseY > 95 && mouseY < 105) {
    ellipse(570, 100, 10, 10);
    // when clicked on dust
    if (mouseIsPressed == true) {
      star_on = false;
      dust_on = true;
    }
  }
}

function dust_draw() {
  // draw a dust
  if (dust_on && mouseIsPressed && (mouseX < 540)) {
    fill(255, 254, 226);
    ellipse(mouseX, mouseY, 5, 5);
  }
}

function moon_menu() {
  // moon
  fill(255, 254, 226);
  ellipse(570, 210, 25, 25);
  fill(9, 63, 114);
  ellipse(565, 205, 20, 20);
  // when mouse on moon
  if (mouseX > 545  && mouseX < 595 && mouseY > 185 && mouseY < 235) {
    fill(255, 254, 226);
    ellipse(570, 210, 30, 30);
    fill(9, 63, 114);
    ellipse(565, 205, 24, 24);
    // when clicked on the moon
    /*
    if (mouseIsPressed == true) {
      if (fullmoon_on) {
        fill(255, 254, 226);
        ellipse(460, 90, 140, 140);
        fullmoon_on = false;
        halfmoon_on = true;
      } else if (halfmoon_on) {
        fill(255, 254, 226);
        ellipse(460, 90, 140, 140);
        fill(9, 63, 114);
        ellipse(440, 70, 100, 100);
        fullmoon_on = false;
        halfmoon_on = false;
      } else {
        moon_eater();
        fullmoon_on = true;
        halfmoon_on = false;
      }
    }*/
  }
}

/*function moon_draw() {
  // display the moon
  if (fullmoon_on) {
    fill(255, 254, 226);
    ellipse(460, 90, 140, 140);
    fullmoon_on = false;
    halfmoon_on = true;
  } else if (halfmoon_on) {
    fill(255, 254, 226);
    ellipse(460, 90, 140, 140);
    fill(9, 63, 114);
    ellipse(440, 70, 100, 100);
    halfmoon_on = false;
    nomoon_on = true;
  } else
    moon_eater();
}*/

function moon_eater() {
  fill(9, 63, 114);
  ellipse(460, 90, 141, 141);
}

function cloud_menu() {
  // cloud
  fill(255, 254, 226);
  ellipse(560, 270, 12, 12);
  ellipse(567, 262, 12, 12);
  ellipse(574, 265, 12, 12);
  ellipse(580, 270, 12, 12);
  rect(560, 265, 20, 11);

  // when mouse on cloud
  if (mouseX > 554 && mouseX < 586 && mouseY > 256 && mouseY < 272) {
    ellipse(558, 270, 16, 16);
    ellipse(566, 260, 16, 16);
    ellipse(575, 263, 16, 16);
    ellipse(582, 270, 16, 16);
    rect(560, 265, 20, 13);
    // when clicked on cloud
    /*
    if (mouseIsPressed == true) {
      reset();
      if (cloud_on) {
        cloud_cleanup();
        cloud_on = false;
      } else {
        cloud_draw();
        cloud_on = true;
      }
      star_menu();
      dust_menu();
      moon_menu();
    }*/
  }
}

function cloud_draw() {
  fill(144);
  ellipse(40, 140, 100, 100);
  ellipse(90, 80, 100, 100);
  ellipse(142, 110, 100, 100);
  ellipse(200, 140, 100, 100);
  rect(40, 120, 160, 70);

  ellipse(300, 400, 100, 100);
  ellipse(350, 340, 100, 100);
  ellipse(402, 370, 100, 100);
  ellipse(460, 400, 100, 100);
  rect(300, 380, 160, 70);

  fill(209);
  ellipse(130, 210, 100, 100);
  ellipse(180, 150, 100, 100);
  ellipse(232, 180, 100, 100);
  ellipse(290, 210, 100, 100);
  rect(130, 190, 160, 70);

  ellipse(400, 370, 100, 100);
  ellipse(450, 310, 100, 100);
  ellipse(502, 340, 100, 100);
  ellipse(560, 370, 100, 100);
  rect(400, 350, 160, 70);

  // cover of the menu bar
  fill(9, 63, 114);
  rect(540, 300, 60, 120);
}

function cloud_cleanup() {

  fill(9, 63, 114);
  ellipse(40, 140, 100, 100);
  ellipse(90, 80, 100, 100);
  ellipse(142, 110, 100, 100);
  ellipse(200, 140, 100, 100);
  rect(40, 120, 160, 70);

  ellipse(300, 400, 100, 100);
  ellipse(350, 340, 100, 100);
  ellipse(402, 370, 100, 100);
  ellipse(460, 400, 100, 100);
  rect(300, 380, 160, 70);

  ellipse(130, 210, 100, 100);
  ellipse(180, 150, 100, 100);
  ellipse(232, 180, 100, 100);
  ellipse(290, 210, 100, 100);
  rect(130, 190, 160, 70);

  ellipse(400, 370, 100, 100);
  ellipse(450, 310, 100, 100);
  ellipse(502, 340, 100, 100);
  ellipse(560, 370, 100, 100);
  rect(400, 350, 160, 70);
}

function sun_menu() {
  fill(255, 254, 226);
  ellipse(573, 450, 14, 14);
  if (mouseX > 564 && mouseX < 582 && mouseY > 441 && mouseY < 459) {
    rect(572, 430, 2, 10);
    rect(572, 460, 2, 10);
    rect(553, 449, 10, 2);
    rect(583, 449, 10, 2);

    push();
    translate(573, 450);
    rotate(QUARTER_PI);
    rect(-1, -20, 2, 10);
    rect(-1, 10, 2, 10);
    rect(-20, -1, 10, 2);
    rect(10, -1, 10, 2);
    pop();

    if (mouseIsPressed == true)
      sunrise();
  }

}

function sunrise() {
  noStroke();
  fill(214, 235, 255);
  rect(0, 600 - sun, 540, 40);
  if (sun < 600)
    sun += 10;
  else {
    sun = 0;
    reset();
  }
}

function mousePressed() {
  // moon
  if (mouseX > 545  && mouseX < 595 && mouseY > 185 && mouseY < 235) {
    if (fullmoon_on) {
      fill(255, 254, 226);
      ellipse(460, 90, 140, 140);
      fullmoon_on = false;
      halfmoon_on = true;
    } else if (halfmoon_on) {
      fill(255, 254, 226);
      ellipse(460, 90, 140, 140);
      fill(9, 63, 114);
      ellipse(440, 70, 100, 100);
      fullmoon_on = false;
      halfmoon_on = false;
    } else {
      moon_eater();
      fullmoon_on = true;
      halfmoon_on = false;
    }
  }

  // cloud
  if (mouseX > 554 && mouseX < 586 && mouseY > 256 && mouseY < 272) {
    reset();
    if (cloud_on) {
      cloud_cleanup();
      cloud_on = false;
    } else {
      cloud_draw();
      cloud_on = true;
    }
    star_menu();
    dust_menu();
    moon_menu();
  }
}
