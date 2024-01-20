size(4cm);

pen p = currentpen + linewidth(1);
draw((0,0)--(2,0)--(2,1)--(1,1)--(1,2)--(0,2)--cycle, p);
p = p + dashed;
draw((1,0)--(1,1), p);
draw((0,1)--(1,1), p);