access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P = row(
    BLOCK_PADDING + 1,
    fill_space=0,
    for_block(
        block_content(e("ripeti"), data_block(e("3")), e("volte:")),
        block_sequence(
            instr_block(e("avanza al prossimo incrocio")),
            instr_block(e("avanza al prossimo incrocio")),
            instr_block(e("gira a sinistra"))
        )
    )
);

add(P.drawing());
