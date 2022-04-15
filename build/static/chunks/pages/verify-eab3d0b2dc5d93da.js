(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{94669:function(e,n,t){"use strict";var r=t(88169),o=t(85893);n.Z=(0,r.Z)((0,o.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},44267:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var r=t(87462),o=t(63366),i=t(67294),s=t(86010),c=t(27192),a=t(11496),u=t(33616),d=t(28979);function l(e){return(0,d.Z)("MuiCardContent",e)}(0,t(76087).Z)("MuiCardContent",["root"]);var f=t(85893);const h=["className","component"],x=(0,a.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var Z=i.forwardRef((function(e,n){const t=(0,u.Z)({props:e,name:"MuiCardContent"}),{className:i,component:a="div"}=t,d=(0,o.Z)(t,h),Z=(0,r.Z)({},t,{component:a}),v=(e=>{const{classes:n}=e;return(0,c.Z)({root:["root"]},l,n)})(Z);return(0,f.jsx)(x,(0,r.Z)({as:a,className:(0,s.Z)(v.root,i),ownerState:Z,ref:n},d))}))},66242:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(87462),o=t(63366),i=t(67294),s=t(86010),c=t(27192),a=t(11496),u=t(33616),d=t(55113),l=t(28979);function f(e){return(0,l.Z)("MuiCard",e)}(0,t(76087).Z)("MuiCard",["root"]);var h=t(85893);const x=["className","raised"],Z=(0,a.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({overflow:"hidden"})));var v=i.forwardRef((function(e,n){const t=(0,u.Z)({props:e,name:"MuiCard"}),{className:i,raised:a=!1}=t,d=(0,o.Z)(t,x),l=(0,r.Z)({},t,{raised:a}),v=(e=>{const{classes:n}=e;return(0,c.Z)({root:["root"]},f,n)})(l);return(0,h.jsx)(Z,(0,r.Z)({className:(0,s.Z)(v.root,i),elevation:a?8:void 0,ref:n,ownerState:l},d))}))},28581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verify",function(){return t(73047)}])},36881:function(e,n,t){"use strict";t.d(n,{A:function(){return c}});var r=t(85893),o=t(39187),i=t(11163),s=t(67294),c=function(e){var n=e.children,t=(0,o.a)(),c=(0,i.useRouter)(),a=(0,s.useState)(!1),u=a[0],d=a[1];return(0,s.useEffect)((function(){c.isReady&&(t.isAuthenticated?c.push("/"):d(!0))}),[c.isReady]),u?(0,r.jsx)(r.Fragment,{children:n}):null}},39187:function(e,n,t){"use strict";t.d(n,{a:function(){return i}});var r=t(67294),o=t(22754),i=function(){return(0,r.useContext)(o.Vo)}},73047:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r=t(85893),o=t(87357),i=t(94669),s=t(66242),c=t(44267),a=t(83321),u=t(27948),d=t(15861),l=t(39187),f=t(41664),h=t(11163),x=t(67294),Z=function(){var e=(0,x.useState)(!1),n=e[0],t=e[1],Z=(0,x.useState)(),v=Z[0],j=Z[1],m=(0,l.a)().verify,y=(0,h.useRouter)();return(0,x.useEffect)((function(){if(y.query.token){var e=y.query.token;t(!0),e&&m(e).then((function(e){t(!1),j(e)}))}else j({success:!1,error:"Invalid token"})}),[y.query.token]),(0,r.jsx)(s.Z,{sx:{width:500,boxShadow:12,my:1},children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(o.Z,{sx:{mb:2},children:(0,r.jsx)(f.default,{href:"/",passHref:!0,children:(0,r.jsx)(a.Z,{startIcon:(0,r.jsx)(i.Z,{}),children:"Back to site"})})}),(0,r.jsx)(u.Z,{children:(0,r.jsxs)(o.Z,{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",children:[(0,r.jsx)(d.Z,{variant:"h5",textAlign:"center",children:"Welcome to Petohub"}),(0,r.jsx)(d.Z,{variant:"body2",textAlign:"center",color:"text.secondary",children:"Verify your email to unlock your account"}),(0,r.jsx)(o.Z,{sx:{my:2},children:n?(0,r.jsx)(d.Z,{variant:"h6",children:"Verifying your account..."}):(null===v||void 0===v?void 0:v.success)?(0,r.jsxs)(o.Z,{textAlign:"center",children:[(0,r.jsx)(d.Z,{variant:"h6",color:"success.dark",children:null===v||void 0===v?void 0:v.data}),(0,r.jsx)(o.Z,{sx:{mt:1},width:"100%",children:(0,r.jsxs)(d.Z,{variant:"body2",textAlign:"center",color:"text.secondary",children:["You will need to",(0,r.jsx)(f.default,{href:"/login",passHref:!0,children:(0,r.jsx)(d.Z,{component:"a",fontWeight:"bold",fontSize:14,color:"primary.main",sx:{mx:.5},children:"Login"})}),"again to continue"]})})]}):(0,r.jsxs)(o.Z,{textAlign:"center",children:[(0,r.jsx)(d.Z,{variant:"h6",color:"error.dark",children:(null===v||void 0===v?void 0:v.error)||"Something went wrong"}),(0,r.jsx)(o.Z,{sx:{mt:1},width:"100%",children:(0,r.jsxs)(d.Z,{variant:"body2",textAlign:"center",color:"text.secondary",children:["Click",(0,r.jsx)(f.default,{href:"/",passHref:!0,children:(0,r.jsx)(d.Z,{component:"a",fontWeight:"bold",fontSize:14,color:"primary.main",sx:{mx:.5},children:"here"})}),"to go back to the site"]})})]})})]})})]})})},v=t(36881),j=t(9008),m=function(){return(0,r.jsxs)(o.Z,{width:"100%",display:"flex",justifyContent:"center",children:[(0,r.jsx)(j.default,{children:(0,r.jsx)("title",{children:"Petohub | Verify Account"})}),(0,r.jsx)(Z,{})]})};m.getLayout=function(e){return(0,r.jsx)(v.A,{children:e})};var y=m}},function(e){e.O(0,[206,774,888,179],(function(){return n=28581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);