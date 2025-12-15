import json
import sys
import random


edges_list = [
    [[0,1],[1,2],[1,5],[1,6],[5,3],[6,4],[0,7],[7,8],[7,11],[8,9],[8,10],[0,12],[12,13],[13,14],[13,15],[13,16]],
    [[0,1],[1,2],[1,5],[1,6],[5,3],[6,4],[0,7],[7,8],[7,11],[8,9],[8,10],[0,12],[12,13],[13,14],[13,15],[13,16]],
]



ns = [17, 17]

# Tipi di nodo: 0=Libero, 1=Lucchetto, 2=Coniglio, 3=Carota
ALL_NODE_TYPES = [
    [0,0,2,3,2,0,0,1,0,3,3,2,0,0,3,2,3],
    [0,0,2,2,3,0,0,1,0,2,2,3,0,0,3,3,3],
]

edges_list2 = [
    [[0,1],[1,2],[1,5],[1,6],[5,3],[6,4],[0,7],[7,8],[7,11],[8,9],[8,10],[0,12],[12,13],[13,14],[13,15]],
    [[0,1],[1,2],[1,5],[1,6],[5,3],[6,4],[0,7],[7,8],[7,11],[8,9],[8,10],[0,12],[12,13],[13,14],[13,15]],
]



ns2 = [16,16]

# Tipi di nodo: 0=Libero, 1=Lucchetto, 2=Coniglio, 3=Carota
ALL_NODE_TYPES2 = [
    [0,0,2,3,2,0,0,0,0,2,3,2,0,0,2,3],
    [0,0,2,3,2,0,0,0,0,2,3,2,0,0,2,2]
]


def calculate_layout(n, edges):

    adj = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)
    
    levels = {} 
    node_level = {}
    visited = [False] * n
    queue = [(0, 0)] 
    visited[0] = True
    
    while queue:
        u, lvl = queue.pop(0)
        node_level[u] = lvl
        if lvl not in levels: levels[lvl] = []
        levels[lvl].append(u)
        
        for v in adj[u]:
            if not visited[v]:
                visited[v] = True
                queue.append((v, lvl + 1))
    
    pos_x = [0] * n
    pos_y = [0] * n
    
    max_depth = max(levels.keys()) if levels else 0
    
    for lvl, nodes in levels.items():
        width = len(nodes)
        for idx, node in enumerate(nodes):

            val_x = (idx - (width - 1) / 2) * 4 
            pos_x[node] = int(val_x)
            

            val_y = (max_depth - lvl) * 3
            pos_y[node] = int(val_y)
            
    return pos_x, pos_y, adj


wrongs = [
    [3,6,20,12],
    [4,6,20,2]
]

anss = [9,8]
factor = [3,4]

wrongs2 = [
    [1,5,4,2],
    [3,1,4,5]
]

ans3 = [
    [1,8,13],
    [1,7],
]

anss2 = [3,2]
def create_data(i):
    """Crea i dati per la variante i-esima."""
    n = ns[i]
    edg = edges_list[i]
    pos_x, pos_y, adj = calculate_layout(n, edg)
    
    current_node_types = ALL_NODE_TYPES[i]

    n2 = ns2[i]
    edg2 = edges_list2[i]
    pos_x2, pos_y2, adj = calculate_layout(n2, edg2)
    
    current_node_types2 = ALL_NODE_TYPES2[i]
    current_node_types3 = list(current_node_types2)
    for v in ans3[i]:
        current_node_types3[v] = 1
    
    return dict(
        n=n,
        edges=edg,
        node_x=pos_x,
        node_y=pos_y,
        node_types=current_node_types,
        ans=anss[i],
        factor=factor[i],
        wrong=wrongs[i],
        n2=n2,
        edges2=edg2,
        node_x2=pos_x2,
        node_y2=pos_y2,
        node_types2=current_node_types2,
        ans2=anss2[i],
        wrong2=wrongs2[i],

        node_types3=current_node_types3,
    )

variants_output = []
for i in range(len(ns)):
    variants_output.append(create_data(i))

print(json.dumps([
    dict(
        n1=var['n'],
        edges1=var['edges'],
        x1=var['node_x'],
        y1=var['node_y'],
        col1=var['node_types'],
        ans1=var['ans'],
        factor=var['factor'],
        wrong1=var['wrong'],

        n2=var['n2'],
        edges2=var['edges2'],
        x2=var['node_x2'],
        y2=var['node_y2'],
        col2=var['node_types2'],
        ans2=var['ans2'],
        wrong2=var['wrong2'],

        col3=var['node_types3'],
    ) for var in variants_output
]))