unitsize(1cm);

access "../../../../asy_library/pictures/picture_frame.asy" as picture_frame;
access "./poster.asy" as poster;
access "./griglia.asy" as griglia;

add(griglia.drawing(5, 10));
add(shift(2.6,5)*reflect((0, 0), (1,1))*xscale(10.2/11)*yscale(1.1*5/9)*picture_frame.drawing(3));
add(poster.drawing(red, 8, 4, 0, 0));
add(poster.drawing(royalblue, 5, 5, 0, 4));
add(poster.drawing(yellow, 10, 3, 2, 0));
add(poster.drawing(lightmagenta, 9, 1, 0, 1));
add(poster.drawing(lightgreen, 6, 4, 1, 1));