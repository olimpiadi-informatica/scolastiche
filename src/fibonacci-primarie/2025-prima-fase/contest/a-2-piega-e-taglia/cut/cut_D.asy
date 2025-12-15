unitsize(1cm);

access "foglio_chiuso.asy" as fc;

// 4: triangolo in basso destra
picture draw() {
    picture result;
    add(result, fc.draw(dA=(1,0), dB=(1.5,0.5), dC=(2,1)));
    return result;
}