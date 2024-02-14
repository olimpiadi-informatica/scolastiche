import math;

pen FOREGROUND = black+1; // the graph default foreground color
pen BACKGROUND = white; // the graph default background color
bool ORIENTED = false; // whether the graph is oriented by default

real NODE_SIZE = .5; // default size of nodes
real TEXT_SIZE = 1.5; // default size of labels
real MAX_BEND  = .2; // maximum allowed bending for an edge by default

// empty callbacks
void empty_node_callback(pair,string,pen,pen) {}
void empty_edge_callback(pair,pair,string,pen,real,real,bool) {}

// angles of self-loops and edge bending (computed automatically)
real[] deg, bend;

// draw a node
void node(real node_size, pair pos, real text_size, string txt = "", pen foreground = FOREGROUND, pen background = BACKGROUND) {
    path c = circle(pos, node_size);
    fill(c, background);
    draw(c, foreground);
    label(scale(text_size)*txt, pos, foreground);
}

// draw an edge
void edge(real node_size, pair start, pair end, real text_size, string txt = "", pen p = black, real deg = 0, real bending = 0, bool arrow = true) {
    path l;
    if (start != end) {
        pair d = unit(end-start) * node_size;
        pair mid = (start+end)/2;
        pair vec = (-d.y, d.x);
        l = (start+d) .. (mid+vec*bending) .. (end-d);
    } else {
        pair center = start+dir(deg)*node_size*sqrt(2);
        if (arrow) l = arc(center, node_size, deg-135, deg+90) -- start+dir(deg+45)*node_size;
        else l = arc(center, node_size, deg-135, deg+135);
    }
    if (arrow) draw(l, p, EndArrow(21*node_size));
    else draw(l, p);
    pair center = midpoint(l) + rotate(90)*dir(l, 0.5, true)*0.3;
    label(scale(text_size)*txt, center);
}

// interface for drawing an edge using computed parameters
void computed_edge(pair[] P, int[][] E, int i, real node_size, real text_size, string txt = "", pen p = FOREGROUND, bool arrow = ORIENTED, void ec(pair,pair,string,pen,real,real,bool) = empty_edge_callback) {
    edge(node_size, P[E[i][0]], P[E[i][1]], text_size, txt, p, deg[E[i][0]], bend[i], arrow);
    ec(P[E[i][0]], P[E[i][1]], txt, p, deg[E[i][0]], bend[i], arrow);
}

// calculates optimal angles and bendings for edges
void calcdeg(pair[] P, int[][] E, real max_bend) {
    bool[] hasloop, isdouble;
    real[][] deglist;
    for (int i=0; i<P.length; ++i) {
        hasloop[i] = false;
        deglist[i] = new real[];
        deg[i] = 0;
    }
    for (int i=0; i<E.length; ++i) {
        bend[i] = 0;
        if (E[i][0] == E[i][1]) hasloop[E[i][0]] = true;
        else {
            deglist[E[i][0]].push(degrees(P[E[i][1]]-P[E[i][0]]));
            deglist[E[i][1]].push(degrees(P[E[i][0]]-P[E[i][1]]));
        }
        isdouble[i] = false;
        for (int j=0; j<i; ++j) if (E[i][0] == E[j][1] && E[j][0] == E[i][1])
            isdouble[i] = isdouble[j] = true;
    }
    for (int i=0; i<P.length; ++i) {
        if (deglist[i].length == 0) continue;
        if (hasloop[i]) {
            real[] l = sort(deglist[i]);
            l.push(l[0]+360);
            int imax = 0;
            for (int i=1; i<l.length-1; ++i)
                if (l[i+1]-l[i] > l[imax+1]-l[imax]) imax = i;
            deg[i] = (l[imax]+l[imax+1])/2;
            deglist[i].push((deg[i]-45) % 360);
            deglist[i].push((deg[i]+45) % 360);
        }
        deglist[i] = sort(deglist[i]);
        deglist[i].push(deglist[i][0]+360);
        deglist[i].insert(0, deglist[i][deglist[i].length-2]-360);
    }
    for (int i=0; i<E.length; ++i) if (E[i][0] != E[i][1]) {
        real cws, cwe, ccs, cce, dg;
        int k0, k1, start = E[i][0], end = E[i][1];
        dg = degrees(P[E[i][1]]-P[E[i][0]]);
        for (k0=1; deglist[start][k0] < dg; ++k0);
        if (abs(deglist[start][k0-1]-dg) < abs(deglist[start][k0]-dg)) --k0;
        k1 = k0;
        if (isdouble[i]) {
            if (abs(deglist[start][k0+1]-dg) < abs(deglist[start][k0-1]-dg)) ++k1;
            else --k0;
        }
        cws = deglist[start][k1+1]-dg;
        ccs = dg-deglist[start][k0-1];
        dg = degrees(P[E[i][0]]-P[E[i][1]]);
        for (k0=1; deglist[end][k0] < dg; ++k0);
        if (abs(deglist[end][k0-1]-dg) < abs(deglist[end][k0]-dg)) --k0;
        k1 = k0;
        if (isdouble[i]) {
            if (abs(deglist[end][k0+1]-dg) < abs(deglist[end][k0-1]-dg)) ++k1;
            else --k0;
        }
        cwe = dg-deglist[end][k0-1];
        cce = deglist[end][k1+1]-dg;
        real cw = min(cws, cwe);
        real cc = min(ccs, cce);
        if (isdouble[i]) cc = 0;
        bend[i] = (min(cw/90,1)-min(cc/90,1))*max_bend;
    }
}

picture drawing(
    real     node_size = NODE_SIZE,
    real     text_size = TEXT_SIZE,
    real     max_bend = MAX_BEND,
    pair[]   node_position,
    string[] node_text = {},
    pen[]    node_foreground = {FOREGROUND},
    pen[]    node_background = {BACKGROUND},
    int[][]  edge_vertex,
    string[] edge_text = {""},
    pen[]    edge_color = {FOREGROUND},
    bool[]   edge_oriented = {ORIENTED},
    void     node_callback(pair,string,pen,pen) = empty_node_callback,
    void     edge_callback(pair,pair,string,pen,real,real,bool) = empty_edge_callback
) {
    picture pic;
    int N = node_position.length;
    for (int i=node_text.length; i<N; ++i) node_text[i] = string(i);
    for (int i=node_foreground.length; i<N; ++i) node_foreground[i] = node_foreground[i-1];
    for (int i=node_background.length; i<N; ++i) node_background[i] = node_background[i-1];

    int M = edge_vertex.length;
    for (int i=edge_text.length; i<M; ++i) edge_text[i] = edge_text[i-1];
    for (int i=edge_color.length; i<M; ++i) edge_color[i] = edge_color[i-1];
    for (int i=edge_oriented.length; i<M; ++i) edge_oriented[i] = edge_oriented[i-1];

    calcdeg(node_position, edge_vertex, max_bend);
    for (int i=0; i<N; ++i)
        node(node_size, node_position[i], text_size, node_text[i], node_foreground[i], node_background[i]);
    for (int i=0; i<M; ++i)
        computed_edge(node_position, edge_vertex, i, node_size, text_size, edge_text[i], edge_color[i], edge_oriented[i], edge_callback);
    for (int i=0; i<N; ++i)
        node_callback(node_position[i], node_text[i], node_foreground[i], node_background[i]);
    return pic;
}
