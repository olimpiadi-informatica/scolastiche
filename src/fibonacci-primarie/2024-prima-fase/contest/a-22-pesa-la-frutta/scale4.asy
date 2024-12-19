unitsize(1cm);
access "fruit_rows.asy" as rows;
access "../../../../asy_library/pictures/scale.asy" as scale;
access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout;
unravel rows;
fruit[] fruits = getfruits(... perm);

picture on_dish_c(){
    return shift(-6.5, -1.5)*row(
        padding = -0.5,
        fruits[0].row(2),
        fruits[1].row(2),
        fruits[3].row(1)
    ).drawing();
}

picture on_dish_d(){
    picture pic;
    label(pic, scale(13)*Label("\texttt{?}"), (-1, 1), p = black*2);
    return pic;
}

add(
    scale.drawing(0, 10, 10, 
        scale.dish(on_dish_c()), 
        scale.dish(on_dish_d())
    )
);
