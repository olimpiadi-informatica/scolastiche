import json
import sys

# only one node disconnected
variants_input1 = [
    dict(n=7, edges=[[0, 3], [1, 3], [3, 4], [4, 6], [5, 2]]),
    dict(n=7, edges=[[0, 3], [1, 3], [3, 4], [4, 6], [5, 2]]),
    dict(n=7, edges=[[6, 3], [1, 3], [3, 4], [4, 5], [0, 2]])
]
variants_input2 = [
    dict(n=20, edges=[[1, 0], [1, 6], [0, 6], [6, 2], [12, 15],
                      [15, 16], [16, 5], [19, 10], [10, 8], [18, 17],
                      [7, 17], [17, 11], [4, 9], [3, 14], [14, 13]]),
    dict(n=20, edges=[[1, 0], [1, 6], [0, 6], [6, 2], [12, 15],
                      [15, 16], [16, 5], [19, 10], [10, 8], [18, 17],
                      [7, 17], [17, 11], [4, 9], [3, 14], [14, 13]]),
    dict(n=20, edges=[[5, 4], [4, 11], [2, 3], [6, 3], [14, 6], 
                      [6, 15],[17, 12], [12, 10], [7, 12], [16, 1], 
                      [16, 8],[13, 1], [13, 8], [0, 18], [18, 19]])
]

variants_input = [
    dict(v1=variants_input1[0], v2=variants_input2[0]),
    dict(v1=variants_input1[1], v2=variants_input2[1])
]


def calc_edge_count(n):
    return n*(n-1)//2

def calc_ans(n, edges):
    vis = [False for i in range(n+1)]

    def dfs(node):
        vis[node] = True
        dim = 1
        for edge in edges:
            if edge[0] == node and not vis[edge[1]]:
                dim += dfs(edge[1])
            elif edge[1] == node and not vis[edge[0]]:
                dim += dfs(edge[0])
        return dim
    
    min_dim = n
    for i in range(n):
        if not vis[i]:
            dim = dfs(i)
            min_dim = min(min_dim, dim)
    print(n, min_dim, file=sys.stderr)


    return calc_edge_count(min_dim) + calc_edge_count(n - min_dim) - len(edges)



def build_variant(v1, v2):
    return dict(
        n1=v1['n'],
        edges1=v1['edges'],
        ans1=calc_ans(v1['n'], v1['edges']),
        n2=v2['n'],
        edges2=v2['edges'],
        ans2=calc_ans(v2['n'], v2['edges']),
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
