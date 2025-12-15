access "sheet.asy" as sheet;

// Restituisce una picture contenente i 4 fogli sovrapposti
picture draw()
{
    unitsize(1cm);

    picture result;

    // --- Foglio 1 ---
    pair A = (0,0), B = (2,0), C = (2,2), D = (-0.2,1.8);
    picture p1 = sheet.draw(A, B, C, D, gray);

    // --- Foglio 2 ---
    D = (0,2);
    picture p2 = sheet.draw(A, B, C, D, gray(0.8));

    // --- Foglio 3 ---
    A = (0.4,0.6);
    D = (0.2,2.4);
    picture p3 = sheet.draw(A, B, C, D, gray);

    // --- Foglio 4 ---
    D = (0.4,2.6);
    picture p4 = sheet.draw(A, B, C, D, gray(0.85));

    // --- Inserimento nell’ordine giusto ---
    add(result, scale(2) * p1);
    add(result, scale(2) * p2);
    add(result, scale(2) * p3);
    add(result, scale(2) * p4);

    return result;
}
