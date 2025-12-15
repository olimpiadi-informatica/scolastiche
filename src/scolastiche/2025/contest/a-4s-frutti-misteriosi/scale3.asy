unitsize(1cm);
access "fruit_rows.asy" as rows;
access "../../../../asy_library/pictures/scale.asy" as scale;
access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout;
unravel rows;
fruit[] fruits = getfruits(... perm);

picture on_dish_a(){
    return shift(-5, -1.7)*row(
        padding = 0.5,
        fruits[3].row(1),
        fruits[4].row(2)
    ).drawing();
}

picture on_dish_b(){
    return shift(-4, -1.7)*row(
        padding = 0.5,
        fruits[5].row(2),
        fruits[4].row(1)
    ).drawing();
}

add(
    scale.drawing(-8, 10, 10, 
        scale.dish(on_dish_a()), 
        scale.dish(on_dish_b())
    )
);
