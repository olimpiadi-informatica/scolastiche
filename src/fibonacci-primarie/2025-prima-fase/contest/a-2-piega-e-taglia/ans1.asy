unitsize(1cm);

access "sheet/sheet_A.asy" as a;
access "sheet/sheet_B.asy" as b;
access "sheet/sheet_C.asy" as c;
access "sheet/sheet_D.asy" as d;

picture[] options = { a.draw(), b.draw(), c.draw(), d.draw() };

add(options[ans1-1]);
