"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[318],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=d(n),m=r,k=s["".concat(o,".").concat(m)]||s[m]||p[m]||l;return n?a.createElement(k,i(i({ref:e},c),{},{components:n})):a.createElement(k,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8215:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},6396:function(t,e,n){n.d(e,{Z:function(){return s}});var a=n(7462),r=n(7294),l=n(2389),i=n(9443);var u=function(){var t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},o=n(3616),d=n(6010),c="tabItem_vU9c";function p(t){var e,n,a,l=t.lazy,i=t.block,p=t.defaultValue,s=t.values,m=t.groupId,k=t.className,g=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=s?s:g.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),v=(0,o.lx)(N,(function(t,e){return t.value===e.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(e=null!=p?p:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=g[0])?void 0:a.props.value;if(null!==f&&!N.some((function(t){return t.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+N.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=u(),y=h.tabGroupChoices,b=h.setTabGroupChoices,w=(0,r.useState)(f),C=w[0],T=w[1],x=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=y[m];null!=P&&P!==C&&N.some((function(t){return t.value===P}))&&T(P)}var j=function(t){var e=t.currentTarget,n=x.indexOf(e),a=N[n].value;a!==C&&(O(e),T(a),null!=m&&b(m,a))},q=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=x.indexOf(t.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(t.currentTarget)-1;n=x[r]||x[x.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":i},k)},N.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,className:(0,d.Z)("tabs__item",c,{"tabs__item--active":C===e}),key:e,ref:function(t){return x.push(t)},onKeyDown:q,onFocus:j,onClick:j},null!=n?n:e)}))),l?(0,r.cloneElement)(g.filter((function(t){return t.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==C})}))))}function s(t){var e=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(e)},t))}},1869:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(6396),u=n(8215),o=["components"],d={sidebar_position:3},c="Cr\xe9er un candidat",p={unversionedId:"QuickStart/Creer_un_candidat",id:"QuickStart/Creer_un_candidat",title:"Cr\xe9er un candidat",description:"L'URL racine est ici https://carrers.flatchr.io",source:"@site/docs/QuickStart/Creer_un_candidat.md",sourceDirName:"QuickStart",slug:"/QuickStart/Creer_un_candidat",permalink:"/docs/QuickStart/Creer_un_candidat",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/QuickStart/Creer_un_candidat.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Rechercher un candidat",permalink:"/docs/QuickStart/Recuperer_un_candidat"},next:{title:"activity",permalink:"/docs/Schemas/activity"}},s=[{value:"Requ\xeate",id:"requ\xeate",children:[{value:"Param\xe8tres",id:"param\xe8tres",children:[],level:3},{value:"Exemple de requ\xeate",id:"exemple-de-requ\xeate",children:[],level:3}],level:2},{value:"R\xe9ponse",id:"r\xe9ponse",children:[],level:2}],m={toc:s};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cr\xe9er-un-candidat"},"Cr\xe9er un candidat"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Important")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"L'URL racine est ici ",(0,l.kt)("a",{parentName:"p",href:"https://carrers.flatchr.io"},"https://carrers.flatchr.io")))),(0,l.kt)("h2",{id:"requ\xeate"},"Requ\xeate"),(0,l.kt)("p",null,"Vous pouvez cr\xe9er des candidats en utilisant l'API gr\xe2ce \xe0 la requ\xeate suivante : "),(0,l.kt)("details",null,(0,l.kt)("summary",null," Par une requ\xeate sur l'API  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"    POST vacancy/candidate/json\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://god.gw.postman.com/run-collection/:collection_id"},(0,l.kt)("img",{parentName:"a",src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"})))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Via un syst\xe8me web  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"    POST vacancy/candidate/custom\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://god.gw.postman.com/run-collection/:collection_id"},(0,l.kt)("img",{parentName:"a",src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"})))),(0,l.kt)("h3",{id:"param\xe8tres"},"Param\xe8tres"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Obligatoire"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vacancy"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("center",null,"\u2714\ufe0f")),(0,l.kt)("td",{parentName:"tr",align:null},"Slug de l'annonce (Champ ",(0,l.kt)("inlineCode",{parentName:"td"},"slug")," de l'objet vacancy)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"firstname"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("center",null,"\u2714\ufe0f")),(0,l.kt)("td",{parentName:"tr",align:null},"Pr\xe9nom /","[a-zA-Z]","/")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lastname"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("center",null,"\u2714\ufe0f")),(0,l.kt)("td",{parentName:"tr",align:null},"Nom /","[a-zA-Z]","/")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("center",null,"\u2714\ufe0f")),(0,l.kt)("td",{parentName:"tr",align:null},"Cl\xe9 API. Elle est cr\xe9\xe9e dans l\u2019interface Flatchr")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Email")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phone"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"T\xe9l\xe9phone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("center",null,"\u2714\ufe0f")),(0,l.kt)("td",{parentName:"tr",align:null},'Type de  CV "link" ou "document"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resume"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"base64  / url"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("center",null,"\u2714\ufe0f")),(0,l.kt)("td",{parentName:"tr",align:null},"Objet pour un type document url pour un type link")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"comment"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Commentaire du candidat")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offerer_id"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Identifiant Flatchr a demander \xe0 l'\xe9quipe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"urls"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Lien r\xe9seaux sociaux {facebook: string, linkedin: string, twitter: string, other: string}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"legalNewsletterPartners"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Opt-in newsletter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"similarities"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Retourne offres similaires")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"response_text"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Texte de retour")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"answers"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("a",{parentName:"td",href:"/docs/Schemas/answer"},"answer"),"]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9ponses aux questions/tags")))),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Astuce")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Vous pouvez tester vos requ\xeates de cr\xe9ation de candidats gr\xe2ce \xe0 la m\xe9thode suivante : "),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"    POST /vacancy/candidate/test\n")))),(0,l.kt)("h3",{id:"exemple-de-requ\xeate"},"Exemple de requ\xeate"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"pdf",label:"Avec un fichier PDF",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Cr\xe9er un candidat avec le lien d\'un CV"',title:'"Cr\xe9er',un:!0,candidat:!0,avec:!0,le:!0,lien:!0,"d'un":!0,'CV"':!0},'  curl -X POST https://careers.flatchr.io/vacancy/candidate/json\n      -H "Authorization: Bearer {token}"\n      -H \'Content-Type: application/json\'\n      -d \'{\n          "vacancy": "vyja3k5rrnlnqwe-technicien-h-f",\n          "firstname": "Johnny",\n          "lastname": "Doe",\n          "token": "{token}",\n          "type": "document",\n          "resume": {\n            "data": "{fichier encod\xe9 en base 64}",\n            "fileName": "CV_John_Doe",\n            "contentType": "application/pdf"\n          }\n        }\'\n'))),(0,l.kt)(u.Z,{value:"link",label:"Avec un lien vers le CV",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Cr\xe9er un candidat avec le lien d\'un CV"',title:'"Cr\xe9er',un:!0,candidat:!0,avec:!0,le:!0,lien:!0,"d'un":!0,'CV"':!0},'  curl -X POST https://careers.flatchr.io/vacancy/candidate/json\n      -H "Authorization: Bearer {token}"\n      -H \'Content-Type: application/json\'\n      -d \'{\n              "vacancy": "vyja3k5rnlnqwe-technicien-h-f",\n              "firstname": "John",\n              "lastname": "Doe",\n              "token": "{token}",\n              "type": "link",\n              "resume": "storage.s3.eu-west-1.amazonaws.com/CV/5b400fab-679811f70b0e/CV_John_Doe.pdf"\n            }\' \n\n')))),(0,l.kt)("h2",{id:"r\xe9ponse"},"R\xe9ponse"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP Status"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"response"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'Ex: "applicant created"')))))}k.isMDXComponent=!0}}]);