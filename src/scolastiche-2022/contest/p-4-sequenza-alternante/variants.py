import json

variant_inputs = [
    [5, 3, 0, 3, 10],
    [4, 0, 12, 8, 4],
    [2, 7, 2, 9, 0],
    [9, 11, 5, 5, 0],
    [13, 0, 7, 10, 7],
]


def build_variant(sequence):
    # Compute answer
    min_correct = max(sequence)
    max_correct = 0
    sorted_seq = sequence.copy()
    sorted_seq.append(0)
    sorted_seq.sort()
    i, j = 0, len(sorted_seq) - 1
    alternated_seq = []
    while i < j:
        alternated_seq.append(sorted_seq[j])
        if i + 1 != j:
            alternated_seq.append(sorted_seq[i + 1])
        max_correct += 2 * sorted_seq[j] - sorted_seq[i] - sorted_seq[i + 1]
        i += 1
        j -= 1
    seq_sum = sum(sequence)

    return dict(
        correct=dict(min=min_correct, max=max_correct),
        wrong=[
            dict(min=0, max=min_correct),
            dict(min=seq_sum, max=max_correct),
            dict(min=min_correct, max=seq_sum),
            dict(min=0, max=seq_sum),
        ],
        seq=sequence,
        sortedSeq=sorted_seq[:1],
        alternatedSeq=alternated_seq,
        sumIncMin=" + ".join(
            str(abs(x - y)) for x, y in zip(sorted_seq[1:], sorted_seq[:-1])
        ),
        sumIncMax=" + ".join(
            str(abs(x - y)) for x, y in zip(alternated_seq, [0] + alternated_seq[:-1])
        ),
    )


print(
    json.dumps([build_variant(sequence) for i, sequence in enumerate(variant_inputs)])
)
