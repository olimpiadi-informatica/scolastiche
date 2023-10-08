---
variants:
  - min: 5
    sol: 35
    tipo: minima
  - min: 5
    sol: 56
    tipo: massima
  - min: 6
    sol: 67
    tipo: minima
  - min: 6
    sol: 112
    tipo: massima
---

Quando il Dr. Bruce Banner si trasforma nell'incredibile Hulk, acquista sempre più forza ad ogni minuto che passa.

Al tempo $t=0$ riesce a saltare un solo metro, al tempo $t=1$ minuto ne salta due, al tempo $t=2$ minuti ne salta quattro e così via: in generale, al tempo $t \geq 0$ minuti riesce a saltare $2^t$ metri.

Tuttavia l'incredibile Hulk può saltare sempre e solo nella stessa direzione: dunque ad ogni istante t può decidere se saltare in avanti alla distanza permessagli in quel momento oppure stare fermo e aspettare che la distanza permessagli aumenti, in modo da percorrere una certa distanza $D > 0$, espressa in metri, effettuando il minor numero possibile di salti.

Per esempio, per $D=9$, Hulk salta _due_ volte (effettua un salto da $1$ metro a $t=0$ e uno da $8$ metri a $t=3$ minuti); per $D=7$, Hulk salta _tre_ volte (un salto da $1$ metro a $t=0$, uno da $2$ metri a $t = 1$ minuto e uno da $4$ metri a $t=2$ minuti); per $D=16$, Hulk effettua _un solo_ salto da $16$ metri a $t=4$ minuti.

Sapete che, nel suo ultimo spostamento, Hulk ha fatto in totale 3 salti, di cui l'ultimo al tempo $t=\js{min}$ minuti. Qual è la distanza **{tipo}** percorsa da Hulk nel suo ultimo spostamento?

?> {sol}
