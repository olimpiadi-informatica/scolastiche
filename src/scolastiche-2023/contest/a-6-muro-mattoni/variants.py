import json

variants_input = [
    dict(h=[1, 2, 7, 3, 6, 4, 5], M = 11, d = 4),
    dict(h=[7, 4, 5, 1, 2, 6, 3], M = 12, d = 4),
    dict(h=[6, 4, 2, 5, 3, 7, 1], M = 11, d = 4),
    dict(h=[5, 2, 6, 3, 7, 4, 1], M = 14, d = 4)
]

def build_variant(h, M, d):
    n = len(h)
    ans1=7
    
    ans2 = 0
    for i in range(n - 1):
        a = 0
        b = 0
        while(a < M or b < M):
            da = abs(a + h[i] - b)
            db = abs(b + h[i+1] - a)
            if da < db:
                ans2 = max(da, ans2)
                a += h[i]
            else: 
                ans2 = max(db, ans2)
                b += h[i+1]
        
    return dict(
        h=h,
        M=M,
        d=d,
        ans1=ans1,
        ans2=ans2,
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
