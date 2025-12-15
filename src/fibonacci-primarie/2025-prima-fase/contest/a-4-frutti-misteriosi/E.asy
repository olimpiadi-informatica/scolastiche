unitsize(1cm);
access "../../../../asy_library/structures/layout.asy" as layout;
access "fruit_rows.asy" as rows;

unravel layout;
unravel rows;
fruit[] fruits = getfruits(... perm);

add(fruit_row(padding = 1, fruits[0].single(), fruits[1].single(), fruits[2].single()).drawing());
