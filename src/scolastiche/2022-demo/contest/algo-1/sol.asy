import fontsize;

unitsize(30);
defaultpen(fontsize(20pt));
defaultpen(linewidth(1.3));

void draw_grid(int n, int m) {
    for (int i = 0; i <= n; ++i) {
        draw((i,0)--(i,m), gray + linewidth(0.7));
    }
    for (int j = 0; j <= m; ++j) {
        draw((0,j)--(n,j), gray + linewidth(0.7));
        if (j > 0) {
            label(string(j), (-0.5,j));
        }
    }
}

void draw_platforms(int[] heights, transform t, pen p) {
    for (int i = 0; i < heights.length; ++i) {
        draw(t*(i,heights[i])--t*(i+1,heights[i]), p);
    }
}

void draw_towers(int[] heights, pen p) {
    for (int i = 0; i < heights.length; ++i) {
        filldraw(box((i,0),(i+1,heights[i])), p, p);
    }
}

int[] M = {4,3,1,2,5,4,4,6,9,9,10,8,10};
int[] S = {1,1,1,2,4,4,4,6,8,8,8,8,10};
draw_towers(S, lightblue + opacity(0.5));

draw_grid(13, 10);
draw_platforms(S, shift(0,-0.05), blue + linewidth(4));
draw_platforms(M, shift(0,0.05), red + linewidth(4));

