access "sheet.asy" as sheet;
access "../../../../asy_library/pictures/scissors.asy" as scissors;

// Restituisce una picture con due fogli sovrapposti,
// scala selezionabile e linea tratteggiata opzionale.
picture draw(real s = 1,
                      pair dA,
                      pair dB,
                      pair dC,
                      bool drawDashed = true)
{
    picture result;

    // --- Foglio 1 ---
    pair A = (0,0), B = (2,0), C = (2,2), D = (-0.05, 2.05);
    picture p1 = sheet.draw(A, B, C, D, gray);

    // --- Foglio 2 ---
    D = (0,2);
    picture p2 = sheet.draw(A, B, C, D, gray(0.8));

    // --- Inserimento sovrapposto ---
    add(result, scale(s) * p1);
    add(result, scale(s) * p2);

    // --- Linea tratteggiata opzionale ---
    if(drawDashed) {
        draw(result, scale(s) * (dA -- dB -- dC),
             dashed + black + 1);
        add(result, shift(dA)*rotate(degrees(dB-dA)+90)*scissors.drawing(0.05));
    }

    return result;
}
