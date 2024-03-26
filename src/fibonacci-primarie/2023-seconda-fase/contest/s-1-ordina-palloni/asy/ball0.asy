access "../../../../../asy_library/pictures/basket_ball.asy" as basket_ball;
access "../../../../../asy_library/pictures/soccer_ball.asy" as soccer_ball;

unitsize(1cm);

picture ball(int i) {
    real y = i % 2 == 0 ? 0.5 : 1;
    picture b = i < 2 ? soccer_ball.drawing() : basket_ball.drawing();
    return yscale(y)*scale(0.8)*b;
}

add(ball(0));
