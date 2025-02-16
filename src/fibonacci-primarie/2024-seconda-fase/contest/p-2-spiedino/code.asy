access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    BLOCK_PADDING,
    fill_space=0,
    block_sequence(
        instr_block(element("imposta"), choice_block(e("valore")), element("a"), data_block(e("1"))),
        instr_block(element("imposta"), choice_block(e("i")), element("a"), data_block(e("1"))),
        for_block(
            block_content(e("ripeti"), data_block(e("24")), e("volte:")),
            block_sequence(
                if_block(
                    block_content(e("se"), cond_block(data_block(e("cibo in posizione"), data_block(e("i"))), e("è diverso da"), data_block(e("cibo in posizione"), data_block(data_block(e("i")), e("+"), data_block(e("1")))))),
                    instr_block(e("aumenta"), choice_block(e("valore")), element("di"), data_block(e("1")))
                ),
                instr_block(e("aumenta"), choice_block(e("i")), element("di"), data_block(e("1")))
            )
        )
    )
);

add(P.drawing());
