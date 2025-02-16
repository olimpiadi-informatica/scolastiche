access "../../../../../asy_library/pictures/pan.asy" as pan;
access "../../../../../asy_library/pictures/stove.asy" as stove;

unitsize(1cm);
add(shift(0,-3)*stove.drawing());
add(pan.front());
draw((-9.6,-4) -- (6,4), invisible);
