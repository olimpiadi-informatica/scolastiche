import math;
import fontsize;

usepackage("cancel");

bool directed = true;      // Whether graph is directed

real node_size = .6;

// Draw node
void node(pair pos, string txt = "", pen color = black, pen background = white) {
    path c = circle(pos, node_size);
    fill(c, background);
    draw(c, gray*0.7 + linewidth(3));
    label("\textbf{\textsf{" + txt + "}}", pos, color);
}

// Draw edge
void edge(pair start, pair end, pen p = black, real ls = 2.5, bool doubleline = false){ 
    pair d = unit(end-start) * node_size;
    if (!doubleline){   
        path l = (start+d)--(end-d);
        if (abs(end.x - start.x) == 16) {
            if (start.y == 6) {
                l = (start+d) .. ((start+end)/2 + (0,1)) .. (end-d);
            } else {
                l = (start+d) .. ((start+end)/2 - (0,1)) .. (end-d);
            }
        }
        draw(l, p+linewidth(ls));
    } else {
        real rot_ang = 10;
        pair rd = rotate(rot_ang)*d;
        path l = (start + rd)--(end + rd);
        draw(l, p+linewidth(ls));

        rd = rotate(-rot_ang)*d;
        l = (start + rd)--(end + rd);
        draw(l, p+linewidth(ls));
    }
}

