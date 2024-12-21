access "../../../../asy_library/structures/layout.asy" as layout;
unravel layout;
unitsize(1cm);

element[][] elements = {{}};
for (int i=0; i<test2.length; ++i) {
    elements[0][i] = element(string(test2[i]));
}

add(grid(0.3, true, true, black+1, elements).drawing());
