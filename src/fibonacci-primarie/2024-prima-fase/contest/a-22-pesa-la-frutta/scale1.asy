unitsize(1cm);
access "fruit_rows.asy" as rows;
access "../../../../asy_library/pictures/scale.asy" as scale;
access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout;
unravel rows;
fruit[] fruits = getfruits(... perm);

picture on_dish_e(){
    return shift(-5, -1.5)*row(
        fruits[2].row(2),
        carrot.row(2)
    ).drawing();
}

picture on_dish_f(){
    return shift(-3.5, -1.5)*carrot.row(3).drawing();
}

add(
    scale.drawing(0, 10, 10, 
        scale.dish(on_dish_e()), 
        scale.dish(on_dish_f())
    )
);
