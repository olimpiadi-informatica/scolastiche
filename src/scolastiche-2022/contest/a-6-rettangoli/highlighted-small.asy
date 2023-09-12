import fontsize;
import variant;

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

void highlight_cell(int n, int x, int y) {
    fill(shift(x - 1, n - y) * unitsquare, gray*0.4+white*0.6);
}

for (int i = 0; i < n; ++i) {
    for (int j = 0; j < n; ++j) {
        if (table[i][j] <= 6) {
            highlight_cell(n, j + 1, i + 1);
        }
    }
}
draw_table(n, table);