access "../../../../asy_library/structures/histogram.asy" as histogram;
unitsize(1cm);
add(histogram.drawing(scale(1.5)*"punteggi", new Label[]{"0", "5-15", "20-30", "35-45", "50"}, new real[]{1,10,1,0,139}));
