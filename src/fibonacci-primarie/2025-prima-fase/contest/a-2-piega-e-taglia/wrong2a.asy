unitsize(1cm);

access "cut/cut_A.asy" as a;
access "cut/cut_B.asy" as b;
access "cut/cut_C.asy" as c;
access "cut/cut_D.asy" as d;
access "cut/cut_E.asy" as e;

picture[] options = { a.draw(), b.draw(), c.draw(), d.draw(), e.draw() };

add(scale(1.5)*options[wrong2[0]-1]);
