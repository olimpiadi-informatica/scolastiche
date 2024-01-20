access "../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);
BLOCK_PADDING = .3;

element P =
    block_sequence(
        block(element("il contenuto di $i$ diventa 1\phantom{bp}"), orange),
        nested_blocks(
            magenta,
            element("ripeti 100 volte:\phantom{bp}"),
            block_sequence(
                block(element("il contenuto di $j$ diventa 1\phantom{bp}"), orange),
                nested_blocks(
                    magenta,
                    element("ripeti 100 volte:\phantom{bp}"),
                    block_sequence(
                        nested_blocks(
                            yellow,
                            element("se $i \times j$ è uguale a 100:\phantom{bp}"),
                            block(element("stampa il contenuto di $j$\phantom{bp}"), orange)
                        ),
                        block(element("il contenuto di $j$ aumenta di 1\phantom{bp}"), orange)
                    )
                ),
                block(element("il contenuto di $i$ aumenta di 1\phantom{bp}"), orange)
            )
        )
    );

add(P.drawing());
