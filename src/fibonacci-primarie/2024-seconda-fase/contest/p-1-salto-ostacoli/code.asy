access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);
BLOCK_PADDING = .3;

element P =
    block_sequence(
        for_block(
            block_content(e("ripeti mentre"), cond_block(data_block(e("posizione")), e("minore di"), data_block(e("traguardo"))), e(":")),
            else_block(
                block_content(e("se"), cond_block(e("pietra marrone"))),
                instr_block(element("salta")),
                block_content(e("altrimenti: ")),
                instr_block(element("avanza"))
            )
        )
    );

add(P.drawing());
