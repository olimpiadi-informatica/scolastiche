unitsize(0.7cm);

access "../../../../asy_library/pictures/bunny_monochrome.asy" as bunny_monochrome;
access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

ALIGN = (0.5, 0);

element bunny(real height, pen shirt, string name) {
    return column(
        fill_space = 0,
        element(yscale(height)*bunny_monochrome.drawing(1.5, shirt = shirt, scale(2.8)*("\texttt{" + substr(name, 0, 1) + "}")))
    );
}

element R = row(
    bunny(1.0, lightblue, "4"),
    bunny(0.8, lightmagenta, "2"),
    bunny(1.2, lightgreen, "6"),
    bunny(0.7, lightred, "1"),
    bunny(1.1, lightcyan, "5"),
    bunny(0.9, lightyellow, "3")
);

add(R.drawing());
