access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);
BLOCK_PADDING = .3;

element P =
    block_sequence(
        instr_block(element("il contenuto di $i$ diventa 1")),
        for_block(
            element("ripeti 100 volte:"),
            block_sequence(
                instr_block(element("il contenuto di $j$ diventa 1")),
                for_block(
                    element("ripeti 100 volte:"),
                    block_sequence(
                        if_block(
                            element("se $i \times j$ è uguale a 100:"),
                            instr_block(element("stampa il contenuto di $j$"))
                        ),
                        instr_block(element("il contenuto di $j$ aumenta di 1"))
                    )
                ),
                instr_block(element("il contenuto di $i$ aumenta di 1"))
            )
        )
    );

add(P.drawing());
