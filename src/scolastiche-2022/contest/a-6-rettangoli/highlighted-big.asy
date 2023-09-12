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

void border_rectangle(int n, int x, int y, int z, int w) {
    y = n - y;
    w = n - w - 1;
    z += 1;
    draw((x,y)--(z,y)--(z,w)--(x,w)--cycle, defaultpen+linewidth(1.4));
}

for (int i = 0; i < n; ++i) {
    for (int j = 0; j < n; ++j) {
        if (table[i][j] <= k + 1) {
            highlight_cell(n, j + 1, i + 1);
        }
    }
}

for (int x = 0; x < n; ++x) {
    for (int y = 0; y < n; ++y) {
        for (int z = x + 1; z <= n; ++z) {
            for (int w = y + 1; w <= n; ++w) {
                if ((z - x) * (w - y) != k) continue;
                bool okay = true;
                for (int i = x; i < z; ++i) {
                    for (int j = y; j < w; ++j) {
                        if (table[i][j] > k + 1) {
                            okay = false;
                        }
                    }
                }
                if (okay) {
                    border_rectangle(n, y, x, w - 1, z - 1);
                }
            }
        }
    }
}

draw_table(n, table);