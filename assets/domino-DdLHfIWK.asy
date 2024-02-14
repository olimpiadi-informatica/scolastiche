import fontsize;

unitsize(50);
defaultpen(fontsize(20pt));

currentpen = currentpen + linewidth(1.3);

pair[][] dots = {
    {},
    {(0.5, 0.5)},
    {(0.25, 0.25), (0.75, 0.75)},
    {(0.25, 0.25), (0.5, 0.5), (0.75, 0.75)},
    {(0.25, 0.25), (0.25, 0.75), (0.75, 0.25), (0.75, 0.75)},
    {(0.25, 0.25), (0.25, 0.75), (0.75, 0.25), (0.75, 0.75), (0.5, 0.5)},
    {(0.25, 0.25), (0.25, 0.75), (0.75, 0.25), (0.75, 0.75), (0.5, 0.25), (0.5, 0.75)}
};

picture domino(int a, int b) {
    picture p;

    real r = 0.1;
    real off = 0.015;
    real left = off, right = 2-off;
    guide g = (left+r,0)..tension 10 ..(right-r,0)..(right,r)..tension 10 ..(right,1-r)..(right-r,1)..tension 10 ..(left+r,1)..(left,1-r)..tension 10 ..(left,r)..cycle;
    filldraw(p, g, paleyellow, darkgray + linewidth(2));
    draw(p, (1,0.2)--(1,0.8), darkgray + linewidth(3));

    for(int i = 0; i < dots[a].length; ++i) {
        fill(p, circle(dots[a][i], 0.1), black);
    }

    for(int i = 0; i < dots[b].length; ++i) {
        fill(p, circle(dots[b][i] + (1,0), 0.1), black);
    }

    return p;
}

picture ghost() {
    picture p;

    draw(p, (0,0)--(2,0)--(2,1)--(0,1)--cycle, lightgray + linewidth(2));
    draw(p, (1,0.2)--(1,0.8), lightgray + linewidth(3));

    return p;
}
