unitsize(1cm);

pen lightcol = rgb("9e6b5a");
pen darkcol = brown+2;

path bord = (0,0) {dir(10)}..{dir(30)} (1,1);

fill(bord -- (1,0) -- cycle, lightcol);
fill((0,0) {dir(0)}..{dir(35)} (1,1) -- reverse(bord) -- cycle, darkcol);
