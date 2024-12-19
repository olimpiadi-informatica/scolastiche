import stati;

unitsize(1cm);

path[] borders = make_borders(n);
pair[][] farms;
for (int i=0; i<n; ++i) {
    farms[i] = make_farms(s);
    add(shift(STEP*i,0)*country(borders, farms[i], i, s));
    add(shift(STEP*i,0)*country_farms(borders, farms[i], i, s));
}
