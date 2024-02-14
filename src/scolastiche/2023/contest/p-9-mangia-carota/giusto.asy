access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P =
    block_sequence(
        block_sequence(
            instr_block(element("avanza")),
            instr_block(element("apri porta")),
            instr_block(element("avanza")),
            instr_block(element("avanza")),
            instr_block(element("apri porta")),
            instr_block(element("avanza")),
            instr_block(element("mangia carota"))
        )
    );

add(P.drawing());
