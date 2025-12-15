unitsize(1cm);

access "../../../../asy_library/pictures/kiosk.asy" as kiosk;
access "../../../../asy_library/pictures/panini.asy" as panino;

pen lightcol = rgb("9e6b5a")*0.8 + white*0.2;
pen darkcol = brown+2;

real xfactor = 3;
real yfactor = 25;
path p = (0, -1);
for (int i=0; i<heights.length; ++i)
    p = p -- (xfactor*i, heights[i]/yfactor);
p = p -- (xfactor*(heights.length-1), -1) -- cycle;
fill(p, lightcol);
for (int i=1; i<heights.length-1; ++i)
    if (heights[i-1] < heights[i] && heights[i] > heights[i+1])
        fill((xfactor*i,heights[i]/yfactor) -- (xfactor*(i-0.5),(heights[i]+heights[i-1])/yfactor/2) {dir(-20-20*unitrand())}..{dir(20+20*unitrand())} (xfactor*(i+0.5),(heights[i]+heights[i+1])/yfactor/2) -- cycle, white);
draw(p, darkcol+2);
for (int i=1; i<heights.length; ++i)
    draw((xfactor*i,-1) -- (xfactor*i,heights[i]/yfactor), darkcol+2);
for (int i=0; i<chi.length; ++i) if (chi[i] == 1)
    add(shift(xfactor*(i+1),(heights[i+1]*0.9+heights[i]*0.05+heights[i+2]*0.05-2)/yfactor)*scale(0.5)*kiosk.drawing("pane"));
for (int i=0; i<dir.length; ++i) {
    draw(shift((i+0.5)*xfactor, -0.3)*(dir[i] == 0 ? reflect((0,0), (1,0)) : identity)*((-0.7,-0.5) -- (0.7,0.5)), black+3, EndArrow(20));
    label(scale(2.5)*string(i+1), ((i+0.5)*xfactor, -1.7), black);
}

pen bread = rgb("dbc393");
pen[] pcol = {bread, lightcol, darkcol, bread*0.5+darkcol*0.5, lightcol*0.5+darkcol*0.5, bread*0.5+lightcol*0.5, bread*0.34+lightcol*0.33+darkcol*0.33};

for (int j=0; j<sol2.length; ++j) {
    int i=sol2[j];
    real h = heights[i]-2;
    if (i > 0) h = heights[i]*0.9+heights[i-1]*0.05+heights[i+1]*0.05-2;
    add(shift(xfactor*i,h/yfactor)*scale(0.5)*kiosk.drawing(lightgreen, "new!"));
}