unitsize(1cm);

access "sheet/sheet_A.asy" as a;
access "sheet/sheet_B.asy" as b;
access "sheet/sheet_C.asy" as c;
access "sheet/sheet_D.asy" as d;
access "sheet/sheet_E.asy" as e;

picture[] options = { a.draw(), b.draw(), c.draw(), d.draw(), e.draw() };

add(options[wrong1[0]-1]);
