unitsize(1cm);

access "foglio_chiuso.asy" as fc;

// 1: quadrato in alto a sinistra
picture draw() {
    picture result;
    add(result, fc.draw(dA=(0,1), dB=(1,1), dC=(1,2)));
    return result;
}