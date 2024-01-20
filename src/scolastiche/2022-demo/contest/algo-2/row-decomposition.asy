import fontsize;

unitsize(35);
defaultpen(fontsize(20pt));

currentpen = currentpen + linewidth(1.3);

void draw_row(picture pic=currentpicture, int n, string[] letters, bool shadow=false) {
    if (shadow) {
        fill(pic, shift(-0.1,0.1) * ((0,0)--(n,0)--(n,1)--(0,1)--cycle), gray);
    }
    filldraw(pic, (0,0)--(n,0)--(n,1)--(0,1)--cycle, white);
    for (int i = 0; i <= n; ++i) {
        draw(pic, (i,0)--(i,1));
    }
    for (int i = 0; i < n; ++i) {
        label(pic, "\texttt{" + letters[i] + "}", (i,0) + (0.5,0.5));
    }
}

int n = 3;
int m = 2;

string[][] letters = {
    {"c", "a", "c"},
    {"b", "a", "c"}
};

picture row0, row1;
draw_row(row0, n, letters[1], true);
draw_row(row1, n, letters[0], true);
add(shift(0, 0.2) * row0);
add(shift(0.8, -0.6) * row1);

picture row_concat;
draw_row(row_concat, n * m, concat(letters[1], letters[0]));
add(shift(7, 0) * row_concat);

draw((4.5,0.5)--(6.3,0.5), currentpen + linewidth(2), Arrow(size=15));