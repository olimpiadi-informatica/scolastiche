/*! For licenses information, see LICENSES.txt */
"use client";import{j as e}from"../_virtual_quizms-routes-e5ffd91c.js";import{n as c,r as v,f as C}from"../w/c06ec230-chunk-IFWY6GUU.js";import{r as M}from"../s/00dd80a9-react-dom.js";import{M as N,a as _,b as P,c as T,d as I,e as D}from"../o/e8898e3c-question.js";import{C as A,S as u,V as L}from"../i/05878499-visualizer.js";const x={src:new URL("../f/fde2f00e-code.svg",import.meta.url).href,width:977,height:973};function b(a){const n={p:"p",...c(),...a.components},{Answer:i,AnswerGroup:t,Explanation:s,Image:l,SubProblem:o}=n;return i||m("Answer"),t||m("AnswerGroup"),s||m("Explanation"),l||m("Image"),o||m("SubProblem"),e.jsxs(o,{children:[e.jsx(n.p,{children:"Quali dei tre procedimenti consentono a Tip-Tap di prepararsi un piatto di carote? All’inizio piatto e carote sono nella dispensa, e alla fine devono trovarsi entrambi sul suo tavolo."}),e.jsx(n.p,{children:e.jsx(l,{alt:"test",src:typeof x=="function"?x(_variant):x})}),e.jsxs(t,{children:[e.jsx(i,{correct:!0,children:e.jsx(n.p,{children:"Solo 1"})}),e.jsx(i,{correct:!1,children:e.jsx(n.p,{children:"Solo 2"})}),e.jsx(i,{correct:!1,children:e.jsx(n.p,{children:"Solo 3"})}),e.jsx(i,{correct:!1,children:e.jsx(n.p,{children:"1 e 2"})}),e.jsx(i,{correct:!1,children:e.jsx(n.p,{children:"2 e 3"})})]}),e.jsx(s,{children:e.jsx(n.p,{children:"Il procedimento 1 consente a Tip-Tap di preparare un piatto di carote, portando prima il piatto e poi le carote dalla dispensa al tavolo. Il procedimento 2 non funziona, perché impone a Tip-Tap di posare il piatto prima di averlo preso. Il procedimento 3 non funziona, perché impone a Tip-Tap di prendere il piatto mentre si trova al tavolo, anche se il piatto si trova nella dispensa."})})]})}function U(a={}){const{wrapper:n}={...c(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(b,{...a})}):b(a)}function m(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const f={src:new URL("../4/48e1f81f-sol.webp",import.meta.url).href,width:439,height:565},X=JSON.parse('{"blocks":{"languageVersion":0,"blocks":[{"type":"start","id":"y=zq)Uya2A/{vyOtN[i6","x":61,"y":81}]},"variables":[]}'),$=JSON.parse(`[{"type":"start","message0":"inizia qui","inputsInline":true,"colour":20,"tooltip":"L'esecuzione inizia da qui","helpUrl":"","maxInstances":1,"js":"","nextStatement":null},{"type":"avanza","message0":"avanza","inputsInline":true,"colour":20,"tooltip":"Vai avanti","helpUrl":"","js":"if(state.pos < state.N && state.door[state.pos] === 1 && !state.open[state.pos]) {\\n  exit(false, \\"non puoi avanzare, c\\\\'è una porta chiusa\\");\\n}\\nstate.pos += 1;\\nif(state.pos > state.N) {\\n  exit(false, \\"hai superato la carota\\");\\n}","nextStatement":null,"previousStatement":null},{"type":"vedi porta chiusa","message0":"vedi porta chiusa","inputsInline":true,"colour":20,"tooltip":"vedi porta chiusa","helpUrl":"","js":["state.pos < state.N && state.door[state.pos] === 1 && !state.open[state.pos]",13],"output":"Boolean"},{"type":"N","message0":"N","inputsInline":true,"colour":20,"tooltip":"distanza iniziale dalla carota","helpUrl":"","js":["state.N",1.2],"output":"Number"},{"type":"apri porta","message0":"apri porta","inputsInline":true,"colour":20,"tooltip":"apri porta","helpUrl":"","js":"if(state.pos === state.N || state.door[state.pos] === 0 || state.open[state.pos]) {\\n  exit(false, \\"non ci sono porte da aprire\\");\\n}\\nstate.open[state.pos] = true;","nextStatement":null,"previousStatement":null},{"type":"mangia carota","message0":"mangia carota","inputsInline":true,"colour":20,"tooltip":"mangia carota","helpUrl":"","js":"if(state.pos !== state.N) {\\n  exit(false, \\"non ci sono carote da mangiare\\");\\n}\\nstate.eaten = true;\\nexit(true, \\"hai mangiato la carota, bravo!\\");","previousStatement":null}]`),k=JSON.parse('[{"door":[1,1,0,0,1],"open":[false,false,false,false,false],"pos":0,"N":5,"eaten":false},{"door":[1,1,1,1,1,1,1,1,1,1],"open":[false,false,false,false,false,false,false,false,false,false],"pos":0,"N":10,"eaten":false},{"door":[0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0],"open":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"pos":0,"N":20,"eaten":false}]'),E={src:new URL("../3/3245f1a4-bunny.svg",import.meta.url).href,width:66,height:116.42696629213484},R={src:new URL("../3/36aab113-carrot.svg",import.meta.url).href,width:40,height:40},q={src:new URL("../b/b090ed3b-closed-door.svg",import.meta.url).href,width:55,height:172.33333333333331},B={src:new URL("../5/516ea4f8-opened-door.svg",import.meta.url).href,width:100,height:162.406015037594},F={src:new URL("../c/ceb02a9c-rock.svg",import.meta.url).href,width:93,height:26.784};function G({variables:a,state:n}){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{scale:130,children:[v(n.N).map(i=>e.jsx(M.Fragment,{children:!!n.door[i]&&(n.open[i]?e.jsx(u,{src:B,alt:"Porta aperta",x:i+.77,y:-.23}):e.jsx(u,{src:q,alt:"Porta chiusa",x:i+.65,y:0}))},i)),v(n.N+1).map(i=>e.jsx(u,{src:F,alt:"Sasso",x:i,y:.92},i)),e.jsx(u,{src:E,alt:"Bunny",x:n.pos+.15,y:.15,follow:!0}),e.jsx(u,{src:R,alt:"Carota",x:n.N+(n.eaten?.43:.46),y:n.eaten?.37:.77})]}),e.jsx(L,{variables:a})]})}function S(a){const n={li:"li",p:"p",ul:"ul",...c(),...a.components},{Blockly:i,Code:t,Equation:s,Explanation:l,Image:o,SubProblem:d}=n;return i||p("Blockly"),t||p("Code"),s||p("Equation"),l||p("Explanation"),o||p("Image"),d||p("SubProblem"),e.jsxs(d,{children:[e.jsxs(n.p,{children:[`Tip-Tap vorrebbe tanto mangiare la sua carota, prima però deve raggiungerla!
A separarlo dal suo obiettivo ci sono `,e.jsx(s,{children:String.raw`N`}),` rocce, alcune divise da porte chiuse.
Tip-Tap sa compiere le seguenti azioni:`]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(t,{code:String.raw`avanza`,inline:!0,lang:"text",className:"p-0 text-base"}),": salta alla roccia più vicina a destra, solo se non c’è una porta chiusa in mezzo."]}),`
`,e.jsxs(n.li,{children:[e.jsx(t,{code:String.raw`vedi porta chiusa`,inline:!0,lang:"text",className:"p-0 text-base"}),": condizione vera se di fianco a te c’è una porta chiusa."]}),`
`,e.jsxs(n.li,{children:[e.jsx(t,{code:String.raw`apri porta`,inline:!0,lang:"text",className:"p-0 text-base"}),": apri la porta a destra, ma solo se è di fianco a te."]}),`
`,e.jsxs(n.li,{children:[e.jsx(t,{code:String.raw`mangia carota`,inline:!0,lang:"text",className:"p-0 text-base"}),": mangia la carota a destra (solo se è di fianco a te) e termina il programma."]}),`
`]}),e.jsx(n.p,{children:"Scrivi un programma che consenta a Tip-Tap di mangiare sempre la carota!"}),e.jsx(i,{customBlocks:$,initialBlocks:X,testcases:k,debug:{logBlocks:!1,logJs:!1,logVariables:!1},visualizer:G}),e.jsxs(l,{children:[e.jsx(n.p,{children:"Un possibile programma corretto è il seguente:"}),e.jsx(n.p,{children:e.jsx(o,{alt:"soluzione",src:typeof f=="function"?f(_variant):f})}),e.jsxs(n.p,{children:["Secondo questo programma, per ognuno degli ",e.jsx(s,{children:String.raw`N`}),` passi che Tip-Tap deve fare, il protagonista
controlla innanzitutto se vede una porta chiusa. Se la vede, allora la apre; e poi in ogni caso
avanza alla roccia successiva. Completati tutti gli `,e.jsx(s,{children:String.raw`N`})," passi, Tip-Tap procede quindi a mangiare la carota."]})]})]})}function V(a={}){const{wrapper:n}={...c(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(S,{...a})}):S(a)}function p(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}function y(){return{...c(),P1Sequenza:U,P2Condizioni:N,P3Mediana:_,P4CicloLista:P,S1ApriPorte:V,S2AlzaTorre:T,S3GiraRuota:I,S4Muro:D}}function w(a){const n={h2:"h2",...y(),...a.components},{Contest:i,P1Sequenza:t,P2Condizioni:s,P3Mediana:l,Problem:o,S1ApriPorte:d,S2AlzaTorre:j,S3GiraRuota:g,Section:h}=n;return i||r("Contest"),t||r("P1Sequenza"),s||r("P2Condizioni"),l||r("P3Mediana"),o||r("Problem"),d||r("S1ApriPorte"),j||r("S2AlzaTorre"),g||r("S3GiraRuota"),h||r("Section"),e.jsxs(i,{children:[e.jsx(n.h2,{children:"Sezione 1: procedimenti procedurali"}),e.jsxs(h,{children:[e.jsx(o,{points:[5,1,0],id:1,children:e.jsx(t,{})}),e.jsx(o,{points:[5,1,0],id:2,children:e.jsx(s,{})}),e.jsx(o,{points:[5,1,0],id:3,children:e.jsx(l,{})})]}),e.jsx(n.h2,{children:"Sezione 2: programmazione"}),e.jsxs(h,{children:[e.jsx(o,{points:[5,0,0],id:4,children:e.jsx(d,{})}),e.jsx(o,{points:[5,0,0],id:5,children:e.jsx(j,{})}),e.jsx(o,{points:[5,0,0],id:6,children:e.jsx(g,{})})]})]})}function J(a={}){const{wrapper:n}={...y(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(w,{...a})}):w(a)}function r(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}function z(a){const n={em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Giochi di Fibonacci 2023/2024"}),`
`,e.jsx(n.h2,{children:"Allenamento per la Fase II - Scuole primarie"}),`
`,e.jsxs(n.p,{children:["Questa prova contiene ",e.jsx(n.em,{children:"6 domande"})," da risolvere in ",e.jsx(n.em,{children:"100 minuti"}),`.
Le domande sono a `,e.jsx(n.strong,{children:"scelta multipla"})," o a ",e.jsx(n.strong,{children:"blocchi"}),", e sono divise in due parti:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["domande di interpretazione di ",e.jsx(n.strong,{children:"procedimenti procedurali"})," come programmi a blocchi, e"]}),`
`,e.jsxs(n.li,{children:["domande di ",e.jsx(n.strong,{children:"programmazione"})," tramite blocchi."]}),`
`]}),`
`,e.jsxs(n.p,{children:[`In entrambe le parti, le domande sono ordinate per difficoltà crescente.
`,e.jsx(n.strong,{children:"Attento che la difficoltà è soggettiva!"})," Se stai passando tanto tempo cercando di risolvere una domanda, prova a passare ad altre domande e altre categorie!"]}),`
`,e.jsx(n.h2,{children:"Punteggio"}),`
`,e.jsxs(n.p,{children:["Tutte le domande a ",e.jsx(n.em,{children:"scelta multipla"})," hanno 5 opzioni, di cui ",e.jsx(n.strong,{children:"solo una"})," è corretta. Il punteggio che puoi ottenere è:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["5 punti per una risposta ",e.jsx(n.em,{children:"corretta"}),";"]}),`
`,e.jsxs(n.li,{children:["1 punto per una risposta ",e.jsx(n.em,{children:"non data"}),";"]}),`
`,e.jsxs(n.li,{children:["0 punti per una risposta ",e.jsx(n.em,{children:"sbagliata"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Le domande a ",e.jsx(n.em,{children:"blocchi"}),` richiedono di scrivere un singolo programma a blocchi, che viene valutato su tre diversi livelli.
Per ciascuna domanda e per ciascun livello, Il punteggio che puoi ottenere è:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["5 punti se il programma produce la risposta ",e.jsx(n.em,{children:"corretta"}),";"]}),`
`,e.jsxs(n.li,{children:["0 punti se il programma produce una risposta ",e.jsx(n.em,{children:"sbagliata"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"Quindi ogni domanda a blocchi può valere fino a 15 punti in totale."})]})}function O(a={}){const{wrapper:n}={...c(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(z,{...a})}):z(a)}const Z={title:"Giochi di Fibonacci 2023/2024 - Demo Fase II - Scuole primarie",description:"Prova di allenamento per la seconda fase dei Giochi di Fibonacci 2023/2024 per le scuole primarie"};function ee(){return e.jsxs(C,{contestName:"Giochi di Fibonacci",duration:100,children:[e.jsx(O,{}),e.jsx(J,{})]})}export{ee as default,Z as metadata};
//# sourceMappingURL=e38b6327-page.js.map