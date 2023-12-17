import "../../asy_library/structures/graph.asy" as graph;

unitsize(1cm);

graph.NODE_SIZE = .6;
graph.TEXT_SIZE = 2;
graph.BACKGROUND = lightyellow;
graph.FOREGROUND = black+5;

add(graph.drawing(new pair[]{(6, 14), (2, 9), (9, 6), (11, 13), (20, 14), (21, 9), (12, 10), (4, 1), (18, 4), (20, 5), (13, 4), (16, 2), (5, 6), (19, 7), (16, 12), (6, 11), (13, 7), (8, 3), (2, 4), (13, 1)}, edges2, new pen[]{brown+5}));
