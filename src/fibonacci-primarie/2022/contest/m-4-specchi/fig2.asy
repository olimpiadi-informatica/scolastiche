include util;
access "../../asy_libraries/carota.asy" as carota;
access "../../asy_libraries/bunny_silouhette.asy" as bunny_silouhette;

int N = 6;
int M = 6;
string[] grid = {
    "  / \ ",
    "/    /",
    "\  \  ",
    "/   / ",
    "\ \   ",
    "  \   "
};

griglia(N, M, linewidth(1.5));
// numeri(N, M);
specchi(N, M, grid);

transform[] rot;
rot[dx] = shift((0, .4));
rot[sx] = reflect((0,0), (0,1))*shift((0, .4));
rot[dw] = shift((-.2, 0));

void laser(pair pos, string lbl, int dir) {

    add(shift(pos)*rot[dir]*bunny_silouhette.drawing(0.07));
    string ph = "";
    if (dir == dw) ph = "\phantom{y}";
    label(scale(3) * (ph+lbl+ph), pos - delta[dir] * GRID_SIZE*0.1, -delta[dir]);

    if (dir == -1) return;
    pair inizio = pos + delta[dir] * GRID_SIZE*0.45;
    pair fine = inizio + delta[dir] * GRID_SIZE*0.4;
    draw(inizio -- fine, penna_luce);
    draw(inizio -- fine, penna_luce_2);

    pen arrowpen = linewidth(4) + red + orange;

    draw(fine -- fine + delta[dir]*GRID_SIZE*0.2, arrowpen, EndArrow(DefaultHead));
}

add(shift(13.5,3) * carota.drawing(0.12));

laser((-2, 3),  "Amy", dx);
laser((5, 14),  "Bunny", dw);
laser((14, 1),  "Carol", sx);
laser((14, 7),  "Dippy", sx);
laser((11, 14), "Ester", dw);
