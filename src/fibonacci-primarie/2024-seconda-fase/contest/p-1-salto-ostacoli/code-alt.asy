access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);
BLOCK_PADDING = .3;

element P =
    row(2, 0, (0.5,0.5),
        block_sequence(
            start_block(e("Strategia 1")),
            for_block(
                block_content(e("ripeti mentre"), cond_block(data_block(e("posizione")), e("minore di"), data_block(e("traguardo"))), e(":")),
                else_block(
                    block_content(e("se"), cond_block(e("pietra marrone"))),
                    block_sequence(
                        instr_block(element("salta")),
                        instr_block(element("salta"))
                    ),
                    block_content(e("altrimenti: ")),
                    instr_block(element("avanza"))
                )
            )
        ),
        block_sequence(
            start_block(e("Strategia 2")),
            for_block(
                block_content(e("ripeti mentre"), cond_block(data_block(e("posizione")), e("minore di"), data_block(e("traguardo"))), e(":")),
                instr_block(e("salta"))
            )
        ),
        block_sequence(
            start_block(e("Strategia 3")),
            for_block(
                block_content(e("ripeti mentre"), cond_block(data_block(e("posizione")), e("minore di"), data_block(e("traguardo"))), e(":")),
                else_block(
                    block_content(e("se"), cond_block(e("pietra marrone"))),
                    instr_block(element("salta")),
                    block_content(e("altrimenti: ")),
                    block_sequence(
                        instr_block(element("avanza")),
                        instr_block(element("avanza"))
                    )
                )
            )
        )
    );

add(P.drawing());
