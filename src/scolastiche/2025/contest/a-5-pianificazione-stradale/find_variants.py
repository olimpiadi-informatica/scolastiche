import random
from variants import nodes, edges

# made with gemini

N = len(nodes)
M = len(edges)

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
    
    for w, u, v in weighted_edges:
        if dsu.union(u, v):
            cost += w
            
    return cost

target_variants = 5
found_variants = []
seen_answers = set()

# Original variant answer to avoid duplication if possible, or just include it
# Original color:
original_color = [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0]
ans_orig = solve_mst(edges, original_color)
# We can keep the original as one variant if we want, but the prompt asks to generate 5 variants.
# I'll try to generate 5 NEW ones with unique answers.

attempts = 0
while len(found_variants) < target_variants and attempts < 10000:
    attempts += 1
    # Generate random color vector (0 or 1)
    # To have meaningful MST problems, we shouldn't have ALL red or NO red, 
    # though those are valid.
    # Let's randomize with probability 0.3 to 0.7 for red.
    
    new_color = [1 if random.random() < 0.5 else 0 for _ in range(M)]
    
    ans = solve_mst(edges, new_color)
    
    if ans not in seen_answers and ans > 3:
        seen_answers.add(ans)
        found_variants.append(new_color)
        print(f"Found variant with ans: {ans}")

if len(found_variants) < target_variants:
    print("Could not find enough unique variants")
else:
    print("Found 5 unique variants")
    print(found_variants)
