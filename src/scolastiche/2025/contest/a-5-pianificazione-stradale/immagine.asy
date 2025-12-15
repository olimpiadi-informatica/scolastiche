access "../../../../asy_library/structures/graph.asy" as graph;
// unitsize(1cm);
size(12cm, 0);

pair[] P;
int[][] E;
pen[] C;
string[] weight;
real edge_size = 5;

// FIXED POINT POSITION
for(int i = 0; i < N; ++i)
{
    P.push((nodes[i][0], nodes[i][1]));
}

// EDGES
for(int i = 0; i < M; ++i)
{  
    E.push(new int[] {edges[i][0], edges[i][1]});
}

for(int i = 0; i < M; ++i)
{
    C.push(edge_size + (color[i] == 1 ? red + linetype(new real[] {0,2}) : black));
}

for(int i = 0; i < M; ++i)
{
    if(color[i] == 0)
    {
        weight.push(string(edge_weight[0][i]));
    }
    else
    {
        // weight.push(string(edge_weight[0][i]));
        weight.push("");
    }
}

graph.drawing(node_position=P, edge_vertex=E, edge_color=C, edge_text=weight,
             text_size = 1.9, node_size = 6, edge_text_offset=5);
