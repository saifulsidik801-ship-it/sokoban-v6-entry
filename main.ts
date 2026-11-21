import f from"fs"
let{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env,t,W,K,G,p,b,C="lrud"
function F(s,B){let m={[s]:0},q=[s],c=s;for(let x of q)for(let d of K){let n=x+d;if(t[n]=="#"||n in m||B.includes(n)||G.includes(n))continue;m[n]=d;q.push(n);if(n<c)c=n}m.c=c;return m}
function S(R,a){let Q=[[R,a,""]],A={};for(let[B,q,w]of Q){let m=F(q,B);if(B.every(x=>".*".includes(t[x]))){p=q;b=[...G,...B];return w}for(let j in B)for(let h in K){let d=K[h],o=B[j],u=o-d,v=o+d;if(!(u in m)||t[v]=="#"||B.includes(v))continue;let N=[...B];N[j]=v;let g=F(o,N),y=N.sort()+","+g.c;if(A[y])continue;let s="";for(let e=u;e!=q;e-=m[e])s=C[K.indexOf(m[e])]+s;s+=C[h];A[y]=1;Q.push([N,o,w+s])}}return 0}
function Z(s){W=s.indexOf("\n");K=[-1,1,-W,W];t=s.replace(/\n/g,"");b=[];for(let i in t)/[$*]/.test(t[i])&&b.push(+i);p=t.indexOf("@");let a="";for(let y of[-1,1])for(let x=W;x--;){let d=(8+y)*W+x;if(t[d]=="#")continue;G=[];let m=F(d+y*W,[d]),R=[];for(let c of b)(c==d||c in m?R:G).push(c);let v=S(R,p);if(!v)return"";a+=v}return a}
f.readdirSync(I).map(i=>{f.mkdirSync(O+"/"+i,{recursive:!0});f.writeFileSync(O+"/"+i+"/solution.txt",Z(f.readFileSync(I+"/"+i+"/level.txt")+""))})
