import fontsize;

size(12cm);
defaultpen(fontsize(20));

void draw_table(int n, int k, int[][] table) {
    for (int i = 0; i <= n; ++i)
        draw((i,0)--(i,k));

    for (int i = 0; i <= k; ++i)
        draw((0,i)--(n,i));

    for (int i = 0; i < k; ++i) {
        for (int j = 0; j < n; ++j) {
            label("$" + string(table[i][j]) + "$", (j,k-i) + (0.5,-0.5));
        }
    }
}


draw_table(n1, k1, table1);
