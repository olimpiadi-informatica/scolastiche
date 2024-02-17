unitsize(1cm);
settings.tex = "pdflatex";
access "../../../../asy_library/pictures/stain.asy" as stain;

real GRID_SIZE = 2;

path rect(pair p, pair q) {
    return p -- (p.x,q.y) -- q -- (q.x,p.y) -- cycle;
}

void griglia(int N, int M) {
    draw(rect((0,0), (M*GRID_SIZE,N*GRID_SIZE)), black+2);
    for (int i = 0; i < M-1; i+=1)
        draw( ((i+1)*GRID_SIZE, 0) -- ((i+1)*GRID_SIZE, N*GRID_SIZE), black+2);
    for (int i = 0; i < N-1; i+=1)
        draw( (0,(i+1)*GRID_SIZE) -- (M*GRID_SIZE,(i+1)*GRID_SIZE), black+2);
}

void quadrato(string[] lbl) {
    draw(rect((-3*GRID_SIZE,0), (6*GRID_SIZE,3*GRID_SIZE)), invisible);
    griglia(3,3);
    for (int r = 0; r < 3; ++r)
        for (int c = 0; c < 3; ++c) {
            pair pos = (c+0.5,r+0.5)*GRID_SIZE;
            string s = substr(lbl[2-r],c,1);
            if (s == " ")
                add(shift(pos)*stain.drawing(0.11, black));
        }
    for (int r = 0; r < 3; ++r)
        for (int c = 0; c < 3; ++c) {
            pair pos = (c+0.5,r+0.5)*GRID_SIZE;
            string s = substr(lbl[2-r],c,1);
            if (s == "?")
                add(shift(pos)*stain.drawing(0.15, heavyred, false));
            label(scale(3)*s, pos, s == "?" ? white : black);
        }
}
