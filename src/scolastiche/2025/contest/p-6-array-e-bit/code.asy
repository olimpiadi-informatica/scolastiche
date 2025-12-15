access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    BLOCK_PADDING + 1,
    fill_space=0,
    block_sequence(
        for_block(
            block_content(e("conta con"), choice_block(e("i")), e("da"), data_block(e("0")), e("a"), data_block(data_block(e("t")), e("$-$"), data_block(e("1"))), e("per"), data_block(e("1")), e(":")),
            instr_block(e("imposta"), choice_block(e("array"), data_block(e("i"))), e("a"), data_block(e("i")))
        ),
        instr_block(e("imposta"), choice_block(e("len")), e("a"), data_block(e("t"))),
        for_block(
            block_content(e("ripeti mentre"), cond_block(data_block(e("len")), e("$\ge$"), data_block(e("2"))), e(":")),
            block_sequence(
                for_block(
                    block_content(e("conta con"), choice_block(e("i")), e("da"), data_block(e("0")), e("a"), data_block(data_block(data_block(e("t")), e("$\div$"), data_block(e("len"))), e("$-$"), data_block(e("1"))), e("per"), data_block(e("1")), e(":")),
                    instr_block(e("ribalta"), data_block(e("array")), e("e"), data_block(data_block(e("i")), e("$\times$"), data_block(e("len"))), e("e"), data_block(e("len")))
                ),
                instr_block(e("imposta"), choice_block(e("len")), e("a"), data_block(data_block(e("len")), e("$\div$"), data_block(e("2"))))
            )
        )
    )
);

add(P.drawing());
