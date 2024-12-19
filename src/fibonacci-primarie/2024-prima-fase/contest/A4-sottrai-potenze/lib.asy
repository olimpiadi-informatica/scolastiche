access "../../../../asy_library/pictures/picture_frame.asy" as picture_frame;
access "../../../../asy_library/pictures/bunny_polychrome.asy" as bunny_polychrome;
picture lavagna(string s) {
  picture pic;
  add(pic, picture_frame.drawing());
  filldraw(pic, (-1.8,-1.5)--(1.8,-1.5)--(1.8,1.4)--(-1.8,1.4)--cycle, gray(0.15), white);
  label(pic, scale(6)*s, (0,0), white);
  add(pic, shift((-2.3, -1))*reflect((0,1),(0,-1))*bunny_polychrome.drawing(0.5, bunny_polychrome.tiptap_col));
  add(pic, shift((2.3, -1))*bunny_polychrome.drawing(0.5, bunny_polychrome.allie_col));
  return pic;
}
