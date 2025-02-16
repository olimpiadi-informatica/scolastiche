access "../../../../../asy_library/pictures/pan.asy" as pan;
access "../../../../../asy_library/pictures/stove.asy" as stove;

void drawing(picture contenuto) {
    unitsize(1cm);
    picture p;
    unitsize(p, 1cm);
    add(p, contenuto);
    add(shift(0,-3)*stove.drawing());
    add(pan.drawing(p));
    draw((-9.6,0) -- (6,0), invisible);
}