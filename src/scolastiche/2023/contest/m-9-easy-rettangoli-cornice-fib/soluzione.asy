unitsize(1cm);

access "../../asy_library/pictures/picture_frame.asy" as picture_frame;
access "./poster.asy" as poster;
access "./griglia.asy" as griglia;

add(griglia.drawing(9, 10));
add(shift(4.6,5)*reflect((0, 0), (1,1))*xscale(10.2/11)*yscale(1.1)*picture_frame.drawing(3));
add(poster.drawing(red, 4, 8, 0, 0));
add(poster.drawing(royalblue, 5, 5, 0, 4));
add(poster.drawing(yellow, 10, 3, 6, 0));
add(poster.drawing(lightmagenta, 1, 9, 0, 9));
add(poster.drawing(lightgreen, 6, 4, 3, 3));