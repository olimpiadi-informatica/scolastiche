// 4: triangolo in basso destra
picture draw(real s = 1) {
    picture result;

    path shape =
        (0,0) -- (4,0) --
        (4,4) -- (0,4) --
        cycle;

    path shapeInt =
        (2,1) -- (3,2) --
        (2,3) -- (1,2) --
        cycle;

    filldraw(result, scale(s)*shape ^^ reverse(scale(s)*shapeInt), gray(0.75), black+1.5);

    return result;
}