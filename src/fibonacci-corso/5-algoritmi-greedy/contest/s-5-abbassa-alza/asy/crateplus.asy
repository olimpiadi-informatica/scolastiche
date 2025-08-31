unitsize(1cm);

access "../../../../../asy_library/pictures/crate.asy" as crate;

picture pic;
path p = (-1,-0.2) -- (-1,0.2) -- (1,0.2) -- (1,-0.2) -- cycle;
fill(pic, p, green);
fill(pic, rotate(90)*p, green);

add(crate.drawing(rgb("a18f93"), pic));
