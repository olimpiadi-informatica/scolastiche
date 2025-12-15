access "../../../../asy_library/pictures/apple.asy" as apple;
access "../../../../asy_library/pictures/tree.asy" as tree;
access "../../../../asy_library/pictures/trash_transparent.asy" as bucket;
access "../../../../asy_library/pictures/bunny_polychrome.asy" as bunny;
access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; 
unitsize(1cm);

// --- COSTRUZIONE DEI DISEGNI ---

// L’albero
picture ptree = scale(4.5) * tree.drawing();

// Mela base
picture papple = scale(0.25) * apple.drawing();

// Cestino
picture pbucket = xscale(0.9) * yscale(0.5) * bucket.drawing(color=brown);


// Coniglio (riflesso e ridotto)
picture pbunny = reflect((0,0),(0,1)) * bunny.drawing(0.85, bunny.carol_col);

// --- LISTA DELLE COORDINATE DELLE MELE ---
pair applePositions[] = {
    (1.6, 1.1),
    (-0.3, 1),
    (1.2, 2.4),
    (1.9, 3.6),
    (-0.3, 2.6),
    (3, 2.2),
    (-2, 2),
    (-1.7, 3.4),
    (0, 4.2)
};

// Parametri per sollevare e distanziare le mele
real raise = 4.5;
real spread = 0.15;

// --- AGGIUNTA DELLE MELE SULL’ALBERO ---
picture treeWithApples = ptree;

for (int i = 0; i < n; ++i) {
    pair p = applePositions[i];
    p = (p.x + spread * (p.x >= 0 ? 1 : -1), p.y + raise);
    add(treeWithApples, shift(p) * papple);
}

// --- AGGIUNTA DEGLI ELEMENTI AL DISEGNO FINALE ---
add(treeWithApples);                    // albero con mele
add(shift(-3,2) * pbunny);              // coniglio spostato a sinistra
add(shift(-1.1,-0.1) * pbucket);        // cestino spostato a destra
