access "../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

element word(string w) {
    element[][] es = {{}};
    for (int i=0; i<length(w); ++i) es[0][i] = element("\textsf{"+substr(w, i, 1)+"}");
    return grid(0.5, even_cols=true, black+3, es);
}

element G = row(padding=3,
    column(padding=0.3, word("OIOIOI"), element("nome valido")),
    column(padding=0.3, word("OIOIIO"), element("nome non valido", heavyred))
);
add(G.drawing());
draw(shift(20.3,2)*xscale(2.8)*yscale(0.7)*unitcircle, heavyred+5);