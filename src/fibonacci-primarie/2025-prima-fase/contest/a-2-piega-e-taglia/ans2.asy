unitsize(1cm);

access "cut/cut_A.asy" as a;
access "cut/cut_B.asy" as b;
access "cut/cut_C.asy" as c;
access "cut/cut_D.asy" as d;

picture[] options = { a.draw(), b.draw(), c.draw(), d.draw() };

add(scale(1.5)*options[ans2-1]);
