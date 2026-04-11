unitsize(1cm);

access "../../../../../asy_library/pictures/van.asy" as van;
access "../../../../../asy_library/pictures/snowflake.asy" as snowflake;

add(reflect((2, 1), (2, 0))*van.drawing());
add(shift(2,1.6)*snowflake.drawing(0.25));
