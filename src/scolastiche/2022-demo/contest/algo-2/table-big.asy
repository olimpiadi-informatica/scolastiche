import fontsize;

unitsize(35);
defaultpen(fontsize(20pt));

currentpen = currentpen + linewidth(1.3);

void draw_table(int n, int m) {
    for (int i = 0; i <= n; ++i) {
        draw((i,0)--(i,m));
    }
    for (int j = 0; j <= m; ++j) {
        draw((0,j)--(n,j));
    }
}

void write_letters(int n, int m, string[][] letters) {
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            label("\texttt{" + letters[j][i] + "}", (i,j) + (0.5,0.5));
        }
    }
}

void highlight_cell(int x, int y) {
    fill(circle((x,y) + (0.5,0.5), 0.2), red);
}

void highlight_cc(int n, int m, int x, int y) {
    int a = x;
    int b = y;
    do {
        highlight_cell(a, b);
        int d = b * n + a;
        a = d # m;
        b = d % m;
    } while (a != x || b != y);
}

int n = 7;
int m = 3;

string[][] letters = {
    {"e", "c", "f", "f", "f", "e", "a"},
    {"b", "d", "f", "f", "a", "e", "a"},
    {"b", "b", "f", "b", "a", "b", "e"}
};

draw_table(n, m);
write_letters(n, m, letters);
