access "../../../../asy_library/pictures/droid.asy" as droid;
access "../../../../asy_library/pictures/diagonal_door.asy" as diagonal_door;
access "../../../../asy_library/pictures/lightbulb.asy" as lightbulb;
access "../../../../asy_library/pictures/switch.asy" as switchpic;
access "../../../../asy_library/structures/utils.asy" as utils;

unitsize(1cm);
unravel utils;

picture[] porta = {
    shift(-0.6,-2.5)*diagonal_door.drawing(1.2, 0.2, false),
    shift(0,-0.4)*diagonal_door.drawing(1.2, 0.6)
};
pen[] parete = {rgb("#333333"), rgb("#eeeeee")};
picture[] bulbo = {rotate(180)*lightbulb.drawing(1, gray), rotate(180)*lightbulb.drawing(1, yellow)};
picture[] inter = {switchpic.drawing(1, mediumgray, gray(0.35)), switchpic.drawing(1)};
transform[] flip = {identity, reflect((0, 0), (1, 0))};

real xstep = 8;
real ystep = 12;

filldraw(yscale(ystep)*xscale(xstep)*((0.15, -0.05) -- (length-0.15, -0.05) -- (length+0.1, -0.2) -- (-0.1, -0.2) -- cycle), heavygreen, darkgreen+2);
filldraw(yscale(ystep)*xscale(xstep)*((0.2, -0.08) -- (length-0.2, -0.08) -- (length-0.05, -0.17) -- (0.05, -0.17) -- cycle), palegreen, darkgreen+2);

for (int i=0; i<length; ++i) {
    filldraw(rect((xstep*i,0), (xstep*(i+1),ystep)), parete[light[i]], black+4);
    label(scale(6)*string(i+1), (xstep*(i+0.5), ystep*0.88), light[i] == 1 ? black : white);
    add(shift(xstep*(i+0.75), 0.3*ystep)*flip[light[i+1]]*inter[light[i]]);
    add(shift(xstep*(i+0.5), 0.6*ystep)*bulbo[light[i]]);
}
for (int i=0; i<length; ++i)
    add(shift(xstep*(i+1), 0)*porta[door[i]]);


add(shift(0, 6)*droid.drawing(0.2, black, white));
