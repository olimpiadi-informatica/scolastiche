unitsize(1cm);

access "foglio_aperto.asy" as fa;
access "foglio_mezzo.asy" as fm;
access "foglio_piegato.asy" as fp;
access "cut/cut_A.asy" as a;
access "cut/cut_B.asy" as b;
access "cut/cut_C.asy" as c;
access "cut/cut_D.asy" as d;
access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout;

picture arrow(real length = 2, real y = 0)
{
    picture result;
    draw(result, (0,y) -- (length,y), black+3);

    path arrow =
    (length,y+0.1) -- (length+0.3,y) --
    (length,y-0.1) -- cycle;

    filldraw(result, arrow, black, black);

    return result;
}

picture[] options = { a.draw(), b.draw(), c.draw(), d.draw() };

// Ottieni i picture
picture A = fa.draw();
picture B = scale(1.2)*fm.draw();
picture C = scale(0.8)*fp.draw();
picture D = scale(2)*options[ans1 - 1];
picture freccia = arrow();


// Aggiungi al canvas finale
add(row(padding = 1, element(A), element(freccia), element(B), element(freccia), element(C), element(freccia), element(D)).drawing());
