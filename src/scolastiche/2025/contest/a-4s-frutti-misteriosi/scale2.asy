unitsize(1cm);
access "fruit_rows.asy" as rows;
access "../../../../asy_library/pictures/scale.asy" as scale;
access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout;
unravel rows;
fruit[] fruits = getfruits(... perm);

picture on_dish_g(){
    return shift(-3.5, -1.7)*row(
        fruits[1].row(2)
    ).drawing();
}

picture on_dish_h(){
    return shift(-4, -1.7)*row(
        padding = 0.5,
        fruits[0].row(1),
        fruits[2].row(1)
    ).drawing();
}

add(
    scale.drawing(-8, 10, 10, 
        scale.dish(on_dish_g()), 
        scale.dish(on_dish_h())
    )
);
