unitsize(1cm);

access "../../../../../asy_library/pictures/bunny_silouhette.asy" as bunny_silouhette;

add(scale(-1)*reflect((2, 1), (2, 0))*bunny_silouhette.drawing(0.85));
