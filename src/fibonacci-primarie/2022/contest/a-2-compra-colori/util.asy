unitsize(1cm);
settings.outformat = "pdf";

defaultpen(linewidth(1.5));

pen border0 = blue;
pen fill0 = paleblue;
pen border1 = mediumred;
pen fill1 = palered;

path rect(pair p, pair q) {
    return p -- (p.x,q.y) -- q -- (q.x,p.y) -- cycle;
}

void disegna(int[] numeri, int[] type) {
    int n = numeri.length;

    real size = 0.7;

    for(int i = 0; i < n; ++i) {
        real shift = size * i * 1.2;
        label(string(numeri[i]), (shift, 0));

        if(type[i] == 0) {
            path r = rect((-size/2 + shift, -size/2), (size/2 + shift, size/2));
            filldraw(r, fill0);
            draw(r, border0);
        } else {
            path r = circle((shift, 0), size/2);
            filldraw(r, fill1);
            draw(r, border1);
        }
    }
}
