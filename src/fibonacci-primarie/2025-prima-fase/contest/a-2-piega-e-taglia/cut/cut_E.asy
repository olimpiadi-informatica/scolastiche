unitsize(1cm);

access "foglio_chiuso.asy" as fc;

// 5: impossibile
picture draw() {
    picture result;
    add(result, fc.draw(dA=(1,0), dB=(1,1), dC=(1,2)));
    return result;
}