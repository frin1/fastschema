(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{41074:function(e,r,t){Promise.resolve().then(t.bind(t,60378))},60378:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return x}});var n=t(57437),o=t(30248),i=t(27453),s=t(15671),a=t(80244),l=t(21270),c=t(2265),u=t(22782),d=t(47907),f=t(82670),m=t(53365),p=t(57654);let h=o.Ry({login:o.Z_().trim().min(1,{message:"Username or email is required"}),password:o.Z_().trim().min(1,{message:"Password is required"})});function x(){let[e,r]=(0,c.useState)(!1),t=(0,d.useRouter)();(0,c.useEffect)(()=>{(async()=>{try{(await (0,m.bG)(!0)).id&&(window.location.href="/dash")}catch(e){}})()},[]);let o=(0,f.cI)({resolver:(0,l.F)(h),defaultValues:{login:"",password:""}}),x=async e=>{r(!0);try{let r=await (0,m.x4)(e);r.token&&(0,m.M8)(r.token),t.push("/"),i.Vp("Login successful")}catch(e){}r(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:"Login - Fastschema"}),(0,n.jsx)("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:(0,n.jsx)(a.l0,{...o,children:(0,n.jsx)("form",{onSubmit:o.handleSubmit(x),className:"space-y-8",children:(0,n.jsxs)(s.Zb,{className:"w-full max-w-sm",children:[(0,n.jsxs)(s.Ol,{children:[(0,n.jsx)(s.ll,{className:"text-2xl",children:"Login - Fastschema"}),(0,n.jsx)(s.SZ,{children:"Enter your username to login to your account."})]}),(0,n.jsxs)(s.aY,{className:"grid gap-4",children:[(0,n.jsx)("div",{className:"grid gap-2",children:(0,n.jsx)(a.Wi,{control:o.control,name:"login",render:e=>{let{field:r}=e;return(0,n.jsxs)(a.xJ,{children:[(0,n.jsx)(a.lX,{children:"Username"}),(0,n.jsx)(a.NI,{children:(0,n.jsx)(u.I,{placeholder:"Username or email",...r})}),(0,n.jsx)(a.zG,{})]})}})}),(0,n.jsx)("div",{className:"grid gap-2",children:(0,n.jsx)(a.Wi,{control:o.control,name:"password",render:e=>{let{field:r}=e;return(0,n.jsxs)(a.xJ,{children:[(0,n.jsx)(a.lX,{children:"Password"}),(0,n.jsx)(a.NI,{children:(0,n.jsx)(u.I,{placeholder:"••••••••",type:"password",...r})}),(0,n.jsx)(a.zG,{})]})}})})]}),(0,n.jsx)(s.eW,{children:(0,n.jsx)(p.z,{type:"submit",className:"w-full",loading:e,children:"Sign in"})})]})})})})]})}},57654:function(e,r,t){"use strict";t.d(r,{z:function(){return s}});var n=t(57437),o=t(79580),i=t(575);let s=(0,t(2265).forwardRef)((e,r)=>{let{loading:t,icon:s,children:a,...l}=e,c={type:"button",size:"sm",...l};return t?(0,n.jsxs)(i.z,{...c,ref:r,disabled:t,children:[(0,n.jsx)(o.Z,{className:"mr-2 h-4 w-4 animate-spin"}),a]}):(0,n.jsx)(i.z,{...c,ref:r,disabled:t,children:s?(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[s,a]}):a})});s.displayName="Button"},575:function(e,r,t){"use strict";t.d(r,{d:function(){return l},z:function(){return c}});var n=t(57437),o=t(2265),i=t(59143),s=t(57742),a=t(22169);let l=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=o.forwardRef((e,r)=>{let{className:t,variant:o,size:s,asChild:c=!1,...u}=e,d=c?i.g7:"button";return(0,n.jsx)(d,{className:(0,a.cn)(l({variant:o,size:s,className:t})),ref:r,...u})});c.displayName="Button"},15671:function(e,r,t){"use strict";t.d(r,{Ol:function(){return a},SZ:function(){return c},Zb:function(){return s},aY:function(){return u},eW:function(){return d},ll:function(){return l}});var n=t(57437),o=t(2265),i=t(22169);let s=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...o})});s.displayName="Card";let a=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",t),...o})});a.displayName="CardHeader";let l=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)("h3",{ref:r,className:(0,i.cn)("font-semibold leading-none tracking-tight",t),...o})});l.displayName="CardTitle";let c=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)("p",{ref:r,className:(0,i.cn)("text-sm text-muted-foreground",t),...o})});c.displayName="CardDescription";let u=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("p-6 pt-0",t),...o})});u.displayName="CardContent";let d=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("flex items-center p-6 pt-0",t),...o})});d.displayName="CardFooter"},80244:function(e,r,t){"use strict";t.d(r,{NI:function(){return x},Wi:function(){return d},l0:function(){return c},lX:function(){return h},pf:function(){return v},xJ:function(){return p},zG:function(){return g}});var n=t(57437),o=t(2265),i=t(59143),s=t(82670),a=t(22169),l=t(12647);let c=s.RV,u=o.createContext({}),d=e=>{let{...r}=e;return(0,n.jsx)(u.Provider,{value:{name:r.name},children:(0,n.jsx)(s.Qr,{...r})})},f=()=>{let e=o.useContext(u),r=o.useContext(m),{getFieldState:t,formState:n}=(0,s.Gc)(),i=t(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:a}=r;return{id:a,name:e.name,formItemId:"".concat(a,"-form-item"),formDescriptionId:"".concat(a,"-form-item-description"),formMessageId:"".concat(a,"-form-item-message"),...i}},m=o.createContext({}),p=o.forwardRef((e,r)=>{let{className:t,...i}=e,s=o.useId();return(0,n.jsx)(m.Provider,{value:{id:s},children:(0,n.jsx)("div",{ref:r,className:(0,a.cn)("space-y-2",t),...i})})});p.displayName="FormItem";let h=o.forwardRef((e,r)=>{let{className:t,...o}=e,{error:i,formItemId:s}=f();return(0,n.jsx)(l._,{ref:r,className:(0,a.cn)(i&&"text-destructive",t),htmlFor:s,...o})});h.displayName="FormLabel";let x=o.forwardRef((e,r)=>{let{...t}=e,{error:o,formItemId:s,formDescriptionId:a,formMessageId:l}=f();return(0,n.jsx)(i.g7,{ref:r,id:s,"aria-describedby":o?"".concat(a," ").concat(l):"".concat(a),"aria-invalid":!!o,...t})});x.displayName="FormControl";let v=o.forwardRef((e,r)=>{let{className:t,...o}=e,{formDescriptionId:i}=f();return(0,n.jsx)("p",{ref:r,id:i,className:(0,a.cn)("text-[0.8rem] text-muted-foreground",t),...o})});v.displayName="FormDescription";let g=o.forwardRef((e,r)=>{let{className:t,children:o,...i}=e,{error:s,formMessageId:l}=f(),c=s?String(null==s?void 0:s.message):o;return c?(0,n.jsx)("p",{ref:r,id:l,className:(0,a.cn)("text-[0.8rem] font-medium text-destructive",t),...i,children:c}):null});g.displayName="FormMessage"},22782:function(e,r,t){"use strict";t.d(r,{I:function(){return s}});var n=t(57437),o=t(2265),i=t(22169);let s=o.forwardRef((e,r)=>{let{className:t,type:o,...s}=e;return(0,n.jsx)("input",{type:o,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...s})});s.displayName="Input"},12647:function(e,r,t){"use strict";t.d(r,{_:function(){return c}});var n=t(57437),o=t(2265),i=t(24602),s=t(57742),a=t(22169);let l=(0,s.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=o.forwardRef((e,r)=>{let{className:t,...o}=e;return(0,n.jsx)(i.f,{ref:r,className:(0,a.cn)(l(),t),...o})});c.displayName=i.f.displayName},51919:function(e,r,t){"use strict";t.d(r,{Hl:function(){return o}});let n={on(e,r){"undefined"!=typeof document&&document.addEventListener(e,e=>r(null==e?void 0:e.detail))},dispatch(e,r){"undefined"!=typeof document&&document.dispatchEvent(new CustomEvent(e,{detail:r}))},remove(e,r){"undefined"!=typeof document&&document.removeEventListener(e,r)}};r.ZP=n;let o=e=>{n.dispatch("network-error",e)}},27453:function(e,r,t){"use strict";t.d(r,{Vp:function(){return i},h4:function(){return a},vU:function(){return s}});var n=t(18009);let o=(e,r)=>{(0,n.ZP)(e,{position:"top-center"})},i=(e,r)=>{n.ZP.success(e,{position:"top-center"})},s=(e,r)=>{n.ZP.error(e,{position:"top-center"})},a={info:o,success:i,error:s,warning:(e,r)=>{o(e,r)}}},84971:function(e,r,t){"use strict";t.d(r,{HG:function(){return p},SO:function(){return f},dX:function(){return d},f1:function(){return u},qb:function(){return m}});var n=t(98955),o=t(33108),i=t(51919),s=t(27453);let a=(e,r)=>{let t=n.Z.get(o.B$),i={"Content-Type":"application/json;charset=utf-8",...null!=e?e:{}};return r instanceof FormData&&delete i["Content-Type"],t&&(i.Authorization="Bearer ".concat(t)),i},l=function(e){var r;let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"string"==typeof e?e:null!==(r=e.message)&&void 0!==r?r:t},c=async(e,r,t,n)=>{var c,u,d;let f=null,m={method:e,mode:"cors",cache:"no-cache",credentials:"same-origin",headers:a(null!==(c=null==n?void 0:n.headers)&&void 0!==c?c:{},t),redirect:"follow",referrerPolicy:"strict-origin-when-cross-origin"};t&&(t instanceof FormData?m.body=t:m.body=JSON.stringify(t));try{if(r.startsWith("http://")||r.startsWith("https://")||(r=o.N9+r),!(f=await fetch(r,m)).ok){let e=null!==(u=f.statusText)&&void 0!==u?u:"Network response was not ok";try{let r=await f.json();e=l(r.error,e)}catch(e){}throw Error(e)}let e=await f.json();if(e.error)throw Error(l(e.error));return null!==(d=e.data)&&void 0!==d?d:e}catch(r){console.error(r);let e="";throw(null==n?void 0:n.disableErrorNotification)||s.h4.error(l(r.message,"An error occurred. Please try again later.")),r instanceof Error&&(e=r.message),e.includes("Failed to fetch")&&(0,i.Hl)("An error occurred. Please try again later."),Error(e)}},u=e=>{var r;let t=(null!==(r=e.message)&&void 0!==r?r:"").toLocaleLowerCase();return t.includes("401")||t.includes("unauthorized")},d=async(e,r)=>await c("GET",e,null,r),f=async(e,r,t)=>await c("POST",e,r,t),m=async(e,r,t)=>await c("PUT",e,r,t),p=async(e,r,t)=>await c("DELETE",e,r,t)},33108:function(e,r,t){"use strict";t.d(r,{N9:function(){return d},B$:function(){return f},MJ:function(){return c},gk:function(){return s},aD:function(){return m}});var n,o,i=t(30248);let s=i.z.object({id:i.z.number()}),a=i.z.array(s),l=i.z.object({$nochange:i.z.boolean().optional(),$add:i.z.array(s).optional(),$clear:i.z.array(s).optional()}),c=i.z.union([a,l]);var u=t(49079);let d=null!==(n=u.env.NEXT_PUBLIC_API_BASE_URI)&&void 0!==n?n:"/api",f=null!==(o=u.env.NEXT_PUBLIC_COOKIE_NAME)&&void 0!==o?o:"token",m=["/login/","/register/","/activate/","/setup/"]},53365:function(e,r,t){"use strict";t.d(r,{M8:function(){return c},bG:function(){return s},cY:function(){return a},kS:function(){return u},rw:function(){return d},x4:function(){return l}});var n=t(98955),o=t(84971),i=t(33108);let s=e=>(0,o.dX)("/user/me",{disableErrorNotification:e}),a=e=>(0,o.SO)("/setup",e),l=e=>(0,o.SO)("/user/login",e),c=e=>{n.Z.set(i.B$,e,{expires:7})},u=()=>{n.Z.remove(i.B$),window.location.href="/dash/login"},d=e=>(e="/".concat(e,"/").replaceAll("//","/"),i.aD.includes(e))},22169:function(e,r,t){"use strict";t.d(r,{cn:function(){return i}});var n=t(75504),o=t(51367);function i(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,o.m6)((0,n.W)(r))}},29586:function(e,r,t){"use strict";t.d(r,{WV:function(){return a},jH:function(){return l}});var n=t(14749),o=t(2265),i=t(54887),s=t(59143);let a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=(0,o.forwardRef)((e,t)=>{let{asChild:i,...a}=e,l=i?s.g7:r;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(l,(0,n.Z)({},a,{ref:t}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function l(e,r){e&&(0,i.flushSync)(()=>e.dispatchEvent(r))}}},function(e){e.O(0,[637,147,971,69,744],function(){return e(e.s=41074)}),_N_E=e.O()}]);