pair SIZE = (8, 6);
real NUM_SIZE = 1.5;
pen BOX_BORDER = black + 2;
pen ELEMENT_FILL = heavyblue;
pen ELEMENT_BORDER = black + 2;

pair label_size(Label l) {
    picture pic;
    unitsize(pic, 1cm);
    label(pic, l, (0,0));
    return max(pic,true) - min(pic,true);
}

path rect(pair min, pair max) {
    return min -- (min.x, max.y) -- max -- (max.x, min.y) -- cycle;
}

picture drawing(Label title, Label[] lines, real[] data) {
    picture pic;
    unitsize(pic, 1cm);
    real ls = label_size(title).y*1.1;
    draw(pic, rect((0,0), SIZE), BOX_BORDER);
    label(pic, title, (SIZE.x/2, SIZE.y - ls/2));
    real offs = SIZE.x / (3*lines.length + 1);
    real maxy = 0;
    for (real y : data)
        maxy = max(maxy, y);
    for (int i=0; i<lines.length; ++i) {
        real y = (SIZE.y-ls)*data[i]/maxy;
        filldraw(pic, rect((offs*(3*i+1), 0), (offs*(3*i+3), y)), ELEMENT_FILL, ELEMENT_BORDER);
        label(pic, scale(NUM_SIZE)*string(data[i]), (offs*(3*i+2), data[i] > 0.5*maxy ? y/2 : y + ls/2), data[i] > 0.5*maxy ? white: black);
        label(pic, lines[i], (offs*(3*i+2), -ls/2));
    }
    return pic;
}
