access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    BLOCK_PADDING + 1,
    fill_space=0,
    for_block(
        block_content(e("ripeti mentre"), cond_block(e("luce accesa")), e(":")),
        block_sequence(
            if_block(
                block_content(e("se"), cond_block(e("porta chiusa")), e("fai:")),
                block_sequence(
                    instr_block(e("premi interruttore")),
                    instr_block(e("apri porta"))
                )
            ),
            instr_block(e("avanza"))
        )
    )
);

add(P.drawing());
