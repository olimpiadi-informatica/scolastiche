picture drawing(real k = 1, pen col = gray, string title = "", bool more_pages = false) {
	picture pic;
	path p;
	p = (45, -15) -- (96, -13) .. controls (93, -13) and (90, -11) .. (88, -9) .. controls (86, -7) and (85, -4) .. (85, -1) .. controls (85, 3) and (86, 6) .. (88, 8) .. controls (90, 11) and (93, 13) .. (96, 13) -- (46, 14) -- (40, -1) -- cycle;
	fill(pic, p, gray(0.82));
	p = (-19, -17) .. controls (-85, -17) and (-87, -17) .. (-88, -17) .. controls (-92, -14) and (-95, -10) .. (-96, -3) .. controls (-97, 3) and (-94, 12) .. (-91, 15) .. controls (-90, 15) and (-89, 16) .. (-88, 17) -- (-86, 17) -- (5, 18) -- (96, 18) -- (96, 15) -- (96, 13) -- (72, 13) .. controls (50, 13) and (49, 13) .. (48, 12) .. controls (44, 11) and (42, 4) .. (43, -3) .. controls (43, -7) and (45, -11) .. (47, -12) -- (48, -13) -- (70, -12) .. controls (85, -12) and (92, -13) .. (92, -13) .. controls (92, -13) and (92, -13) .. (94, -13) -- (96, -13) -- (96, -15) -- (96, -17) -- (74, -17) .. controls (62, -17) and (52, -17) .. (51, -17) .. controls (50, -17) and (18, -17) .. (-19, -17) -- cycle;
	fill(pic, p, black);
    p = (47, 10) .. controls (47, 10) and (54, 10) .. (68, 10) .. controls (81, 10) and (89, 10) .. (89, 10) .. controls (89, 10) and (82, 9) .. (68, 9) .. controls (54, 9) and (47, 10) .. (47, 10) -- cycle;
    fill(pic, p, black);
    p = (44, 4) .. controls (44, 4) and (44, 4) .. (44, 5) .. controls (44, 5) and (53, 5) .. (65, 5) .. controls (83, 5) and (85, 5) .. (85, 4) .. controls (85, 4) and (83, 4) .. (65, 4) .. controls (54, 4) and (44, 4) .. (44, 4) -- cycle;
    fill(pic, p, black);
    p = (43, -2) .. controls (43, -1) and (50, -1) .. (64, -1) .. controls (77, -1) and (84, -1) .. (84, -2) .. controls (84, -2) and (77, -2) .. (64, -2) .. controls (50, -2) and (43, -2) .. (43, -2) -- cycle;
    fill(pic, p, black);
    p = (45, -7) .. controls (45, -7) and (48, -7) .. (66, -7) .. controls (80, -7) and (87, -7) .. (87, -7) .. controls (87, -7) and (80, -8) .. (66, -8) .. controls (48, -8) and (45, -8) .. (45, -7) -- cycle;
    fill(pic, p, black);
    if (more_pages) {
        p = (50, 12) .. controls (50, 12) and (91, 12) .. (91, 12) .. controls (91, 11) and (85, 11) .. (71, 11) .. controls (57, 11) and (50, 11) .. (50, 12) -- cycle;
        fill(pic, p, black);
        p = (45, 7) .. controls (45, 7) and (53, 8) .. (66, 8) .. controls (80, 8) and (87, 7) .. (87, 7) .. controls (87, 7) and (80, 7) .. (66, 7) .. controls (53, 7) and (45, 7) .. (45, 7) -- cycle;
        fill(pic, p, black);
        p = (43, 1) .. controls (43, 1) and (51, 2) .. (64, 2) .. controls (77, 2) and (84, 1) .. (84, 1) .. controls (84, 1) and (77, 1) .. (64, 1) .. controls (50, 1) and (43, 1) .. (43, 1) -- cycle;
        fill(pic, p, black);
        p = (44, -5) .. controls (44, -4) and (44, -4) .. (44, -4) .. controls (44, -4) and (53, -4) .. (65, -4) .. controls (83, -4) and (85, -4) .. (85, -4) .. controls (85, -5) and (83, -5) .. (65, -5) .. controls (54, -5) and (44, -5) .. (44, -5) -- cycle;
        fill(pic, p, black);
        p = (47, -10) .. controls (47, -10) and (54, -10) .. (68, -10) .. controls (81, -10) and (89, -10) .. (89, -10) .. controls (89, -10) and (81, -11) .. (68, -11) .. controls (54, -11) and (47, -10) .. (47, -10) -- cycle;
        fill(pic, p, black);
    }
    p = (42, -13) .. controls (42, -13) and (41, -12) .. (41, -12) .. controls (40, -11) and (39, -6) .. (38, -3) .. controls (38, -1) and (38, 0) .. (38, 3) .. controls (39, 6) and (40, 10) .. (41, 12) .. controls (41, 12) and (42, 13) .. (42, 13) .. controls (42, 13) and (41, 13) .. (40, 13) .. controls (38, 13) and (38, 13) .. (37, 12) .. controls (36, 11) and (36, 10) .. (35, 7) .. controls (34, 5) and (34, 4) .. (34, 0) .. controls (34, -5) and (34, -5) .. (35, -8) .. controls (36, -10) and (37, -11) .. (38, -12) .. controls (38, -13) and (39, -13) .. (40, -13) .. controls (41, -13) and (42, -13) .. (42, -13) -- cycle;
    fill(pic, p, col);
    p = (35, -13) .. controls (32, -7) and (32, -4) .. (32, 2) .. controls (32, 6) and (33, 8) .. (35, 11) .. controls (35, 12) and (35, 13) .. (35, 13) .. controls (35, 13) and (34, 13) .. (33, 13) .. controls (31, 13) and (31, 13) .. (30, 12) .. controls (28, 10) and (27, 6) .. (27, 0) .. controls (27, -5) and (28, -7) .. (29, -10) .. controls (30, -13) and (31, -13) .. (33, -13) .. controls (35, -13) and (35, -13) .. (35, -13) -- cycle;
    fill(pic, p, col*0.7+0.3*lightgray);
    p = (28, -13) .. controls (28, -13) and (28, -12) .. (27, -11) .. controls (26, -8) and (26, -5) .. (26, 0) .. controls (26, 5) and (26, 8) .. (28, 11) .. controls (28, 12) and (28, 13) .. (28, 13) .. controls (28, 13) and (13, 13) .. (-20, 13) -- (-68, 13) -- (-69, 12) .. controls (-69, 12) and (-70, 11) .. (-70, 10) .. controls (-71, 9) and (-72, 3) .. (-72, 0) .. controls (-72, -5) and (-71, -11) .. (-69, -13) .. controls (-68, -13) and (-66, -13) .. (-20, -13) .. controls (7, -13) and (28, -13) .. (28, -13) -- cycle;
    fill(pic, p, col);
    p = (-71, -13) .. controls (-71, -13) and (-72, -12) .. (-72, -11) .. controls (-73, -9) and (-74, -3) .. (-74, 0) .. controls (-74, 3) and (-73, 9) .. (-72, 11) .. controls (-72, 12) and (-71, 13) .. (-71, 13) .. controls (-71, 13) and (-73, 13) .. (-74, 13) .. controls (-76, 13) and (-77, 13) .. (-77, 12) .. controls (-80, 10) and (-81, 6) .. (-81, 0) .. controls (-81, -6) and (-79, -10) .. (-77, -12) .. controls (-77, -13) and (-76, -13) .. (-74, -13) .. controls (-73, -13) and (-71, -13) .. (-71, -13) -- cycle;
    fill(pic, p, col*0.7+0.3*lightgray);
    p = (-80, -13) .. controls (-80, -13) and (-80, -12) .. (-81, -11) .. controls (-82, -8) and (-83, -4) .. (-83, 0) .. controls (-83, 5) and (-82, 8) .. (-81, 11) .. controls (-80, 12) and (-80, 13) .. (-80, 13) .. controls (-80, 13) and (-84, 13) .. (-85, 13) .. controls (-88, 12) and (-90, 6) .. (-90, 0) .. controls (-90, -6) and (-88, -12) .. (-85, -13) .. controls (-83, -13) and (-80, -13) .. (-80, -13) -- cycle;
    fill(pic, p, col);
    label(pic, scale(13*k/(length(title)+1)*1.45)*("\sc "+title), (-23,0));
    return scale(k/32)*pic;
}
