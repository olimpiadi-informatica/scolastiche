unitsize(1cm);
access "../../../../asy_library/structures/layout.asy" as layout;
access "fruit_rows.asy" as rows;

unravel layout;
unravel rows;
fruit[] fruits = getfruits(... perm);

add(row(padding = 1, fruits[2].single(), carrot.single(), fruits[3].single()).drawing());
