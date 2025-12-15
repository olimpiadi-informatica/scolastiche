// 2: angolo in alto a destra

picture draw(real s = 1)
{
    picture result;

    path shape =
        (0,0) -- (1,0) --
        (2,1) --
        (3,0) -- (4,0) --
        (4,4) --
        (3,4) --
        (2,3) --
        (1,4) -- (0,4) --
        cycle;

    filldraw(result, scale(s)*shape, gray(0.75), black+1.5);

    return result;
}

