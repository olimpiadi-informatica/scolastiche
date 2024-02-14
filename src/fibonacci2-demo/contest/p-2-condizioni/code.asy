access "../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

ALIGN = (0, 0.5);

element P =
    else_block(
        block_content(e("se"), cond_block(data_block(e("$A$")), e("è più grande di"), data_block(e("$B$"))), e("fai:")),
        else_block(
            block_content(e("se"), cond_block(data_block(e("$A$")), e("è più grande di"), data_block(e("$C$"))), e("fai:")),
            instr_block(e("stampa"), data_block(e("$A$"))),
            element("altrimenti:"),
            instr_block(e("stampa"), data_block(e("$C$")))
        ),
        element("altrimenti:"),
        else_block(
            block_content(e("se"), cond_block(data_block(e("$B$")), e("è più grande di"), data_block(e("$C$"))), e("fai:")),
            instr_block(e("stampa"), data_block(e("$B$"))),
            element("altrimenti:"),
            instr_block(e("stampa"), data_block(e("$C$")))
        )
    );

picture pic = P.drawing();
real size = max(pic, true).x;
draw((-0.8*size,1) -- (1.8*size,1), invisible);
add(pic);
