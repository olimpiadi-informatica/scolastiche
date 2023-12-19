access "../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P =
    block_sequence(
        block_sequence(
            block(element("avanza\phantom{bp}"), orange),
            block(element("apri porta"), orange),
            block(element("avanza\phantom{bp}"), orange),
            block(element("apri porta"), orange),
            block(element("avanza\phantom{bp}"), orange),
            block(element("mangia carota"), orange)
        )
    );

add(P.drawing());
