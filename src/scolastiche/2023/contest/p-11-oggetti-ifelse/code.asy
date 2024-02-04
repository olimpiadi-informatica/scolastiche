access "../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

ALIGN = (0, 0.5);

element P =
    else_block(
        element("se è da basket:"),
        else_block(
            element("se è rosso:"),
            instr_block(element("tieni")),
            element("altrimenti:"),
            instr_block(element("butta"))
        ),
        element("altrimenti:"),
        else_block(
            element("se è sgonfio:"),
            instr_block(element("butta")),
            element("altrimenti:"),
            instr_block(element("tieni"))
        )
    );

picture pic = P.drawing();
real size = max(pic, true).x;
draw((-0.8*size,1) -- (1.8*size,1), invisible);
add(pic);
