unitsize(1cm);

access "../../../../asy_library/pictures/carrot.asy" as carrot;
access "../../../../asy_library/pictures/flat_rock.asy" as flat_rock;
access "../../../../asy_library/pictures/rock.asy" as rock;
access "../../../../asy_library/pictures/bunny_polychrome.asy" as bunny_polychrome;
access "../../../../asy_library/pictures/flag.asy" as flag;

int[]  rocks = {0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0};
picture[] pics = {scale(3.5)*flat_rock.drawing(0.15, gray), shift(0,1)*scale(2)*rock.drawing(0.15,gray)};

for (int i=0; i<rocks.length; ++i) {
    add(shift(4*i, -2.25)*pics[rocks[i]]);
    label(scale(6)*string(i+1), (4*i,-4.8));
}

add(shift(-4, -0.25)*reflect((2, 1), (2, 0))*bunny_polychrome.drawing(0.85, bunny_polychrome.bunny_col));
add(shift(4*8 - 1, -0.25)*reflect((2, 1), (2, 0))*flag.drawing(0.85));
