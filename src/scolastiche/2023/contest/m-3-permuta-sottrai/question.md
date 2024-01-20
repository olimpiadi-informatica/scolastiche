import variants from "./variants.py";

Considera l’array $[a_1, \ldots, a_6]$ = $[\js{array}]$. Scegli una permutazione $[p_1, \ldots, p_6]$, ovvero una sequenza contenente i numeri da $1$ a $6$ in un qualche ordine e senza ripetizioni. Poi, per $i$ = $1,\ldots, 6$, sottrai il valore corrente di $a_{p_i}$ da tutti gli altri $a_j$. I numeri possono diventare negativi. Alla fine, la somma degli $a_i$ può essere:

- [ ] $\js{wrong[0]}$
- [ ] $\js{wrong[1]}$
- [x] $\js{correct}$
- [ ] $\js{wrong[2]}$
- [ ] $\js{wrong[3]}$
