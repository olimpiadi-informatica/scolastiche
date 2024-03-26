unitsize(1cm);

access "../../../../asy_library/pictures/bunny_polychrome.asy" as bunny;
access "../../../../asy_library/pictures/hay_cube.asy" as hay_cube;
access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

element option(int num, int[] pile) {
    picture pic;
    unitsize(pic, 1cm);

    label(pic, scale(2.5)*(string(num)+":"), (-3-0.4,2-1.6));
    for (int i=0; i<pile.length; ++i) {
	    label(pic, scale(1.8)*("pila " + string(i+1)), (3*i-0.4,-1.6));
        for(int j=0; j<pile[i]; ++j)
            add(pic, shift(3*i, 2*j)*scale(3.8)*hay_cube.drawing(0.2));
    }
    add(pic, shift(-4.3, 2.1)*reflect((2, 1), (2, 0))*bunny.drawing(0.7, bunny.bunny_col));
    return e(pic);
}

element P = column(
    padding = 1,
    option(1, new int[]{1, 2, 2, 3, 4, 4, 4, 5, 5}),
    option(2, new int[]{1, 2, 3, 2, 4, 5, 3, 4, 5}),
    option(3, new int[]{1, 3, 3, 5, 4, 2, 3, 4, 5})
);

add(P.drawing());
