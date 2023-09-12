include util;

void piatto_piccolo(pair pos, string lbl, real k, pen bg=rgb("FA4616")) {
    pair center = pos + (0, -8);
    path ell = ellipse(center, 3, 1);

    filldraw(ell, gold, border);

    draw(pos -- point(ell, 0.2), border);
    draw(pos -- point(ell, 1.2), border);
    draw(pos -- point(ell, 2.3), border);
    draw(pos -- (pos + (0, .7)), border);

    center = pos + (1, -8.2 + 0.2*k);
    k = k^0.5;
    add(shift(center)*carota.drawing(0.25*k, bg, heavyred));
    label(rotate(45)*scale(2.5*k) * ("\texttt{"+lbl+"}"), center + (-0.6, 0.3)*k, white);

    center = pos + (0, -8);
    filldraw((center - (3, 0)){down} .. (center - (0, 1.75)) .. {up}(center + (3, 0)) -- shift(center)*xscale(3)*arc((0,0), 1, 360, 180) -- cycle, darkgold, border);
}


real height = 20;
real width1 = 12;
real width2 = 5;

giogo((0, 0), 0, width1);
fulcro(height);
piatto_piccolo((width1, 0), "8kg", 3, rgb("cc0066"));

pair offset = (-width1, -5);
pair p1 = offset - (width2, 0);
pair p2 = offset + (width2, 0);
giogo(offset, 0, width2);
piatto_piccolo(p1, "4kg", 2);
piatto_piccolo(p2, "4kg", 2);

filldraw(circle(offset + (0, 0.7), 0.25), wood, border);
draw(shift(0, 0.7) * (offset -- (-width1, 0)), border);
