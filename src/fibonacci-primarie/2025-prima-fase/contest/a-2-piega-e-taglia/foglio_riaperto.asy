
// Funzione che restituisce una picture di un foglio
picture draw(real s = 1)
{
    picture result;

    // Definizione del foglio
    path shape = (0,0) -- (4,0) -- (4,4) -- (0,4) -- cycle;

    // Riempimento e contorno
    fill(result, scale(s)*shape, gray(0.85));
    filldraw(result, scale(s)*shift(0,2)*scale(0.5)*shape, palegray*0.5 + 0.5*lightred);
    draw(result, scale(s)*shape, black+1.5);
    draw(result, (0,2) -- (4,2), black+dashed+1);
    draw(result, (2,0) -- (2,4), black+dashed+1);
    draw(result, (2,3) -- (3.4,3), deepred+1, EndArrow);
    draw(result, (1,2) -- (1,0.6), deepred+1, EndArrow);
    draw(result, (2,2) -- (3,1), deepred+1, EndArrow);

    return result;
}

unitsize(1cm);
add(draw());
