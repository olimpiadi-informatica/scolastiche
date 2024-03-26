access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    BLOCK_PADDING,
    fill_space=0,
    block_sequence(
        instr_block(element("imposta"), choice_block(e("mucchio sinistro")), element("a"), data_block(e("2024")), e("carote")),
        instr_block(element("imposta"), choice_block(e("mucchio destro")), element("a"), data_block(e("3024")), e("carote")),
        for_block(
            block_content(e("ripeti fino a che"), cond_block(cond_block(data_block(e("mucchio sinistro")), e("ha meno carote di"), data_block(e("7"))), e("o"), cond_block(data_block(e("mucchio destro")), e("ha meno carote di"), data_block(e("7")))), e(":")),
            block_sequence(
                else_block(
                    block_content(e("se"), cond_block(data_block(e("mucchio sinistro")), e("ha meno carote di"), data_block(e("mucchio destro")))),
                    block_sequence(
                        instr_block(choice_block(e("Bunny")), e("mangia"), data_block(e("3")), e("carote da"), choice_block(e("mucchio sinistro"))),
                        instr_block(choice_block(e("Tip-Tap")), e("mangia"), data_block(e("7")), e("carote da"), choice_block(e("mucchio destro")))
                    ),
                    block_content(e("altrimenti:")),
                    block_sequence(
                        instr_block(choice_block(e("Tip-Tap")), e("mangia"), data_block(e("6")), e("carote da"), choice_block(e("mucchio sinistro"))),
                        instr_block(choice_block(e("Bunny")), e("mangia"), data_block(e("4")), e("carote da"), choice_block(e("mucchio destro")))
                    )
                )
            )
        ),
        instr_block(choice_block(e("Carol")), e("mangia"), data_block(e("mucchio sinistro")), e("carote da"), choice_block(e("mucchio sinistro"))),
        instr_block(choice_block(e("Carol")), e("mangia"), data_block(e("mucchio destro")), e("carote da"), choice_block(e("mucchio destro")))
    )
);

add(P.drawing());
