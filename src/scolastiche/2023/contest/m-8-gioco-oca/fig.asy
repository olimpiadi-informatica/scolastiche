access "../../../../asy_library/pictures/bunny_silouhette.asy" as bunny_silouhette;

unitsize(2cm);
import fontsize;
defaultpen(fontsize(28));

void draw_tabellone(int n = 4, int m = 3) {
    real b = 0.1;
    path p = (-b, -b)--(-b, m+b)--(n+b, m+b)--(n+b, -b)--cycle;
    filldraw(p, brown);
    p = (0, 0)--(0, m)--(n, m)--(n, 0)--cycle;
    filldraw(p, white);
    
    
    int cont = 1;
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            path p = (i, j)--(i, j+1)--(i+1, j+1)--(i+1, j)--cycle;
            if(cont == 1) filldraw(p, 0.5*purple+0.5*white);
            if(cont == 2) filldraw(p, green);
            if(cont == 3) filldraw(p, pink);
            if(cont == 4) filldraw(p, red);
            if(cont == 11) filldraw(p, orange);
            if(cont == 6) filldraw(p, cyan);
            if(cont == 7) filldraw(p, magenta);
            if(cont == 12) filldraw(p, 0.5*fuchsia+0.5*white);
            if(cont == 9) filldraw(p, springgreen);
            if(cont == 10) filldraw(p, yellow);
            ++cont;
        }
    }

    b = 0.1;
    p = (-b+1, -b+1)--(-b+1, m+b-1)--(n+b-1, m+b-1)--(n+b-1, -b+1)--cycle;
    filldraw(p, brown);
    p = (1, 1)--(1, m-1)--(n-1, m-1)--(n-1, 1)--cycle;
    filldraw(p, white);
    
    cont = 1;
    for (int j = 0; j < n; ++j) {
        label("\textbf{" + string(cont) + "}", (j,m) + (0.5,-0.5));
        cont += 1;
    }
    label("\textbf{" + string(cont) + "}", (3,2) + (0.5,-0.5));
    ++cont;
    for (int j = n-1; j >= 0; --j) {
        label("\textbf{" + string(cont) + "}", (j,1) + (0.5,-0.5));
        cont += 1;
    }
    label("\textbf{" + string(cont) + "}", (0,2) + (0.5,-0.5));
    
    add(shift(0.3, 3.4)*bunny_silouhette.drawing(0.05));
}

draw_tabellone();
