access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

ALIGN = (0, 0.5);

element P =
    else_block(
        element("se è adulto:"),
        block_sequence(
          if_block(
            element("se hai un numero dispari di carote:"),
            instr_block(element("mangiane una"))
          ),
          instr_block(element("dagli metà delle carote rimaste"))
        ),
        element("altrimenti:"),
        instr_block(element("dagli una singola carota"))
    );

add(P.drawing());
