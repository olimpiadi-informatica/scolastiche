access "../../asy_library/pictures/basket_ball.asy" as basket_ball;
access "../../asy_library/pictures/soccer_ball.asy" as soccer_ball;
access "../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

ALIGN = (0.5, 0);

element ball(int i, string type, string color, string flatness) {
    pen c = color == "verde" ? heavygreen : heavyred;
    real y = flatness == "sgonfio" ? 0.5 : 1;
    picture b = type == "calcio" ? soccer_ball.drawing(c) : basket_ball.drawing(c);
    return column(
        padding=0.5,
        fill_space=0,
        element(yscale(y)*scale(0.8)*b),
        column(
            element(color+","),
            element(flatness+","),
            element("da "+type)
        ),
        element("\textbf{"+string(i)+"}", 4)
    );
}

element P =
    row(
        padding=1,
        ball(1, "calcio", "verde", "gonfio"),
        ball(2, "basket", "rosso", "sgonfio"),
        ball(3, "calcio", "rosso", "sgonfio"),
        ball(4, "basket", "verde", "gonfio"),
        ball(5, "basket", "rosso", "gonfio")
    );

add(P.drawing());
