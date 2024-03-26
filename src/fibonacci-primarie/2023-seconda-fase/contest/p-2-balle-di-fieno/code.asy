access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    BLOCK_PADDING,
    fill_space=0,
    block_sequence(
        instr_block(element("imposta"), choice_block(e("posizione")), element("a"), data_block(e("1"))),
        for_block(
            block_content(e("ripeti mentre"), cond_block(data_block(e("posizione")), e("minore di"), data_block(e("9"))), e(":")),
            block_sequence(
                else_block(
                    block_content(e("se"), cond_block(data_block(e("altezza della pila"), data_block(data_block(e("posizione")), e("+"), data_block(e("1")))), e("minore di"), data_block(e("altezza della pila"), data_block(e("posizione"))))),
                    instr_block(e("diminuisci"), choice_block(e("posizione")), element("di"), data_block(e("1"))),
                    block_content(e("altrimenti: ")),
                    instr_block(e("aumenta"), choice_block(e("posizione")), element("di"), data_block(e("2")))
                )
            )
        ),
        instr_block(element("esci dal fienile"))
    )
);

add(P.drawing());
