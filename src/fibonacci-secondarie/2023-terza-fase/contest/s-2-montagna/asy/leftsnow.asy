unitsize(1cm);

pen lightcol = rgb("9e6b5a");
pen darkcol = brown+2;

path bord = (0,0) {dir(60)}..{E} (1,1);

fill(bord -- (1,0) -- cycle, lightcol);
fill(point(bord, 0.2) {E}..{dir(50)} (1,0.45) -- (1,1) -- subpath(bord, 1, 0.2) -- cycle, palegray);
fill((0,0) {dir(55)}..{dir(5)} (1,1) -- reverse(bord) -- cycle, darkcol);
