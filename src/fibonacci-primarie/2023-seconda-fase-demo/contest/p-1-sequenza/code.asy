access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    5*BLOCK_PADDING,
    block_sequence(
        start_block(e("Opzione 1:")),
        instr_block(e("vai alla"), choice_block(e("dispensa"))),
        instr_block(e("prendi il"), choice_block(e("piatto"))),
        instr_block(e("vai al"), choice_block(e("tavolo"))),
        instr_block(e("posa il"), choice_block(e("piatto"))),
        instr_block(e("vai alla"), choice_block(e("dispensa"))),
        instr_block(e("prendi le"), choice_block(e("carote"))),
        instr_block(e("vai al"), choice_block(e("tavolo"))),
        instr_block(e("posa le"), choice_block(e("carote")))
    ),
    block_sequence(
        start_block(e("Opzione 2:")),
        instr_block(e("vai alla"), choice_block(e("dispensa"))),
        instr_block(e("prendi le"), choice_block(e("carote"))),
        instr_block(e("vai al"), choice_block(e("tavolo"))),
        instr_block(e("posa il"), choice_block(e("piatto"))),
        instr_block(e("vai alla"), choice_block(e("dispensa"))),
        instr_block(e("prendi il"), choice_block(e("piatto"))),
        instr_block(e("vai al"), choice_block(e("tavolo"))),
        instr_block(e("posa le"), choice_block(e("carote")))
    ),
    block_sequence(
        start_block(e("Opzione 3:")),
        instr_block(e("vai al"), choice_block(e("tavolo"))),
        instr_block(e("prendi il"), choice_block(e("piatto"))),
        instr_block(e("vai alla"), choice_block(e("dispensa"))),
        instr_block(e("posa il"), choice_block(e("piatto"))),
        instr_block(e("vai al"), choice_block(e("tavolo"))),
        instr_block(e("prendi le"), choice_block(e("carote"))),
        instr_block(e("vai alla"), choice_block(e("dispensa"))),
        instr_block(e("posa il"), choice_block(e("piatto")))
    )
);

add(P.drawing());
