void drawGrid(int[][] grid, real x_offset, string label) {
    for (int i = 0; i < 4; ++i) {
        for (int j = 0; j < 4; ++j) {
            real x = x_offset + j;
            real y = -i;

            // Draw the cell background
            if (grid[i][j] == 1) {
                filldraw(box((x, y), (x + 1, y - 1)), black);
            } else {
                filldraw(box((x, y), (x + 1, y - 1)), white, black);
            }
        }
    }
    if(label!=""){
        label(scale(4.5)*label, (x_offset + 2, -4.5), S);
    }
}
