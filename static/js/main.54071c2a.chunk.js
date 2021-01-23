(this["webpackJsonpreact-json-editor"]=this["webpackJsonpreact-json-editor"]||[]).push([[0],{61:function(t,e,n){var i=function(){var t={trace:function(){},yy:{},symbols_:{error:2,JSONString:3,STRING:4,JSONNumber:5,NUMBER:6,JSONNullLiteral:7,NULL:8,JSONBooleanLiteral:9,TRUE:10,FALSE:11,JSONText:12,JSONValue:13,EOF:14,JSONObject:15,JSONArray:16,"{":17,"}":18,JSONMemberList:19,JSONMember:20,":":21,",":22,"[":23,"]":24,JSONElementList:25,$accept:0,$end:1},terminals_:{2:"error",4:"STRING",6:"NUMBER",8:"NULL",10:"TRUE",11:"FALSE",14:"EOF",17:"{",18:"}",21:":",22:",",23:"[",24:"]"},productions_:[0,[3,1],[5,1],[7,1],[9,1],[9,1],[12,2],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[15,2],[15,3],[20,3],[19,1],[19,3],[16,2],[16,3],[25,1],[25,3]],performAction:function(t,e,n,i){var r=n.length-1;switch(e){case 1:this.$=t.replace(/\\(\\|")/g,"$1").replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\t/g,"\t").replace(/\\v/g,"\v").replace(/\\f/g,"\f").replace(/\\b/g,"\b");break;case 2:this.$=Number(t);break;case 3:this.$=null;break;case 4:this.$=!0;break;case 5:this.$=!1;break;case 6:return this.$=n[r-1];case 13:this.$={};break;case 14:this.$=n[r-1];break;case 15:this.$=[n[r-2],n[r]];break;case 16:this.$={},this.$[n[r][0]]=n[r][1];break;case 17:this.$=n[r-2],n[r-2][n[r][0]]=n[r][1];break;case 18:this.$=[];break;case 19:this.$=n[r-1];break;case 20:this.$=[n[r]];break;case 21:this.$=n[r-2],n[r-2].push(n[r])}},table:[{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],12:1,13:2,15:7,16:8,17:[1,14],23:[1,15]},{1:[3]},{14:[1,16]},{14:[2,7],18:[2,7],22:[2,7],24:[2,7]},{14:[2,8],18:[2,8],22:[2,8],24:[2,8]},{14:[2,9],18:[2,9],22:[2,9],24:[2,9]},{14:[2,10],18:[2,10],22:[2,10],24:[2,10]},{14:[2,11],18:[2,11],22:[2,11],24:[2,11]},{14:[2,12],18:[2,12],22:[2,12],24:[2,12]},{14:[2,3],18:[2,3],22:[2,3],24:[2,3]},{14:[2,4],18:[2,4],22:[2,4],24:[2,4]},{14:[2,5],18:[2,5],22:[2,5],24:[2,5]},{14:[2,1],18:[2,1],21:[2,1],22:[2,1],24:[2,1]},{14:[2,2],18:[2,2],22:[2,2],24:[2,2]},{3:20,4:[1,12],18:[1,17],19:18,20:19},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:23,15:7,16:8,17:[1,14],23:[1,15],24:[1,21],25:22},{1:[2,6]},{14:[2,13],18:[2,13],22:[2,13],24:[2,13]},{18:[1,24],22:[1,25]},{18:[2,16],22:[2,16]},{21:[1,26]},{14:[2,18],18:[2,18],22:[2,18],24:[2,18]},{22:[1,28],24:[1,27]},{22:[2,20],24:[2,20]},{14:[2,14],18:[2,14],22:[2,14],24:[2,14]},{3:20,4:[1,12],20:29},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:30,15:7,16:8,17:[1,14],23:[1,15]},{14:[2,19],18:[2,19],22:[2,19],24:[2,19]},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:31,15:7,16:8,17:[1,14],23:[1,15]},{18:[2,17],22:[2,17]},{18:[2,15],22:[2,15]},{22:[2,21],24:[2,21]}],defaultActions:{16:[2,6]},parseError:function(t,e){throw new Error(t)},parse:function(t){var e=this,n=[0],i=[null],r=[],s=this.table,o="",a=0,l=0,c=0;this.lexer.setInput(t),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var u=this.lexer.yylloc;function h(){var t;return"number"!==typeof(t=e.lexer.lex()||1)&&(t=e.symbols_[t]||t),t}r.push(u),"function"===typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var p,y,f,d,b,g,m,x,k,j,O={};;){if(f=n[n.length-1],this.defaultActions[f]?d=this.defaultActions[f]:(null==p&&(p=h()),d=s[f]&&s[f][p]),"undefined"===typeof d||!d.length||!d[0]){if(!c){for(g in k=[],s[f])this.terminals_[g]&&g>2&&k.push("'"+this.terminals_[g]+"'");var v="";v=this.lexer.showPosition?"Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+k.join(", ")+", got '"+this.terminals_[p]+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==p?"end of input":"'"+(this.terminals_[p]||p)+"'"),this.parseError(v,{text:this.lexer.match,token:this.terminals_[p]||p,line:this.lexer.yylineno,loc:u,expected:k})}if(3==c){if(1==p)throw new Error(v||"Parsing halted.");l=this.lexer.yyleng,o=this.lexer.yytext,a=this.lexer.yylineno,u=this.lexer.yylloc,p=h()}for(;!(2..toString()in s[f]);){if(0==f)throw new Error(v||"Parsing halted.");j=1,n.length=n.length-2*j,i.length=i.length-j,r.length=r.length-j,f=n[n.length-1]}y=p,p=2,d=s[f=n[n.length-1]]&&s[f][2],c=3}if(d[0]instanceof Array&&d.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+p);switch(d[0]){case 1:n.push(p),i.push(this.lexer.yytext),r.push(this.lexer.yylloc),n.push(d[1]),p=null,y?(p=y,y=null):(l=this.lexer.yyleng,o=this.lexer.yytext,a=this.lexer.yylineno,u=this.lexer.yylloc,c>0&&c--);break;case 2:if(m=this.productions_[d[1]][1],O.$=i[i.length-m],O._$={first_line:r[r.length-(m||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(m||1)].first_column,last_column:r[r.length-1].last_column},"undefined"!==typeof(b=this.performAction.call(O,o,l,a,this.yy,d[1],i,r)))return b;m&&(n=n.slice(0,-1*m*2),i=i.slice(0,-1*m),r=r.slice(0,-1*m)),n.push(this.productions_[d[1]][0]),i.push(O.$),r.push(O._$),x=s[n[n.length-2]][n[n.length-1]],n.push(x);break;case 3:return!0}}return!0}},e=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parseError)throw new Error(t);this.yy.parseError(t,e)},setInput:function(t){return this._input=t,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.match+=t,this.matched+=t,t.match(/\n/)&&this.yylineno++,this._input=this._input.slice(1),t},unput:function(t){return this._input=t+this._input,this},more:function(){return this._more=!0,this},less:function(t){this._input=this.match.slice(t)+this._input},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},next:function(){if(this.done)return this.EOF;var t,e,n,i,r;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),o=0;o<s.length&&(!(n=this._input.match(this.rules[s[o]]))||e&&!(n[0].length>e[0].length)||(e=n,i=o,this.options.flex));o++);return e?((r=e[0].match(/\n.*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-1:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.yyleng=this.yytext.length,this._more=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],t=this.performAction.call(this,this.yy,this,s[i],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),t||void 0):""===this._input?this.EOF:void this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return"undefined"!==typeof t?t:this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)},options:{},performAction:function(t,e,n,i){switch(n){case 0:break;case 1:return 6;case 2:return e.yytext=e.yytext.substr(1,e.yyleng-2),4;case 3:return 17;case 4:return 18;case 5:return 23;case 6:return 24;case 7:return 22;case 8:return 21;case 9:return 10;case 10:return 11;case 11:return 8;case 12:return 14;case 13:return"INVALID"}},rules:[/^(?:\s+)/,/^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,/^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?::)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:$)/,/^(?:.)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],inclusive:!0}}};return t}();return t.lexer=e,t}();e.parser=i,e.parse=i.parse.bind(i)},83:function(t,e,n){},88:function(t,e,n){"use strict";n.r(e);var i=n(10),r=n(0),s=n(129),o=n(35),a=n.n(o),l=(n(83),n(15)),c=n(62),u=n(137),h=n(139),p=n(140),y=n(130),f=function(t){var e=t.onMinifyClick,n=t.onPrettifyClick,s=t.isAutoPrettify,o=t.onLivePrettifyChange,a=t.onClearClick,l=t.onDownloadClick,c=t.onUploadClick,f=t.isValidJson,d=Object(r.useRef)(null),b=function(){var t=d.current;t&&c(t)},g=[{key:"upload",text:"Upload",iconProps:{iconName:"Upload"},onClick:b},{key:"download",text:"Download",ariaLabel:"Grid view",iconProps:{iconName:"Download"},onClick:l},{key:"upload-dummy",text:"Upload",onRender:function(){return Object(i.jsx)("input",{ref:d,style:{display:"none"},type:"file",accept:"application/json",onChange:b})}},{key:"clear",text:"Clear",iconProps:{iconName:"Delete"},onClick:a},{key:"prettify",text:"Prettify",iconProps:{iconName:"MaximumValue"},onClick:n},{key:"Minify",text:"Minify",iconProps:{iconName:"MinimumValue"},onClick:e},{key:"live-prettify",onRender:function(){return Object(i.jsx)(u.a,{children:Object(i.jsx)(h.a,{label:"Live Prettify",onChange:o,checked:s})})}}],m=[{key:"submit",text:"Submit",onRender:function(){return Object(i.jsx)("div",{children:Object(i.jsx)(p.a,{iconProps:{iconName:"Save"},primary:!0,disabled:f,text:"Submit",allowDisabledFocus:!0})})}},{key:"info",text:"Info",ariaLabel:"Info",iconOnly:!0,iconProps:{iconName:"Info"}}];return Object(i.jsx)("div",{children:Object(i.jsx)(y.a,{styles:{root:{alignItems:"center"}},items:g,farItems:m,ariaLabel:"json content commands"})})},d=n(132),b=n(5),g=n(134),m=function(t){var e=t.errors;return Object(i.jsx)(d.a,{messageBarType:b.a.error,isMultiline:!1,dismissButtonAriaLabel:"Close",children:e.map((function(t){return Object(i.jsx)("p",{children:t},Object(g.a)())}))})},x=n(133),k=function(){var t=[{key:"title",text:"title",onRender:function(){return Object(i.jsx)(x.a,{variant:"large",nowrap:!0,block:!0,children:"JSON Online Editor"})}}];return Object(i.jsx)(y.a,{styles:{root:{alignItems:"center"}},ariaLabel:"service title",items:t})},j=n(46),O=n.n(j),v=n(60),_=function(){var t=Object(v.a)(O.a.mark((function t(e){var n,i,r,s,o;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(g.a)(),i=JSON.stringify(e),r=new Blob([i],{type:"application/json"}),t.prev=3,t.next=6,URL.createObjectURL(r);case 6:s=t.sent,(o=document.createElement("a")).href=s,o.download="".concat(n,".json"),document.body.appendChild(o),o.click(),document.body.removeChild(o),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(3),console.log("file error");case 18:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(e){return t.apply(this,arguments)}}(),S=n(61),N=(n.n(S).a,function(t){var e,n=t.defaultValue,s=Object(r.useState)([]),o=Object(l.a)(s,2),a=o[0],u=o[1],h=Object(r.useState)(void 0),p=Object(l.a)(h,2),y=p[0],d=p[1],b=Object(r.useState)(!1),g=Object(l.a)(b,2),x=g[0],j=g[1],O=Object(r.useState)(!1),v=Object(l.a)(O,2),S=v[0],N=v[1],L=Object(r.useRef)(null),w=function(t){return d(t)},E=function(t){var e=function(t){try{return JSON.stringify(JSON.parse(t),null,"\t")}catch(e){return t}}(t);d(e)},C=function(t){return t&&x?E(t):w(t)},A=function(){var t=e.result;C(t)};return Object(i.jsxs)("div",{children:[Object(i.jsx)(k,{}),Object(i.jsx)(f,{onMinifyClick:function(){var t=y&&function(t){try{return JSON.stringify(JSON.parse(t),null)}catch(e){return t}}(y);w(t)},onPrettifyClick:function(){y&&E(y)},isAutoPrettify:x,onLivePrettifyChange:function(){return j(!x)},onClearClick:function(){return d(void 0)},onUploadClick:function(t){t.click(),t.files.length>0&&((e=new FileReader).onloadend=A,e.readAsText(t.files[0]))},onDownloadClick:function(){return y&&S&&_(y)},isValidJson:S}),Object(i.jsx)(c.a,{height:"500px",defaultLanguage:"json",beforeMount:function(){n&&E(n)},defaultValue:n,onMount:function(t){L.current=t,t.getModel().updateOptions({tabSize:2,insertSpaces:!1}),t._domElement.addEventListener("paste",(function(t){var e=(t.clipboardData||window.clipboardData).getData("text");E(e)}))},onChange:C,onValidate:function(t){var e=t.map((function(t){var e=t.startLineNumber,n=t.message;return"line ".concat(e,": ").concat(n)}));N(e.length>0),u(e)},value:y}),a.length>0&&Object(i.jsx)(m,{errors:a})]})}),L=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(N,{defaultValue:'{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}'})})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),i(t),r(t),s(t),o(t)}))};a.a.render(Object(i.jsx)(L,{}),document.getElementById("root")),w(),Object(s.a)()}},[[88,1,2]]]);
//# sourceMappingURL=main.54071c2a.chunk.js.map