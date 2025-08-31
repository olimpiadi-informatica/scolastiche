unitsize(1cm);

access "../../../../../asy_library/pictures/crate.asy" as crate;

picture pic;
fill(pic, (-1,-0.2) -- (-1,0.2) -- (1,0.2) -- (1,-0.2) -- cycle, red);

add(crate.drawing(pic));
