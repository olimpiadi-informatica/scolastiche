picture drawing(real k = 1, pen col = black) {
	picture pic;
	path p;
	p = (55, -431) .. controls (50, -431) and (34, -430) .. (18, -429) .. controls (2, -429) and (-15, -428) .. (-21, -427) .. controls (-50, -424) and (-74, -414) .. (-96, -396) -- (-102, -391) -- (-106, -393) .. controls (-113, -396) and (-122, -398) .. (-129, -396) .. controls (-139, -394) and (-146, -390) .. (-157, -379) .. controls (-178, -358) and (-185, -341) .. (-180, -319) .. controls (-176, -301) and (-171, -291) .. (-163, -286) .. controls (-158, -284) and (-157, -283) .. (-152, -283) .. controls (-146, -284) and (-146, -284) .. (-145, -281) .. controls (-144, -279) and (-143, -268) .. (-143, -254) .. controls (-142, -239) and (-142, -228) .. (-141, -223) .. controls (-132, -183) and (-113, -151) .. (-82, -121) .. controls (-18, -60) and (53, -46) .. (124, -80) -- (136, -86) -- (147, -79) .. controls (153, -76) and (161, -71) .. (165, -69) .. controls (176, -64) and (178, -61) .. (180, -47) .. controls (181, -38) and (184, -29) .. (191, -16) .. controls (200, 2) and (200, 5) .. (185, 23) .. controls (148, 66) and (131, 105) .. (131, 144) .. controls (131, 160) and (131, 163) .. (140, 182) .. controls (149, 202) and (150, 205) .. (150, 217) .. controls (151, 223) and (151, 228) .. (151, 229) .. controls (153, 231) and (157, 230) .. (160, 227) .. controls (162, 225) and (169, 212) .. (178, 195) .. controls (194, 164) and (202, 151) .. (205, 148) .. controls (207, 147) and (207, 147) .. (207, 149) .. controls (208, 150) and (208, 154) .. (208, 157) .. controls (208, 168) and (212, 186) .. (217, 201) .. controls (220, 211) and (222, 213) .. (225, 213) .. controls (230, 213) and (232, 210) .. (234, 199) .. controls (236, 190) and (240, 183) .. (248, 172) .. controls (270, 145) and (276, 135) .. (284, 115) .. controls (292, 95) and (295, 76) .. (295, 49) .. controls (295, 34) and (295, 30) .. (296, 28) .. controls (299, 25) and (306, 22) .. (322, 19) .. controls (333, 17) and (337, 16) .. (343, 13) .. controls (353, 8) and (361, 1) .. (366, -6) .. controls (374, -16) and (415, -81) .. (417, -87) .. controls (418, -89) and (419, -93) .. (420, -96) -- (422, -103) -- (418, -110) .. controls (412, -121) and (406, -129) .. (397, -136) .. controls (386, -145) and (375, -149) .. (358, -154) .. controls (335, -159) and (327, -163) .. (323, -169) .. controls (320, -174) and (321, -179) .. (324, -193) .. controls (328, -207) and (329, -217) .. (329, -231) .. controls (329, -242) and (328, -255) .. (326, -260) .. controls (325, -262) and (325, -262) .. (323, -259) -- (320, -256) -- (320, -260) .. controls (320, -263) and (319, -268) .. (319, -271) .. controls (315, -286) and (310, -295) .. (305, -295) .. controls (303, -295) and (302, -296) .. (301, -299) .. controls (300, -302) and (296, -307) .. (285, -316) .. controls (276, -324) and (273, -330) .. (273, -340) .. controls (274, -347) and (276, -352) .. (281, -358) .. controls (285, -362) and (289, -365) .. (306, -376) .. controls (323, -386) and (330, -399) .. (324, -408) .. controls (321, -415) and (316, -416) .. (298, -417) .. controls (278, -419) and (266, -418) .. (254, -415) .. controls (232, -409) and (212, -398) .. (187, -376) -- (177, -368) -- (149, -375) .. controls (134, -379) and (121, -383) .. (120, -384) .. controls (120, -384) and (121, -389) .. (123, -395) .. controls (125, -402) and (126, -408) .. (126, -410) .. controls (126, -419) and (118, -425) .. (102, -430) .. controls (96, -432) and (68, -432) .. (55, -431) -- cycle;
	fill(pic, p, col);
	return scale(k/32)*pic;
}
