access "../../../../asy_library/pictures/bunny_polychrome.asy" as bunny_polychrome;
access "../../../../asy_library/pictures/apple.asy" as apple;
access "../../../../asy_library/pictures/banana.asy" as banana;
access "../../../../asy_library/pictures/strawberry.asy" as strawberry;
access "../../../../asy_library/pictures/watermelon.asy" as watermelon;
access "../../../../asy_library/pictures/tomato.asy" as tomato;
access "../../../../asy_library/pictures/carrot.asy" as carrot;
access "../../../../asy_library/pictures/potato.asy" as potato;
access "../../../../asy_library/pictures/eggplant.asy" as eggplant;

path rect(pair a, pair b) {
    return a -- (a.x,b.y) -- b -- (b.x,a.y) -- cycle;
}


unitsize(1cm);

picture[] pics = {
    apple.drawing(1.5), rotate(30)*banana.drawing(0.9), strawberry.drawing(), watermelon.drawing(0.9),
    tomato.drawing(0.7), rotate(40)*carrot.drawing(0.5), rotate(30)*potato.drawing(0.8), eggplant.drawing(0.9)
};

for (int i=0; i<pics.length; ++i) {
    pics[i] = shift(-min(pics[i], true))*pics[i];
    pics[i] = shift(-max(pics[i], true)/2)*pics[i];
}
pics[1] = shift(-0.5,0)*pics[1];

int[] foods = {6, 6, 0, 5, 5, 3, 3, 6, 3, 3, 7, 7, 2, 0, 2, 2, 1, 5, 4, 4, 4, 4, 4, 4, 4};

real step = 5, width = 0.4;

add(shift(-13, 3)*reflect((2, 1), (2, 0))*bunny_polychrome.drawing(5, bunny_polychrome.allie_col));

int[] edits = {8, 14, 18};
for (int x: edits)
    filldraw(shift(step*(x-1),0)*rect((-3,-7), (3,4)), lightred, heavyred+5);

filldraw((-step*0.7, -width) -- (0, -width) -- (0, width) -- (-step*0.7, width) -- (-step*1.3, 0) -- cycle, rgb("#da6d42"), rgb("#563232")+5);
for (int i=0; i<foods.length; ++i) {
    add(shift(step*i, 0)*pics[foods[i]]);
    label(scale(6)*string(i+1), (step*i,-5));
    layer();
    filldraw(rect((step*i+width/3, -width), (step*min(i+1, foods.length-0.4), width)), rgb("#da6d42"), rgb("#563232")+5);
}