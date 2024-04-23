unitsize(1cm);

pen lightcol = rgb("9e6b5a");
pen darkcol = brown+2;

fill((0,0) -- (0,1) -- (1,1) -- (1,0) -- cycle, lightcol);
fill((0,1) {dir(-15)}..{dir(15)} (1,1) -- cycle, darkcol);
