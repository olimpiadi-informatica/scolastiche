unitsize(1cm);

access "../../../../../asy_library/pictures/bunny_monochrome.asy" as bunny;
access "../../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

ALIGN = (0.5, 0);

element player(real height, string name) {
    pen[] cols = {bunny.turing_col, heavyblue, white};
    if (name == "F") cols = new pen[]{bunny.fibonacci_col, mediumred, black};
    return e(yscale(height)*bunny.drawing(0.8, cols[0], cols[1], scale(1.6)*("\texttt{" + name + "}"), cols[2]));
}

element team(string name  ... real[] heights) {
    element[] els;
    for (int i=0; i<heights.length; ++i)
        els[i] = player(heights[i], name);
    return row(...els);
}

element R = column(
    team("F", 0.7, 1, 1, 1.4),
    team("T", 0.7, 1, 1, 1.4)
);

add(R.drawing());
