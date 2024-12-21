unitsize(1cm);

real tick_spacing = 1; // Spacing between ticks
real tick_height = 0.3; // Height of each tick mark
real segment_height = 0.5; // Height above the number line for the segment

// Function to draw a numbered line
void drawNumberedLine(real start, real end) {
    // Draw the main line
    draw((start, 0) -- (end, 0), black + 1.6);

    // Draw ticks and numbers
    for (int i = floor(start); i <= ceil(end); ++i) {
        real x = i * tick_spacing;

        // Draw the tick
        draw((x, -tick_height / 2) -- (x, tick_height / 2), black);

        // Add the number below the tick
        label(scale(1.5)*string(i), (x, -tick_height - 0.2), S);
    }
}

// Function to draw a segment above the number line
void drawSegment(real start, real end, real offset = 0, pen col = blue) {
    draw((start, segment_height+offset) -- (end, segment_height+offset), col + 2);

    dot((start, segment_height+offset), col+6);
    dot((end, segment_height+offset), col+6);
}
