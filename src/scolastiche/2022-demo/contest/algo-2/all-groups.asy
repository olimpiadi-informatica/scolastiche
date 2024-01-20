import fontsize;

unitsize(40);
defaultpen(fontsize(27pt));
defaultpen(linewidth(1.3));

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

void color_cell(int x, int y, pen c) {
    fill(shift(x+0.1,y+0.1) * scale(0.8) * unitsquare, c*0.3+white*0.7);
}

void color_cc(int n, int m, int x, int y, pen c) {
    int a = x;
    int b = y;
    do {
        color_cell(a, m - 1 - b, c);
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

color_cc(n, m, 0, 0, yellow);
color_cc(n, m, 1, 0, red);
color_cc(n, m, 2, 0, green);
color_cc(n, m, 4, 0, gray);
color_cc(n, m, 5, 0, blue);
color_cc(n, m, 3, 1, cyan*0.7+black*0.3);
color_cc(n, m, 4, 1, orange);
color_cc(n, m, 6, 2, purple*0.7+red*0.3);

write_letters(n, m, letters);
