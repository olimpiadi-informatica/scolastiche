import domino;

add(shift(2, 0) * ghost());
add(shift(4, 0) * ghost());
add(shift(6, 0) * ghost());

add(domino(4, 3));
add(shift(8, 0) * domino(1, 6));
