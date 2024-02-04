access "../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    5*BLOCK_PADDING,
    fill_space=0,
    block_sequence(
        start_block(element("Opzione 1:")),
        block_sequence(
            instr_block(element("avanza")),
            instr_block(element("apri porta"))
        ),
        for_block(
            element("ripeti 2 volte:"),
            block_sequence(
                instr_block(element("avanza"))
            )
        ),
        block_sequence(
            instr_block(element("apri porta")),
            instr_block(element("avanza")),
            instr_block(element("mangia carota"))
        )
    ),
    block_sequence(
        start_block(element("Opzione 2:")),
        instr_block(element("avanza")),
        for_block(
            element("ripeti 2 volte:"),
            block_sequence(
                instr_block(element("apri porta")),
                instr_block(element("avanza"))
            )
        ),
        instr_block(element("mangia carota"))
    ),
    block_sequence(
        start_block(element("Opzione 3:")),
        for_block(
            element("ripeti 2 volte:"),
            block_sequence(
                instr_block(element("avanza")),
                instr_block(element("apri porta")),
                instr_block(element("avanza"))
            )
        ),
        instr_block(element("mangia carota")) 
    )
);

add(P.drawing());
