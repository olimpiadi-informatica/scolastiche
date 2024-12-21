import "grid.asy" as grid;
unitsize(1cm);

for (int k = 0; k < options.length; ++k) {
    drawGrid(options[k], k * 5, string(k+1));
}
