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

int n = 3;
int m = 2;

string[][] letters = {
    {"c", "a", "c"},
    {"b", "a", "c"}
};

draw_table(n, m);
write_letters(n, m, letters);
