unitsize(1cm);
access "fruit_rows.asy" as rows;
access "../../../../asy_library/pictures/scale.asy" as scale;
access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout;
unravel rows;
fruit[] fruits = getfruits(... perm);

picture on_dish_a(){
    return shift(-4.7, -1.5)*row(
        padding = 0.1,
        carrot.row(1),
        fruits[0].row(1),
        fruits[1].row(1)
    ).drawing();
}

picture on_dish_b(){
    return shift(-2.5, -1.5)*fruits[3].row(1).drawing();
}

add(
    scale.drawing(0, 10, 10, 
        scale.dish(on_dish_a()), 
        scale.dish(on_dish_b())
    )
);
