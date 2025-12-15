import json

variants_input = [
    dict(k = 7),
    dict(k = 8),
    dict(k = 9),
    dict(k = 10),
]

def build_variant(k):
    n = 2 ** k

    return dict(
        k=k,
        n=n,
        ans1=2*n - 2,
        wrong1=[2*n, n, n-1, n*3/2],
        ans2=n+k-1,
        wrong2=[n+2*k,n*3/2,n,n-1],
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
