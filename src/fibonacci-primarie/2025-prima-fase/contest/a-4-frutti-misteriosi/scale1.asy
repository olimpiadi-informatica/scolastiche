unitsize(1cm);
access "fruit_rows.asy" as rows;
access "../../../../asy_library/pictures/scale.asy" as scale;
access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout;
unravel rows;
fruit[] fruits = getfruits(... perm);

picture on_dish_e(){
    return shift(-4, -1.7)*row(
        padding = 0.5,
        fruits[0].row(1),
        fruits[2].row(1)
    ).drawing();
}

picture on_dish_f(){
    return shift(-4, -1.7)*row(
        padding = 0.5,
        fruits[1].row(1),
        fruits[2].row(1)
    ).drawing();
}

add(
    scale.drawing(-8, 10, 10, 
        scale.dish(on_dish_e()), 
        scale.dish(on_dish_f())
    )
);
