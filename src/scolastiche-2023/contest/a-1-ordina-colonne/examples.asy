import fontsize;

size(16cm);
defaultpen(fontsize(20));

void draw_table(int n, int k, int[][] table, int offset) {
    for (int i = 0; i <= n; ++i)
        draw((i+offset,0)--(i+offset,k));

    for (int i = 0; i <= k; ++i)
        draw((offset,i)--(n+offset,i));

    for (int i = 0; i < k; ++i) {
        for (int j = 0; j < n; ++j) {
            label("$" + string(table[i][j]) + "$", (j+offset,k-i) + (0.5,-0.5));
        }
    }
}


draw_table(Nes, Kes, example, 0);
draw_table(Nes, Kes, example_res, 5);
