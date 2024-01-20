unitsize(1cm);
settings.tex = "pdflatex";
defaultpen(fontsize(10pt));

path rect(pair p, pair q) {
    return p -- (p.x,q.y) -- q -- (q.x,p.y) -- cycle;
}

picture program(string[] lines, string name) {
    picture pic;

    real height = 0.45;
    int n = lines.length;

    pair p = (-0.5, 0.8);
    pair q = (3.2, -height * n);

    label(pic, name, ((p.x + q.x)/2, 0.55));

    for(int i = 0; i < n; ++i) {
        label(pic, string(i+1), (0, -i * height), W);
        label(pic, lines[i], (0, -i * height), E, font("pcrr"));
    }

    draw(pic, rect(p, q), linewidth(1.2));
    draw(pic, (p.x + 0.2, height / 2 + 0.1) -- (q.x - 0.2, height / 2 + 0.1));
    draw(pic, (0, height / 2) -- (0, height * (-n + 0.5)), gray);

    return pic;
}

void disegna(string[][] programs) {
    for(int i = 0; i < programs.length; ++i) {
        string name = "P" + string(i+1);
        add(shift((i * 5, 0)) * program(programs[i], name));
    }
}
