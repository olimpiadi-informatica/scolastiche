access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    5*BLOCK_PADDING,
    fill_space=0,
    block_sequence(
        start_block(element("Opzione 1:")),
        for_block(
            block_content(e("ripeti"), data_block(e("8")), e("volte:")),
            block_sequence(
                instr_block(element("mangia carota")),
                instr_block(element("avanza"))
            )
        ),
        instr_block(element("mangia carota"))
    ),
    block_sequence(
        start_block(element("Opzione 2:")),
        for_block(
            block_content(e("ripeti"), data_block(e("8")), e("volte:")),
            block_sequence(
                if_block(
                    block_content(e("se"), cond_block(e("roccia marrone"))),
                    instr_block(element("mangia carota"))
                ),
                instr_block(element("avanza"))
            )
        ),
        instr_block(element("mangia carota"))
    ),
    block_sequence(
        start_block(element("Opzione 3:")),
        for_block(
            block_content(e("ripeti"), data_block(e("2")), e("volte:")),
            block_sequence(
                instr_block(element("mangia carota")),
                for_block(
                    block_content(e("ripeti"), data_block(e("4")), e("volte:")),
                    block_sequence(
                        instr_block(element("avanza")),
                        if_block(
                            block_content(e("se"), cond_block(e("roccia marrone"))),
                            instr_block(element("mangia carota"))
                        )
                    )
                )
            )
        )
    ),
    block_sequence(
        start_block(element("Opzione 4:")),
        instr_block(element("mangia carota")),
        for_block(
            block_content(e("ripeti"), data_block(e("4")), e("volte:")),
            block_sequence(
                instr_block(element("avanza")),
                if_block(
                    block_content(e("se"), cond_block(e("roccia marrone"))),
                    instr_block(element("mangia carota"))
                ),
                instr_block(element("avanza"))
            )
        ),
        instr_block(element("mangia carota"))
    ),
    block_sequence(
        start_block(element("Opzione 5:")),
        for_block(
            block_content(e("ripeti"), data_block(e("4")), e("volte:")),
            block_sequence(
                if_block(
                    block_content(e("se"), cond_block(e("roccia marrone"))),
                    instr_block(element("mangia carota"))
                ),
                instr_block(element("avanza"))
            )
        ),
        instr_block(element("mangia carota")),
        for_block(
            block_content(e("ripeti"), data_block(e("4")), e("volte:")),
            block_sequence(
                instr_block(element("avanza")),
                if_block(
                    block_content(e("se"), cond_block(e("roccia marrone"))),
                    instr_block(element("mangia carota"))
                )
            )
        )
    )
);

add(P.drawing());
