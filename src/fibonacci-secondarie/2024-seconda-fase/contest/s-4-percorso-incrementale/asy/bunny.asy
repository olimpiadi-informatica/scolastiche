unitsize(1cm);

access "../../../../../asy_library/pictures/bunny_polychrome.asy" as bunny;
access "../../../../../asy_library/pictures/paint_bucket.asy" as paint_bucket;

add(reflect((2, 1), (2, 0))*bunny.drawing(1, bunny.allie_col));
add(shift(5,-2)*paint_bucket.drawing(0.3));
