;try {
/* module-key = 'com.atlassian.auiplugin:ajs-evejs', location = 'js-vendor/eve/eve.js' */
/* THIS FILE HAS BEEN MODIFIED BY ATLASSIAN. See https://ecosystem.atlassian.net/browse/AUI-1712 for details. Modified lines are marked below, search "ATLASSIAN" */
(function(I){var E="0.3.4",J="hasOwnProperty",B=/[\.\/]/,A="*",G=function(){},F=function(M,L){return M-L},D,H,K={n:{}},C=function(L,a){var U=K,R=H,V=Array.prototype.slice.call(arguments,2),X=C.listeners(L),W=0,T=false,O,N=[],S={},P=[],M=D,Y=[];D=L;H=0;for(var Q=0,Z=X.length;Q<Z;Q++){if("zIndex" in X[Q]){N.push(X[Q].zIndex);if(X[Q].zIndex<0){S[X[Q].zIndex]=X[Q]}}}N.sort(F);while(N[W]<0){O=S[N[W++]];P.push(O.apply(a,V));if(H){H=R;return P}}for(Q=0;Q<Z;Q++){O=X[Q];if("zIndex" in O){if(O.zIndex==N[W]){P.push(O.apply(a,V));if(H){break}do{W++;O=S[N[W]];O&&P.push(O.apply(a,V));if(H){break}}while(O)}else{S[O.zIndex]=O}}else{P.push(O.apply(a,V));if(H){break}}}H=R;D=M;return P.length?P:null};C.listeners=function(L){var T=L.split(B),R=K,X,S,M,P,W,O,Q,U,V=[R],N=[];for(P=0,W=T.length;P<W;P++){U=[];for(O=0,Q=V.length;O<Q;O++){R=V[O].n;S=[R[T[P]],R[A]];M=2;while(M--){X=S[M];if(X){U.push(X);N=N.concat(X.f||[])}}}V=U}return N};C.on=function(L,O){var Q=L.split(B),P=K;for(var M=0,N=Q.length;M<N;M++){P=P.n;!P[Q[M]]&&(P[Q[M]]={n:{}});P=P[Q[M]]}P.f=P.f||[];for(M=0,N=P.f.length;M<N;M++){if(P.f[M]==O){return G}}P.f.push(O);return function(R){if(+R==+R){O.zIndex=+R}}};C.stop=function(){H=1};C.nt=function(L){if(L){return new RegExp("(?:\\.|\\/|^)"+L+"(?:\\.|\\/|$)").test(D)}return D};C.unbind=function(M,R){var T=M.split(B),S,V,N,P,W,O,Q,U=[K];for(P=0,W=T.length;P<W;P++){for(O=0;O<U.length;O+=N.length-2){N=[O,1];S=U[O].n;if(T[P]!=A){if(S[T[P]]){N.push(S[T[P]])}}else{for(V in S){if(S[J](V)){N.push(S[V])}}}U.splice.apply(U,N)}}for(P=0,W=U.length;P<W;P++){S=U[P];while(S.n){if(R){if(S.f){for(O=0,Q=S.f.length;O<Q;O++){if(S.f[O]==R){S.f.splice(O,1);break}}!S.f.length&&delete S.f}for(V in S.n){if(S.n[J](V)&&S.n[V].f){var L=S.n[V].f;for(O=0,Q=L.length;O<Q;O++){if(L[O]==R){L.splice(O,1);break}}!L.length&&delete S.n[V].f}}}else{delete S.f;for(V in S.n){if(S.n[J](V)&&S.n[V].f){delete S.n[V].f}}}S=S.n}}};C.once=function(L,M){var N=function(){var O=M.apply(this,arguments);C.unbind(L,N);return O};return C.on(L,N)};C.version=E;C.toString=function(){return"You are running Eve "+E};C.off=C.unbind;I.eve=C;if(typeof define==="function"){define("eve",function(){console&&console.warn&&console.warn("DEPRECATED - requiring 'eve' has been deprecated since AUI 5.7 and will be removed in AUI 6.0.");return C});define("aui/internal/eve",function(){return C})}})(this);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;