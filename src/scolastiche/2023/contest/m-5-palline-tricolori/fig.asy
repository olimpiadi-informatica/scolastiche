unitsize(1cm);

access "../../../../asy_library/pictures/paint_bucket.asy" as paint_bucket;
access "../../../../asy_library/pictures/spheric_ball.asy" as spheric_ball;

add(paint_bucket.drawing(0.6, green));
add(shift(-4, -1)*spheric_ball.drawing(1, red));
add(shift(-3.5, -1.5)*spheric_ball.drawing(1,royalblue));
add(shift(4, -1.2)*spheric_ball.drawing(1, red));
add(shift(2.5, -2)*spheric_ball.drawing(1, royalblue));
add(shift(-1.2, -2.5)*spheric_ball.drawing(1, red));
