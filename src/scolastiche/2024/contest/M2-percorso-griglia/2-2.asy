access "../../../../asy_library/structures/histogram.asy" as histogram;
unitsize(1cm);
add(histogram.drawing(scale(1.5)*"scolastiche", new Label[]{"corretta", "vuota", "scorretta"}, new real[]{1346, 3236, 9270}));
