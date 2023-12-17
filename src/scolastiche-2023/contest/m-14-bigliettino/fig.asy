unitsize(1cm);

access "../../asy_library/pictures/bunny_monochrome.asy" as bunny_monochrome;
access "../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

ALIGN = (0.5, 0);

element bunny(real height, pen shirt, string name) {
    return column(
        fill_space = 0,
        element(yscale(height)*bunny_monochrome.drawing(1.5, shirt = shirt, scale(2.8)*("\texttt{" + substr(name, 0, 1) + "}"))),
        element("\phantom{bp}"+name+"\phantom{bp}", 2.7)
    );
}

element R = row(
    bunny(0.7, green, "Amy"),
    bunny(1.1, green, "Bunny"),
    bunny(0.9, red, "Carol"),
    bunny(1.3, red, "Dippy")
);

add(R.drawing());
