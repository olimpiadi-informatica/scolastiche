unitsize(1cm);

pen lightcol = rgb("9e6b5a");
pen darkcol = brown+2;

path bord = (0,1) {dir(-30)}..{dir(-10)} (1,0);

fill((0,0) -- bord -- cycle, lightcol);
fill((0,1) {dir(-35)}..{dir(0)} (1,0) -- reverse(bord) -- cycle, darkcol);
