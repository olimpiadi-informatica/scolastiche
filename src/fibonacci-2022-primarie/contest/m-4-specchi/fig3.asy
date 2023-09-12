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

void laser(pair pos, string lbl, int dir, bool arrow=true) {

    add(shift(pos)*rot[dir]*bunny_silouhette.drawing(0.07));
    string ph = "";
    if (dir == dw) ph = "\phantom{y}";
    label(scale(3) * (ph+lbl+ph), pos - delta[dir] * GRID_SIZE*0.1, -delta[dir]);

    if (dir == -1) return;
    if (arrow == false)return;
    pair inizio = pos + delta[dir] * GRID_SIZE*0.45;
    pair fine = inizio + delta[dir] * GRID_SIZE*0.4;
    draw(inizio -- fine, penna_luce);
    draw(inizio -- fine, penna_luce_2);

    pen arrowpen = linewidth(4) + red + orange;

    draw(fine -- fine + delta[dir]*GRID_SIZE*0.2, arrowpen, EndArrow(DefaultHead));
}


real cxp(pair a, pair b){
    return a.x*b.y - a.y*b.x;
}

void laser_path(pair[] path, pen penna, real radius = 0.3) {
    pair[] versor = new pair[path.length];
    for (int i = 1; i < path.length; ++i){
        versor[i] = unit(path[i] - path[i-1])*radius;
        draw(path[i-1]+versor[i] -- path[i]-versor[i], penna);
        if (i > 1){
            pair center = path[i-1] + versor[i] - versor[i-1];
            path cir;
            if (cxp(versor[i], versor[i-1]) < 0){
                cir = arc(center, radius, angle(-versor[i])*180/pi, angle(versor[i-1])*180/pi); 
            } else {
                cir = arc(center, radius, angle(versor[i-1])*180/pi, angle(-versor[i])*180/pi, CCW); 
            }
            draw (cir, penna);
        }
    }
    int n = path.length;
    pen arrowpen = linewidth(4) + red + orange;
    draw (path[n-1] - unit(versor[n-1])*GRID_SIZE*0.2 -- path[n-1], arrowpen, EndArrow(DefaultHead));
}


   

add(shift(13.5,3) * carota.drawing(0.12));

laser((-2, 3),  "Amy", dx);
laser((5, 14),  "Bunny", dw);
laser((14, 1),  "Carol", sx, false);
laser((14, 7),  "Dippy", sx);
laser((11, 14), "Ester", dw);

pair[] path = {(13,1), (5,1), (5,3), (1,3), (1,5), (9,5), (9,11), (5,11), (5,3), (12.55,3)};
laser_path(path, penna_luce);
laser_path(path, penna_luce_2);

