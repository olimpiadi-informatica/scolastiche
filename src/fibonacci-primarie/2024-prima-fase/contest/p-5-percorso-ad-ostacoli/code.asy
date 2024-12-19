access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);
BLOCK_PADDING = .3;

element P =
    block_sequence(
        for_block(
            element("ripeti 2 volte:"),
            block_sequence(
                instr_block(element("avanza")),
                instr_block(element("avanza")),
                instr_block(element("salta"))
            )
        )
    );

add(P.drawing());
