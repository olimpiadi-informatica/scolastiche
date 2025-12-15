picture draw(pair A, pair B, pair C, pair D,
                     pen fillColor, pen borderColor = gray(0.3)+1,
                     real borderWidth = 1.5)
{
    picture pic;

    pen borderPen = borderColor + borderWidth;

    // Disegna nel picture
    filldraw(pic, A--B--C--D--cycle, fillColor, borderPen);

    return pic;
}
