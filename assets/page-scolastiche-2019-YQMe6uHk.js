/*! For licenses information, see LICENSES.txt */
import{c as ve,r as D}from"./react-dom-fx_Aylnh.js";import{j as e}from"./toString-4x2FfbuW.js";import{u as o,O as Se}from"./olinfo-auth-n_uwHa9E.js";const R={variants:[{bianchi:50,neri:50,sol:3},{bianchi:30,neri:30,sol:3},{bianchi:60,neri:60,sol:3},{bianchi:10,neri:10,sol:3}]};function ee(i){var x,h;const n=(R==null?void 0:R.variants)??variants,a=(((x=i==null?void 0:i.variant)==null?void 0:x.call(i))??0)%n.length;for(const f of Object.keys(n[a]))if(/^[^a-z]./.test(f))throw new Error("Invalid variable name `"+f+"` in file `logica-1-pt-01/question.md`: variable names must start with a lowercase letter.");if(!("bianchi"in n[a]))throw new Error("Variable `bianchi` is not defined in file `logica-1-pt-01/question.md`.");if(!("neri"in n[a]))throw new Error("Variable `neri` is not defined in file `logica-1-pt-01/question.md`.");if(!("sol"in n[a]))throw new Error("Variable `sol` is not defined in file `logica-1-pt-01/question.md`.");const{bianchi:r,neri:t,sol:s}=n[a];(h=i==null?void 0:i.setVariantCount)==null||h.call(i,n.length);const l={p:"p",...o(),...i.components},{AnswerGroup:c,OpenAnswer:p,SubProblem:m}=l;return c||q("AnswerGroup",!0),p||q("OpenAnswer",!0),m||q("SubProblem",!0),e.jsxs(m,{children:[e.jsxs(l.p,{children:["Dato un cassetto con ",r," calzini bianchi e ",t,` calzini neri qual è il numero minimo di
calzini da estrarre per essere sicuri di averne almeno due dello stesso colore?`]}),e.jsx(c,{children:e.jsx(p,{type:"text",correct:String.raw`${s}`})})]})}function ye(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ee,{...i})}):ee(i)}function q(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const X={variants:[{sol:5e3,soldi:"13\\,000"},{sol:1e4,soldi:"26\\,000"},{sol:15e3,soldi:"39\\,000"},{sol:2e4,soldi:"52\\,000"}]};function ne(i){var x,h;const n=(X==null?void 0:X.variants)??variants,a=(((x=i==null?void 0:i.variant)==null?void 0:x.call(i))??0)%n.length;for(const f of Object.keys(n[a]))if(/^[^a-z]./.test(f))throw new Error("Invalid variable name `"+f+"` in file `logica-1-pt-02/question.md`: variable names must start with a lowercase letter.");if(!("soldi"in n[a]))throw new Error("Variable `soldi` is not defined in file `logica-1-pt-02/question.md`.");if(!("sol"in n[a]))throw new Error("Variable `sol` is not defined in file `logica-1-pt-02/question.md`.");const{soldi:r,sol:t}=n[a];(h=i==null?void 0:i.setVariantCount)==null||h.call(i,n.length);const s={em:"em",p:"p",...o(),...i.components},{AnswerGroup:l,MathExpr:c,OpenAnswer:p,SubProblem:m}=s;return l||M("AnswerGroup",!0),c||M("MathExpr",!0),p||M("OpenAnswer",!0),m||M("SubProblem",!0),e.jsxs(m,{children:[e.jsx(s.p,{children:`Valerio e Martina hanno scoperto di aver ereditato una piccola somma da un lontano parente venuto a mancare da poco.
Il testamento contiene le indicazioni sull’importo che spetta a ciascuno dei due ragazzi, ovvero quanto segue:`}),e.jsxs(s.p,{children:["“",e.jsxs(s.em,{children:[`Vorrei che il doppio di quanto spetti a Martina sia pari al triplo di quanto spetti a Valerio;
vorrei inoltre che il doppio di quanto spetti a Valerio, sommato con il triplo di quanto spetti a Martina,
sia pari a `,e.jsx(c,{children:String.raw`${r}`})," euro."]}),"”"]}),e.jsx(s.p,{children:"Qual è il valore complessivo dell’eredità di Martina e Valerio?"}),e.jsx(l,{children:e.jsx(p,{type:"text",correct:String.raw`${t}`})})]})}function Me(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ne,{...i})}):ne(i)}function M(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}function ie(i){const n={p:"p",span:"span",...o(),...i.components},{AnswerGroup:a,MathExpr:r,OpenAnswer:t,SubProblem:s}=n;return a||A("AnswerGroup",!0),r||A("MathExpr",!0),t||A("OpenAnswer",!0),s||A("SubProblem",!0),e.jsxs(s,{children:[e.jsxs(n.p,{children:["Dato il seguente insieme ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`A = \{1, 2, 3, 4, 7, 32, 89, 145, 106, 33, 36, 39\}`}),","]}),`
qual è il numero di possibili coppie non ordinate di insiemi `,e.jsx(r,{children:String.raw`A_1`})," e ",e.jsx(r,{children:String.raw`A_2`}),` tali
che `,e.jsx(r,{children:String.raw`|A_1| = |A_2|`})," (dove con ",e.jsx(r,{children:String.raw`|X|`}),` si intende il numero di elementi contenuti
nell’insieme `,e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`X`}),"),"]})," ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`A_1 \cup A_2 = A`}),","]})," ",e.jsx(r,{children:String.raw`A_1 \cap A_2 = \emptyset`}),` e
`,e.jsx(r,{children:String.raw`\text{somma}(A_1) = \text{somma}(A_2)`})," (dove ",e.jsx(r,{children:String.raw`\text{somma}(X)`}),` è la somma di tutti
gli elementi nell’insieme `,e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`X`}),")?"]})]}),e.jsx(a,{children:e.jsx(t,{type:"text",correct:String.raw`0`})})]})}function Ae(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ie,{...i})}):ie(i)}function A(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}function re(i){const n={p:"p",span:"span",...o(),...i.components},{AnswerGroup:a,MathExpr:r,OpenAnswer:t,SubProblem:s}=n;return a||_("AnswerGroup",!0),r||_("MathExpr",!0),t||_("OpenAnswer",!0),s||_("SubProblem",!0),e.jsxs(s,{children:[e.jsxs(n.p,{children:["Un numero naturale è palindromo se letto in senso inverso è identico a sé stesso; ad esempio, ",e.jsx(r,{children:String.raw`151`})," e ",e.jsx(r,{children:String.raw`17271`}),`
sono numeri palindromi. Un numero naturale `,e.jsx(r,{children:String.raw`n`}),` si dice palizero se ha un numero dispari di cifre, è palindromo
e la cifra che appare una sola volta al centro è lo `,e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`0`}),"."]})," Es. ",e.jsx(r,{children:String.raw`1234567890987654321`})," è palizero, ",e.jsx(r,{children:String.raw`3980893`}),` è palizero,
`,e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`23732`}),","]})," ",e.jsx(r,{children:String.raw`23400432`})," e ",e.jsx(r,{children:String.raw`124421`})," sono palindromi ma non palizeri."]}),e.jsxs(n.p,{children:["Si dica quanti sono i numeri palizeri compresi tra ",e.jsx(r,{children:String.raw`10^3`})," e ",e.jsx(r,{children:String.raw`10^5`})," estremi esclusi."]}),e.jsx(a,{children:e.jsx(t,{type:"text",correct:String.raw`90`})})]})}function _e(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(re,{...i})}):re(i)}function _(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}function te(i){const n={p:"p",...o(),...i.components},{AnswerGroup:a,OpenAnswer:r,SubProblem:t}=n;return a||k("AnswerGroup",!0),r||k("OpenAnswer",!0),t||k("SubProblem",!0),e.jsxs(t,{children:[e.jsx(n.p,{children:`Due treni sono sullo stesso binario e viaggiano uno verso l’altro; la distanza iniziale tra di loro è di 300 km; il
primo treno viaggia a 80km/h, il secondo a 70km/h. Un velocissimo colibrì, che vola a 120km/h, parte dalla
locomotiva del primo treno e arriva a toccare la locomotiva del secondo, a quel punto si gira e torna indietro
fino a toccare la locomotiva del primo, dove si gira e torna indietro e così via finché i due treni si scontrano.`}),e.jsx(n.p,{children:"Quanti chilometri ha percorso, complessivamente, il colibrì?"}),e.jsx(a,{children:e.jsx(r,{type:"text",correct:String.raw`240`})})]})}function Le(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(te,{...i})}):te(i)}function k(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const I={src:new URL("es6-f1bQ_ac9.svg",import.meta.url).href,width:"682",height:"542"};function ae(i){const n={p:"p",span:"span",...o(),...i.components},{Answer:a,AnswerGroup:r,Code:t,Image:s,MathExpr:l,SubProblem:c}=n;return a||d("Answer",!0),r||d("AnswerGroup",!0),t||d("Code",!0),s||d("Image",!0),l||d("MathExpr",!0),c||d("SubProblem",!0),e.jsxs(c,{children:[e.jsx(n.p,{children:"Data la seguente funzione:"}),e.jsx(n.p,{children:e.jsx(n.span,{className:"flex justify-center",children:e.jsx(s,{alt:"",src:typeof I=="function"?I(_variant):I})})}),e.jsx(n.p,{children:"Indicare l’affermazione vera tra le seguenti:"}),e.jsxs(r,{children:[e.jsx(a,{correct:!1,children:e.jsxs(n.p,{children:["Questa funzione restituisce 1 solo se la coppia (",e.jsx(t,{code:String.raw`par1`,inline:!0,language:"srs",noLineNumbers:!1}),", ",e.jsx(t,{code:String.raw`par2`,inline:!0,language:"srs",noLineNumbers:!1}),") si trova nel cerchio di raggio ",e.jsx(t,{code:String.raw`par3`,inline:!0,language:"srs",noLineNumbers:!1})]})}),e.jsx(a,{correct:!0,children:e.jsxs(n.p,{children:["Questa funzione restituisce 1 se chiamata sulla terna ",e.jsx(l,{children:String.raw`(1, 0, 3)`})]})}),e.jsx(a,{correct:!1,children:e.jsxs(n.p,{children:["Questa funzione restituisce 0 per tutte le terne della forma ",e.jsx(l,{children:String.raw`(a, 2a, 3a)`})]})}),e.jsx(a,{correct:!1,children:e.jsxs(n.p,{children:["Questa funzione deve essere chiamata con ",e.jsx(t,{code:String.raw`par3`,inline:!0,language:"srs",noLineNumbers:!1})," ",e.jsx(l,{children:String.raw`\geq 0`})]})})]})]})}function Ee(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ae,{...i})}):ae(i)}function d(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const P={src:new URL("es7-17Kr5r-r.svg",import.meta.url).href,width:"428",height:"642"};function se(i){const n={p:"p",span:"span",...o(),...i.components},{AnswerGroup:a,Code:r,Image:t,OpenAnswer:s,SubProblem:l}=n;return a||g("AnswerGroup",!0),r||g("Code",!0),t||g("Image",!0),s||g("OpenAnswer",!0),l||g("SubProblem",!0),e.jsxs(l,{children:[e.jsx(n.p,{children:"Dato il seguente programma:"}),e.jsx(n.p,{children:e.jsx(n.span,{className:"flex justify-center",children:e.jsx(t,{alt:"",src:typeof P=="function"?P(_variant):P})})}),e.jsxs(n.p,{children:["Dando in input il vettore ",e.jsx(r,{code:String.raw`v = [3.45, 5.67, 8.92, 2.12, 7.33, 8.21, 4.21, 9.03]`,inline:!0,language:"srs",noLineNumbers:!1})," alla procedura insieme all’intero ",e.jsx(r,{code:String.raw`n = 8`,inline:!0,language:"srs",noLineNumbers:!1}),", quanto vale la somma di ",e.jsx(r,{code:String.raw`v`,inline:!0,language:"srs",noLineNumbers:!1})," al termine della procedura?"]}),e.jsx(a,{children:e.jsx(s,{type:"text",correct:String.raw`50`})})]})}function Ne(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(se,{...i})}):se(i)}function g(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const G={src:new URL("es8-A4pY3Snu.svg",import.meta.url).href,width:"556",height:"518"};function oe(i){const n={p:"p",span:"span",...o(),...i.components},{Answer:a,AnswerGroup:r,Code:t,Image:s,SubProblem:l}=n;return a||j("Answer",!0),r||j("AnswerGroup",!0),t||j("Code",!0),s||j("Image",!0),l||j("SubProblem",!0),e.jsxs(l,{children:[e.jsx(n.p,{children:"Cosa scrive a video il seguente programma?"}),e.jsx(n.p,{children:e.jsx(n.span,{className:"flex justify-center",children:e.jsx(s,{alt:"",src:typeof G=="function"?G(_variant):G})})}),e.jsxs(r,{children:[e.jsx(a,{correct:!1,children:e.jsxs(n.p,{children:["Lo array dopo l’esecuzione di ",e.jsx(t,{code:String.raw`pp`,inline:!0,language:"srs",noLineNumbers:!1})," vale ",e.jsx(t,{code:String.raw`[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]`,inline:!0,language:"srs",noLineNumbers:!1})]})}),e.jsx(a,{correct:!1,children:e.jsxs(n.p,{children:["Lo array dopo l’esecuzione di ",e.jsx(t,{code:String.raw`pp`,inline:!0,language:"srs",noLineNumbers:!1})," vale ",e.jsx(t,{code:String.raw`[6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 0, 0, 0]`,inline:!0,language:"srs",noLineNumbers:!1})]})}),e.jsx(a,{correct:!0,children:e.jsxs(n.p,{children:["Lo array dopo l’esecuzione di ",e.jsx(t,{code:String.raw`pp`,inline:!0,language:"srs",noLineNumbers:!1})," vale ",e.jsx(t,{code:String.raw`[6.25, 6.25, 6.25, 6.25, 6.25, 0, 0, 0, 0, 0]`,inline:!0,language:"srs",noLineNumbers:!1})]})}),e.jsx(a,{correct:!1,children:e.jsxs(n.p,{children:["Lo array dopo l’esecuzione di ",e.jsx(t,{code:String.raw`pp`,inline:!0,language:"srs",noLineNumbers:!1})," vale ",e.jsx(t,{code:String.raw`[0, 0, 0, 0, 0, 6.25, 6.25, 6.25, 6.25, 6.25]`,inline:!0,language:"srs",noLineNumbers:!1})]})})]})]})}function $e(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(oe,{...i})}):oe(i)}function j(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const O={src:new URL("es9-42PkdY4Z.svg",import.meta.url).href,width:"480",height:"1000"};function le(i){const n={p:"p",span:"span",...o(),...i.components},{AnswerGroup:a,Image:r,OpenAnswer:t,SubProblem:s}=n;return a||L("AnswerGroup",!0),r||L("Image",!0),t||L("OpenAnswer",!0),s||L("SubProblem",!0),e.jsxs(s,{children:[e.jsx(n.p,{children:"Quale disposizione di asterischi viene stampata a schermo tra le seguenti?"}),e.jsx(n.p,{children:e.jsx(n.span,{className:"flex justify-center",children:e.jsx(r,{alt:"",src:typeof O=="function"?O(_variant):O})})}),e.jsx(n.p,{children:"Rispondere con un numero a 5 cifre: ogni cifra corrisponde al numero di asterischi nella corrispondente riga, dall’alto verso il basso."}),e.jsx(a,{children:e.jsx(t,{type:"text",correct:String.raw`12121`})})]})}function ze(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(le,{...i})}):le(i)}function L(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const U={src:new URL("es10-LldZHU_p.svg",import.meta.url).href,width:"410",height:"570"};function ce(i){const n={p:"p",span:"span",...o(),...i.components},{Answer:a,AnswerGroup:r,Code:t,Image:s,SubProblem:l}=n;return a||w("Answer",!0),r||w("AnswerGroup",!0),t||w("Code",!0),s||w("Image",!0),l||w("SubProblem",!0),e.jsxs(l,{children:[e.jsx(n.p,{children:"Dato il seguente programma:"}),e.jsx(n.p,{children:e.jsx(n.span,{className:"flex justify-center",children:e.jsx(s,{alt:"",src:typeof U=="function"?U(_variant):U})})}),e.jsx(n.p,{children:"Scegliere quella corretta fra le seguenti opzioni:"}),e.jsxs(r,{children:[e.jsx(a,{correct:!1,children:e.jsxs(n.p,{children:["Il programma stampa ",e.jsx(t,{code:String.raw`p1 = 40.00`,inline:!0,language:"srs",noLineNumbers:!1}),", ",e.jsx(t,{code:String.raw`p2 = 35.71`,inline:!0,language:"srs",noLineNumbers:!1})]})}),e.jsx(a,{correct:!0,children:e.jsxs(n.p,{children:["Il programma stampa il rapporto, in percentuale, degli elementi appartenenti all’intersezione dei due insiemi (",e.jsx(t,{code:String.raw`v`,inline:!0,language:"srs",noLineNumbers:!1})," e ",e.jsx(t,{code:String.raw`w`,inline:!0,language:"srs",noLineNumbers:!1}),") sul totale degli elementi rispettivamente del primo e del secondo insieme"]})}),e.jsx(a,{correct:!1,children:e.jsxs(n.p,{children:["Il programma stampa il rapporto, in percentuale, degli elementi appartenenti all’unione dei due insiemi sul totale degli elementi rispettivamente del primo (",e.jsx(t,{code:String.raw`v`,inline:!0,language:"srs",noLineNumbers:!1}),") e del secondo insieme (",e.jsx(t,{code:String.raw`w`,inline:!0,language:"srs",noLineNumbers:!1}),")"]})}),e.jsx(a,{correct:!1,children:e.jsxs(n.p,{children:["Il programma stampa ",e.jsx(t,{code:String.raw`p1 = 200.00`,inline:!0,language:"srs",noLineNumbers:!1}),", ",e.jsx(t,{code:String.raw`p2 = 120.71`,inline:!0,language:"srs",noLineNumbers:!1})]})})]})]})}function Ce(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ce,{...i})}):ce(i)}function w(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const B={src:new URL("es11-FXGelOLr.svg",import.meta.url).href,width:"488",height:"400"};function de(i){const n={p:"p",span:"span",...o(),...i.components},{AnswerGroup:a,Code:r,Image:t,MathExpr:s,OpenAnswer:l,SubProblem:c}=n;return a||u("AnswerGroup",!0),r||u("Code",!0),t||u("Image",!0),s||u("MathExpr",!0),l||u("OpenAnswer",!0),c||u("SubProblem",!0),e.jsxs(c,{children:[e.jsx(n.p,{children:"Dato il seguente programma:"}),e.jsx(n.p,{children:e.jsx(n.span,{className:"flex justify-center",children:e.jsx(t,{alt:"",src:typeof B=="function"?B(_variant):B})})}),e.jsxs(n.p,{children:["Si supponga di eseguire ",e.jsx(r,{code:String.raw`rec1(4, 6)`,inline:!0,language:"srs",noLineNumbers:!1}),"."]}),e.jsxs(n.p,{children:["Quante chiamate rispettivamente di ",e.jsx(r,{code:String.raw`rec1`,inline:!0,language:"srs",noLineNumbers:!1})," (NUMREC1) e ",e.jsx(r,{code:String.raw`rec2`,inline:!0,language:"srs",noLineNumbers:!1}),` (NUMREC2) sono necessarie prima che una
delle due funzioni restituisca il valore zero? Nelle chiamate di `,e.jsx(r,{code:String.raw`rec1`,inline:!0,language:"srs",noLineNumbers:!1}),` contare anche la chiamata iniziale
`,e.jsx(r,{code:String.raw`rec1(4, 6)`,inline:!0,language:"srs",noLineNumbers:!1}),"."]}),e.jsxs(n.p,{children:["Rispondere con ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(s,{children:String.raw`100 \cdot \text{NUMREC1} + \text{NUMREC2}`}),"."]})]}),e.jsx(a,{children:e.jsx(l,{type:"text",correct:String.raw`202`})})]})}function De(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(de,{...i})}):de(i)}function u(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const V={src:new URL("es12-pAhVXnJa.webp",import.meta.url).href,width:"400",height:"514"},F={src:new URL("es12b-oqNv2MkZ.webp",import.meta.url).href,width:"1208",height:"159"};function ue(i){const n={p:"p",span:"span",...o(),...i.components},{AnswerGroup:a,Code:r,Image:t,OpenAnswer:s,SubProblem:l}=n;return a||b("AnswerGroup",!0),r||b("Code",!0),t||b("Image",!0),s||b("OpenAnswer",!0),l||b("SubProblem",!0),e.jsxs(l,{children:[e.jsxs(n.p,{children:[`Un file di testo conteneva due diverse funzioni per il calcolo del numero di modi diversi in cui è possibile
ordinare `,e.jsx(r,{code:String.raw`n`,inline:!0,language:"srs",noLineNumbers:!1}),` oggetti.
Le linee dello pseudocodice sono state accidentalmente disordinate, come riportato qui sotto.`]}),e.jsx(n.p,{children:e.jsx(n.span,{className:"flex justify-center",children:e.jsx(t,{alt:"",src:typeof V=="function"?V(_variant):V})})}),e.jsx(n.p,{children:`Per ricostruire l’ordinamento corretto delle linee di codice è necessario produrre una lista di coppie (LETT,
NUM), in cui LETT corrisponde alla lettera che identifica una riga, come indicato sopra e NUM corrisponde al
numero che tale riga avrebbe nell’ordinamento corretto (nota: i numeri di riga partono da 1), come indicato
nella seguente griglia, in cui alcuni numeri sono già stati inseriti:`}),e.jsx(n.p,{children:e.jsx(n.span,{className:"flex justify-center",children:e.jsx(t,{alt:"",src:typeof F=="function"?F(_variant):F})})}),e.jsx(n.p,{children:`Si chiede quindi di riportare i numeri corretti associati alle lettere A, E, G, H, N, P, R, S e U che completino
correttamente la suddetta griglia. Rispondere concatenando i numeri di riga associati alle lettere mancanti.`}),e.jsx(a,{children:e.jsx(s,{type:"text",correct:String.raw`10715815141719`})})]})}function Re(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ue,{...i})}):ue(i)}function b(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}function pe(i){const n={li:"li",p:"p",span:"span",ul:"ul",...o(),...i.components},{AnswerGroup:a,MathExpr:r,OpenAnswer:t,SubProblem:s}=n;return a||E("AnswerGroup",!0),r||E("MathExpr",!0),t||E("OpenAnswer",!0),s||E("SubProblem",!0),e.jsxs(s,{children:[e.jsxs(n.p,{children:["Nell’informatica si parla di “edit distance” quando si vuole misurare quanto sono diverse due parole ",e.jsx(r,{children:String.raw`w_1`})," e ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`w_2`}),"."]}),`
Si dice che due parole `,e.jsx(r,{children:String.raw`w_1`})," e ",e.jsx(r,{children:String.raw`w_2`})," hanno distanza:"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["1 se ",e.jsx(r,{children:String.raw`w_1`})," è ottenuta da ",e.jsx(r,{children:String.raw`w_2`})," modificando una lettera (ad esempio, sono a distanza 1 “cane” e “cene”) o viceversa;"]}),`
`,e.jsxs(n.li,{children:["2 se ",e.jsx(r,{children:String.raw`w_1`})," è ottenuta da ",e.jsx(r,{children:String.raw`w_2`})," inserendo una lettera in una qualunque posizione (ad esempio, sono a distanza 2 “mangia” e “mangiai”) o viceversa."]}),`
`]}),e.jsx(n.p,{children:`Luca ha saputo che Mario partecipa alle Olimpiadi di Informatica e ha deciso di cercare su Google che cosa
sono, ma ha commesso alcuni errori di battitura e ha scritto: “Olinpiadi Italianer de Informatia”.`}),e.jsx(n.p,{children:`Sapendo che la distanza tra due frasi è la somma delle distanze tra le parole corrispondenti,
ovvero quanto la frase scritta da Luca si discosta da “Olimpiadi Italiane di Informatica”`}),e.jsx(a,{children:e.jsx(t,{type:"text",correct:String.raw`6`})})]})}function qe(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(pe,{...i})}):pe(i)}function E(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}function me(i){const n={p:"p",span:"span",...o(),...i.components},{AnswerGroup:a,MathExpr:r,OpenAnswer:t,SubProblem:s}=n;return a||N("AnswerGroup",!0),r||N("MathExpr",!0),t||N("OpenAnswer",!0),s||N("SubProblem",!0),e.jsxs(s,{children:[e.jsxs(n.p,{children:["Siano A e B due insiemi tali che ",e.jsx(r,{children:String.raw`A = \{1, 2, 5, 8\}`})," e ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`B = \{3, 5, 9, 11, 42\}`}),"."]}),`
Si definisce `,e.jsx(r,{children:String.raw`D(x, X)`}),` il numero di elementi presenti in X di cui x è un divisore
(formalmente `,e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`D(x, X) = \#\{y \text{ in } X \text{ such that } x | y\}`}),")."]}),`
Indicare il più piccolo numero c tale che risulti `,e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`D(c, A) > D(c, B)`}),"."]})]}),e.jsx(a,{children:e.jsx(t,{type:"text",correct:String.raw`2`})})]})}function Xe(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(me,{...i})}):me(i)}function N(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const Q={src:new URL("es15a-MGRtmymv.webp",import.meta.url).href,width:"746",height:"153"},T={src:new URL("es15b-uTRWkhF9.webp",import.meta.url).href,width:"736",height:"148"};function xe(i){const n={p:"p",span:"span",...o(),...i.components},{Answer:a,AnswerGroup:r,Image:t,MathExpr:s,SubProblem:l}=n;return a||v("Answer",!0),r||v("AnswerGroup",!0),t||v("Image",!0),s||v("MathExpr",!0),l||v("SubProblem",!0),e.jsxs(l,{children:[e.jsxs(n.p,{children:["Data la funzione ",e.jsx(s,{children:String.raw`f(x) = 2x \mod 7`})," (ovvero ",e.jsx(s,{children:String.raw`f(x)`})," è il resto ottenuto dividendo ",e.jsx(s,{children:String.raw`2x`})," per ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(s,{children:String.raw`7`}),")"]}),` si consideri la seguente
tabella, denominata BF1:`]}),e.jsx(n.p,{children:e.jsx(n.span,{className:"flex justify-center",children:e.jsx(t,{alt:"",src:typeof Q=="function"?Q(_variant):Q})})}),e.jsx(n.p,{children:"Una generica tabella di tipo BF rappresenta un insieme di interi."}),e.jsxs(n.p,{children:[`La regola per inserire valori nella tabella BF è la seguente: inizialmente sono tutti zero. Se si vuole inserire in
BF un intero `,e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(s,{children:String.raw`x`}),","]})," si deve applicare a ",e.jsx(s,{children:String.raw`x`})," la funzione ",e.jsx(s,{children:String.raw`f`})," e poi scrivere un ",e.jsx(s,{children:String.raw`1`})," nella posizione numero ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(s,{children:String.raw`f(x)`}),"."]}),` Se era già
presente un `,e.jsx(s,{children:String.raw`1`})," in posizione ",e.jsx(s,{children:String.raw`f(x)`})," non si deve fare niente."]}),e.jsxs(n.p,{children:["Ad esempio, se si vuole inserire nella tabella BF1 il numero ",e.jsx(s,{children:String.raw`6`})," non si deve far altro che osservare che ",e.jsx(s,{children:String.raw`6\cdot 2`}),`
modulo `,e.jsx(s,{children:String.raw`7`})," fa ",e.jsx(s,{children:String.raw`5`})," e inserire un ",e.jsx(s,{children:String.raw`1`})," in posizione ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(s,{children:String.raw`5`}),","]})," ottenendo la tabella BF2:"]}),e.jsx(n.p,{children:e.jsx(n.span,{className:"flex justify-center",children:e.jsx(t,{alt:"",src:typeof T=="function"?T(_variant):T})})}),e.jsx(n.p,{children:"Indicare la corretta fra le seguenti affermazioni, riferite alla prima tabella BF1:"}),e.jsxs(r,{children:[e.jsx(a,{correct:!1,children:e.jsxs(n.p,{children:["In BF1 è presente il numero ",e.jsx(s,{children:String.raw`4`})]})}),e.jsx(a,{correct:!1,children:e.jsxs(n.p,{children:["In BF1 non è presente il numero ",e.jsx(s,{children:String.raw`19`})]})}),e.jsx(a,{correct:!1,children:e.jsxs(n.p,{children:["In BF1 potrebbe essere presente il numero ",e.jsx(s,{children:String.raw`6`})]})}),e.jsx(a,{correct:!0,children:e.jsxs(n.p,{children:["In BF1 potrebbe essere presente il numero ",e.jsx(s,{children:String.raw`12`})]})})]})]})}function ke(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(xe,{...i})}):xe(i)}function v(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const Z={src:new URL("es16-g4qy-6DB.webp",import.meta.url).href,width:"1126",height:"377"},H={src:new URL("es16b-aqAxi1Uk.webp",import.meta.url).href,width:"254",height:"250"};function he(i){const n={p:"p",span:"span",...o(),...i.components},{AnswerGroup:a,Image:r,MathExpr:t,OpenAnswer:s,SubProblem:l}=n;return a||S("AnswerGroup",!0),r||S("Image",!0),t||S("MathExpr",!0),s||S("OpenAnswer",!0),l||S("SubProblem",!0),e.jsxs(l,{children:[e.jsxs(n.p,{children:["Nel gioco Lights Out si ha una matrice di ",e.jsx(t,{children:String.raw`5\times 5`}),` luci, che possono essere accese o spente. Premendo su un
elemento della matrice, si cambia lo stato di quell’elemento e dei suoi quattro vicini (alto, basso, destra e
sinistra), come mostrato nella figura di seguito.`]}),e.jsx(n.p,{children:e.jsx(n.span,{className:"flex justify-center",children:e.jsx(r,{alt:"",src:typeof Z=="function"?Z(_variant):Z})})}),e.jsxs(n.p,{children:["Si consideri una versione semplificata, con una matrice ",e.jsx(t,{children:String.raw`4\times 4`})," come quella mostrata nella figura qui sotto."]}),e.jsx(n.p,{children:e.jsx(n.span,{className:"flex justify-center",children:e.jsx(r,{alt:"",src:typeof H=="function"?H(_variant):H})})}),e.jsx(n.p,{children:`Inizialmente le luci sono tutte spente. Una mossa consiste nel premere un elemento della matrice. Qual è il
numero minimo di mosse che bisogna fare per arrivare alla configurazione in cui tutte le luci sono accese?`}),e.jsx(a,{children:e.jsx(s,{type:"text",correct:String.raw`4`})})]})}function Ie(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(he,{...i})}):he(i)}function S(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}function fe(i){const n={p:"p",span:"span",...o(),...i.components},{AnswerGroup:a,MathExpr:r,OpenAnswer:t,SubProblem:s}=n;return a||$("AnswerGroup",!0),r||$("MathExpr",!0),t||$("OpenAnswer",!0),s||$("SubProblem",!0),e.jsxs(s,{children:[e.jsxs(n.p,{children:["Si prenda ",e.jsxs(n.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(r,{children:String.raw`R = \{00101, 101, 1010101, 1111001\}`}),"."]})]}),e.jsxs(n.p,{children:[`Si indichi una stringa binaria w (fatta di soli 0 e 1) che contenga al più 13 caratteri tale che ogni stringa
presente nell’insieme `,e.jsx(r,{children:String.raw`R`})," sia una sottostringa di w. La stringa w deve iniziare con un 1."]}),e.jsx(a,{children:e.jsx(t,{type:"text",correct:String.raw`1111001010101`})})]})}function Pe(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(fe,{...i})}):fe(i)}function $(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const K={src:new URL("es18-5ShOQZ0T.webp",import.meta.url).href,width:"408",height:"483"};function ge(i){const n={li:"li",p:"p",span:"span",strong:"strong",ul:"ul",...o(),...i.components},{Answer:a,AnswerGroup:r,Code:t,Image:s,SubProblem:l}=n;return a||y("Answer",!0),r||y("AnswerGroup",!0),t||y("Code",!0),s||y("Image",!0),l||y("SubProblem",!0),e.jsxs(l,{children:[e.jsx(n.p,{children:`La grafica della tartaruga prevede che si possano impartire degli ordini di movimento a una tartaruga, che li
eseguirà lasciando sul terreno una traccia dei suoi movimenti, come se avesse una penna attaccata sotto la
pancia. Gli ordini possono essere impartiti tramite un semplice linguaggio, stando attenti che:`}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"le istruzioni destra e sinistra sono relative all’orientamento attuale della tartaruga, e il numero che segue è un angolo di rotazione (rispettivamente orario e antiorario) espresso in gradi;"}),`
`,e.jsx(n.li,{children:"le istruzioni pennasu e pennagiu sollevano e abbassano rispettivamente la penna sotto la pancia della tartaruga: quando la penna è sollevata ovviamente non lascia tracce sul terreno;"}),`
`,e.jsx(n.li,{children:"l’istruzione ripeti fa ripetere il blocco che segue, delimitato da parentesi graffe, per un numero di volte indicato a fianco dell’istruzione."}),`
`]}),e.jsx(n.p,{children:e.jsx(n.span,{className:"flex justify-center",children:e.jsx(s,{alt:"",src:typeof K=="function"?K(_variant):K})})}),e.jsxs(n.p,{children:[`Quest’anno la tartaruga vuole realizzare un
autoritratto. Prima ha disegnato la sua sagoma a
matita (in figura la linea tratteggiata) e poi ha
iniziato a ricalcarla con la penna.
In questo momento la tartaruga si trova nel vertice
in alto a sinistra dell’esagono più alto ed è nella
condizione pennagiu, sapendo che gli esagoni
del carapace sono regolari e hanno lato l,
scegliere tra le seguenti quattro alternative quella
che `,e.jsx(n.strong,{children:"non"})," fa il disegno corretto."]}),e.jsxs(r,{children:[e.jsxs(a,{correct:!1,children:[" ",e.jsx(t,{code:String.raw`ripeti 4 {
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
}`,inline:!1,language:"text",noLineNumbers:!1})]}),e.jsxs(a,{correct:!1,children:[" ",e.jsx(t,{code:String.raw`ripeti 4 {
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
}`,inline:!1,language:"text",noLineNumbers:!1})]}),e.jsxs(a,{correct:!0,children:[" ",e.jsx(t,{code:String.raw`ripeti 4 {
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
}`,inline:!1,language:"text",noLineNumbers:!1})]}),e.jsxs(a,{correct:!1,children:[" ",e.jsx(t,{code:String.raw`ripeti 4 {
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
}`,inline:!1,language:"text",noLineNumbers:!1})]})]})]})}function Ge(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(ge,{...i})}):ge(i)}function y(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const W={src:new URL("es19-RnpmfGWJ.webp",import.meta.url).href,width:"663",height:"341"};function je(i){const n={p:"p",span:"span",...o(),...i.components},{AnswerGroup:a,Image:r,OpenAnswer:t,SubProblem:s}=n;return a||z("AnswerGroup",!0),r||z("Image",!0),t||z("OpenAnswer",!0),s||z("SubProblem",!0),e.jsxs(s,{children:[e.jsx(n.p,{children:`In un vecchio edificio ci sono 10 computer che devono essere collegati in rete. Dato l’elevato spessore delle
pareti, non è possibile usare una rete wifi e si decide, quindi, di collegarli via cavo. Non sono possibili tutti i
collegamenti, e ogni collegamento ha un costo diverso. Si deve aiutare a progettare la rete scegliendo i nove
collegamenti necessari per fare in modo che ogni computer sia collegato alla rete (ovvero ad almeno un altro
computer) e che il costo complessivo sia minimo. Dopo che i nove collegamenti saranno stati scelti, indicare
il costo totale, pari alla somma dei costi dei nove collegamenti selezionati.`}),e.jsx(n.p,{children:e.jsx(n.span,{className:"flex justify-center",children:e.jsx(r,{alt:"",src:typeof W=="function"?W(_variant):W})})}),e.jsx(a,{children:e.jsx(t,{type:"text",correct:String.raw`88`})})]})}function Oe(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(je,{...i})}):je(i)}function z(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const J={src:new URL("es20-jAlKWucK.webp",import.meta.url).href,width:"319",height:"465"};function we(i){const n={p:"p",span:"span",...o(),...i.components},{AnswerGroup:a,Image:r,OpenAnswer:t,SubProblem:s}=n;return a||C("AnswerGroup",!0),r||C("Image",!0),t||C("OpenAnswer",!0),s||C("SubProblem",!0),e.jsxs(s,{children:[e.jsx(n.p,{children:`La famosa Sushi Squad, composta da 5 studenti delle scuole
superiori, si trova nel noto sushi bar Minimax Hao. Dal tavolo del
sashimi (riportato in figura) i 5 protagonisti possono prendere un
solo piatto, ma la squadra si divide in 2: gli amanti del salmone
(S) e gli amanti del tonno (T), in cui ognuna delle due fazioni
vuole che dal tavolo venga preso il piatto contenente la maggior
quantità del pesce preferito.`}),e.jsx(n.p,{children:e.jsx(n.span,{className:"flex justify-center",children:e.jsx(r,{alt:"",src:typeof J=="function"?J(_variant):J})})}),e.jsx(n.p,{children:`Le due squadre S e T si disputano la scelta del piatto giocando
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
cifra) per RA indica che si intende dare come risposta la prima riga dello scenario A.`}),e.jsx(n.p,{children:"Rispondere concatenando i valori RA, CA, RB, CB."}),e.jsx(a,{children:e.jsx(t,{type:"text",correct:String.raw`1232`})})]})}function Ue(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(we,{...i})}):we(i)}function C(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}function be(i){const n={h2:"h2",...o(),...i.components},{Contest:a,Problem:r,Section:t}=n;return a||Y("Contest",!0),r||Y("Problem",!0),t||Y("Section",!0),e.jsxs(a,{children:[e.jsx(n.h2,{children:"Sezione 1: Esercizi a carattere logico-matematico"}),e.jsxs(t,{children:[e.jsx(r,{points:[1,0,0],statement:ye,id:1}),e.jsx(r,{points:[1,0,0],statement:Me,id:2}),e.jsx(r,{points:[2,0,0],statement:Ae,id:3}),e.jsx(r,{points:[2,0,0],statement:_e,id:4}),e.jsx(r,{points:[3,0,0],statement:Le,id:5})]}),e.jsx(n.h2,{children:"Sezione 2: Esercizi di programmazione"}),e.jsxs(t,{children:[e.jsx(r,{points:[1,0,0],statement:Ee,id:6}),e.jsx(r,{points:[2,0,0],statement:Ne,id:7}),e.jsx(r,{points:[2,0,0],statement:$e,id:8}),e.jsx(r,{points:[2,0,0],statement:ze,id:9}),e.jsx(r,{points:[2,0,0],statement:Ce,id:10}),e.jsx(r,{points:[3,0,0],statement:De,id:11}),e.jsx(r,{points:[3,0,0],statement:Re,id:12})]}),e.jsx(n.h2,{children:"Sezione 3: Esercizi a carattere algoritmico"}),e.jsxs(t,{children:[e.jsx(r,{points:[1,0,0],statement:qe,id:13}),e.jsx(r,{points:[1,0,0],statement:Xe,id:14}),e.jsx(r,{points:[2,0,0],statement:ke,id:15}),e.jsx(r,{points:[2,0,0],statement:Ie,id:16}),e.jsx(r,{points:[2,0,0],statement:Pe,id:17}),e.jsx(r,{points:[2,0,0],statement:Ge,id:18}),e.jsx(r,{points:[3,0,0],statement:Oe,id:19}),e.jsx(r,{points:[3,0,0],statement:Ue,id:20})]})]})}function Be(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(be,{...i})}):be(i)}function Y(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const Ve="Scolastiche 2019",Fe="Olimpiadi Italiane di Informatica 2019/2020 - Selezione scolastica";function Qe(){return e.jsx(Se,{contestName:Fe,questionCount:20,duration:90,children:e.jsx(Be,{})})}document.title=Ve;ve(document.getElementById("app")).render(D.createElement(D.StrictMode,null,D.createElement(Qe)));
//# sourceMappingURL=page-scolastiche-2019-YQMe6uHk.js.map