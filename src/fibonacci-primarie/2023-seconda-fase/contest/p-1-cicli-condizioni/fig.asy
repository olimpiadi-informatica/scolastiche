unitsize(1cm);

access "../../../../asy_library/pictures/carrot.asy" as carrot;
access "../../../../asy_library/pictures/flat_rock.asy" as flat_rock;
access "../../../../asy_library/pictures/bunny_polychrome.asy" as bunny_polychrome;
access "../../../../asy_library/pictures/vertical_door.asy" as vertical_door;

pen[]  cols = {brown, gray};
int[]  rocks = {0, 0, 1, 0, 1, 0, 1, 0, 0};
bool[] carts = {true, true, false, true, true, true, false, true, true};

for (int i=0; i<rocks.length; ++i)
    add(shift(4*i, -2.25)*scale(3.5)*flat_rock.drawing(0.15, cols[rocks[i]]));

add(shift(-4, -0.25)*reflect((2, 1), (2, 0))*bunny_polychrome.drawing(0.85));

for (int i=0; i<carts.length; ++i) if (carts[i])
    add(shift(4*i+1.3, -2.1)*carrot.drawing(0.15));
