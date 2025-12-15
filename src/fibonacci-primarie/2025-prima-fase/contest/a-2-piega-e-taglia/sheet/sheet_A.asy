// 1: croce quadrato in alto a sinistra

picture draw(real s = 1)
{
    picture result;

    path shape =
        (1,0) --
        (3,0) --
        (3,1) -- (4,1) --
        (4,3) --
        (3,3) --
        (3,4) -- (1,4) --
        (1,3) --
        (0,3) --
        (0,1) -- (1,1) --
        cycle;

    filldraw(result, scale(s)*shape, gray(0.75), black+1.5);

    return result;
}
