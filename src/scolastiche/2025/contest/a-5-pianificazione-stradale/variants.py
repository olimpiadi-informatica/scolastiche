import json
import random

random.seed(4176834927)

nodes = [
    [0, 65],
    [38, 10],
    [70, 10],
    [8, 12],
    [51, 35],
    [40, 62],
    [3, 39],
    [80, 55],
    [56, 90],
    [35, 110],
    [3, 110],
    [72, 110]
]
# src, dest
edges = [
    [0, 4],
    [4, 6],
    [0, 6],
    [2, 7],
    [4, 7],
    [4, 2],
    [4, 5],
    [5, 7],
    [3, 1],
    [1, 2],
    [0, 5],
    [8, 5],
    [8, 7],
    [8, 0],
    [4, 3],
    [11, 7],
    [11, 9],
    [11, 8],
    [8, 9],
    [0, 10],
    [10, 9],
    [0, 9],
    [6, 3]
]

# List of length M, (0 -> black, 1-> red)
color_variant = [
    [0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0], 
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0], 
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
]

edge_weight = [
    [7, 15, 3, 3, 11, 7, 5, 13, 25, 8, 2, 17, 9, 11, 6, 14, 11, 4, 12, 12, 18, 10, 6]
] * 5

N = len(nodes)
M = len(edges)



def generate_wrong(ans, color):
    num_red = sum(color)
    
    # Distractors
    candidates = [
        ans+1,
        ans+2,
        ans+3,
        ans+4,
        ans+5,
        max(0, ans-1),
        max(0, ans-2),
        max(0, ans-3)
    ]
    random.shuffle(candidates)

    result = []
    for c in candidates:
        if c != ans and c >= 0 and c not in result:
            result.append(c)
            
    return result[:4]


class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
    
    def find(self, i):
        if self.parent[i] == i:
            return i
        self.parent[i] = self.find(self.parent[i])
        return self.parent[i]
    
    def union(self, i, j):
        root_i = self.find(i)
        root_j = self.find(j)
        if root_i != root_j:
            self.parent[root_i] = root_j
            return True
        return False

def solve_mst(edges, color):
    weighted_edges = []
    for i, edge in enumerate(edges):
        u, v = edge[0], edge[1]
        w = 0 if color[i] == 1 else 1
        weighted_edges.append((w, u, v))
    
    weighted_edges.sort(key=lambda x: x[0])
    
    dsu = DSU(N)
    cost = 0
    edges_count = 0
    
    for w, u, v in weighted_edges:
        if dsu.union(u, v):
            cost += w
            edges_count += 1
            
    return cost

def solve_weighted_mst(edges, weights, color):
    weighted_edges = []
    for i, edge in enumerate(edges):
        if i >= len(weights): break
        u, v = edge[0], edge[1]
        w = 0 if color[i] == 1 else weights[i]
        weighted_edges.append((w, u, v))
    
    weighted_edges.sort(key=lambda x: x[0])
    
    dsu = DSU(N)
    cost = 0
    
    for w, u, v in weighted_edges:
        if dsu.union(u, v):
            cost += w
            
    return cost

def build_variant(i):
    ans = solve_mst(edges, color_variant[i])
    wrongs = generate_wrong(ans, color_variant[i])
    
    ans_weighted = solve_weighted_mst(edges, edge_weight[i], color_variant[i])
    
    return dict(
        N=N,
        M=M,
        nodes=nodes,
        edges=edges,
        edge_weight=edge_weight,
        color=color_variant[i],
        ans1=ans,
        ans1_plus = (ans+1),
        wrong1=wrongs,
        ans2=ans_weighted,
    )

# Assertion check for unique solutions
# solutions = [solve_mst(edges, c) for c in color_variant]
# if len(set(solutions)) != len(solutions):
#     raise ValueError(f"Solutions are not unique! Found: {solutions}")

weighted_solutions = [solve_weighted_mst(edges, edge_weight[i], color_variant[i]) for i in range(len(color_variant))]
if(len(set(weighted_solutions)) != len(weighted_solutions)):
    raise ValueError(f"Solutions are not unique! Found: {weighted_solutions}")

print(json.dumps([build_variant(i) for i in range(len(color_variant)) if i != 2]))
