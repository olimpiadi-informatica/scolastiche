import stati;

unitsize(1cm);

srand(43);
path[] borders = make_borders(5);
pair[][] farms;
for (int i=0; i<3; ++i) {
    farms[i] = make_farms(2);
    add(shift(STEP*i,0)*country(borders, farms[i], (i+2), 2));
}

pen mydot = linetype(new real[] {0,2});

draw(farms[0][0] -- shift(STEP,0)*farms[1][0], heavyred+mydot+6);
draw(farms[0][1] -- shift(STEP*2,0)*farms[2][1], heavyred+mydot+6);
draw(shift(STEP,0)*farms[1][1] -- shift(STEP*2,0)*farms[2][1], heavyred+mydot+6);
draw(farms[0][0] -- shift(STEP,0)*farms[1][1], heavyred+mydot+6);
draw(shift(STEP,0)*farms[1][0] -- shift(STEP,0)*farms[1][1], blue+4);
draw(shift(STEP*2,0)*farms[2][0] -- shift(STEP*2,0)*farms[2][1], blue+4);

for (int i=0; i<3; ++i) {
    add(shift(STEP*i,0)*country_farms(borders, farms[i], (i+2), 2));
}
