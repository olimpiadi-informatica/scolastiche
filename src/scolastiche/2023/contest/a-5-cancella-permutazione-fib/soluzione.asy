unitsize(0.7cm);

access "../../../../asy_library/pictures/bunny_monochrome.asy" as bunny_monochrome;
access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

ALIGN = (0.5, 0);

element bunny(real height, pen shirt, string name, bool underline = false) {
    element e = element(yscale(height)*bunny_monochrome.drawing(1.5, shirt = shirt, scale(2.8)*("\texttt{" + name + "}")));
    return box(
        0.5,
        false, underline, false, false,
        deepred+6,
        e
    );
}

element R = column(
    row(
        fill_space = 0.3,
        bunny(0.8, lightblue, "2"),
        bunny(1.1, lightmagenta, "5", true),
        bunny(1.2, lightgreen, "6", true),
        bunny(0.9, lightred, "3"),
        bunny(0.7, lightcyan, "1"),
        bunny(1.0, lightyellow, "4")
    ),
    row(
        fill_space = 0.3,
        bunny(0.8, lightblue, "2"),
        bunny(1.2, lightgreen, "6"),
        bunny(0.9, lightred, "3"),
        bunny(0.7, lightcyan, "1", true),
        bunny(1.0, lightyellow, "4", true)
    ),
    row(
        fill_space = 0.3,
        bunny(0.8, lightblue, "2"),
        bunny(1.2, lightgreen, "6"),
        bunny(0.9, lightred, "3", true),
        bunny(1.0, lightyellow, "4", true)
    ),
    row(
        fill_space = 0.3,
        bunny(0.8, lightblue, "2"),
        bunny(1.2, lightgreen, "6", true),
        bunny(1.0, lightyellow, "4", true)
    ),
    row(
        fill_space = 0.3,
        bunny(0.8, lightblue, "2"),
        bunny(1.2, lightgreen, "6")
    )
);

add(R.drawing());
