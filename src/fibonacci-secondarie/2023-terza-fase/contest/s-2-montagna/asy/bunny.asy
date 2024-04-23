unitsize(1cm);

access "../../../../../asy_library/pictures/bunny_polychrome.asy" as bunny;

filldraw((2,-1) -- (2.5,0) -- (6,0) -- (5.5,-1) -- cycle, heavyblue*0.5 + lightgray*0.5, blue+3);
add(shift(-0.7,0.3)*reflect((2, 1), (2, 0))*bunny.drawing(0.85, bunny.bunny_col));
add(shift(1.2,0.6)*reflect((2, 1), (2, 0))*bunny.drawing(0.85, bunny.tiptap_col));
add(shift(0.5,0)*reflect((2, 1), (2, 0))*bunny.drawing(0.85, bunny.carol_col));
filldraw((2,-1) -- (5.5,-1) -- (6, -2) -- (2, -2) -- cycle, heavyblue, blue+3);
filldraw((6,0) -- (5.5,-1) -- (6, -2) -- (6.5,-1) -- cycle, darkblue, blue+3);
for (int i=0; i<2; ++i) {
    filldraw(circle((3+2*i,-2), 0.7), gray, black+3);
    filldraw(circle((3+2*i,-2), 0.2), mediumgray, black+2);
}
