unitsize(1cm);
settings.outformat = "pdf";
access "../../asy_libraries/carota.asy" as carota;

pen border = black+2;
pen wood = rgb("#CD9D6F");
pen steel = rgb("#A9A9A9");
pen gold = rgb("#D4AF37");
pen darkgold = rgb("#BD9B16");

void fulcro(real height) {
    path fulcro = (-0.5, -height) -- (0.5, -height) -- (0.5, 2) -- (-0.5, 2) -- cycle;
    filldraw(fulcro, wood, border);
    filldraw(circle((0, 0.7), 0.25), wood, border);

    path decoration = ( 0.1, 2) .. ( 0.3, 2.5) .. ( 0.1, 3)
                   -- (-0.1, 3) .. (-0.3, 2.5) .. (-0.1, 2) -- cycle;
    filldraw(decoration, wood, border);
    filldraw(circle((0, 3.4), 0.4), wood, border);

    path base = ( 1.5, -height - 1){left} ..   {up}( 0.7, -height - 0)
             -- (-0.7, -height - 0){down} .. {left}(-1.5, -height - 1) -- cycle;
    filldraw(base, wood, border);
}

void giogo(pair pos, real angle, real width) {
    path giogo = (-width, 0) .. (0, -0.4) .. ( width, 0)
              -- ( width, 1) .. (0,  1.4) .. (-width, 1) -- cycle;
    filldraw(shift(pos + (0, .4)) * rotate(angle) * scale(1.1, .6) * giogo, wood, border);

    pair hole_left  = shift(pos + (0, .7)) * rotate(angle) * (-width, 0);
    pair hole_right = shift(pos + (0, .7)) * rotate(angle) * ( width, 0);
    filldraw(circle(hole_left,  .2), white, border);
    filldraw(circle(hole_right, .2), white, border);
}

void piatto(pair pos, string lbl, pen bg=rgb("FA4616")) {
    pair center = pos + (0, -8);
    path ell = ellipse(center, 3, 1);

    filldraw(ell, gold, border);

    draw(pos -- point(ell, 0.2), border);
    draw(pos -- point(ell, 1.2), border);
    draw(pos -- point(ell, 2.3), border);
    draw(pos -- (pos + (0, .7)), border);

    real k = lbl == "?" ? 2 : (int)substr(lbl,0,1);
    center = pos + (1, -8.2 + 0.2*k);
    k = k^0.5;
    add(shift(center)*carota.drawing(0.25*k, bg, heavyred));
    label(rotate(45)*scale(2.5*k) * ("\texttt{"+lbl+"}"), center + (-0.6, 0.3)*k, white);

    center = pos + (0, -8);
    filldraw((center - (3, 0)){down} .. (center - (0, 1.75)) .. {up}(center + (3, 0)) -- shift(center)*xscale(3)*arc((0,0), 1, 360, 180) -- cycle, darkgold, border);
}

void bilancia(real angle, real height, string lbl1, string lbl2) {
    real width = 6;

    giogo((0, 0), angle, width);
    fulcro(height);

    pair p1 = rotate(angle) * (-width, 0);
    pair p2 = rotate(angle) * ( width, 0);
    piatto(p1, lbl1);
    piatto(p2, lbl2);
}

void double_bilancia() {
    real height = 20;
    real width1 = 12;
    real width2 = 5;

    giogo((0, 0), 0, width1);
    fulcro(height);
    piatto((width1, 0), "?", rgb("cc0066"));

    pair offset = (-width1, -5);
    pair p1 = offset - (width2, 0);
    pair p2 = offset + (width2, 0);
    giogo(offset, 0, width2);
    piatto(p1, "?");
    piatto(p2, "?");

    filldraw(circle(offset + (0, 0.7), 0.25), wood, border);
    draw(shift(0, 0.7) * (offset -- (-width1, 0)), border);
}
