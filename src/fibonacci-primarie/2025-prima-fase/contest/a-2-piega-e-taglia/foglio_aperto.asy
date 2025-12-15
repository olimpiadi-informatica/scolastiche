
// Funzione che restituisce una picture di un foglio
picture draw(real s = 1)
{
    picture result;

    // Definizione del foglio
    path shape = (0,0) -- (4,0) -- (4,4) -- (0,4) -- cycle;

    // Riempimento e contorno
    filldraw(result, scale(s)*shape, gray(0.85), black+1.5);
    draw(result, (-0.5,2) -- (4.5,2), black+dashed+1);

    return result;
}

