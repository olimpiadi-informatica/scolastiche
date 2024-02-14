picture drawing(real k = 1, real open=1, bool knob_side = true, pen color = brown, pen knob = yellow) {
    picture pic;
    path p;

    int h = 130, w = 20, b = 2, x = -9, y = 2;
    p = (0,0)--(0,h)--(open, 1.3-open*0.3)*h--(open,0.6-open*0.6)*h--cycle;
    filldraw(pic, p, color*0.8+white*0.2, black+2);
    p = (0,0)--(0,h)--(open, 1.3-open*0.3)*h--(open,0.6-open*0.6)*h--cycle;
    filldraw(pic, shift((open, 1.3-open*0.3)*h*0.1)*scale(0.8)*p, color*0.6+white*0.4, black+1);
    p = (0,0)--(0,h)--(-w*(1-open),h+w*open/2)--(-w*(1-open),w*open/2)--cycle;
    filldraw(pic, p, color, black+2);
    p = (-w*(1-open),h+w*open/2)--(0,h)--(open, 1.3-open*0.3)*h--(open*h-w*(1-open)*0.8, 1.3*h-open*0.3*h+w*open*0.4)--cycle;
    filldraw(pic, p, color, black+2);

    // pomello
    if (knob_side) {
        p = circle((open, 0.95-open*0.45)*h, 0.3*w);
        filldraw(pic, p, knob, black+2);
    } else {
        p = (-w*(1-open),h*0.45+w*open/2) -- (-w*(1-open),h*0.55+w*open/2) .. (-1.5*w*(1-open),h*0.5+w*open*0.75) .. cycle;
        filldraw(pic, p, knob, black+2);
    }

    return scale(k/32)*pic;
}
