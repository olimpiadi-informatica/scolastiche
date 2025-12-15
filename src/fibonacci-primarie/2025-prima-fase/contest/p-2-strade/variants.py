import json
import sys
import random

def avanza_al_prossimo_incrocio():
    pass

def gira_a_sinistra():
    pass

def __prog():
    for _ in range(3):
        avanza_al_prossimo_incrocio()
        avanza_al_prossimo_incrocio()
        gira_a_sinistra()


# 1. Configurazione delle varianti
variants_config = [
    {'rows': 5, 'cols': 6},
    {'rows': 6, 'cols': 6},
]

# 2. Definizione linee: [ [StartPoint], [EndPoint] ]
lines_data = [
    [[[0,0],[0,5]],[[1,0],[1,3]],[[2,2],[2,5]],[[3,2],[3,3]],[[4,2],[4,5]],[[6,1],[6,5]],
     [[1,1],[6,1]],[[0,2],[1,2]],[[2,2],[4,2]],[[2,3],[3,3]],[[2,4],[6,4]],[[0,5],[6,5]],
    ], 
    [[[0,0],[0,6]],[[2,2],[2,5]],[[3,3],[3,4]],[[4,2],[4,6]],[[5,3],[5,5]],[[6,2],[6,6]],
     [[0,1],[3,1]],[[2,2],[6,2]],[[2,3],[6,3]],[[4,4],[5,4]],[[1,5],[5,5]],[[0,6],[6,6]]
    ] 
]

# 3. Coordinate di arrivo/target (Finish) -> fx, fy
ans_f = [[5,3], [7,3]]

wrong_coords_data = [
    [[1, 1], [7, 2], [3, 3],[7,6]], # Distractor coords for variant 0
    [[1, 1], [5, 5], [2, 3],[7,6]]  # Distractor coords for variant 1
]

# 4. Coordinate di partenza/domanda (Query)
coors_to_find = [[6,4], [5,3]]

# 5. Risposte CORRETTE (steps)
ans_nums_steps = [6, 7]

# 6. Risposte SBAGLIATE (distractors steps)
wrong_ans_data = [
    [4, 5, 7, 8],  
    [5, 6, 4, 8]
]

# 7. Esempi di movimento da mostrare nel testo
examples = [
    ["C1", "C2"],
    ["B1", "B4"]
]

# 8. Caselle del percorso
path_coords = [
    ["A1", "C1", "F1", "↻", "F3", "F5", "↻", "E5", "C5", "↻"],
    ["A1", "B1", "G1", "↻", "G5", "G7", "↻", "D7", "C7", "↻"],
]

# 9. Percorso completo
comp_path = [
    " → ".join(["A1", "C1", "F1", "↻", "F3", "F5", "↻", "E5", "C5", "↻", "C4", "C3", "↻", "D3", "E3", "↻", "E5", "E7", "↻"]),
    " → ".join(["A1", "B1", "G1", "↻", "G5", "G7", "↻", "D7", "C7", "↻", "C5", "C3", "↻", "D3", "F3", "↻", "F5", "F6", "↻", "E6", "D6", "↻"]),
]

examples_exp = [
    ["muovendosi di due caselle, perché non ci sono incroci prima",
     "muovendosi di una casella, perché c'è subito un incrocio"],
    ["muovendosi di una casella, perché c'è subito un incrocio",
     "muovendosi di tre caselle, perché non ci sono incroci prima"]
]


def create_data(i):
    if i < len(variants_config):
        cfg = variants_config[i]
        n = cfg['rows']
        m = cfg['cols']
    else:
        n = random.randint(3, 8)
        m = random.randint(3, 8)
    
    # Recupero dati specifici per la variante i
    current_lines = lines_data[i] if i < len(lines_data) else []
    
    # Coordinate Finish (fx, fy)
    current_ans_f = ans_f[i] if i < len(ans_f) else [0,0]
    fx, fy = current_ans_f[0], current_ans_f[1]

    # --- NEW: Process Wrong Finish Coords ---
    current_wrong_coords = wrong_coords_data[i] if i < len(wrong_coords_data) else []
    # Split into X and Y lists
    w_fx = [pt[0] for pt in current_wrong_coords]
    w_fy = [" ABCDEFGH"[pt[1]] for pt in current_wrong_coords]
    
    # Coordinate Query (qx, qy)
    current_coor = coors_to_find[i] if i < len(coors_to_find) else [0,0]
    qx, qy = current_coor[0], current_coor[1]
    qsy = "ABCDEFGH"[qy]

    # Risposta numerica
    answer_val = ans_nums_steps[i] if i < len(ans_nums_steps) else 0

    # Risposte sbagliate (numeriche)
    current_wrongs = wrong_ans_data[i] if i < len(wrong_ans_data) else []

    # Appiattimento linee
    sx, sy, ex, ey = [], [], [], []
    
    if not current_lines:
        sx.append(0); sy.append(0); ex.append(1); ey.append(0)
    else:
        for segment in current_lines:
            start_pt, end_pt = segment
            sx.append(start_pt[0])
            sy.append(start_pt[1])
            ex.append(end_pt[0])
            ey.append(end_pt[1])
    
    return dict(
        N=n,
        M=m,
        sx=sx, sy=sy, ex=ex, ey=ey,
        fx=fx, fy=" ABCDEFGH"[fy],
        wrong_fx=w_fx, # Added
        wrong_fy=w_fy, # Added
        qx=qx, qy=qy, qsy=qsy,
        examples=examples[i],
        examples_exp=examples_exp[i],
        ans=answer_val,
        wrong=current_wrongs,
        path=path_coords[i],
        cpath=comp_path[i],
    )

variants_output = []
for i in range(len(variants_config)):
    variants_output.append(create_data(i))

print(json.dumps([
    dict(
        N=var['N'],
        M=var['M'],
        sx=var['sx'],
        sy=var['sy'],
        ex=var['ex'],
        ey=var['ey'],
        fx=var['fx'],
        fy=var['fy'],
        wrong_fx=var['wrong_fx'], # Output to JSON
        wrong_fy=var['wrong_fy'], # Output to JSON
        qx=var['qx'],
        qy=var['qy'],
        qsy=var['qsy'],
        examples=var['examples'],
        examples_exp=var['examples_exp'],
        ans=var['ans'],
        wrong=var['wrong'],
        path = var['path'],
        cpath = var['cpath']
    ) for var in variants_output
]))

