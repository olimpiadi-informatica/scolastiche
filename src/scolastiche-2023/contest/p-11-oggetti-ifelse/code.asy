access "../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

ALIGN = (0, 0.5);

element P =
    nested_blocks(
        yellow,
        element("se è da basket:"),
        nested_blocks(
            yellow,
            element("se è rosso:"),
            block(element("tieni"), orange),
            element("altrimenti:"),
            block(element("butta"), orange)
        ),
        element("altrimenti:"),
        nested_blocks(
            yellow,
            element("se è sgonfio:"),
            block(element("butta"), orange),
            element("altrimenti:"),
            block(element("tieni"), orange)
        )
    );

picture pic = P.drawing();
real size = max(pic, true).x;
draw((-0.8*size,1) -- (1.8*size,1), invisible);
add(pic);
