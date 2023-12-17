unitsize(1cm);

access "../../asy_library/pictures/carrot.asy" as carrot;
access "../../asy_library/pictures/flat_rock.asy" as flat_rock;
access "../../asy_library/pictures/bunny_polychrome.asy" as bunny_polychrome;
access "../../asy_library/pictures/vertical_door.asy" as vertical_door;


add(shift(-0, -2.25)*scale(3.5)*flat_rock.drawing(0.15));
add(shift(-4, -0.25)*reflect((2, 1), (2, 0))*bunny_polychrome.drawing(0.85));
add(shift(4, -2.25)*scale(3.5)*flat_rock.drawing(0.15));
add(shift(5.50, -2.1)*vertical_door.drawing(1.2));
add(shift(8, -2.25)*scale(3.5)*flat_rock.drawing(0.15));
add(shift(12, -2.25)*scale(3.5)*flat_rock.drawing(0.15));
add(shift(13.50, -2.1)*vertical_door.drawing(1.2));
add(shift(16, -2.25)*scale(3.5)*flat_rock.drawing(0.15));
add(shift(19, -1)*carrot.drawing(0.18));
