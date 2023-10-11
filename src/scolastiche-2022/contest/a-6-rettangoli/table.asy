import fontsize;

size(10cm);
defaultpen(fontsize(15));

void draw_table(int n, int[][] table) {
    for (int i = 0; i <= n; ++i) {
        draw((i,0)--(i,n));
        draw((0,i)--(n,i));
    }
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j) {
            label("$" + string(table[i][j]) + "$", (j,n-i) + (0.5,-0.5));
        }
    }
}

void highlight_rectangle(int n, int x, int y, int z, int w) {
    y = n - y;
    w = n - w - 1;
    z += 1;
    filldraw((x,y)--(z,y)--(z,w)--(x,w)--cycle, gray*0.4+white*0.6, defaultpen+linewidth(1.4));
}

draw_table(n, table);