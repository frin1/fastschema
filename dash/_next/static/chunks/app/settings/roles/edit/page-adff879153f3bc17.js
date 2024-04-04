(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[757],{73421:function(e,t,r){Promise.resolve().then(r.bind(r,67578))},67578:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(57437),a=r(76540),s=r(34560),o=r(2265),i=r(47907),l=r(75006),d=r(15e3),c=r(21270),u=r(82670),f=r(33108),m=r(30248);let p=m.z.object({name:m.z.string().trim().min(1,{message:"Role name is required"}),description:m.z.string().optional(),root:m.z.boolean().optional(),permissions:m.z.array(m.z.string()).optional(),$add:m.z.record(m.z.string(),m.z.array(f.gk)).optional(),$clear:m.z.record(m.z.string(),m.z.array(f.gk)).optional()}),x={name:"",description:"",root:!1,permissions:[],$add:{},$clear:{}};var h=r(80244),v=r(82628),g=r(22782),j=r(3549),y=r(86468),b=r(12647),N=r(57654),w=r(27453),z=r(90688),$=r(26739),k=r(82012),C=r(25326),E=r(97081),R=r(33277),_=r(52235),O=r(79134);let P=e=>{var t,r;let{editingRole:s,onResourcesUpdated:i,onUsersUpdated:c}=e,[u,f]=(0,o.useState)(!1),[m,p]=(0,o.useState)(null!==(t=null==s?void 0:s.permissions)&&void 0!==t?t:[]),{data:x,isLoading:h,error:v}=(0,a.a)({queryKey:["resources"],queryFn:z.jh,retry:!1,refetchOnWindowFocus:!1}),g=e=>{p(e),null==i||i(e)};if(h)return(0,n.jsx)(l.g,{});if(v)return(0,n.jsx)(d.T,{error:v});let j=e=>{let{resources:t}=e,r=t.filter(e=>!m.includes(e.id)),a=!r.length||t.every(e=>e.group);return(0,n.jsxs)(n.Fragment,{children:[r.map(e=>(0,n.jsx)(y,{resource:e},e.id)),!a&&(0,n.jsx)($.zz,{className:"my-2"})]})},y=e=>{var t;let{resource:r}=e;return(null==r?void 0:null===(t=r.resources)||void 0===t?void 0:t.length)?(0,n.jsx)(j,{resources:r.resources}):(0,n.jsx)($.di,{value:r.id,onSelect:()=>{g([...m,r.id])},children:(0,E.Qs)(r.id)},r.id)};return(0,n.jsxs)(C.UQ,{type:"multiple",className:"bg-slate-50 rounded-lg border",defaultValue:["permissions"],children:[(0,n.jsxs)(C.Qd,{value:"permissions",className:"border-0",children:[(0,n.jsx)(C.o4,{className:"hover:no-underline px-4",children:"Permissions"}),(0,n.jsx)(C.vF,{className:"pb-2",children:s?(0,n.jsxs)("div",{className:"px-4 pb-4 bg-background border-t",children:[(0,n.jsx)("div",{className:"flex flex-wrap gap-2 pt-4",children:(0,n.jsxs)(k.J2,{open:u,onOpenChange:f,children:[(0,n.jsx)(k.xo,{asChild:!0,children:(0,n.jsx)(N.z,{variant:"outline",className:"w-[150px] justify-start",children:"+ Add permission"})}),(0,n.jsx)(k.yk,{className:"p-0",align:"start",children:(0,n.jsxs)($.mY,{children:[(0,n.jsx)($.sZ,{placeholder:"Search for a permission"}),(0,n.jsxs)($.e8,{children:[(0,n.jsx)($.rb,{children:"No results found."}),(0,n.jsx)($.fu,{children:(0,n.jsx)(j,{resources:null!=x?x:[]})})]})]})})]})}),(0,n.jsx)("div",{className:"flex flex-wrap gap-2 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:m.toSorted((e,t)=>e.localeCompare(t)).map(e=>(0,n.jsx)("div",{children:(0,n.jsxs)(R.C,{variant:"secondary",className:"text-md font-medium px-3 py-2 select-none",children:[(0,E.Qs)(e),(0,n.jsx)("button",{onClick:()=>{g(m.filter(t=>t!==e))},className:"flex items-center justify-center w-5 h-5 ml-2 rounded-full bg-slate-50 hover:bg-slate-200",children:(0,n.jsx)(_.Z,{className:"w-4 h-4"})})]})},e))})]}):(0,n.jsx)("p",{className:"px-4 py-4",children:"Please save the role before updating permissions."})})]}),(0,n.jsxs)(C.Qd,{value:"users",className:"border-t border-b-0",children:[(0,n.jsx)(C.o4,{className:"hover:no-underline px-4",children:"Users"}),(0,n.jsx)(C.vF,{className:"pb-2",children:(0,n.jsx)("div",{className:"px-4 pb-4 bg-background border-t",children:(0,n.jsx)("div",{className:"flex flex-wrap gap-2 pt-4",children:(0,n.jsx)(O.H,{field:{type:"relation",name:"users",label:"Users",relation:{schema:"user",field:"roles",type:"m2m",owner:!0,optional:!0}},fieldProps:{value:null!==(r=null==s?void 0:s.users)&&void 0!==r?r:[],onChange:c},content:null!=s?s:{}})})})})]})]})},V=e=>{let{editingRole:t}=e,r=(0,i.useRouter)(),a=(0,u.cI)({resolver:(0,c.F)(p),defaultValues:null!=t?t:x,mode:"onChange"}),s=async e=>{try{let n=await (0,z.x$)(e,null==t?void 0:t.id);w.h4.success("Role ".concat(n.name," saved successfully.")),t||r.push("/settings/roles/edit?id=".concat(n.id)),a.reset(n)}catch(e){}};return(0,n.jsx)("div",{children:(0,n.jsx)(h.l0,{...a,children:(0,n.jsxs)("form",{className:"space-y-8",onSubmit:a.handleSubmit(s),children:[(0,n.jsx)(h.Wi,{control:a.control,name:"name",render:e=>{let{field:t}=e;return(0,n.jsxs)(h.xJ,{children:[(0,n.jsx)(h.lX,{className:"flex",children:(0,n.jsx)(v.u,{tip:"This is the name of your role.",icon:!0,children:(0,n.jsx)("span",{className:"mr-1",children:"Name"})})}),(0,n.jsx)(h.NI,{children:(0,n.jsx)(g.I,{...t,autoComplete:"auto",placeholder:"Role name"})}),(0,n.jsx)(h.zG,{})]})}}),(0,n.jsx)(h.Wi,{control:a.control,name:"description",render:e=>{let{field:t}=e;return(0,n.jsxs)(h.xJ,{children:[(0,n.jsx)(h.lX,{className:"flex",children:(0,n.jsx)("span",{className:"mr-1",children:"Description"})}),(0,n.jsx)(h.NI,{children:(0,n.jsx)(j.g,{...t,autoComplete:"auto",placeholder:"Role Description"})}),(0,n.jsx)(h.zG,{})]})}}),(0,n.jsx)(h.Wi,{control:a.control,name:"root",render:e=>{let{field:t}=e;return(0,n.jsx)(h.xJ,{children:(0,n.jsx)(h.NI,{children:(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)(y.r,{checked:t.value,onCheckedChange:t.onChange,name:"root",id:"root","aria-readonly":!0}),(0,n.jsx)(b._,{htmlFor:"root",className:"flex align-middle gap-1",children:(0,n.jsx)(v.u,{tip:"Root roles have full access to all resources.",icon:!0,children:"Is root?"})})]})})})}}),(0,n.jsx)(P,{editingRole:t,onResourcesUpdated:e=>{a.setValue("permissions",e)},onUsersUpdated:e=>{(null==e?void 0:e.$add)&&a.setValue("$add.users",e.$add),(null==e?void 0:e.$clear)&&a.setValue("$clear.users",e.$clear)}}),(0,n.jsx)(N.z,{type:"submit",children:"Save"})]})})})};function S(){let e=(0,i.useSearchParams)().get("id"),{data:t,isLoading:r,error:c}=(0,a.a)({queryKey:["role",e],queryFn:()=>(0,z.cY)(e),retry:!1,refetchOnWindowFocus:!1});return((0,o.useEffect)(()=>((0,s.D8)({title:(null==t?void 0:t.name)?"Edit role: ".concat(t.name):"Create new role",description:(null==t?void 0:t.name)?"Edit role ".concat(t.name," to change the permissions of your users."):"Create a new role for your users.",breadcrumbs:[{name:"Roles",path:"/settings/roles"},{name:e?"Edit role":"New role",path:"/settings/roles/edit?id="+(null!=e?e:"")}]}),s.D8),[e,t]),r)?(0,n.jsx)(l.g,{}):c?(0,n.jsx)(d.T,{error:c}):(0,n.jsx)(V,{editingRole:t})}},57654:function(e,t,r){"use strict";r.d(t,{z:function(){return o}});var n=r(57437),a=r(79580),s=r(575);let o=(0,r(2265).forwardRef)((e,t)=>{let{loading:r,icon:o,children:i,...l}=e,d={type:"button",size:"sm",...l};return r?(0,n.jsxs)(s.z,{...d,ref:t,disabled:r,children:[(0,n.jsx)(a.Z,{className:"mr-2 h-4 w-4 animate-spin"}),i]}):(0,n.jsx)(s.z,{...d,ref:t,disabled:r,children:o?(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[o,i]}):i})});o.displayName="Button"},15e3:function(e,t,r){"use strict";r.d(t,{T:function(){return l}});var n=r(57437),a=r(29069),s=r(62985),o=r(95601),i=r.n(o);let l=e=>{var t;let{title:r,description:o,error:l}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:null!=r?r:"Error"})}),(0,n.jsxs)(a.bZ,{variant:"destructive",children:[(0,n.jsx)(s.Z,{size:16,className:"mr-2"}),(0,n.jsx)(a.Cd,{children:null!=r?r:"Error"}),(null==l?void 0:l.message)||o&&(0,n.jsx)(a.X,{children:null!==(t=null==l?void 0:l.message)&&void 0!==t?t:o})]})]})}},75006:function(e,t,r){"use strict";r.d(t,{g:function(){return l}});var n=r(57437),a=r(22169),s=r(2252),o=r(95601),i=r.n(o);let l=e=>{let{title:t,description:r,error:o,full:l,className:d}=e;o&&(t="Error",r=o);let c=(0,a.cn)("z-50 bg-slate-100 opacity-75 flex flex-col items-center justify-center rounded-lg",null!=d?d:"",l?"fixed top-0 left-0 right-0 bottom-0 w-full h-screen":"w-full h-full");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:null!=t?t:"Loading..."})}),(0,n.jsxs)("div",{className:c,children:[o?(0,n.jsx)(s.Z,{size:64,color:"#dc2626"}):(0,n.jsx)("div",{className:"loader ease-linear rounded-full border-4 border-t-4 border-gray-100 h-12 w-12 mb-4"}),(0,n.jsx)("h2",{className:"text-center text-black text-xl font-semibold",children:null!=t?t:"Loading..."}),(0,n.jsx)("p",{className:"w-1/3 text-center text-black",children:null!=r?r:"This may take a few seconds, please don't close this page."})]})]})}},82628:function(e,t,r){"use strict";r.d(t,{u:function(){return o}});var n=r(57437),a=r(62677),s=r(77252);let o=e=>{let{children:t,tip:r,icon:o}=e;return r?(0,n.jsxs)(a.u,{children:[(0,n.jsx)(a.aJ,{type:"button",children:(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[t,o&&(0,n.jsx)(s.Z,{size:14})]})}),(0,n.jsx)(a._v,{sideOffset:10,children:r})]}):(0,n.jsx)(n.Fragment,{children:t})}},18157:function(e,t,r){"use strict";r.d(t,{EC:function(){return a},l:function(){return s},mb:function(){return o}});var n=r(31548);let a=e=>(null==e?void 0:e.type)==="m2m"||(null==e?void 0:e.type)==="o2m"&&!!(null==e?void 0:e.owner),s=(e,t,r,n,a,s)=>{if(!n){if(e.length){r(e[0]);return}if(!e.length&&t.length){r(a?null:void 0);return}r(a?null:void 0);return}let o=e.map(e=>({id:e.id})),i=o.length?o:void 0,l=t.map(e=>({id:e.id})),d=l.length?l:void 0,c=(null==i?void 0:i.length)||!a?i:null;r(s?{$add:i,$clear:d}:c)},o=async(e,t,r,a,s)=>{if(!a||!e.relation)return;let o={};if(t&&(o[a.label_field]={$like:"%".concat(t,"%")}),s){let t=e.relation.field;o["".concat(t,".id")]=s}return await (0,n.Q7)(a.name,{page:r,limit:20,filter:Object.keys(o).length?o:void 0,select:"id,".concat(a.label_field)})}},25326:function(e,t,r){"use strict";r.d(t,{Qd:function(){return d},UQ:function(){return l},o4:function(){return c},vF:function(){return u}});var n=r(57437),a=r(2265),s=r(95320),o=r(62177),i=r(22169);let l=s.fC,d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.ck,{ref:t,className:(0,i.cn)("border-b",r),...a})});d.displayName="AccordionItem";let c=a.forwardRef((e,t)=>{let{className:r,children:a,...l}=e;return(0,n.jsx)(s.h4,{className:"flex",children:(0,n.jsxs)(s.xz,{ref:t,className:(0,i.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",r),...l,children:[a,(0,n.jsx)(o.v4q,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})})});c.displayName=s.xz.displayName;let u=a.forwardRef((e,t)=>{let{className:r,children:a,...o}=e;return(0,n.jsx)(s.VY,{ref:t,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...o,children:(0,n.jsx)("div",{className:(0,i.cn)("pb-4 pt-0",r),children:a})})});u.displayName=s.VY.displayName},29069:function(e,t,r){"use strict";r.d(t,{Cd:function(){return d},X:function(){return c},bZ:function(){return l}});var n=r(57437),a=r(2265),s=r(57742),o=r(22169);let i=(0,s.j)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),l=a.forwardRef((e,t)=>{let{className:r,variant:a,...s}=e;return(0,n.jsx)("div",{ref:t,role:"alert",className:(0,o.cn)(i({variant:a}),r),...s})});l.displayName="Alert";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h5",{ref:t,className:(0,o.cn)("mb-1 font-medium leading-none tracking-tight",r),...a})});d.displayName="AlertTitle";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("text-sm [&_p]:leading-relaxed",r),...a})});c.displayName="AlertDescription"},575:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return d}});var n=r(57437),a=r(2265),s=r(59143),o=r(57742),i=r(22169);let l=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:r,variant:a,size:o,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(l({variant:a,size:o,className:r})),ref:t,...c})});d.displayName="Button"},9208:function(e,t,r){"use strict";r.d(t,{$N:function(){return m},Vq:function(){return l},cZ:function(){return u},fK:function(){return f}});var n=r(57437),a=r(2265),s=r(72936),o=r(62177),i=r(22169);let l=s.fC;s.xz;let d=s.h_;s.x8;let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.aV,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...a})});c.displayName=s.aV.displayName;let u=a.forwardRef((e,t)=>{let{className:r,children:a,...l}=e;return(0,n.jsxs)(d,{children:[(0,n.jsx)(c,{}),(0,n.jsxs)(s.VY,{ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...l,children:[a,(0,n.jsxs)(s.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(o.Pxu,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});u.displayName=s.VY.displayName;let f=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...r})};f.displayName="DialogHeader";let m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.Dx,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",r),...a})});m.displayName=s.Dx.displayName,a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.dk,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r),...a})}).displayName=s.dk.displayName},22782:function(e,t,r){"use strict";r.d(t,{I:function(){return o}});var n=r(57437),a=r(2265),s=r(22169);let o=a.forwardRef((e,t)=>{let{className:r,type:a,...o}=e;return(0,n.jsx)("input",{type:a,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...o})});o.displayName="Input"},82012:function(e,t,r){"use strict";r.d(t,{J2:function(){return i},xo:function(){return l},yk:function(){return d}});var n=r(57437),a=r(2265),s=r(57427),o=r(22169);let i=s.fC,l=s.xz;s.ee;let d=a.forwardRef((e,t)=>{let{className:r,align:a="center",sideOffset:i=4,...l}=e;return(0,n.jsx)(s.h_,{children:(0,n.jsx)(s.VY,{ref:t,align:a,sideOffset:i,className:(0,o.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...l})})});d.displayName=s.VY.displayName},62677:function(e,t,r){"use strict";r.d(t,{_v:function(){return c},aJ:function(){return d},pn:function(){return i},u:function(){return l}});var n=r(57437),a=r(2265),s=r(38152),o=r(22169);let i=s.zt,l=s.fC,d=s.xz,c=a.forwardRef((e,t)=>{let{className:r,sideOffset:a=4,...i}=e;return(0,n.jsx)(s.VY,{ref:t,sideOffset:a,className:(0,o.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...i})});c.displayName=s.VY.displayName},31548:function(e,t,r){"use strict";r.d(t,{Q7:function(){return i},Vj:function(){return s},il:function(){return l},rP:function(){return o},yd:function(){return d}});var n=r(18157),a=r(84971);let s=async(e,t,r)=>{let s={$add:{},$set:{},$clear:{}};for(let a of e.fields)if(a.name in t||a.is_system_field){if("relation"===a.type||"media"===a.type){var o,i;if(r){if(null===t[a.name]){s.$clear[a.name]=!0;continue}if(t[a.name].$nochange)continue;if(!(0,n.EC)(a.relation)){s.$set[a.name]=t[a.name];continue}t[a.name].$add&&(s.$add[a.name]=t[a.name].$add),t[a.name].$clear&&(s.$clear[a.name]=t[a.name].$clear);continue}if(null==t?void 0:null===(o=t[a.name])||void 0===o?void 0:o.$add){s[a.name]=t[a.name].$add;continue}if(null==t?void 0:null===(i=t[a.name])||void 0===i?void 0:i.$clear){delete s[a.name];continue}}s[a.name]=t[a.name]}return 0===Object.keys(s.$add).length&&delete s.$add,0===Object.keys(s.$set).length&&delete s.$set,0===Object.keys(s.$clear).length&&delete s.$clear,r?await (0,a.qb)("/content/".concat(e.name,"/").concat(r),s):await (0,a.SO)("/content/".concat(e.name),s)},o=e=>{let t={};return(null==e?void 0:e.limit)&&(t.limit=e.limit),(null==e?void 0:e.page)&&(t.page=e.page),(null==e?void 0:e.sort)&&(t.sort=e.sort),(null==e?void 0:e.select)&&(t.select=e.select),(null==e?void 0:e.filter)&&(t.filter=JSON.stringify(e.filter)),new URLSearchParams(t).toString()},i=async(e,t)=>{if(!e)throw Error("Schema name is required");let r={};(null==t?void 0:t.limit)&&(r.limit=t.limit),(null==t?void 0:t.page)&&(r.page=t.page),(null==t?void 0:t.sort)&&(r.sort=t.sort),(null==t?void 0:t.select)&&(r.select=t.select),(null==t?void 0:t.filter)&&(r.filter=JSON.stringify(t.filter));let n=Object.keys(r).length>0?"?"+o(t):"";return(0,a.dX)("/content/".concat(e).concat(n))},l=async(e,t,r)=>{let n=(null==r?void 0:r.length)?"?select=".concat(r.join(",")):"";return(0,a.dX)("/content/".concat(e.name,"/").concat(t).concat(n))},d=async(e,t)=>(0,a.HG)("/content/".concat(e,"/").concat(t))},51919:function(e,t,r){"use strict";r.d(t,{Hl:function(){return a}});let n={on(e,t){"undefined"!=typeof document&&document.addEventListener(e,e=>t(null==e?void 0:e.detail))},dispatch(e,t){"undefined"!=typeof document&&document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove(e,t){"undefined"!=typeof document&&document.removeEventListener(e,t)}};t.ZP=n;let a=e=>{n.dispatch("network-error",e)}},97081:function(e,t,r){"use strict";r.d(t,{Qs:function(){return a},_v:function(){return n},rV:function(){return s}});let n=e=>new Promise(t=>setTimeout(t,e)),a=e=>{let t=e.toLowerCase().split(" ");for(let e=0;e<t.length;e++)t[e]=t[e].charAt(0).toUpperCase()+t[e].substring(1);return t.join(" ")},s=e=>a(e.replace(/[-_]/g," "))},27453:function(e,t,r){"use strict";r.d(t,{Vp:function(){return s},h4:function(){return i},vU:function(){return o}});var n=r(18009);let a=(e,t)=>{(0,n.ZP)(e,{position:"top-center"})},s=(e,t)=>{n.ZP.success(e,{position:"top-center"})},o=(e,t)=>{n.ZP.error(e,{position:"top-center"})},i={info:a,success:s,error:o,warning:(e,t)=>{a(e,t)}}},84971:function(e,t,r){"use strict";r.d(t,{HG:function(){return p},SO:function(){return f},dX:function(){return u},f1:function(){return c},qb:function(){return m}});var n=r(98955),a=r(33108),s=r(51919),o=r(27453);let i=(e,t)=>{let r=n.Z.get(a.B$),s={"Content-Type":"application/json;charset=utf-8",...null!=e?e:{}};return t instanceof FormData&&delete s["Content-Type"],r&&(s.Authorization="Bearer ".concat(r)),s},l=function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"string"==typeof e?e:null!==(t=e.message)&&void 0!==t?t:r},d=async(e,t,r,n)=>{var d,c,u;let f=null,m={method:e,mode:"cors",cache:"no-cache",credentials:"same-origin",headers:i(null!==(d=null==n?void 0:n.headers)&&void 0!==d?d:{},r),redirect:"follow",referrerPolicy:"strict-origin-when-cross-origin"};r&&(r instanceof FormData?m.body=r:m.body=JSON.stringify(r));try{if(t.startsWith("http://")||t.startsWith("https://")||(t=a.N9+t),!(f=await fetch(t,m)).ok){let e=null!==(c=f.statusText)&&void 0!==c?c:"Network response was not ok";try{let t=await f.json();e=l(t.error,e)}catch(e){}throw Error(e)}let e=await f.json();if(e.error)throw Error(l(e.error));return null!==(u=e.data)&&void 0!==u?u:e}catch(t){console.error(t);let e="";throw(null==n?void 0:n.disableErrorNotification)||o.h4.error(l(t.message,"An error occurred. Please try again later.")),t instanceof Error&&(e=t.message),e.includes("Failed to fetch")&&(0,s.Hl)("An error occurred. Please try again later."),Error(e)}},c=e=>{var t;let r=(null!==(t=e.message)&&void 0!==t?t:"").toLocaleLowerCase();return r.includes("401")||r.includes("unauthorized")},u=async(e,t)=>await d("GET",e,null,t),f=async(e,t,r)=>await d("POST",e,t,r),m=async(e,t,r)=>await d("PUT",e,t,r),p=async(e,t,r)=>await d("DELETE",e,t,r)},90688:function(e,t,r){"use strict";r.d(t,{Rd:function(){return i},cY:function(){return s},jh:function(){return l},x$:function(){return o},xv:function(){return a}});var n=r(84971);let a=async()=>(0,n.dX)("/role"),s=async e=>{var t;if(!e)return null;let r=await (0,n.dX)("/role/".concat(e));return r.permissions=(null!==(t=r.permissions)&&void 0!==t?t:[]).map(e=>e.resource),r},o=async(e,t)=>(t||(delete e.$add,delete e.$clear),t?await (0,n.qb)("/role/".concat(t),e):await (0,n.SO)("/role",e)),i=e=>(0,n.HG)("/role/".concat(e)),l=async()=>c(d(await (0,n.dX)("/role/resources"))),d=e=>e.filter(e=>{var t;return!e.whitelist&&((null==e?void 0:null===(t=e.resources)||void 0===t?void 0:t.length)&&(e.resources=d(e.resources)),!0)}),c=e=>e.filter(e=>{var t,r;return(!e.group||null!=e&&null!==(t=e.resources)&&void 0!==t&&!!t.length)&&((null==e?void 0:null===(r=e.resources)||void 0===r?void 0:r.length)&&(e.resources=c(e.resources)),!0)})},33108:function(e,t,r){"use strict";r.d(t,{N9:function(){return u},B$:function(){return f},MJ:function(){return d},gk:function(){return o},aD:function(){return m}});var n,a,s=r(30248);let o=s.z.object({id:s.z.number()}),i=s.z.array(o),l=s.z.object({$nochange:s.z.boolean().optional(),$add:s.z.array(o).optional(),$clear:s.z.array(o).optional()}),d=s.z.union([i,l]);var c=r(49079);let u=null!==(n=c.env.NEXT_PUBLIC_API_BASE_URI)&&void 0!==n?n:"/api",f=null!==(a=c.env.NEXT_PUBLIC_COOKIE_NAME)&&void 0!==a?a:"token",m=["/login/","/register/","/activate/","/setup/"]},22169:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(75504),a=r(51367);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}}},function(e){e.O(0,[310,637,872,792,571,32,732,152,147,365,750,271,971,69,744],function(){return e(e.s=73421)}),_N_E=e.O()}]);