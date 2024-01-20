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

void highlight_cell(int x, int y, int k) {
    draw(shift(x+0.2, y+0.2) * scale(0.6) * unitsquare, red + linewidth(1.7));
    filldraw(shift(x+0.2, y+0.8) * scale(0.15) * unitcircle, white, red + linewidth(1.5));
    label(scale(0.45) * ("$\mathbf{" + string(k) + "}$"), (x+0.2,y+0.8), red);
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

highlight_cell(1, 2, 1);
highlight_cell(0, 1, 2);
highlight_cell(2, 1, 3);
highlight_cell(3, 2, 4);
