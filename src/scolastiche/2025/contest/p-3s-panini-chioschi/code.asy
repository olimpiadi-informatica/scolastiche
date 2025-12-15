access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    BLOCK_PADDING + 1,
    fill_space=0,
    block_sequence(
        else_block(
            block_content(e("se"), cond_block(e("chiosco")), e("fai:")),
            block_sequence(
                instr_block(e("compra panini"), data_block(e("2"))),
                if_block(
                    block_content(e("se"), cond_block(e("salita")), e("fai:")),
                    instr_block(e("mangia panini"), data_block(e("2")))
                )
            ),
            block_content(e("altrimenti: ")),
            if_block(
                block_content(e("se"), cond_block(e("salita")), e("fai:")),
                instr_block(e("mangia panini"), data_block(e("1")))
            )
        ),
        instr_block(e("cammina"))
    )
);

add(P.drawing());
