picture drawing(real k = 1, pen color = royalblue) {
	picture pic;
	path[] p;
	p = (22.2, 15.2) .. controls (16.7, 13.9) and (12.2, 10.4) .. (9.9, 5.4) .. controls (5.5, -4.0) and (10.4, -15.1) .. (20.5, -18.4) .. controls (28.3, -21.0) and (37.2, -17.2) .. (41.0, -9.6) .. controls (42.5, -6.8) and (43.2, -2.9) .. (42.8, -0.2) .. controls (42.2, 4.4) and (40.8, 7.4) .. (37.7, 10.4) .. controls (35.5, 12.6) and (33.0, 14.1) .. (30.0, 14.9) .. controls (28.0, 15.5) and (24.2, 15.6) .. (22.2, 15.2) -- cycle ^^ (22.8, 14.9) .. controls (17.4, 14.0) and (12.7, 10.4) .. (10.3, 5.4) .. controls (7.2, -1.3) and (8.6, -9.1) .. (14.0, -14.2) .. controls (15.9, -16.0) and (17.6, -17.0) .. (20.2, -17.9) .. controls (23.9, -19.2) and (28.2, -19.1) .. (31.9, -17.6) .. controls (35.9, -16.0) and (39.4, -12.6) .. (41.1, -8.6) .. controls (42.2, -6.1) and (42.4, -4.9) .. (42.4, -1.9) .. controls (42.4, 1.5) and (42.2, 2.7) .. (40.9, 5.5) .. controls (39.8, 7.8) and (37.3, 10.8) .. (35.2, 12.1) .. controls (31.5, 14.6) and (27.1, 15.6) .. (22.8, 14.9) -- cycle ^^ (22.7, 11.6) .. controls (21.8, 11.5) and (19.9, 10.9) .. (19.0, 10.5) .. controls (18.0, 10.1) and (15.6, 8.4) .. (15.6, 8.2) .. controls (15.6, 8.1) and (15.3, 7.7) .. (15.0, 7.4) .. controls (14.3, 6.6) and (13.5, 4.9) .. (13.0, 3.5) .. controls (12.5, 1.9) and (12.4, 1.5) .. (12.7, 1.3) .. controls (13.1, 1.0) and (13.2, 1.1) .. (13.8, 2.3) .. controls (16.1, 6.3) and (18.9, 8.8) .. (23.6, 10.8) .. controls (24.3, 11.0) and (24.1, 11.8) .. (23.4, 11.7) .. controls (23.3, 11.7) and (23.0, 11.6) .. (22.7, 11.6) -- cycle;
	fill(pic, p, palegray*0.8+color*0.2+evenodd);
	p = (22.8, 14.9) .. controls (17.4, 14.0) and (12.7, 10.4) .. (10.3, 5.4) .. controls (7.2, -1.3) and (8.6, -9.1) .. (14.0, -14.2) .. controls (15.9, -16.0) and (17.6, -17.0) .. (20.2, -17.9) .. controls (23.9, -19.2) and (28.2, -19.1) .. (31.9, -17.6) .. controls (35.9, -16.0) and (39.4, -12.6) .. (41.1, -8.6) .. controls (42.2, -6.1) and (42.4, -4.9) .. (42.4, -1.9) .. controls (42.4, 1.5) and (42.2, 2.7) .. (40.9, 5.5) .. controls (39.8, 7.8) and (37.3, 10.8) .. (35.2, 12.1) .. controls (31.5, 14.6) and (27.1, 15.6) .. (22.8, 14.9) -- cycle ^^ (22.7, 11.6) .. controls (21.8, 11.5) and (19.9, 10.9) .. (19.0, 10.5) .. controls (18.0, 10.1) and (15.6, 8.4) .. (15.6, 8.2) .. controls (15.6, 8.1) and (15.3, 7.7) .. (15.0, 7.4) .. controls (14.3, 6.6) and (13.5, 4.9) .. (13.0, 3.5) .. controls (12.5, 1.9) and (12.4, 1.5) .. (12.7, 1.3) .. controls (13.1, 1.0) and (13.2, 1.1) .. (13.8, 2.3) .. controls (16.1, 6.3) and (18.9, 8.8) .. (23.6, 10.8) .. controls (24.3, 11.0) and (24.1, 11.8) .. (23.4, 11.7) .. controls (23.3, 11.7) and (23.0, 11.6) .. (22.7, 11.6) -- cycle;
	fill(pic, p, color+evenodd);
	return scale(k/32)*pic;
}