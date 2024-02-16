access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P =
    block_sequence(
        instr_block(e("imposta"), choice_block(e("$P$")), e("a"), data_block(e("$0$"))),
        if_block(
            block_content(e("se"), cond_block(data_block(e("$P$")), e("è più piccolo di"), data_block(e("$N-1$"))), e("fai:")),
            block_sequence(
                for_block(
                    block_content(e("ripeti"), choice_block(e("fino a che")), cond_block(data_block(e("l'elemento in posizione"), data_block(e("$P$")), e("di"), data_block(e("$A$"))), e("vale"), data_block(e("$0$"))), e("fai:")),
                    instr_block(e("imposta"), choice_block(e("$P$")), e("a"), data_block(e("$P+1$")))
                ),
                if_block(
                    block_content(e("se"), cond_block(data_block(e("l'elemento in posizione"), data_block(e("$P+1$")), e("di"), data_block(e("$A$"))), e("vale"), data_block(e("$1$"))), e("fai:")),
                    instr_block(e("stampa"), data_block(e("\emph{``trovato''}")))
                )
            )
        )
    );

add(P.drawing());
