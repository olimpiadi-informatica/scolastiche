unitsize(1cm);

access "../../../../asy_library/pictures/book.asy" as libro;
access "../../../../asy_library/structures/layout.asy" as layout;
access "../../../../asy_library/structures/utils.asy" as utils;

unravel layout;
unravel utils;

pen[] colori = {red, lightblue, green, orange, 0.7*purple+0.3*white, yellow, cyan, magenta};

string[] greek = {"\alpha", "\nu", "\beta", "\xi", "\gamma", "\delta", "\pi", "\epsilon", "\rho", "\zeta", "\sigma", "\eta", "\tau", "\theta", "\upsilon", "\iota", "\phi", "\kappa", "\chi", "\lambda", "\psi", "\mu", "\omega"};

string randtitle(int n) {
    string s = "$";
    for (int i=0; i<n; ++i) s = s + greek[rand()%greek.length];
    return s+"$";
}

// --- Funzione per creare una pila di libri da una lista di numeri ---
element drawPila(int h, real s = 1) {
    element[] elems;
    for(int i = 0; i < h; ++i) {
        picture pic = libro.drawing(col = colori[i]*0.5 + gray*0.5, rand()%3 == 0);
        label(pic, scale(1.5)*randtitle(3+rand()%4), (min(pic,true)+max(pic,true))/2);
        elems.push(element(pic));
    }
    return column(align = (0.5, 0), fill_space = (1,0), padding=-1 ...elems);
}

// --- Esempio di utilizzo ---
element[] pile;
for(int i = 0; i < n; ++i) {
    pile.push(drawPila(altezze[i], 0.7)); 
}

picture books = row(padding = 1 ...pile).drawing();
unitsize(books, 1cm);

pair mn = min(books, true) + (-0.5,+0.5);
pair mx = max(books, true) + (+0.5,-0.5);

int h = 0;
for (int x : altezze) h = max(h, x);
real step = (mx.y - mn.y)/h;

for (int i=0; i<h; ++i)
    filldraw(rect((mn.x, step*i+mn.y), (mx.x, step*min(i+1,h+0.5)+mn.y)), (h-i)%2 == 1 ? white : palegray, gray);

filldraw(rect((mn.x, -0.5*step+mn.y), (mx.x, mn.y+0.1)), rgb("875b52"), 0.6*rgb("875b52")+4);

add(books);
