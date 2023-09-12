import graph;
import variant;

unitsize(30);
defaultpen(fontsize(22));

int N = 10;
int M = 17;

pair[] nodes = {
    (0, 6),
    (8, 6),
    (16,6),
    (16,0),
    (8, 0),
    (0, 0),
    (2, 3),
    (6, 3),
    (10,3),
    (14,3)
};

int[][] edges = {
    {0, 1},
    {1, 2},
    {2, 3},
    {3, 4},
    {4, 5},
    {5, 0},
    {0, 6},
    {5, 6},
    {6, 7},
    {7, 1},
    {7, 4},
    {1, 4},
    {1, 8},
    {4, 8},
    {8, 9},
    {9, 2},
    {9, 3}
};

pen[] pens = {
    black,
    RGB(230,0,0) + opacity(0.4),
    RGB(0,190,70) + opacity(0.4),
    RGB(0,0,230) + linetype(new real[] {4,4}) + opacity(0.4)
};
real[] ts = {0, 2.5, 2.5, 2.5};
bool[] dl = {false, false, true, false};

for(int i = 0; i < M; ++i) {
    edge(nodes[edges[i][0]], nodes[edges[i][1]], pens[labels[i]], ts[labels[i]], dl[labels[i]]);
}

bool[][] special_edges = array(N, array(N, false));

for (int i = 0; i < M; ++i) {
    for (int j = 0; j < M; ++j) {
        if (i == j) continue;
        if (labels[i] != labels[j]) continue;
        if (edges[i][0] == edges[j][0]) {
            special_edges[edges[i][1]][edges[j][1]] = true;
        }
        if (edges[i][0] == edges[j][1]) {
            special_edges[edges[i][1]][edges[j][0]] = true;
        }
        if (edges[i][1] == edges[j][0]) {
            special_edges[edges[i][0]][edges[j][1]] = true;
        }
        if (edges[i][1] == edges[j][1]) {
            special_edges[edges[i][0]][edges[j][0]] = true;
        }
    }
}

for (int i = 0; i < N; ++i) {
    for (int j = i + 1; j < N; ++j) {
        if (special_edges[i][j]) {
            edge(nodes[i], nodes[j], white, 7);
            edge(nodes[i], nodes[j], purple*0.5+pink*0.5, 4);
        }
    }
}

for(int i = 0; i < N; ++i) {
    node(nodes[i], format("%c", i + ascii("A")));
}
