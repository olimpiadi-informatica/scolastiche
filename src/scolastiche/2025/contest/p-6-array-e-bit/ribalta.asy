access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    BLOCK_PADDING + 1,
    fill_space=0,
    def_block(
        block_content(e("per fare"), data_block(e("ribalta")), e("con"), choice_block(e("array")), e("e"), choice_block(e("inizio")), e("e"), choice_block(e("lunghezza")), e(":")),
        block_sequence(
            instr_block(e("imposta"), choice_block(e("fine")), e("a"), data_block(data_block(data_block(e("inizio")), e("$+$"), data_block(e("lunghezza"))), e("$-$"), data_block(e("1")))),
            for_block(
                block_content(e("conta con"), choice_block(e("i")), e("da"), data_block(e("0")), e("a"), data_block(data_block(data_block(e("lunghezza")), e("$\div$"), data_block(e("2"))), e("$-$"), data_block(e("1"))), e("per"), data_block(e("1")), e(":")),
                instr_block(e("scambia valore di"), choice_block(e("array"), data_block(data_block(e("inizio")), e("$+$"), data_block(e("i")))), e("e"), choice_block(e("array"), data_block(data_block(e("fine")), e("$-$"), data_block(e("i")))))
            )
        )
    )
);

add(P.drawing());
