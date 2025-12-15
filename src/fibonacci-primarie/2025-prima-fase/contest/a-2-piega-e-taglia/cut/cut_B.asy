unitsize(1cm);

access "foglio_chiuso.asy" as fc;

// 2: angolo in alto a destra
picture draw() {
    picture result;
    add(result, fc.draw(dA=(2,1), dB=(1.5,1.5), dC=(1,2)));
    return result;
}
