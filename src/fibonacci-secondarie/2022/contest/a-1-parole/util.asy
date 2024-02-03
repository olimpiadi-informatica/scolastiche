unitsize(1cm);

pen border = black + linewidth(2);
pen focus = red + linewidth(8);

void allinea(string[] numeri, int[] offset) {
    for (int i = 0; i < numeri.length; ++i) {
        string[] digits = array(numeri[i]);
        transform t = offset.length > 0 ? shift(digits.length - offset[i] - 1, 0) : identity;

        path p = (0, -i) -- (digits.length, -i) -- (digits.length, -i + .9) -- (0, -i + .9) -- cycle;
        draw(t * p, border);

        for (int j = 0; j < digits.length; ++j) {
            draw(t * ((j, -i) -- (j, -i + .9)));
            label(scale(1.1) * digits[j], t * (j + .5, -i + .42));
        }
    }

    if (offset.length > 0) {
        path p = (0, 0) -- (1.4, 0) -- (1.4, -numeri.length - .34) -- (0, -numeri.length -.34) -- cycle;
        draw(shift(length(numeri[0]) - 1.2, 1.12) * p, focus);
    }
}
