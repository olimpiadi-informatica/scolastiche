import "../../../../asy_library/structures/graph.asy" as graph;
import "../../../../asy_library/pictures/bunny_polychrome.asy" as bunny;
import "../../../../asy_library/pictures/carrot.asy" as carrot;
import "../../../../asy_library/pictures/lock.asy" as lock;

unitsize(1cm);

graph.NODE_SIZE = 0.6;
graph.TEXT_SIZE = 1.5;
graph.FOREGROUND = black;
graph.BACKGROUND = white;

picture draw_variant(int n, int[] X, int[] Y, int[] types, int[][] edges) {
    pair[] node_pos = new pair[n];
    pen[] node_bg = new pen[n];
    pen[] node_fg = new pen[n];
    string[] node_lbl = new string[n];

    for(int i=0; i<n; ++i) {
        node_pos[i] = (X[i], Y[i]);
        
        node_lbl[i] = "";

        if (types[i] == 0) { 
            // Interno Libero
            node_bg[i] = white; 
            node_fg[i] = black;
        } else if (types[i] == 1) { 
            // Interno Bloccato -> Sfondo BIANCO per il lucchetto
            node_bg[i] = white;
            node_fg[i] = black; 
        } else if (types[i] == 2) { 
            // Foglia Bianca (Coniglio)
            node_bg[i] = white;
            node_fg[i] = black;
        } else if (types[i] == 3) { 
            // Foglia Nera (Carota)
            node_bg[i] = white; 
            node_fg[i] = black; 
        }
    }

    // Disegna grafo base
    picture pic = graph.drawing(
        node_position = node_pos,
        node_text = node_lbl,
        node_foreground = node_fg,
        node_background = node_bg,
        edge_vertex = edges,
        edge_color = sequence(new pen(int i){ return gray+1.5; }, edges.length)
    );

    // Aggiungi immagini
    for(int i=0; i<n; ++i) {
        if (types[i] == 1 || types[i] == 2 || types[i] == 3) {
            picture p;
            
            if (types[i] == 1) {
                // --- LOCK (Grigio) ---
                // lock.drawing(col, col2, k) -> Passiamo gray
                p = lock.drawing();
                p = scale(1.5) * p;
            } else if (types[i] == 2) {
                // --- BUNNY ---
                p = bunny.drawing(10); 
            } else {
                // --- CARROT ---
                // Genera piccolo (linee sottili) poi scala
                 p = carrot.drawing(0.15);
                
                p = scale(18) * p;
            }

            // Centra l'immagine
            p = shift(-0.5*(min(p)+max(p))) * p;

            // Aggiungi
            add(pic, p, node_pos[i]);
        }
    }

    return pic;
}


add(draw_variant(n2, x2, y2, col3, edges2));
