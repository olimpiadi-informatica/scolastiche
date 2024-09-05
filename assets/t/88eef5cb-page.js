/*! For licenses information, see LICENSES.txt */
import{j as e}from"../_virtual_quizms-routes-43c24d3c.js";import{n as s,f as Ce}from"../w/43ad329f-chunk-IFWY6GUU.js";import{_ as ze}from"../s/00dd80a9-react-dom.js";function le(i){const n={li:"li",p:"p",span:"span",ul:"ul",...s(),...i.components},{AnswerGroup:o,Equation:t,OpenAnswer:r,SubProblem:a}=n;return o||y("AnswerGroup"),t||y("Equation"),r||y("OpenAnswer"),a||y("SubProblem"),e.jsxs(a,{children:[e.jsxs(n.p,{children:["Nell’informatica si parla di “edit distance” quando si vuole misurare quanto sono diverse due parole ",e.jsx(t,{children:String.raw`w_1`})," e ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(t,{children:String.raw`w_2`}),"."]}),`
Si dice che due parole `,e.jsx(t,{children:String.raw`w_1`})," e ",e.jsx(t,{children:String.raw`w_2`})," hanno distanza:"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["1 se ",e.jsx(t,{children:String.raw`w_1`})," è ottenuta da ",e.jsx(t,{children:String.raw`w_2`})," modificando una lettera (ad esempio, sono a distanza 1 “cane” e “cene”) o viceversa;"]}),`
`,e.jsxs(n.li,{children:["2 se ",e.jsx(t,{children:String.raw`w_1`})," è ottenuta da ",e.jsx(t,{children:String.raw`w_2`})," inserendo una lettera in una qualunque posizione (ad esempio, sono a distanza 2 “mangia” e “mangiai”) o viceversa."]}),`
`]}),e.jsx(n.p,{children:`Luca ha saputo che Mario partecipa alle Olimpiadi di Informatica e ha deciso di cercare su Google che cosa
sono, ma ha commesso alcuni errori di battitura e ha scritto: “Olinpiadi Italianer de Informatia”.`}),e.jsx(n.p,{children:`Sapendo che la distanza tra due frasi è la somma delle distanze tra le parole corrispondenti,
ovvero quanto la frase scritta da Luca si discosta da “Olimpiadi Italiane di Informatica”`}),e.jsx(o,{children:e.jsx(r,{type:"text",correct:String.raw`6`})})]})}function Le(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(le,{...i})}):le(i)}function y(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}function de(i){const n={p:"p",span:"span",...s(),...i.components},{AnswerGroup:o,Equation:t,OpenAnswer:r,SubProblem:a}=n;return o||M("AnswerGroup"),t||M("Equation"),r||M("OpenAnswer"),a||M("SubProblem"),e.jsxs(a,{children:[e.jsxs(n.p,{children:["Siano A e B due insiemi tali che ",e.jsx(t,{children:String.raw`A = \{1, 2, 5, 8\}`})," e ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(t,{children:String.raw`B = \{3, 5, 9, 11, 42\}`}),"."]}),`
Si definisce `,e.jsx(t,{children:String.raw`D(x, X)`}),` il numero di elementi presenti in X di cui x è un divisore
(formalmente `,e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(t,{children:String.raw`D(x, X) = \#\{y \text{ in } X \text{ such that } x | y\}`}),")."]}),`
Indicare il più piccolo numero c tale che risulti `,e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(t,{children:String.raw`D(c, A) > D(c, B)`}),"."]})]}),e.jsx(o,{children:e.jsx(r,{type:"text",correct:String.raw`2`})})]})}function Ne(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(de,{...i})}):de(i)}function M(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const D={src:new URL("../d/da0e0735-es15a.webp",import.meta.url).href,width:746,height:153},R={src:new URL("../5/53def03c-es15b.webp",import.meta.url).href,width:736,height:148};function pe(i){const n={p:"p",span:"span",...s(),...i.components},{Answer:o,AnswerGroup:t,Equation:r,Image:a,SubProblem:c}=n;return o||j("Answer"),t||j("AnswerGroup"),r||j("Equation"),a||j("Image"),c||j("SubProblem"),e.jsxs(c,{children:[e.jsxs(n.p,{children:["Data la funzione ",e.jsx(r,{children:String.raw`f(x) = 2x \mod 7`})," (ovvero ",e.jsx(r,{children:String.raw`f(x)`})," è il resto ottenuto dividendo ",e.jsx(r,{children:String.raw`2x`})," per ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`7`}),")"]}),` si consideri la seguente
tabella, denominata BF1:`]}),e.jsx(n.p,{children:e.jsx(a,{alt:"",src:typeof D=="function"?D(_variant):D})}),e.jsx(n.p,{children:"Una generica tabella di tipo BF rappresenta un insieme di interi."}),e.jsxs(n.p,{children:[`La regola per inserire valori nella tabella BF è la seguente: inizialmente sono tutti zero. Se si vuole inserire in
BF un intero `,e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`x`}),","]})," si deve applicare a ",e.jsx(r,{children:String.raw`x`})," la funzione ",e.jsx(r,{children:String.raw`f`})," e poi scrivere un ",e.jsx(r,{children:String.raw`1`})," nella posizione numero ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`f(x)`}),"."]}),` Se era già
presente un `,e.jsx(r,{children:String.raw`1`})," in posizione ",e.jsx(r,{children:String.raw`f(x)`})," non si deve fare niente."]}),e.jsxs(n.p,{children:["Ad esempio, se si vuole inserire nella tabella BF1 il numero ",e.jsx(r,{children:String.raw`6`})," non si deve far altro che osservare che ",e.jsx(r,{children:String.raw`6\cdot 2`}),`
modulo `,e.jsx(r,{children:String.raw`7`})," fa ",e.jsx(r,{children:String.raw`5`})," e inserire un ",e.jsx(r,{children:String.raw`1`})," in posizione ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`5`}),","]})," ottenendo la tabella BF2:"]}),e.jsx(n.p,{children:e.jsx(a,{alt:"",src:typeof R=="function"?R(_variant):R})}),e.jsx(n.p,{children:"Indicare la corretta fra le seguenti affermazioni, riferite alla prima tabella BF1:"}),e.jsxs(t,{children:[e.jsx(o,{correct:!1,children:e.jsxs(n.p,{children:["In BF1 è presente il numero ",e.jsx(r,{children:String.raw`4`})]})}),e.jsx(o,{correct:!1,children:e.jsxs(n.p,{children:["In BF1 non è presente il numero ",e.jsx(r,{children:String.raw`19`})]})}),e.jsx(o,{correct:!1,children:e.jsxs(n.p,{children:["In BF1 potrebbe essere presente il numero ",e.jsx(r,{children:String.raw`6`})]})}),e.jsx(o,{correct:!0,children:e.jsxs(n.p,{children:["In BF1 potrebbe essere presente il numero ",e.jsx(r,{children:String.raw`12`})]})})]})]})}function De(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(pe,{...i})}):pe(i)}function j(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const X={src:new URL("../2/2d245c95-es16.webp",import.meta.url).href,width:1126,height:377},I={src:new URL("../0/044adb25-es16b.webp",import.meta.url).href,width:254,height:250};function ue(i){const n={p:"p",...s(),...i.components},{AnswerGroup:o,Equation:t,Image:r,OpenAnswer:a,SubProblem:c}=n;return o||w("AnswerGroup"),t||w("Equation"),r||w("Image"),a||w("OpenAnswer"),c||w("SubProblem"),e.jsxs(c,{children:[e.jsxs(n.p,{children:["Nel gioco Lights Out si ha una matrice di ",e.jsx(t,{children:String.raw`5\times 5`}),` luci, che possono essere accese o spente. Premendo su un
elemento della matrice, si cambia lo stato di quell’elemento e dei suoi quattro vicini (alto, basso, destra e
sinistra), come mostrato nella figura di seguito.`]}),e.jsx(n.p,{children:e.jsx(r,{alt:"",src:typeof X=="function"?X(_variant):X})}),e.jsxs(n.p,{children:["Si consideri una versione semplificata, con una matrice ",e.jsx(t,{children:String.raw`4\times 4`})," come quella mostrata nella figura qui sotto."]}),e.jsx(n.p,{children:e.jsx(r,{alt:"",src:typeof I=="function"?I(_variant):I})}),e.jsx(n.p,{children:`Inizialmente le luci sono tutte spente. Una mossa consiste nel premere un elemento della matrice. Qual è il
numero minimo di mosse che bisogna fare per arrivare alla configurazione in cui tutte le luci sono accese?`}),e.jsx(o,{children:e.jsx(a,{type:"text",correct:String.raw`4`})})]})}function Re(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ue,{...i})}):ue(i)}function w(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}function me(i){const n={p:"p",span:"span",...s(),...i.components},{AnswerGroup:o,Equation:t,OpenAnswer:r,SubProblem:a}=n;return o||E("AnswerGroup"),t||E("Equation"),r||E("OpenAnswer"),a||E("SubProblem"),e.jsxs(a,{children:[e.jsxs(n.p,{children:["Si prenda ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(t,{children:String.raw`R = \{00101, 101, 1010101, 1111001\}`}),"."]})]}),e.jsxs(n.p,{children:[`Si indichi una stringa binaria w (fatta di soli 0 e 1) che contenga al più 13 caratteri tale che ogni stringa
presente nell’insieme `,e.jsx(t,{children:String.raw`R`})," sia una sottostringa di w. La stringa w deve iniziare con un 1."]}),e.jsx(o,{children:e.jsx(r,{type:"text",correct:String.raw`1111001010101`})})]})}function Xe(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(me,{...i})}):me(i)}function E(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const k={src:new URL("../8/8fc2e8eb-es18.webp",import.meta.url).href,width:408,height:483};function xe(i){const n={li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components},{Answer:o,AnswerGroup:t,Code:r,Image:a,SubProblem:c}=n;return o||b("Answer"),t||b("AnswerGroup"),r||b("Code"),a||b("Image"),c||b("SubProblem"),e.jsxs(c,{children:[e.jsx(n.p,{children:`La grafica della tartaruga prevede che si possano impartire degli ordini di movimento a una tartaruga, che li
eseguirà lasciando sul terreno una traccia dei suoi movimenti, come se avesse una penna attaccata sotto la
pancia. Gli ordini possono essere impartiti tramite un semplice linguaggio, stando attenti che:`}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"le istruzioni destra e sinistra sono relative all’orientamento attuale della tartaruga, e il numero che segue è un angolo di rotazione (rispettivamente orario e antiorario) espresso in gradi;"}),`
`,e.jsx(n.li,{children:"le istruzioni pennasu e pennagiu sollevano e abbassano rispettivamente la penna sotto la pancia della tartaruga: quando la penna è sollevata ovviamente non lascia tracce sul terreno;"}),`
`,e.jsx(n.li,{children:"l’istruzione ripeti fa ripetere il blocco che segue, delimitato da parentesi graffe, per un numero di volte indicato a fianco dell’istruzione."}),`
`]}),e.jsx(n.p,{children:e.jsx(a,{alt:"",src:typeof k=="function"?k(_variant):k})}),e.jsxs(n.p,{children:[`Quest’anno la tartaruga vuole realizzare un
autoritratto. Prima ha disegnato la sua sagoma a
matita (in figura la linea tratteggiata) e poi ha
iniziato a ricalcarla con la penna.
In questo momento la tartaruga si trova nel vertice
in alto a sinistra dell’esagono più alto ed è nella
condizione pennagiu, sapendo che gli esagoni
del carapace sono regolari e hanno lato l,
scegliere tra le seguenti quattro alternative quella
che `,e.jsx(n.strong,{children:"non"})," fa il disegno corretto."]}),e.jsxs(t,{children:[e.jsxs(o,{correct:!1,children:[" ",e.jsx(r,{code:String.raw`ripeti 4 {
    destra 60
    avanti l
    sinistra 60
    avanti l
}
ripeti 4 {
    sinistra 60
    avanti l
}
ripeti 3 {
    pennasu
    destra 180
    avanti l
    pennagiu
    ripeti 3 {
        sinistra 60
        avanti l
    }
}`,inline:!1,lang:"text",className:"overflow-hidden rounded-box border border-base-content/40 text-sm *:overflow-x-auto *:p-4"})]}),e.jsxs(o,{correct:!1,children:[" ",e.jsx(r,{code:String.raw`ripeti 4 {
    destra 60
    avanti l
    sinistra 60
    avanti l
}
ripeti 4 {
    sinistra 60
    avanti l
}
ripeti 3 {
    pennasu
    sinistra 180
    avanti l
    pennagiu
    ripeti 3 {
        sinistra 60
        avanti l
    }
}`,inline:!1,lang:"text",className:"overflow-hidden rounded-box border border-base-content/40 text-sm *:overflow-x-auto *:p-4"})]}),e.jsxs(o,{correct:!0,children:[" ",e.jsx(r,{code:String.raw`ripeti 4 {
    avanti l
    destra 60
    sinistra 60
    avanti l
}
ripeti 4 {
    sinistra 60
    avanti l
}
ripeti 3 {
    pennasu
    destra 180
    avanti l
    pennagiu
    ripeti 3 {
        sinistra 60
        avanti l
    }
}`,inline:!1,lang:"text",className:"overflow-hidden rounded-box border border-base-content/40 text-sm *:overflow-x-auto *:p-4"})]}),e.jsxs(o,{correct:!1,children:[" ",e.jsx(r,{code:String.raw`ripeti 4 {
    destra 60
    avanti l
    sinistra 60
    avanti l
}
ripeti 4 {
    sinistra 60
    avanti l
}
ripeti 3 {
    destra 180
    pennasu
    avanti l
    pennagiu
    ripeti 3 {
        sinistra 60
        avanti l
    }
}`,inline:!1,lang:"text",className:"overflow-hidden rounded-box border border-base-content/40 text-sm *:overflow-x-auto *:p-4"})]})]})]})}function Ie(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(xe,{...i})}):xe(i)}function b(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const G={src:new URL("../e/e0140016-es19.webp",import.meta.url).href,width:663,height:341};function he(i){const n={p:"p",...s(),...i.components},{AnswerGroup:o,Image:t,OpenAnswer:r,SubProblem:a}=n;return o||$("AnswerGroup"),t||$("Image"),r||$("OpenAnswer"),a||$("SubProblem"),e.jsxs(a,{children:[e.jsx(n.p,{children:`In un vecchio edificio ci sono 10 computer che devono essere collegati in rete. Dato l’elevato spessore delle
pareti, non è possibile usare una rete wifi e si decide, quindi, di collegarli via cavo. Non sono possibili tutti i
collegamenti, e ogni collegamento ha un costo diverso. Si deve aiutare a progettare la rete scegliendo i nove
collegamenti necessari per fare in modo che ogni computer sia collegato alla rete (ovvero ad almeno un altro
computer) e che il costo complessivo sia minimo. Dopo che i nove collegamenti saranno stati scelti, indicare
il costo totale, pari alla somma dei costi dei nove collegamenti selezionati.`}),e.jsx(n.p,{children:e.jsx(t,{alt:"",src:typeof G=="function"?G(_variant):G})}),e.jsx(o,{children:e.jsx(r,{type:"text",correct:String.raw`88`})})]})}function ke(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(he,{...i})}):he(i)}function $(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const O={src:new URL("../2/26a3e4f4-es20.webp",import.meta.url).href,width:319,height:465};function ge(i){const n={p:"p",...s(),...i.components},{AnswerGroup:o,Image:t,OpenAnswer:r,SubProblem:a}=n;return o||z("AnswerGroup"),t||z("Image"),r||z("OpenAnswer"),a||z("SubProblem"),e.jsxs(a,{children:[e.jsx(n.p,{children:`La famosa Sushi Squad, composta da 5 studenti delle scuole
superiori, si trova nel noto sushi bar Minimax Hao. Dal tavolo del
sashimi (riportato in figura) i 5 protagonisti possono prendere un
solo piatto, ma la squadra si divide in 2: gli amanti del salmone
(S) e gli amanti del tonno (T), in cui ognuna delle due fazioni
vuole che dal tavolo venga preso il piatto contenente la maggior
quantità del pesce preferito.`}),e.jsx(n.p,{children:e.jsx(t,{alt:"",src:typeof O=="function"?O(_variant):O})}),e.jsx(n.p,{children:`Le due squadre S e T si disputano la scelta del piatto giocando
secondo questa logica: la squadra S ha diritto a selezionare una
riga, la squadra T una colonna.
Valutare i due seguenti scenari.`}),e.jsx(n.p,{children:`A) Sia la squadra S ad iniziare il gioco.
S seleziona la riga in modo tale che, qualunque sia la colonna che sceglierà T nella mossa successiva, sia
massimo il numero minimo di filetti di salmone nel piatto. T, quando arriva il suo turno, sceglie semplicemente
il piatto con più filetti di tonno.`}),e.jsx(n.p,{children:`B) Sia la squadra T ad iniziare il gioco.
T seleziona la colonna in modo tale che, qualunque sia la riga scelta da S nella mossa successiva, sia
massimo il numero minimo di filetti di tonno nel piatto. Quando arriva il turno di S, questa sceglie
semplicemente il piatto con più filetti di salmone.
Si devono indicare RA e CA (ovvero i numeri di riga e colonna scelti nello scenario A) e RB e CB (ovvero
i numeri di riga e colonna scelti nello scenario B). Per esempio, la risposta “1” (numero intero di una sola
cifra) per RA indica che si intende dare come risposta la prima riga dello scenario A.`}),e.jsx(n.p,{children:"Rispondere concatenando i valori RA, CA, RB, CB."}),e.jsx(o,{children:e.jsx(r,{type:"text",correct:String.raw`1232`})})]})}function Ge(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ge,{...i})}):ge(i)}function z(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const Oe={variants:[{bianchi:50,neri:50,sol:3},{bianchi:30,neri:30,sol:3},{bianchi:60,neri:60,sol:3},{bianchi:10,neri:10,sol:3}]};function fe(i){const n=Oe?.variants??variants,[o,t]=ze.useState(0);for(const h of Object.keys(n[o]))if(/^[^a-z]./.test(h))throw new Error("Invalid variable name `"+h+"` in file `logica-1-pt-01/question.md`: variable names must start with a lowercase letter.");if(!("bianchi"in n[o]))throw new Error("Variable `bianchi` is not defined in file `logica-1-pt-01/question.md`.");if(!("neri"in n[o]))throw new Error("Variable `neri` is not defined in file `logica-1-pt-01/question.md`.");if(!("sol"in n[o]))throw new Error("Variable `sol` is not defined in file `logica-1-pt-01/question.md`.");const{bianchi:r,neri:a,sol:c}=n[o],p={p:"p",...s(),...i.components},{AnswerGroup:u,OpenAnswer:m,SubProblem:x}=p;return u||U("AnswerGroup"),m||U("OpenAnswer"),x||U("SubProblem"),e.jsxs(x,{children:[e.jsxs(p.p,{children:["Dato un cassetto con ",r," calzini bianchi e ",a,` calzini neri qual è il numero minimo di
calzini da estrarre per essere sicuri di averne almeno due dello stesso colore?`]}),e.jsx(u,{children:e.jsx(m,{type:"text",correct:String.raw`${c}`})})]})}function Ue(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(fe,{...i})}):fe(i)}function U(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const Be={variants:[{sol:5e3,soldi:"13\\,000"},{sol:1e4,soldi:"26\\,000"},{sol:15e3,soldi:"39\\,000"},{sol:2e4,soldi:"52\\,000"}]};function je(i){const n=Be?.variants??variants,[o,t]=ze.useState(0);for(const h of Object.keys(n[o]))if(/^[^a-z]./.test(h))throw new Error("Invalid variable name `"+h+"` in file `logica-1-pt-02/question.md`: variable names must start with a lowercase letter.");if(!("soldi"in n[o]))throw new Error("Variable `soldi` is not defined in file `logica-1-pt-02/question.md`.");if(!("sol"in n[o]))throw new Error("Variable `sol` is not defined in file `logica-1-pt-02/question.md`.");const{soldi:r,sol:a}=n[o],c={em:"em",p:"p",...s(),...i.components},{AnswerGroup:p,Equation:u,OpenAnswer:m,SubProblem:x}=c;return p||q("AnswerGroup"),u||q("Equation"),m||q("OpenAnswer"),x||q("SubProblem"),e.jsxs(x,{children:[e.jsx(c.p,{children:`Valerio e Martina hanno scoperto di aver ereditato una piccola somma da un lontano parente venuto a mancare da poco.
Il testamento contiene le indicazioni sull’importo che spetta a ciascuno dei due ragazzi, ovvero quanto segue:`}),e.jsxs(c.p,{children:["“",e.jsxs(c.em,{children:[`Vorrei che il doppio di quanto spetti a Martina sia pari al triplo di quanto spetti a Valerio;
vorrei inoltre che il doppio di quanto spetti a Valerio, sommato con il triplo di quanto spetti a Martina,
sia pari a `,e.jsx(u,{children:String.raw`${r}`})," euro."]}),"”"]}),e.jsx(c.p,{children:"Qual è il valore complessivo dell’eredità di Martina e Valerio?"}),e.jsx(p,{children:e.jsx(m,{type:"text",correct:String.raw`${a}`})})]})}function Ve(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(je,{...i})}):je(i)}function q(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}function we(i){const n={p:"p",span:"span",...s(),...i.components},{AnswerGroup:o,Equation:t,OpenAnswer:r,SubProblem:a}=n;return o||C("AnswerGroup"),t||C("Equation"),r||C("OpenAnswer"),a||C("SubProblem"),e.jsxs(a,{children:[e.jsxs(n.p,{children:["Dato il seguente insieme ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(t,{children:String.raw`A = \{1, 2, 3, 4, 7, 32, 89, 145, 106, 33, 36, 39\}`}),","]}),`
qual è il numero di possibili coppie non ordinate di insiemi `,e.jsx(t,{children:String.raw`A_1`})," e ",e.jsx(t,{children:String.raw`A_2`}),` tali
che `,e.jsx(t,{children:String.raw`|A_1| = |A_2|`})," (dove con ",e.jsx(t,{children:String.raw`|X|`}),` si intende il numero di elementi contenuti
nell’insieme `,e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(t,{children:String.raw`X`}),"),"]})," ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(t,{children:String.raw`A_1 \cup A_2 = A`}),","]})," ",e.jsx(t,{children:String.raw`A_1 \cap A_2 = \emptyset`}),` e
`,e.jsx(t,{children:String.raw`\text{somma}(A_1) = \text{somma}(A_2)`})," (dove ",e.jsx(t,{children:String.raw`\text{somma}(X)`}),` è la somma di tutti
gli elementi nell’insieme `,e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(t,{children:String.raw`X`}),")?"]})]}),e.jsx(o,{children:e.jsx(r,{type:"text",correct:String.raw`0`})})]})}function Fe(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(we,{...i})}):we(i)}function C(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}function be(i){const n={p:"p",span:"span",...s(),...i.components},{AnswerGroup:o,Equation:t,OpenAnswer:r,SubProblem:a}=n;return o||L("AnswerGroup"),t||L("Equation"),r||L("OpenAnswer"),a||L("SubProblem"),e.jsxs(a,{children:[e.jsxs(n.p,{children:["Un numero naturale è palindromo se letto in senso inverso è identico a sé stesso; ad esempio, ",e.jsx(t,{children:String.raw`151`})," e ",e.jsx(t,{children:String.raw`17271`}),`
sono numeri palindromi. Un numero naturale `,e.jsx(t,{children:String.raw`n`}),` si dice palizero se ha un numero dispari di cifre, è palindromo
e la cifra che appare una sola volta al centro è lo `,e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(t,{children:String.raw`0`}),"."]})," Es. ",e.jsx(t,{children:String.raw`1234567890987654321`})," è palizero, ",e.jsx(t,{children:String.raw`3980893`}),` è palizero,
`,e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(t,{children:String.raw`23732`}),","]})," ",e.jsx(t,{children:String.raw`23400432`})," e ",e.jsx(t,{children:String.raw`124421`})," sono palindromi ma non palizeri."]}),e.jsxs(n.p,{children:["Si dica quanti sono i numeri palizeri compresi tra ",e.jsx(t,{children:String.raw`10^3`})," e ",e.jsx(t,{children:String.raw`10^5`})," estremi esclusi."]}),e.jsx(o,{children:e.jsx(r,{type:"text",correct:String.raw`90`})})]})}function Qe(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(be,{...i})}):be(i)}function L(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}function ve(i){const n={p:"p",...s(),...i.components},{AnswerGroup:o,OpenAnswer:t,SubProblem:r}=n;return o||B("AnswerGroup"),t||B("OpenAnswer"),r||B("SubProblem"),e.jsxs(r,{children:[e.jsx(n.p,{children:`Due treni sono sullo stesso binario e viaggiano uno verso l’altro; la distanza iniziale tra di loro è di 300 km; il
primo treno viaggia a 80km/h, il secondo a 70km/h. Un velocissimo colibrì, che vola a 120km/h, parte dalla
locomotiva del primo treno e arriva a toccare la locomotiva del secondo, a quel punto si gira e torna indietro
fino a toccare la locomotiva del primo, dove si gira e torna indietro e così via finché i due treni si scontrano.`}),e.jsx(n.p,{children:"Quanti chilometri ha percorso, complessivamente, il colibrì?"}),e.jsx(o,{children:e.jsx(t,{type:"text",correct:String.raw`240`})})]})}function Te(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ve,{...i})}):ve(i)}function B(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const V={src:new URL("../1/19f07a97-es6.svg",import.meta.url).href,width:682,height:542};function _e(i){const n={p:"p",...s(),...i.components},{Answer:o,AnswerGroup:t,Code:r,Equation:a,Image:c,SubProblem:p}=n;return o||g("Answer"),t||g("AnswerGroup"),r||g("Code"),a||g("Equation"),c||g("Image"),p||g("SubProblem"),e.jsxs(p,{children:[e.jsx(n.p,{children:"Data la seguente funzione:"}),e.jsx(n.p,{children:e.jsx(c,{alt:"",src:typeof V=="function"?V(_variant):V})}),e.jsx(n.p,{children:"Indicare l’affermazione vera tra le seguenti:"}),e.jsxs(t,{children:[e.jsx(o,{correct:!1,children:e.jsxs(n.p,{children:["Questa funzione restituisce 1 solo se la coppia (",e.jsx(r,{code:String.raw`par1`,inline:!0,lang:"text",className:"p-0 text-base"}),", ",e.jsx(r,{code:String.raw`par2`,inline:!0,lang:"text",className:"p-0 text-base"}),") si trova nel cerchio di raggio ",e.jsx(r,{code:String.raw`par3`,inline:!0,lang:"text",className:"p-0 text-base"})]})}),e.jsx(o,{correct:!0,children:e.jsxs(n.p,{children:["Questa funzione restituisce 1 se chiamata sulla terna ",e.jsx(a,{children:String.raw`(1, 0, 3)`})]})}),e.jsx(o,{correct:!1,children:e.jsxs(n.p,{children:["Questa funzione restituisce 0 per tutte le terne della forma ",e.jsx(a,{children:String.raw`(a, 2a, 3a)`})]})}),e.jsx(o,{correct:!1,children:e.jsxs(n.p,{children:["Questa funzione deve essere chiamata con ",e.jsx(r,{code:String.raw`par3`,inline:!0,lang:"text",className:"p-0 text-base"})," ",e.jsx(a,{children:String.raw`\geq 0`})]})})]})]})}function He(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(_e,{...i})}):_e(i)}function g(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const F={src:new URL("../7/715c4580-es7.svg",import.meta.url).href,width:428,height:642};function Se(i){const n={p:"p",...s(),...i.components},{AnswerGroup:o,Code:t,Image:r,OpenAnswer:a,SubProblem:c}=n;return o||v("AnswerGroup"),t||v("Code"),r||v("Image"),a||v("OpenAnswer"),c||v("SubProblem"),e.jsxs(c,{children:[e.jsx(n.p,{children:"Dato il seguente programma:"}),e.jsx(n.p,{children:e.jsx(r,{alt:"",src:typeof F=="function"?F(_variant):F})}),e.jsxs(n.p,{children:["Dando in input il vettore ",e.jsx(t,{code:String.raw`v = [3.45, 5.67, 8.92, 2.12, 7.33, 8.21, 4.21, 9.03]`,inline:!0,lang:"srs",className:"p-0 text-base"})," alla procedura insieme all’intero ",e.jsx(t,{code:String.raw`n = 8`,inline:!0,lang:"text",className:"p-0 text-base"}),", quanto vale la somma di ",e.jsx(t,{code:String.raw`v`,inline:!0,lang:"text",className:"p-0 text-base"})," al termine della procedura?"]}),e.jsx(o,{children:e.jsx(a,{type:"text",correct:String.raw`50`})})]})}function Je(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Se,{...i})}):Se(i)}function v(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const Q={src:new URL("../d/d24f277c-es8.svg",import.meta.url).href,width:556,height:518};function Ae(i){const n={p:"p",...s(),...i.components},{Answer:o,AnswerGroup:t,Code:r,Image:a,SubProblem:c}=n;return o||_("Answer"),t||_("AnswerGroup"),r||_("Code"),a||_("Image"),c||_("SubProblem"),e.jsxs(c,{children:[e.jsx(n.p,{children:"Cosa scrive a video il seguente programma?"}),e.jsx(n.p,{children:e.jsx(a,{alt:"",src:typeof Q=="function"?Q(_variant):Q})}),e.jsxs(t,{children:[e.jsx(o,{correct:!1,children:e.jsxs(n.p,{children:["Lo array dopo l’esecuzione di ",e.jsx(r,{code:String.raw`pp`,inline:!0,lang:"text",className:"p-0 text-base"})," vale ",e.jsx(r,{code:String.raw`[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]`,inline:!0,lang:"srs",className:"p-0 text-base"})]})}),e.jsx(o,{correct:!1,children:e.jsxs(n.p,{children:["Lo array dopo l’esecuzione di ",e.jsx(r,{code:String.raw`pp`,inline:!0,lang:"text",className:"p-0 text-base"})," vale ",e.jsx(r,{code:String.raw`[6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 0, 0, 0]`,inline:!0,lang:"srs",className:"p-0 text-base"})]})}),e.jsx(o,{correct:!0,children:e.jsxs(n.p,{children:["Lo array dopo l’esecuzione di ",e.jsx(r,{code:String.raw`pp`,inline:!0,lang:"text",className:"p-0 text-base"})," vale ",e.jsx(r,{code:String.raw`[6.25, 6.25, 6.25, 6.25, 6.25, 0, 0, 0, 0, 0]`,inline:!0,lang:"srs",className:"p-0 text-base"})]})}),e.jsx(o,{correct:!1,children:e.jsxs(n.p,{children:["Lo array dopo l’esecuzione di ",e.jsx(r,{code:String.raw`pp`,inline:!0,lang:"text",className:"p-0 text-base"})," vale ",e.jsx(r,{code:String.raw`[0, 0, 0, 0, 0, 6.25, 6.25, 6.25, 6.25, 6.25]`,inline:!0,lang:"srs",className:"p-0 text-base"})]})})]})]})}function Ke(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ae,{...i})}):Ae(i)}function _(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const T={src:new URL("../8/8d0d8e1f-es9.svg",import.meta.url).href,width:480,height:1e3};function Pe(i){const n={p:"p",...s(),...i.components},{AnswerGroup:o,Image:t,OpenAnswer:r,SubProblem:a}=n;return o||N("AnswerGroup"),t||N("Image"),r||N("OpenAnswer"),a||N("SubProblem"),e.jsxs(a,{children:[e.jsx(n.p,{children:"Quale disposizione di asterischi viene stampata a schermo tra le seguenti?"}),e.jsx(n.p,{children:e.jsx(t,{alt:"",src:typeof T=="function"?T(_variant):T})}),e.jsx(n.p,{children:"Rispondere con un numero a 5 cifre: ogni cifra corrisponde al numero di asterischi nella corrispondente riga, dall’alto verso il basso."}),e.jsx(o,{children:e.jsx(r,{type:"text",correct:String.raw`12121`})})]})}function We(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Pe,{...i})}):Pe(i)}function N(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const H={src:new URL("../c/c8f1f3b7-es10.svg",import.meta.url).href,width:410,height:570};function ye(i){const n={p:"p",...s(),...i.components},{Answer:o,AnswerGroup:t,Code:r,Image:a,SubProblem:c}=n;return o||S("Answer"),t||S("AnswerGroup"),r||S("Code"),a||S("Image"),c||S("SubProblem"),e.jsxs(c,{children:[e.jsx(n.p,{children:"Dato il seguente programma:"}),e.jsx(n.p,{children:e.jsx(a,{alt:"",src:typeof H=="function"?H(_variant):H})}),e.jsx(n.p,{children:"Scegliere quella corretta fra le seguenti opzioni:"}),e.jsxs(t,{children:[e.jsx(o,{correct:!1,children:e.jsxs(n.p,{children:["Il programma stampa ",e.jsx(r,{code:String.raw`p1 = 40.00`,inline:!0,lang:"text",className:"p-0 text-base"}),", ",e.jsx(r,{code:String.raw`p2 = 35.71`,inline:!0,lang:"text",className:"p-0 text-base"})]})}),e.jsx(o,{correct:!0,children:e.jsxs(n.p,{children:["Il programma stampa il rapporto, in percentuale, degli elementi appartenenti all’intersezione dei due insiemi (",e.jsx(r,{code:String.raw`v`,inline:!0,lang:"text",className:"p-0 text-base"})," e ",e.jsx(r,{code:String.raw`w`,inline:!0,lang:"text",className:"p-0 text-base"}),") sul totale degli elementi rispettivamente del primo e del secondo insieme"]})}),e.jsx(o,{correct:!1,children:e.jsxs(n.p,{children:["Il programma stampa il rapporto, in percentuale, degli elementi appartenenti all’unione dei due insiemi sul totale degli elementi rispettivamente del primo (",e.jsx(r,{code:String.raw`v`,inline:!0,lang:"text",className:"p-0 text-base"}),") e del secondo insieme (",e.jsx(r,{code:String.raw`w`,inline:!0,lang:"text",className:"p-0 text-base"}),")"]})}),e.jsx(o,{correct:!1,children:e.jsxs(n.p,{children:["Il programma stampa ",e.jsx(r,{code:String.raw`p1 = 200.00`,inline:!0,lang:"text",className:"p-0 text-base"}),", ",e.jsx(r,{code:String.raw`p2 = 120.71`,inline:!0,lang:"text",className:"p-0 text-base"})]})})]})]})}function Ye(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ye,{...i})}):ye(i)}function S(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const J={src:new URL("../b/bf1b383e-es11.svg",import.meta.url).href,width:488,height:400};function Me(i){const n={p:"p",span:"span",...s(),...i.components},{AnswerGroup:o,Code:t,Equation:r,Image:a,OpenAnswer:c,SubProblem:p}=n;return o||f("AnswerGroup"),t||f("Code"),r||f("Equation"),a||f("Image"),c||f("OpenAnswer"),p||f("SubProblem"),e.jsxs(p,{children:[e.jsx(n.p,{children:"Dato il seguente programma:"}),e.jsx(n.p,{children:e.jsx(a,{alt:"",src:typeof J=="function"?J(_variant):J})}),e.jsxs(n.p,{children:["Si supponga di eseguire ",e.jsx(t,{code:String.raw`rec1(4, 6)`,inline:!0,lang:"srs",className:"p-0 text-base"}),"."]}),e.jsxs(n.p,{children:["Quante chiamate rispettivamente di ",e.jsx(t,{code:String.raw`rec1`,inline:!0,lang:"text",className:"p-0 text-base"})," (NUMREC1) e ",e.jsx(t,{code:String.raw`rec2`,inline:!0,lang:"text",className:"p-0 text-base"}),` (NUMREC2) sono necessarie prima che una
delle due funzioni restituisca il valore zero? Nelle chiamate di `,e.jsx(t,{code:String.raw`rec1`,inline:!0,lang:"text",className:"p-0 text-base"}),` contare anche la chiamata iniziale
`,e.jsx(t,{code:String.raw`rec1(4, 6)`,inline:!0,lang:"srs",className:"p-0 text-base"}),"."]}),e.jsxs(n.p,{children:["Rispondere con ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`100 \cdot \text{NUMREC1} + \text{NUMREC2}`}),"."]})]}),e.jsx(o,{children:e.jsx(c,{type:"text",correct:String.raw`202`})})]})}function Ze(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Me,{...i})}):Me(i)}function f(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const K={src:new URL("../4/4ea2fff8-es12.webp",import.meta.url).href,width:400,height:514},W={src:new URL("../4/4c4d0972-es12b.webp",import.meta.url).href,width:1208,height:159};function Ee(i){const n={p:"p",...s(),...i.components},{AnswerGroup:o,Code:t,Image:r,OpenAnswer:a,SubProblem:c}=n;return o||A("AnswerGroup"),t||A("Code"),r||A("Image"),a||A("OpenAnswer"),c||A("SubProblem"),e.jsxs(c,{children:[e.jsxs(n.p,{children:[`Un file di testo conteneva due diverse funzioni per il calcolo del numero di modi diversi in cui è possibile
ordinare `,e.jsx(t,{code:String.raw`n`,inline:!0,lang:"text",className:"p-0 text-base"}),` oggetti.
Le linee dello pseudocodice sono state accidentalmente disordinate, come riportato qui sotto.`]}),e.jsx(n.p,{children:e.jsx(r,{alt:"",src:typeof K=="function"?K(_variant):K})}),e.jsx(n.p,{children:`Per ricostruire l’ordinamento corretto delle linee di codice è necessario produrre una lista di coppie (LETT,
NUM), in cui LETT corrisponde alla lettera che identifica una riga, come indicato sopra e NUM corrisponde al
numero che tale riga avrebbe nell’ordinamento corretto (nota: i numeri di riga partono da 1), come indicato
nella seguente griglia, in cui alcuni numeri sono già stati inseriti:`}),e.jsx(n.p,{children:e.jsx(r,{alt:"",src:typeof W=="function"?W(_variant):W})}),e.jsx(n.p,{children:`Si chiede quindi di riportare i numeri corretti associati alle lettere A, E, G, H, N, P, R, S e U che completino
correttamente la suddetta griglia. Rispondere concatenando i numeri di riga associati alle lettere mancanti.`}),e.jsx(o,{children:e.jsx(a,{type:"text",correct:String.raw`10715815141719`})})]})}function en(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(Ee,{...i})}):Ee(i)}function A(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}function qe(){return{...s(),Algo1Pt13:Le,Algo1Pt14:Ne,Algo2Pt15:De,Algo2Pt16:Re,Algo2Pt17:Xe,Algo2Pt18:Ie,Algo3Pt19:ke,Algo3Pt20:Ge,Logica1Pt01:Ue,Logica1Pt02:Ve,Logica2Pt03:Fe,Logica2Pt04:Qe,Logica3Pt05:Te,Prog1Pt06:He,Prog2Pt07:Je,Prog2Pt08:Ke,Prog2Pt09:We,Prog2Pt10:Ye,Prog3Pt11:Ze,Prog3Pt12:en}}function $e(i){const n={h2:"h2",...qe(),...i.components},{Algo1Pt13:o,Algo1Pt14:t,Algo2Pt15:r,Algo2Pt16:a,Algo2Pt17:c,Algo2Pt18:p,Algo3Pt19:u,Algo3Pt20:m,Contest:x,Logica1Pt01:h,Logica1Pt02:Y,Logica2Pt03:Z,Logica2Pt04:ee,Logica3Pt05:ne,Problem:d,Prog1Pt06:ie,Prog2Pt07:re,Prog2Pt08:te,Prog2Pt09:oe,Prog2Pt10:ae,Prog3Pt11:se,Prog3Pt12:ce,Section:P}=n;return o||l("Algo1Pt13"),t||l("Algo1Pt14"),r||l("Algo2Pt15"),a||l("Algo2Pt16"),c||l("Algo2Pt17"),p||l("Algo2Pt18"),u||l("Algo3Pt19"),m||l("Algo3Pt20"),x||l("Contest"),h||l("Logica1Pt01"),Y||l("Logica1Pt02"),Z||l("Logica2Pt03"),ee||l("Logica2Pt04"),ne||l("Logica3Pt05"),d||l("Problem"),ie||l("Prog1Pt06"),re||l("Prog2Pt07"),te||l("Prog2Pt08"),oe||l("Prog2Pt09"),ae||l("Prog2Pt10"),se||l("Prog3Pt11"),ce||l("Prog3Pt12"),P||l("Section"),e.jsxs(x,{children:[e.jsx(n.h2,{children:"Sezione 1: Esercizi a carattere logico-matematico"}),e.jsxs(P,{children:[e.jsx(d,{points:[1,0,0],id:1,children:e.jsx(h,{})}),e.jsx(d,{points:[1,0,0],id:2,children:e.jsx(Y,{})}),e.jsx(d,{points:[2,0,0],id:3,children:e.jsx(Z,{})}),e.jsx(d,{points:[2,0,0],id:4,children:e.jsx(ee,{})}),e.jsx(d,{points:[3,0,0],id:5,children:e.jsx(ne,{})})]}),e.jsx(n.h2,{children:"Sezione 2: Esercizi di programmazione"}),e.jsxs(P,{children:[e.jsx(d,{points:[1,0,0],id:6,children:e.jsx(ie,{})}),e.jsx(d,{points:[2,0,0],id:7,children:e.jsx(re,{})}),e.jsx(d,{points:[2,0,0],id:8,children:e.jsx(te,{})}),e.jsx(d,{points:[2,0,0],id:9,children:e.jsx(oe,{})}),e.jsx(d,{points:[2,0,0],id:10,children:e.jsx(ae,{})}),e.jsx(d,{points:[3,0,0],id:11,children:e.jsx(se,{})}),e.jsx(d,{points:[3,0,0],id:12,children:e.jsx(ce,{})})]}),e.jsx(n.h2,{children:"Sezione 3: Esercizi a carattere algoritmico"}),e.jsxs(P,{children:[e.jsx(d,{points:[1,0,0],id:13,children:e.jsx(o,{})}),e.jsx(d,{points:[1,0,0],id:14,children:e.jsx(t,{})}),e.jsx(d,{points:[2,0,0],id:15,children:e.jsx(r,{})}),e.jsx(d,{points:[2,0,0],id:16,children:e.jsx(a,{})}),e.jsx(d,{points:[2,0,0],id:17,children:e.jsx(c,{})}),e.jsx(d,{points:[2,0,0],id:18,children:e.jsx(p,{})}),e.jsx(d,{points:[3,0,0],id:19,children:e.jsx(u,{})}),e.jsx(d,{points:[3,0,0],id:20,children:e.jsx(m,{})})]})]})}function nn(i={}){const{wrapper:n}={...qe(),...i.components};return n?e.jsx(n,{...i,children:e.jsx($e,{...i})}):$e(i)}function l(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const rn={title:"Scolastiche 2019",description:"Olimpiadi Italiane di Informatica 2019/2020 - Selezione scolastica"};function sn(){return e.jsx(Ce,{contestName:"Olimpiadi di Informatica",contestLongName:rn.description,duration:90,children:e.jsx(nn,{})})}export{sn as default,rn as metadata};
//# sourceMappingURL=88eef5cb-page.js.map
