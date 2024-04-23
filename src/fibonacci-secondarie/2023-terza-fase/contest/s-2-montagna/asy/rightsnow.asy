unitsize(1cm);

pen lightcol = rgb("9e6b5a");
pen darkcol = brown+2;

path bord = (0,1) {E}..{dir(-60)} (1,0);

fill((0,0) -- bord -- cycle, lightcol);
fill((0,0.45) {dir(10)}.. subpath(bord, 0.4, 0) -- cycle, palegray);
fill((0,1) {dir(-5)}..{dir(-55)} (1,0) -- reverse(bord) -- cycle, darkcol);
