access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    BLOCK_PADDING + 1,
    fill_space=0,
    block_sequence(
        instr_block(e("imposta"), choice_block(e("x")), e("a"), data_block(e("0"))),
        for_block(
            block_content(e("ripeti mentre"), cond_block(data_block(e("x")), e("$\neq$"), data_block(data_block(e("n")), e("$-$"), data_block(e("1")))), e(":")),
            else_block(
                block_content(e("se"), cond_block(data_block(e("x")), e("$=$"), data_block(e("y"))), e("fai:")),
                instr_block(e("imposta"), choice_block(e("x")), e("a"), data_block(e("rosso"), data_block(e("x")))),
                block_content(e("altrimenti: ")),
                instr_block(e("imposta"), choice_block(e("x")), e("a"), data_block(e("nero"), data_block(e("x"))))
            )
        )
    )
);

add(P.drawing());
