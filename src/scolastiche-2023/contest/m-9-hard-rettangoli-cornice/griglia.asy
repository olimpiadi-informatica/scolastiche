
picture drawing(int n, int m, pen col = gray+0.3) {
	picture pic;
    for (int i = 0; i <= n; ++i)
        draw(pic, (i,0)--(i,m), col);

    for (int i = 0; i <= m; ++i)
        draw(pic, (0,i)--(n,i), col);
        
    return pic;
}
