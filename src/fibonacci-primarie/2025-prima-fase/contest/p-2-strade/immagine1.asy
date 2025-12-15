access "../../../../asy_library/structures/utils.asy" as utils;

unitsize(1cm);
unravel utils;


real k = 2.0;
unitsize(k * 1cm);

// STILI
pen grid_style = gray(0.6) + linewidth(0.5) + linetype("4 4");
// Penna "bianchetto" per cancellare il tratteggio sotto la linea nera
pen eraser_style = white + linewidth(4.0);
// Penna Linea Finale
pen line_style = gray(0) + linewidth(2.5);
// Penna Arrivo (Croce Verde)
pen finish_pen = heavygreen + linewidth(2.5);

// 1. Disegna le linee verticali della GRIGLIA
for (int i = 0; i <= M; ++i) {
    draw((i, -0.2) -- (i, N+0.2), grid_style);
}

// 2. Disegna le linee orizzontali della GRIGLIA
for (int j = 0; j <= N; ++j) {
    draw((-0.2, j) -- (M+0.2, j), grid_style);
}

string ALPHA = "ABCDEFGH";

// 3. Numeri per le COLONNE (1...M)
for (int c = 1; c <= M+1; ++c) {
    // Label "1" a x=0, "2" a x=1...
    label("\textsf{"+string(c)+"}", (c-1, -0.2), -S, fontsize(20pt));
    label("\textsf{"+string(c)+"}", (c-1, N+0.2), S, fontsize(20pt));
}

// 4. Numeri per le RIGHE (1...N)
for (int r = 1; r <= N+1; ++r) {
    // Label "1" a y=0, "2" a y=1...
    label("\textsf{"+substr(ALPHA,r-1,1)+"}", (-0.2, r-1), W, fontsize(20pt));
    label("\textsf{"+substr(ALPHA,r-1,1)+"}", (M+0.2, r-1), E, fontsize(20pt));
}


for (int i = 0; i < sx.length; ++i) {
    
    // Disegna solo se non è un punto singolo (dummy line)
    if (sx[i] != ex[i] || sy[i] != ey[i]) {
        path segmento = (sx[i], sy[i]) -- (ex[i], ey[i]);

        // A. Disegna prima bianco spesso per cancellare il tratteggio sotto
        draw(segmento, eraser_style);

        // B. Disegna la linea nera
        draw(segmento, line_style);
        
        // C. Pallini agli estremi per pulizia visiva
        dot((sx[i], sy[i]), line_style);
        dot((ex[i], ey[i]), line_style);
    }
}

// 6. Disegna i PUNTI SPECIALI

// Punto di Domanda / Partenza (coors_to_find) -> PALLINO ROSSO
fill(circle((qx, qy), 0.1), red);

fill(rect((-0.1,-0.1), (0.1,0.1)), finish_pen);

currentpicture = reflect((0,0), (1,0))*currentpicture;