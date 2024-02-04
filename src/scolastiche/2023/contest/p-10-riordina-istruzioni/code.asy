access "../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element option(int i, string text) {
    return row(
        fill_space = 0,
        element(string(i)+":", 3),
        instr_block(element(text))
    );
}

element P = column(
    padding = 1,
    option(1, "il contenuto di $x$ diventa 2"),
    option(2, "il contenuto di $x$ viene moltiplicato per 2"),
    option(3, "il contenuto di $x$ aumenta di 1")
);

add(P.drawing());
