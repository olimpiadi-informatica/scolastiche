
// Funzione che restituisce una picture di un foglio
picture draw(real s = 1)
{
    picture result;

    // Definizione del foglio
    path shape = (0,0) -- (4,0) -- (4,2) -- (0,2) -- cycle;

    // Riempimento e contorno
    filldraw(result, scale(s)*shape, gray, black+1.5);

    shape = (0,0) -- (4,0) -- (4.2,1.8) -- (0.2,1.8) -- cycle;
    filldraw(result, scale(s)*shape, gray(0.85), black+1.5);

    draw(result, (2,-0.5) -- (2,2.5), black+dashed+1);

    return result;
}

