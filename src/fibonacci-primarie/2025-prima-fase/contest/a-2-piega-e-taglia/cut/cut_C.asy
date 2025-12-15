unitsize(1cm);

access "foglio_chiuso.asy" as fc;

// quadrato in basso a destra
picture draw() {
    picture result;
    add(result, fc.draw(dA=(1,0), dB=(1,1), dC=(2,1)));
    return result;
}