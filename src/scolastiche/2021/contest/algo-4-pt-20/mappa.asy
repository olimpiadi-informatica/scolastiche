import roundedpath;
settings.tex = "pdflatex";

int[] batt = {15, 28, 2, 6, 18, 9, 21, 10};
int[] dist = {8, 6, 30, 9, 15, 21, 2, 18};

pair[] plazas = {(-1,1), (0,1)};
for (int i=2; i<8; ++i)
    plazas[i] = rotate(-90)*plazas[i-2];
    
path unitsquare = roundedpath((-1,1) -- (1,1) -- (1,-1) -- (-1,-1) -- cycle, 0.3);

void box(picture pic, pair p, int i, int v) {
    filldraw(pic, shift(p)*scale(0.2)*unitsquare, palegray, black+1);
    label(pic, scale(0.6)*("\texttt{"+string(v)+"}"), p);
    label(pic, scale(0.4)*string(i+1), (i%2 == 0 ? 1.28 : 1.32)*p);
}

for (int v=0; v<4; ++v) {
    picture pic;
    unitsize(pic, 1cm);
    draw(pic, unitsquare, brown+1+linetype(new real[] {0,2}));
    for (int i=0; i<8; ++i) {
        box(pic, plazas[i], i, batt[(i+2*v)%8]+v);
        pair q = plazas[(i#2)*2+1]*0.15 + (plazas[i%8]+plazas[(i+1)%8])/2;
        label(pic, scale(0.5)*("\textit{"+string(dist[(i+2*v)%8]+v)+"}"), q);
    }
    shipout("es20v" + string(v), pic);
}
