access "../../../../asy_library/pictures/landfill.asy" as landfill;
access "../../../../asy_library/pictures/skyscraper.asy" as skyscraper;
access "../../../../asy_library/structures/layout.asy" as layout;
access "../../../../asy_library/structures/utils.asy" as utils;

unravel layout;
unravel utils;
unitsize(2cm);

pen[] colors = {black, blue, green, red, orange, purple, magenta, heavycyan};

picture isolato(int x, real padding) {
    picture pic;
    if (x <= 0) pic = skyscraper.drawing(colors[rand()%colors.length], 0.5, 0.7+1.5*unitrand());
    else {
        pic = xscale(1.2)*landfill.drawing(orange*0.8+white*0.8, 1);
        fitlabel(pic, scale(0.06)*('\\texttt{'+string(x)+'}'), (0,0.25), gray, black+1, FillDraw);
    }
    if (padding < 0) {
        unitsize(pic, 2cm);
        pair mn = min(pic, true), mx = max(pic, true);
        draw(pic, (mn.x,mn.y+0.5*padding), invisible);
    }
    return pic;
}

picture city(int[][] v, real padding = 0.1) {
    element[][] matrix;
    for (int i=0; i<v.length; ++i) matrix[i] = new element[];
    for (int i=0; i<v.length; ++i)
        for (int j=0; j<v[i].length; ++j)
            matrix[i][j] = e(isolato(v[i][j], padding), align=(0.5, 0));

    return grid(padding, true, true, black+1, matrix).drawing();
}

void solution(int[][] v, real padding = 0.1) {
    picture pic = city(v, padding);
    real h = max(pic, true).y / v.length;
    real w = max(pic, true).x / v[0].length;
    bool[][] puzza = array(v.length, array(v[0].length, false));
    for (int y = 0; y < v.length; ++y) for (int x = 0; x < v[0].length; ++x) if (v[y][x] > 0)
        for (int dy = -v[y][x]; dy <= v[y][x]; ++dy) for (int dx = -v[y][x]+abs(dy); dx <= v[y][x]-abs(dy); ++dx)
            if (y+dy >= 0 && y+dy < v.length && x+dx >= 0 && x+dx < v[0].length)
                puzza[y+dy][x+dx] = true;
    write(puzza);
    for (int y = 0; y < v.length; ++y) for (int x = 0; x < v[0].length; ++x) if (puzza[v.length-y-1][x])
        fill(rect((w*x,y*h), (w*(x+1),(y+1)*h)), palered);
    add(pic);
}
