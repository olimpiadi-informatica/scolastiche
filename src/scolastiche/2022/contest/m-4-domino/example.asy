import domino;

picture link() {
    picture p;
    real top = -0.1, h = 0.2;
    draw(p, (0.5,top)--(0.5,top-h)--(1.5,top-h)--(1.5,top), lightgray + linewidth(3));
    return p;
}

add(domino(4, 3));

add(shift(2, 0) * domino(3, 2));
add(shift(4, 0) * domino(2, 5));
add(shift(6, 0) * domino(5, 1));

add(shift(8, 0) * domino(1, 6));

add(shift(1, 0) * link());
add(shift(3, 0) * link());
add(shift(5, 0) * link());
add(shift(7, 0) * link());
