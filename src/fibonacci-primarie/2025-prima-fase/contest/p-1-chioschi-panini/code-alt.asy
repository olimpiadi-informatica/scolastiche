access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    BLOCK_PADDING + 1,
    fill_space=0,
    block_sequence(
        if_block(
            block_content(e("se"), cond_block(e("chiosco")), e("fai:")),
            instr_block(e("compra panino"))
        ),
        if_block(
            block_content(e("se"), cond_block(e("salita")), e("fai:")),
            instr_block(e("mangia panino"))
        ),
        instr_block(e("cammina"))
    )
);

add(P.drawing());
