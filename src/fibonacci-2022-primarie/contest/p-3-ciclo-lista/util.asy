unitsize(1cm);
settings.tex = "pdflatex";
defaultpen(fontsize(30pt));
defaultpen(2);

real GRID_SIZE = 2;
real GRID_SPACE = 0.5;

path rect(pair p, pair q) {
    return p -- (p.x,q.y) -- q -- (q.x,p.y) -- cycle;
}

picture griglia(int n) {
    picture pic;
    draw(pic, (0,0) -- (n * GRID_SIZE, 0));
    draw(pic, (0,GRID_SIZE) -- (n * GRID_SIZE, GRID_SIZE));
    for(int i = 0; i <= n; ++i) {
        draw(pic, (i * GRID_SIZE, 0) -- (i * GRID_SIZE, GRID_SIZE));
    }
    return pic;
}

void lista(int[][] vals) {
    int m = vals.length;
    int n = vals[0].length;

    label("Posizione", (n/2 * GRID_SIZE, GRID_SIZE * 2.1));

    for(int j = 0; j < n; ++j) {
        label(string(j), (GRID_SIZE * (j + 0.5), GRID_SIZE * 1.5));
    }

    for(int i = 0; i < m; ++i) {
        real dy = -i * GRID_SIZE - i * GRID_SPACE;

        label(string(i+1) + ". a = ", (-1.5, dy + GRID_SIZE / 2));

        add(shift((0,dy)) * griglia(n));

        for(int j = 0; j < n; ++j) {
            label(string(vals[i][j]), (GRID_SIZE * (j + 0.5), dy + GRID_SIZE / 2));
        }
    }
}
