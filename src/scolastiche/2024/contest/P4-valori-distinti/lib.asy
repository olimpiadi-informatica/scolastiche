real cell_size = 1.6; // Size of each cell

// Function to draw a one-dimensional array of numbers
void drawArray(int[] array, real x_offset = 0, real y_offset = 0) {
    int length = array.length;

    for (int i = 0; i < length; ++i) {
        // Determine the position of the cell
        real x = x_offset +  i * cell_size;
        real y = y_offset;

        // Draw the cell
        draw(box((x, y), (x + cell_size, y - cell_size)), black);

        // Draw the number in the center of the cell
        label(string(array[i]), (x + cell_size / 2, y - cell_size / 2), fontsize(20pt));
    }
}