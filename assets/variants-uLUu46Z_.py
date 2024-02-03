import json

N = 10
M = 17
edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 0],
    [0, 6],
    [5, 6],
    [6, 7],
    [7, 1],
    [7, 4],
    [1, 4],
    [1, 8],
    [4, 8],
    [8, 9],
    [9, 2],
    [9, 3],
]


def build_variant(ii, labels, good_path, bad_path, P, Q, R):
    adj = [[] for _ in range(N)]

    for i in range(M):
        adj[edges[i][0]].append([edges[i][1], labels[i]])
        adj[edges[i][1]].append([edges[i][0], labels[i]])

    ans1, ans2 = 0, 0
    cc = []
    vis_glob = [False] * N

    for i in range(N):
        vis = [False] * N
        vis[i] = True
        for _ in range(N):
            for n in range(N):
                if not vis[n]:
                    continue
                for e, w in adj[n]:
                    if w == 1:
                        vis[e] = True
        card = 0
        for v in vis:
            card += int(v)
        ans1 += card - 1
        if not vis_glob[i]:
            for j, v in enumerate(vis):
                if v:
                    vis_glob[j] = True
            cc.append(card)

    ans1 //= 2

    cc_special = []
    vis_glob_special = [False] * N

    for i in range(N):
        vis = [False] * N
        vis[i] = True
        for _ in range(3 * N):
            for n in range(N):
                if not vis[n]:
                    continue
                for e, w in adj[n]:
                    for ee, ww in adj[e]:
                        if w == ww:
                            vis[ee] = True
        card = 0
        for v in vis:
            card += int(v)
        ans2 += card - 1
        if not vis_glob_special[i]:
            for j, v in enumerate(vis):
                if v:
                    vis_glob_special[j] = True
            cc_special.append(card)

    ans2 //= 2

    return dict(
        labels=labels,
        ans1=ans1,
        ans2=ans2,
        i=ii,
        good_path=good_path,
        bad_path=bad_path,
        P=P,
        Q=Q,
        R=R,
        cc=cc,
        cc_special=cc_special,
        sum_fracs=" + ".join(
            r"\frac{" + f"{x}" + r"\cdot (" + f"{x}" + r" - 1)}{2}" for x in cc
        ),
        sum_fracs_special=" + ".join(
            r"\frac{" + f"{x}" + r"\cdot (" + f"{x}" + r" - 1)}{2}" for x in cc_special
        ),
    )


variant_inputs = [
    dict(
        labels=[1, 2, 1, 3, 1, 2, 3, 1, 1, 3, 1, 2, 1, 3, 1, 2, 3],
        good_path="JDEBC",
        bad_path="GABIE",
        P="B",
        Q="J",
        R="C",
    ),
    dict(
        labels=[2, 2, 2, 1, 3, 1, 1, 1, 1, 2, 3, 1, 3, 3, 1, 3, 2],
        good_path="FEHBC",
        bad_path="CDEBA",
        P="A",
        Q="H",
        R="B",
    ),
    dict(
        labels=[3, 1, 2, 2, 2, 1, 3, 3, 1, 2, 3, 1, 1, 1, 1, 3, 2],
        good_path="AGFED",
        bad_path="JCDEH",
        P="F",
        Q="D",
        R="E",
    ),
]

print(json.dumps([build_variant(i, **data) for i, data in enumerate(variant_inputs)]))
