// quadrato in basso a destra
picture draw() {
    picture result;

    path shapeInt =
    (1,1) -- (3,1) --
    (3,3) -- (1,3) --
    cycle;

    path shape =
        (0,0) -- (4,0) --
        (4,4) -- (0,4) --
        cycle;

    filldraw(result, shape ^^ reverse(shapeInt), gray(0.75), black+1.5);

    return result;
}

