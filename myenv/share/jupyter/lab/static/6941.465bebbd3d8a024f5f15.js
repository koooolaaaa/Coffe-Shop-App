"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[6941],{46941:(t,E,e)=>{e.r(E);e.d(E,{forth:()=>O});function r(t){var E=[];t.split(" ").forEach((function(t){E.push({name:t})}));return E}var n=r("INVERT AND OR XOR 2* 2/ LSHIFT RSHIFT 0= = 0< < > U< MIN MAX 2DROP 2DUP 2OVER 2SWAP ?DUP DEPTH DROP DUP OVER ROT SWAP >R R> R@ + - 1+ 1- ABS NEGATE S>D * M* UM* FM/MOD SM/REM UM/MOD */ */MOD / /MOD MOD HERE , @ ! CELL+ CELLS C, C@ C! CHARS 2@ 2! ALIGN ALIGNED +! ALLOT CHAR [CHAR] [ ] BL FIND EXECUTE IMMEDIATE COUNT LITERAL STATE ; DOES> >BODY EVALUATE SOURCE >IN <# # #S #> HOLD SIGN BASE >NUMBER HEX DECIMAL FILL MOVE . CR EMIT SPACE SPACES TYPE U. .R U.R ACCEPT TRUE FALSE <> U> 0<> 0> NIP TUCK ROLL PICK 2>R 2R@ 2R> WITHIN UNUSED MARKER I J TO COMPILE, [COMPILE] SAVE-INPUT RESTORE-INPUT PAD ERASE 2LITERAL DNEGATE D- D+ D0< D0= D2* D2/ D< D= DMAX DMIN D>S DABS M+ M*/ D. D.R 2ROT DU< CATCH THROW FREE RESIZE ALLOCATE CS-PICK CS-ROLL GET-CURRENT SET-CURRENT FORTH-WORDLIST GET-ORDER SET-ORDER PREVIOUS SEARCH-WORDLIST WORDLIST FIND ALSO ONLY FORTH DEFINITIONS ORDER -TRAILING /STRING SEARCH COMPARE CMOVE CMOVE> BLANK SLITERAL");var i=r("IF ELSE THEN BEGIN WHILE REPEAT UNTIL RECURSE [IF] [ELSE] [THEN] ?DO DO LOOP +LOOP UNLOOP LEAVE EXIT AGAIN CASE OF ENDOF ENDCASE");function R(t,E){var e;for(e=t.length-1;e>=0;e--){if(t[e].name===E.toUpperCase()){return t[e]}}return undefined}const O={name:"forth",startState:function(){return{state:"",base:10,coreWordList:n,immediateWordList:i,wordList:[]}},token:function(t,E){var e;if(t.eatSpace()){return null}if(E.state===""){if(t.match(/^(\]|:NONAME)(\s|$)/i)){E.state=" compilation";return"builtin"}e=t.match(/^(\:)\s+(\S+)(\s|$)+/);if(e){E.wordList.push({name:e[2].toUpperCase()});E.state=" compilation";return"def"}e=t.match(/^(VARIABLE|2VARIABLE|CONSTANT|2CONSTANT|CREATE|POSTPONE|VALUE|WORD)\s+(\S+)(\s|$)+/i);if(e){E.wordList.push({name:e[2].toUpperCase()});return"def"}e=t.match(/^(\'|\[\'\])\s+(\S+)(\s|$)+/);if(e){return"builtin"}}else{if(t.match(/^(\;|\[)(\s)/)){E.state="";t.backUp(1);return"builtin"}if(t.match(/^(\;|\[)($)/)){E.state="";return"builtin"}if(t.match(/^(POSTPONE)\s+\S+(\s|$)+/)){return"builtin"}}e=t.match(/^(\S+)(\s+|$)/);if(e){if(R(E.wordList,e[1])!==undefined){return"variable"}if(e[1]==="\\"){t.skipToEnd();return"comment"}if(R(E.coreWordList,e[1])!==undefined){return"builtin"}if(R(E.immediateWordList,e[1])!==undefined){return"keyword"}if(e[1]==="("){t.eatWhile((function(t){return t!==")"}));t.eat(")");return"comment"}if(e[1]===".("){t.eatWhile((function(t){return t!==")"}));t.eat(")");return"string"}if(e[1]==='S"'||e[1]==='."'||e[1]==='C"'){t.eatWhile((function(t){return t!=='"'}));t.eat('"');return"string"}if(e[1]-68719476735){return"number"}return"atom"}}}}}]);