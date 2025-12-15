unitsize(1cm);
access "fruit_rows.asy" as rows;
access "../../../../asy_library/pictures/scale.asy" as scale;
access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout;
unravel rows;
fruit[] fruits = getfruits(... perm);

picture on_dish_c(){
    return shift(-4.7, -1.7)*row(
        padding = 0.5,
        fruits[5].row(2),
        fruits[3].row(1)
    ).drawing();
}

picture on_dish_d(){
    return shift(-4.7, -1.7)*row(
        padding = 0.5,
        fruits[4].row(2),
        fruits[5].row(1)
    ).drawing();
}

add(
    scale.drawing(-8, 10, 10, 
        scale.dish(on_dish_c()), 
        scale.dish(on_dish_d())
    )
);
