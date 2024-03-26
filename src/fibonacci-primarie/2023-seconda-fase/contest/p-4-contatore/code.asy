access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    BLOCK_PADDING,
    fill_space=0,
    block_sequence(
        instr_block(element("imposta"), choice_block(e("contatore")), element("a"), data_block(e("0"))),
        for_block(
            block_content(e("conta con"), choice_block(e("i")), e("da"), data_block(e("1")), e("a"), data_block(e("42")), e(":")),
            block_sequence(
                if_block(
                    block_content(e("se"), cond_block(e(""), choice_block(e("i")), e("è multiplo di"), data_block(e("7")), e("")), e(":")),
                    instr_block(element("aumenta"), choice_block(e("contatore")), element("di"), data_block(e("1")))
                ),
                if_block(
                    block_content(e("se"), cond_block(e(""), choice_block(e("i")), e("è multiplo di"), data_block(e("9")), e("")), e(":")),
                    instr_block(element("diminuisci"), choice_block(e("contatore")), element("di"), data_block(e("1")))
                )
            )
        ),
        instr_block(element("stampa"), choice_block(e("contatore")))
    )
);

add(P.drawing());
