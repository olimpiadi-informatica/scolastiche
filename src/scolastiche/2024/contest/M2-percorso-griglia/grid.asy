size(200);

void path(pair[] p) {
  for (int i = 0; i < p.length - 1; ++i) {
    draw(p[i]--p[i+1], black+4);
    draw(p[i]--p[i+1], Arrow(size=20));
  }
}

void grid() {
  int gridSize = 5;

  for (int i = 0; i <= gridSize; ++i) {
      draw((i, 0)--(i, gridSize));
      draw((0, i)--(gridSize, i));
  }

}


void singedot(pair p, string l) {
  pen pen1 = palered;
  pen pen2 = deepred;
  filldraw(circle(p, 0.4), pen1, pen2+3);  // Green dot
  write("\x4E");
  label(p, scale(2)*l);
}

void dots() {
  pair[] points = {(2, 0), (1, 4), (4, 2)};
  for (int i = 0; i < points.length; ++i)
    singedot(points[i], format("%c", ascii("A")+i));
}
