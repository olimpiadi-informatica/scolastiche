access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 1.5;
ALIGN = (0, 0.5);

element P = row(
    BLOCK_PADDING + 1,
    fill_space=0,
    for_block(
        block_content(e("ripeti mentre"), cond_block(cond_block(data_block(e("carote rimaste")), e("$\ge$"), data_block(e("5"))), e("e"), cond_block(data_block(e("patate rimaste")), e("$\ge$"), data_block(e("2")))), e(":")),
        else_block(
            block_content(e("se"), cond_block(data_block(e("carote rimaste")), e("$>$"), data_block(e("patate rimaste"))), e("fai:")),
            instr_block(e("mangia carote"), data_block(e("5"))),
            block_content(e("altrimenti: ")),
            instr_block(e("mangia patate"), data_block(e("2")))
        )
    )
);

add(P.drawing());
