access "../../../../asy_library/pictures/basket_ball.asy" as basket_ball;
access "../../../../asy_library/pictures/soccer_ball.asy" as soccer_ball;
access "../../../../asy_library/structures/layout.asy" as layout;
access "../../../../asy_library/pictures/bunny_polychrome.asy" as bunny_polychrome;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

ALIGN = (0.5, 0);

pen cols[] = {bunny_polychrome.tiptap_col, bunny_polychrome.carol_col, bunny_polychrome.bunny_col, bunny_polychrome.allie_col};
element bunny(int i, string type) {
    picture b = bunny_polychrome.drawing(1, cols[rand() % cols.length]);
    if (type == "bambino")
      b = scale(0.7)*b;
    return column(
        padding=0.5,
        fill_space=0,
        element(b),
        column(
            element(type)
        ),
        element("\textbf{"+string(i)+"}", 3)
    );
}

element[] bunnies;
for (int i = 0; i < seq.length; ++i) {
    bunnies.push(bunny(i+1, seq[i] == 1 ? "bambino" : "adulto"));
}

// Use the row function to arrange the circles
add(row(padding=0.5 ... bunnies).drawing());


