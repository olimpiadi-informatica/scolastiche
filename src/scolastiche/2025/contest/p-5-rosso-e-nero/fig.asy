access "../../../../asy_library/structures/utils.asy" as utils;

unitsize(1cm);
unravel utils;

real rstep = 1.5;
real xstep = 4;
real ystep = 4;
real off = 0.05;

pair pos(int x) {
    return  (xstep*(x+0.5), -ystep*1.3-rstep);
}

real[] heights, H;

path arrow(int x, int y, real h, pair dir) {
    pair start = pos(x);
    pair end = pos(y);
    pair mid = (start+end)/2 - (0, h);
    end += (unit(mid-end).x*0.5, -0.7*h);
    if (h < 4) return start {dir}::{x < y ? E : W} mid {x < y ? E : W}:: end;
    return start {dir}::{x < y ? E : W} mid {x < y ? E : W}::{x < y ? NE : NW} end;
}

int[][] inter;
for (int i=0; i<n; ++i) inter[i] = new int[];
for (int i=0; i<n; ++i) inter[abs(i-rosso[i])].push(i);
for (int i=0; i<n; ++i) heights[i] = H[i] = 1;
for (int[] lev : inter) for (int i : lev) {
    for (int j=min(i, rosso[i]); j < max(i, rosso[i]); ++j) heights[i] = max(heights[i], H[j]);
    heights[i] += 1;
    for (int j=min(i, rosso[i]); j < max(i, rosso[i]); ++j) H[j] = heights[i];
}
real mh = 0;
for (int i=0; i<n; ++i) mh = max(mh, H[i]);
for (int i=0; i<n; ++i)
    draw(pos(i) -- pos(i)-(0,mh), heavygray+dotted+2);

for (int i=0; i<n; ++i) {
    draw(arrow(i, nero[i], nero[i]==i+1 ? 0.2 : 2, nero[i]==i+1 ? dir(-20) : dir(180+60)), black+2, EndArrow);
    draw(arrow(i, rosso[i], heights[i] > 2 ? heights[i] : 1, heights[i] > 2 ? S : i>rosso[i] ? SW : SE), deepred+dashed+2, EndArrow(25));

    pair p = pos(i) + (0,rstep);
    filldraw(shift(p)*scale(rstep)*unitcircle, palecyan, black+3);
    label(scale(4)*("$\mathit{"+string(i)+"}$"), p, black);

    filldraw(rect((xstep*i,off), (xstep*(i+1),ystep)), palegray, black+4);
    label(scale(4)*string(nero[i]), (xstep*(i+0.5), ystep*0.5), black);
    filldraw(rect((xstep*i,-off), (xstep*(i+1),-ystep)), palered, deepred+4);
    label(scale(4)*string(rosso[i]), (xstep*(i+0.5), -ystep*0.5), deepred);
}
label(scale(4)*"$\mathtt{nero}[i]$", (-0.3, ystep*0.5), W, black);
label(scale(4)*"$\mathtt{rosso}[i]$", (-0.3, -ystep*0.5), W, deepred);
label(scale(4)*"$i~$", (-0.3, -ystep*1.3), W, black);
