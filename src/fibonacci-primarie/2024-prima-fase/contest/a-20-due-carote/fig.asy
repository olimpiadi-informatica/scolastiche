unitsize(0.7cm);
access "../../../../asy_library/pictures/bunny_polychrome.asy" as bunny_polychrome;
access "../../../../asy_library/pictures/paint_bucket.asy" as paint_bucket;
access "../../../../asy_library/pictures/carrot.asy" as carrot;
access "../../../../asy_library/pictures/table.asy" as table;
access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

picture pbunny = reflect((2, 1), (2, 0))*bunny_polychrome.drawing(1.2, bunny_polychrome.bunny_col);
add(pbunny, shift(4.8, -1.4)*carrot.drawing(0.12));

picture pcarol = bunny_polychrome.drawing(1.2, bunny_polychrome.carol_col);
add(pcarol, shift(-0.9, -1.4)*reflect((0, 1), (0, 0))*carrot.drawing(0.12));

element bunny = element(pbunny);
element carol = element(pcarol);

element R = row(
    padding = 3,
    bunny,
    element(table.drawing(0.2)),
    carol
);

add(R.drawing());
