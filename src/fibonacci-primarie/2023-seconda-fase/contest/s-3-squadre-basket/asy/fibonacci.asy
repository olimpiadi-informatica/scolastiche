unitsize(1cm);

access "../../../../../asy_library/pictures/bunny_monochrome.asy" as bunny;

add(bunny.drawing(0.85, bunny.fibonacci_col, mediumred, scale(2)*"\texttt{F}", black));
