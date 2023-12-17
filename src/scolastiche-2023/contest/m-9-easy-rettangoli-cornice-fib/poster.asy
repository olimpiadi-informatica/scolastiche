picture drawing(real k = 1, pen col = gray, int h, int b, int x, int y, string title = "") {
	picture pic;
	path p;
    p = (x, y) -- (x, y+h) -- (x+b, y+h) -- (x+b, y) -- cycle;
    draw(pic, p, col+4);
    fill(pic, p, col+opacity(.3));
    return pic;
}
