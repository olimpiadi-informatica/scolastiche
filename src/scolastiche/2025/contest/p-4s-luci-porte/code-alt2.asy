access "../../../../asy_library/structures/layout.asy" as layout;

unravel layout; // per evitare di scrivere layout.cose tutto il tempo

unitsize(1cm);

TEXT_SIZE = 2;
ALIGN = (0, 0.5);

element[] options;

options[0] = column(
    for_block(
        block_content(e("ripeti mentre"), cond_block(e("luce accesa")), e(":")),
        todo_block(e("???"))
    ),
    e(""),
    e("\texttt{while luce\_accesa() then}"),
    e("\texttt{~~~~???}"),
    e("\texttt{end while}")
);
options[perm[0]] = column(
    block_sequence(
        start_block(e("blocco "+string(perm[0]))),
        if_block(
            block_content(e("se"), cond_block(e("porta chiusa")), e("fai:")),
            instr_block(e("apri porta"))
        )
    ),
    e(""),
    e("\texttt{if porta\_chiusa() then}"),
    e("\texttt{~~~~apri\_porta()}"),
    e("\texttt{end if}")
);
options[perm[1]] = column(
    block_sequence(
        start_block(e("blocco "+string(perm[1]))),
        instr_block(e("avanza"))
    ),
    e(""),
    e("\texttt{avanza()}")
);
options[perm[2]] = column(
    block_sequence(
        start_block(e("blocco "+string(perm[2]))),
        if_block(
            block_content(e("se"), cond_block(e("non"), cond_block(e("luce accesa"))), e("fai:")),
            block_sequence(
                instr_block(e("arretra")),
                instr_block(e("premi interruttore")),
                instr_block(e("avanza"))
            )
        )
    ),
    e(""),
    e("\texttt{if not luce\_accesa() then}"),
    e("\texttt{~~~~arretra()}"),
    e("\texttt{~~~~premi\_interruttore()}"),
    e("\texttt{~~~~avanza()}"),
    e("\texttt{end if}")
);
options[perm[3]] = column(
    block_sequence(
        start_block(e("blocco "+string(perm[3]))),
        if_block(
            block_content(e("se"), cond_block(e("porta chiusa")), e("fai:")),
            block_sequence(
                instr_block(e("premi interruttore")),
                instr_block(e("apri porta"))
            )
        )
    ),
    e(""),
    e("\texttt{if porta\_chiusa() then}"),
    e("\texttt{~~~~premi\_interruttore()}"),
    e("\texttt{~~~~apri\_porta()}"),
    e("\texttt{end if}")
);
options[perm[4]] = column(
    block_sequence(
        start_block(e("blocco "+string(perm[4]))),
        if_block(
            block_content(e("se"), cond_block(e("non"), cond_block(e("luce accesa"))), e("fai:")),
            instr_block(e("premi interruttore"))
        )
    ),
    e(""),
    e("\texttt{if not luce\_accesa() then}"),
    e("\texttt{~~~~premi\_interruttore()}"),
    e("\texttt{end if}")
);

element P = row(
    BLOCK_PADDING + 1,
    fill_space=0,
    options[2], options[3]
);

add(P.drawing());
