import "grid.asy" as grid;
unitsize(1cm);
int [][] initial_grid1 = initial_grid;
for (int i = 0; i < 4; ++i) {
    initial_grid1[2][i] = 1 - initial_grid1[2][i];
}
drawGrid(initial_grid1, 0, "");