import{createElement as e}from"react";import{createStyled as t}from"@stitches/react";const{styled:i}=t({tokens:{space:{$0:"0px",$1:"4px"},sizes:{$0:"16px",$1:"32px"},fonts:{body:"system-ui, sans-serif",heading:'"urw-din",system-ui,-apple-system,"Helvetica Neue",sans-serif',monospace:"Menlo, monospace"},fontSizes:{$sm:"11px",$md:"13px",$lg:"15px",$xl:"17px"},radii:{$1:"3px",$2:"5px",$3:"7px"},colors:{$primary:"papayawhip",text:"#000",background:"#fff",primary:"#0e66b3",secondary:"red",tonal:"#b3b1b1"}},utils:{p:e=>({paddingTop:e,paddingBottom:e,paddingLeft:e,paddingRight:e}),pt:e=>({paddingTop:e}),pr:e=>({paddingRight:e}),pb:e=>({paddingBottom:e}),pl:e=>({paddingLeft:e}),px:e=>({paddingLeft:e,paddingRight:e}),py:e=>({paddingTop:e,paddingBottom:e}),m:e=>({marginTop:e,marginBottom:e,marginLeft:e,marginRight:e}),mt:e=>({marginTop:e}),mr:e=>({marginRight:e}),mb:e=>({marginBottom:e}),ml:e=>({marginLeft:e}),mx:e=>({marginLeft:e,marginRight:e}),my:e=>({marginTop:e,marginBottom:e})}}),p=t=>{let{options:i,placeholder:p,ref:a}=t,n=function(e,t){if(null==e)return{};var i,p,a={},n=Object.keys(e);for(p=0;p<n.length;p++)t.indexOf(i=n[p])>=0||(a[i]=e[i]);return a}(t,["options","placeholder","name","ref"]);return e("select",Object.assign({ref:a},n),p&&e("option",{value:""},p),i.map(({label:t,value:i})=>e("option",{key:i,value:i},t)))};p.displayName="Select",i("div",{color:"red",fontSize:"14px"});const a=t=>e("div",null,t.children);export{a as Box,p as Select};
//# sourceMappingURL=index.modern.js.map
