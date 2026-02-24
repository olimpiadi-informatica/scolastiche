access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    BLOCK_PADDING + 1,
    fill_space=0,
    block_sequence(
        instr_block(e("imposta"), choice_block(e("cattivo")), e("a"), data_block(e("0"))),
        instr_block(e("imposta"), choice_block(e("totale")), e("a"), data_block(e("0"))),
        for_block(
            block_content(e("ripeti mentre"), cond_block(data_block(e("cattivo")), e("$=$"), data_block(e("0"))), e(":")),
            block_sequence(
                else_block(
                    block_content(e("se"), cond_block(data_block(e("prossimo")), e("$=$"), data_block(e("carota"))), e("fai:")),
                    instr_block(e("cambia"), choice_block(e("totale")), e("di"), data_block(e("1"))),
                    block_content(e("altrimenti: ")),
                    instr_block(e("cambia"), choice_block(e("totale")), e("di"), data_block(e("-1")))
                ),
                if_block(
                    block_content(e("se"), cond_block(data_block(e("totale")), e("$<$"), data_block(e("0"))), e("fai:")),
                    instr_block(e("imposta"), choice_block(e("cattivo")), e("a"), data_block(e("1")))
                ),
                instr_block(e("mangia prossimo"))
            )
        )
    )
);

add(P.drawing());
