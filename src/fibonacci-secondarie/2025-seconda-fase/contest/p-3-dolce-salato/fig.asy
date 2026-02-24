access "../../../../asy_library/pictures/bunny_polychrome.asy" as bunny;
access "../../../../asy_library/pictures/carrot.asy" as carrot;
access "../../../../asy_library/pictures/chocolate.asy" as chocolate;

unitsize(1cm);

// Function definition
picture draw_variant(int[] foods) {
    picture pic; // Create a new picture object to return

    // 1. PREPARE ASSETS
    // We define the graphical assets inside the function (or globally)
    // 0 = Carrot, 1 = Chocolate
    picture[] assets = {
        rotate(45)*carrot.drawing(0.25), 
        chocolate.drawing(0.5)
    };

    // Center and adjust assets (Same logic as First Code)
    for (int i=0; i<assets.length; ++i) {
        assets[i] = shift(-min(assets[i], true))*assets[i];
        assets[i] = shift(-max(assets[i], true)/2)*assets[i];
    }
    // Specific adjustment for chocolate
    assets[1] = shift(-0.5,0)*assets[1];

    // 2. DRAW THE BUNNY
    // Placed to the left (shift -10) relative to the food line
    add(pic, shift(-10, 0)*reflect((2, 1), (2, 0))*bunny.drawing(2, bunny.carol_col));

    // 3. DRAW THE FOOD SEQUENCE
    real step = 5;
    
    for (int i=0; i<foods.length; ++i) {
        // Calculate position based on step and slight offset for specific types
        pair pos = (step*i + (foods[i]%2)*0.5, 0);

        // Add the food item to the picture 'pic'
        if(foods[i] < assets.length) {
            add(pic, shift(pos)*assets[foods[i]]);
        }

        // Add the number label
        label(pic, scale(3)*string(i+1), (step*i, -3));
    }

    return pic;
}


add(draw_variant(foods));