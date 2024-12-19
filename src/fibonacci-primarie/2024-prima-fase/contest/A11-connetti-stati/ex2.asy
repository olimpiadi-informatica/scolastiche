import stati;

unitsize(1cm);

srand(43);
path[] borders = make_borders(5);
pair[][] farms;
for (int i=0; i<2; ++i) {
    farms[i] = make_farms(2);
    add(shift(STEP*i,0)*country(borders, farms[i], (i+3), 2));
}

void arrdraw(pair a, pair b, pen p) {
    draw(a -- (b + unit(a-b)*1.2), p, EndArrow(15));
}

pen mydot = linetype(new real[] {0,2});

arrdraw(farms[0][0], shift(STEP,0)*farms[1][0], heavyred+mydot+6);
arrdraw(farms[0][1], shift(STEP,0)*farms[1][1], heavyred+mydot+6);
arrdraw(shift(STEP,0)*farms[1][1], farms[0][0], heavyred+mydot+6);
arrdraw(shift(STEP,0)*farms[1][0], shift(STEP,0)*farms[1][1], blue+4);
arrdraw(farms[0][0], farms[0][1], blue+4);

for (int i=0; i<2; ++i) {
    add(shift(STEP*i,0)*country_farms(borders, farms[i], (i+3), 2));
}
