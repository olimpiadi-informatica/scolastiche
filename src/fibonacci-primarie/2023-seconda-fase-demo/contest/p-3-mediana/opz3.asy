access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element P =
    instr_block(e("scambia il valore di"), data_block(e("$A$")), e("con quello di"), data_block(e("$C$")));

add(P.drawing());
