import fontsize;

unitsize(35);
defaultpen(fontsize(20pt));

currentpen = currentpen + linewidth(1.3);

void draw_column(picture pic=currentpicture, int m, string[] letters, bool shadow=false) {
    if (shadow) {
        fill(pic, shift(-0.1,0.1) * ((0,0)--(1,0)--(1,m)--(0,m)--cycle), gray);
    }
    filldraw(pic, (0,0)--(1,0)--(1,m)--(0,m)--cycle, white);
    for (int i = 0; i <= m; ++i) {
        draw(pic, (0,i)--(1,i));
    }
    for (int i = 0; i < m; ++i) {
        label(pic, "\texttt{" + letters[i] + "}", (0,i) + (0.5,0.5));
    }
}

int n = 3;
int m = 2;

string[][] letters = {
    {"c", "a", "c"},
    {"b", "a", "c"}
};

string[][] new_letters = transpose(letters);

picture col0, col1, col2;
draw_column(col0, m, new_letters[0], true);
draw_column(col1, m, new_letters[1], true);
draw_column(col2, m, new_letters[2], true);

add(shift(-0.8, 0.8) * col0);
add(col1);
add(shift(0.8, -0.8) * col2);

picture col_concat;
draw_column(col_concat, n * m, concat(new_letters[2], new_letters[1], new_letters[0]));
add(shift(5, 1 - n*m/2) * col_concat);

draw((2.5,1)--(4.3,1), currentpen + linewidth(2), Arrow(size=15));
