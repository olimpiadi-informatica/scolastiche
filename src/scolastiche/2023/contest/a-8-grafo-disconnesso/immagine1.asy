import "../../../../asy_library/structures/graph.asy" as graph;

unitsize(1cm);

graph.NODE_SIZE = .6;
graph.TEXT_SIZE = 2;
graph.BACKGROUND = lightyellow;
graph.FOREGROUND = black+5;

add(graph.drawing(new pair[]{(26, 21), (19, 16), (16, 19), (17, 24), (24, 17), (23, 26), (25, 23)}, edges1, new pen[]{brown+5}));
