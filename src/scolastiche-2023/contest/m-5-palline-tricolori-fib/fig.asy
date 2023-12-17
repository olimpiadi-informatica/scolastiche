unitsize(1cm);

access "../../asy_library/pictures/bunny_polychrome.asy" as bunny_polychrome;
access "../../asy_library/pictures/paint_bucket.asy" as paint_bucket;
access "../../asy_library/pictures/spheric_ball.asy" as spheric_ball;

add(reflect((2, 1), (2, 0))*bunny_polychrome.drawing(1.2, rgb("e2bd98")));
add(shift(9, -1)*paint_bucket.drawing(0.45, green));
add(shift(4.6, -3.6)*spheric_ball.drawing(1, royalblue));
add(shift(5.5, -3.9)*spheric_ball.drawing(1,red));
add(shift(6, -2)*spheric_ball.drawing(1, red));
add(shift(8, -3.5)*spheric_ball.drawing(1, royalblue));
add(shift(1.5, -3.2)*spheric_ball.drawing(1, red));
