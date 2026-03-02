unitsize(1cm);

access "../../../../../asy_library/pictures/bunny_polychrome.asy" as bunny;

add(reflect((2, 1), (2, 0))*bunny.drawing(1, bunny.tiptap_col));
