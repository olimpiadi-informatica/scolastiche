access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P =
    block_sequence(
        todo_block(e("\bf ???", 4)),
        if_block(
            block_content(e("se"), cond_block(data_block(e("$B$")), e("è più grande di"), data_block(e("$C$"))), e("fai:")),
            instr_block(e("scambia il valore di"), data_block(e("$B$")), e("con quello di"), data_block(e("$C$")))
        ),
        if_block(
            block_content(e("se"), cond_block(data_block(e("$A$")), e("è più grande di"), data_block(e("$B$"))), e("fai:")),
            instr_block(e("scambia il valore di"), data_block(e("$A$")), e("con quello di"), data_block(e("$B$")))
        ),
        instr_block(e("stampa"), data_block(e("$B$")))
    );

add(P.drawing());
