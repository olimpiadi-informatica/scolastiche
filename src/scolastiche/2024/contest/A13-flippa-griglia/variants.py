import json
import sys
import random


def gen_random_grid(n):
    return [[random.randint(0, 1) for i in range(n)] for j in range(n)]


def apply_random_moves(grid, cols):
    grid1 = [[grid[i][j] for j in range(4)] for i in range(4)]
    for i in range(100):
        if random.randint(0, 1):
            row = random.randint(0, 3)
            for j in range(4):
                grid1[row][j] = 1 - grid1[row][j]

        elif cols:
            col = random.randint(0, 3)
            for j in range(4):
                grid1[j][col] = 1 - grid1[j][col]
    return grid1


def is_reachable(grid, grid1, cols):
    for row_mask in range(16):
        for col_mask in range(16):
            grid2 = [[grid[i][j] for j in range(4)] for i in range(4)]
            for row in range(4):
                if row_mask & (1 << row):
                    for j in range(4):
                        grid2[row][j] = 1 - grid2[row][j]
            if cols:
                for col in range(4):
                    if col_mask & (1 << col):
                        for i in range(4):
                            grid2[i][col] = 1 - grid2[i][col]
            if grid2 == grid1:
                return True
    return False


def build_variant(seed):
    random.seed(seed)
    initial_grid = gen_random_grid(4)
    options = []
    for i in range(2):
        options.append(apply_random_moves(initial_grid, False))
        assert (is_reachable(initial_grid, options[-1], False))

    for i in range(random.randint(2, 3)):
        options.append(apply_random_moves(initial_grid, True))
    while len(options) < 7:
        options.append(gen_random_grid(4))
    random.shuffle(options)

    ans1 = ""
    for i in range(len(options)):
        if is_reachable(initial_grid, options[i], False):
            ans1 += str(i + 1)
    ans2 = ""
    for i in range(len(options)):
        if is_reachable(initial_grid, options[i], True):
            ans2 += str(i + 1)
    return dict(
        initial_grid=initial_grid,
        options=options,
        ans1=ans1,
        ans2=ans2
    )


def build_variants():
    return [build_variant(i) for i in range(20)]


print(json.dumps(build_variants()))
