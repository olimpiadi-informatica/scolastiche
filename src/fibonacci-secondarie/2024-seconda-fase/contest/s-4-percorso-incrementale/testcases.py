import random
import json
testcases = [
    dict(seed=1, N=6, M=2, instr=["S", "A"], cols=["W", "B", "W", "B", "W", "W"], all_white=False, must_optimize=False),
    dict(seed=2, N=10, M=6, all_white=True, must_optimize=False),
    dict(seed=3, N=30, M=10, all_white=False, must_optimize=False),
    dict(seed=5, N=40, M=18, all_white=False, must_optimize=True),
]

def solve(N, M, instr, cols):
    res = cols[:]
    for i in range(1, M+1):
        pos = 0
        for j in range(i):
            pos += 1
            if instr[j] == "S":
                while(res[pos] == "B"):
                    pos += 1
        res[pos] = "B"
    return res

def gen_testcase(seed, N, M, all_white, must_optimize, cols=None, instr=None):
    random.seed(seed)
    if cols == None:
        possible_cols = ["W"] if all_white else ["W", "B"]
        cols = random.choices(possible_cols, k=N)
    else:
        assert(len(cols)==N)
    if instr == None:
        instr = random.choices(["A", "S"], k=M)
    else:
        assert(len(instr) == M)
    return dict(
            N=N,
            M=M,
            cols=cols,
            instr=instr,
            must_optimize=must_optimize,
            solution=solve(N, M, instr, cols),
            pos=0,
            i=0,
        )

print(json.dumps([gen_testcase(**testcase) for testcase in testcases]))
