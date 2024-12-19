access "../../../../asy_library/pictures/barn.asy" as barn;

real STEP = 9;

pen[] barncols = {red, deepgreen, olive, blue, heavycyan};
pen[] fieldcols = {palegreen, paleyellow, palegray, palered, 0.5*palegreen+0.5*paleyellow};

path wiggline(pair a, pair b) {
    int n = 2 + rand()%8;
    real r = 2;
    pair s = (b-a)/n;
    path p = a;
    for (int i=1; i<n; ++i) p = p -- a + i*s + (unitrand()-0.5, unitrand()-0.5)*r;
    p = p -- b;
    return p;
}

path[] make_borders(int n) {
    path[] borders;
    for (int i=0; i<=n; ++i)
        borders[i] = wiggline((-2,-2), (-2,9));
    return borders;
}

int[] gen_skips(int s) {
    int[] skips;
    if (s == 1) {
        skips[0] = rand() % 6;
    } else if (s == 2) {
        skips[0] = (rand()%3) * 2;
        skips[1] = (skips[0]+2+rand()%2)%6;
        skips[0] += rand()%2;
        skips = sort(skips);
    } else if (s == 3 && rand()%4 > 0) {
        skips[0] = skips[1] = skips[2] = 0;
        while (skips[0] == skips[1] && skips[1] == skips[2]) {
            skips[0] = rand()%2;
            skips[1] = rand()%2;
            skips[2] = rand()%2;
        }
        skips[1] += 2;
        skips[2] += 4;
    }
    if (s == 3 && skips.length == 0) {
        skips[0] = 2;
        skips[1] = 3;
        skips[2] = rand()%2 + (rand()%2 == 0 ? 0 : 4);
        skips = sort(skips);
    }
    return skips;
}

int[] invert(int[] v) {
    int[] w;
    int j=0;
    for (int i=0; i<6; ++i) {
        if (j < v.length && v[j] == i) j += 1;
        else w[w.length] = i;
    }
    return w;
}

pair[] make_farms(int s) {
    int[] v = gen_skips(s > 3 ? 6-s : s);
    if (s >= 3) v = invert(v);
    pair[] farms;
    for (int p : v) {
        int x = p%2;
        int y = p#2;
        farms[farms.length] = 3*(x, y)+(unitrand(), unitrand())*1.5;
    }
    return farms;
}

picture country(path[] borders, pair[] farms, int i, int n) {
    picture pic;
    path border = borders[i] -- wiggline((-2,9), (STEP-2,9)) -- shift(STEP,0)*reverse(borders[i+1]) -- wiggline((STEP-2,-2), (-2,-2)) -- cycle;
    filldraw(pic, border, fieldcols[i], black+5);
    return pic;
}

picture country_farms(path[] borders, pair[] farms, int i, int n) {
    picture pic;
    for (pair f : farms) {
        add(pic, shift(f)*barn.drawing(0.3, barncols[i]));
    }
    return pic;
}