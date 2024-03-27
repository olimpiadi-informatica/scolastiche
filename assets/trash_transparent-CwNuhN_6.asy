import math;

picture drawing(real k = 1, pen color = gray, int num=8) {
    picture pic;

    pen darcol = 0.4*color + 0.6*darkgray;

    real bend = 20;
    path border = (-35,0) {dir(-bend)}..{dir(bend)} (35,0) -- (45,100) {dir(180-bend)}..{dir(180+bend)} (-45,100) -- cycle;
    draw(pic, border, darcol+2);
    path bottom = subpath(border, -0.1, 1.1) {dir(180+bend)}..{dir(180-bend)} cycle;
    filldraw(pic, bottom, color, darcol+2);
    path top = subpath(border, 1.9, 3.1) {dir(bend)}..{dir(-bend)} cycle;
    filldraw(pic, top, color, darcol+2);

    path bendline(pair p, real a, pair q, real b) {
        return p {dir(a)}..{dir(b)} q;
    }
    path ref = (0,0) {dir(30)}..{dir(30)} (1,1);
    path line;
    for (int i=0; i<num; ++i) {
        line = bendline(point(bottom, 3 + point(ref,i/num).y), 115 + i/num*40, point(border, 3.1 + (i+1)/(num+1)*0.8), 110);
        draw(pic, line, darcol+2);
        draw(pic, reflect((0,0), (0,1))*line, darcol+2);
        line = bendline(point(top, 3 + point(ref,i/num).y), -65 + i/num*40, point(border, 1.1 + (i+1)/(num+1)*0.8), -70);
        draw(pic, line, darcol+2);
        draw(pic, reflect((0,0), (0,1))*line, darcol+2);
    }

    return scale(k/32)*pic;
}
