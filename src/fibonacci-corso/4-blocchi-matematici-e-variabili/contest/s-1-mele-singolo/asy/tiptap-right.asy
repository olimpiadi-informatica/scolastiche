unitsize(1cm);

access "../../../../../asy_library/pictures/bunny_polychrome.asy" as bunny;

add(reflect((0,0), (0,1))*bunny.drawing(0.85, bunny.tiptap_col));
