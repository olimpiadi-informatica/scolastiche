access "../../../../asy_library/structures/layout.asy" as layout;
unravel layout;
unitsize(1cm);

int[] esempio = {5, 10, 0, 2, 6};

element[][] elements = {{}};
for (int i=0; i<esempio.length; ++i) {
    elements[0][i] = element(string(esempio[i]));
}

add(grid(0.3, true, true, black+1, elements).drawing());
