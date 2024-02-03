unitsize(1cm);
settings.tex = "pdflatex";
access "../../asy_libraries/book.asy" as book;

real GRID_SIZE = 8;
real YSTEP = 8*0.14;

pen[] pens = {
    rgb("#FFB000"),
    rgb("#648FFF"),
    rgb("#DC267F"),
};

string[] titles = {
    "Giardinaggio",
    "Manuale di corse",
    "Dizionario inglese",
};

path rect(pair p, pair q) {
    return p -- (p.x,q.y) -- q -- (q.x,p.y) -- cycle;
}

void pila(int[] cols, pair pos) {
    for (int j=0; j<cols.length; ++j)
        add(scale(1.4,1.4)*shift(pos+(0,j*YSTEP))*book.drawing(1, pens[cols[j]], titles[cols[j]]));
}

void libreria(int[][] cols) {
    for (int i=0; i<cols.length; ++i)
        pila(cols[i], (i*GRID_SIZE*0.8,0));
    filldraw(rect((GRID_SIZE*0.75-YSTEP/4,-YSTEP), (GRID_SIZE*0.75+YSTEP/4,-1.9*YSTEP)), rgb("966F33"), rgb("643D01")+3);
    filldraw(rect((GRID_SIZE*2.75-YSTEP/4,-YSTEP), (GRID_SIZE*2.75+YSTEP/4,-1.9*YSTEP)), rgb("966F33"), rgb("643D01")+3);
    filldraw(rect((-GRID_SIZE/2,-YSTEP/2), (GRID_SIZE*(cols.length-0.5),-YSTEP)), rgb("CD9D6F"), rgb("966F33")+3);
    filldraw(rect((GRID_SIZE*(cols.length-0.5),-YSTEP/2), (GRID_SIZE*cols.length,-YSTEP)), rgb("966F33"), rgb("643D01")+3);
    filldraw(rect((-YSTEP/4,-YSTEP), (YSTEP/4,-2*YSTEP)), rgb("CD9D6F"), rgb("966F33")+3);
    filldraw(rect((GRID_SIZE*2-YSTEP/4,-YSTEP), (GRID_SIZE*2+YSTEP/4,-2*YSTEP)), rgb("CD9D6F"), rgb("966F33")+3);
}

