(function(){"use strict";var e={4557:function(e,n,t){var o=t(5130),l=t(6768);function u(e,n,t,o,u,a){const i=(0,l.g2)("HelloWorld");return(0,l.uX)(),(0,l.Wv)(i,{msg:"Welcome to Your Vue.js App"})}var a=t(4232),i=t(144),r=t(2582);const c=e=>((0,l.Qi)("data-v-57af97bc"),e=e(),(0,l.jt)(),e),p=c((()=>(0,l.Lk)("br",null,null,-1))),v=c((()=>(0,l.Lk)("br",null,null,-1))),d=c((()=>(0,l.Lk)("br",null,null,-1))),f=["src"];var b={__name:"HelloWorld",setup(e){const n=(0,i.KR)(""),t=(0,i.KR)(!0),u=(0,i.KR)(!0),c=(0,i.KR)(!0),b=(0,i.KR)(!0),s=(0,i.KR)(10),h=(0,i.KR)(10),k=(0,i.KR)("jpg/jpeg/png/webp/bmp/heic/livp"),m=(0,i.KR)("jpg/jpeg/png/webp/bmp/heic/livp"),y=(0,i.KR)("https://test.yun.139.com/viewtest/ai-helper/"),g=(0,i.KR)("https://img1.baidu.com/it/u=1965663592,580944689&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1712077200&t=dbdc0da29ffc3858139a0c988c04a14a");let L;function w(){window.open(y.value)}function x(){"undefined"!=typeof nativeAbility&&(n.value=nativeAbility.getLoginInfo())}function O(){let e=JSON.stringify({action:"老骨头生成",categoryParam:{cloudPhotoSize:Math.ceil(1024*h.value*1024),localPhotoSize:Math.ceil(1024*s.value*1024),cloudPhotoFormat:m.value,localPhotoFormat:k.value,allPhoto:t.value,personPhoto:u.value,thingPhoto:c.value,locationPhoto:b.value}});console.log(e),"undefined"!=typeof nativeAbility&&nativeAbility.selectPhoto(r.o4.encode(e))}return window.hcy_getLocalSSOTokenCallback=function(e){alert("token="+e)},window.selectPhotoCallback=function(e){let n=JSON.parse(r.o4.decode(e));console.log("selectPhotoCallback,obj="+JSON.stringify(n)),n.url?g.value=n.url:n.data&&(0==n.index?L=n.data:L+=n.data,n.index==n.total-1&&(g.value=n.photoFormat+L))},(e,i)=>((0,l.uX)(),(0,l.CE)("div",null,[(0,l.Lk)("div",null,[(0,l.Lk)("button",{onClick:x},"获取token")]),(0,l.Lk)("div",null,(0,a.v_)(n.value),1),(0,l.Lk)("div",null,[(0,l.eW)(" url"),(0,l.bo)((0,l.Lk)("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=e=>y.value=e)},null,512),[[o.Jo,y.value]]),p,(0,l.Lk)("button",{onClick:w},"打开新window")]),(0,l.Lk)("div",null,[(0,l.bo)((0,l.Lk)("input",{type:"checkbox","onUpdate:modelValue":i[1]||(i[1]=e=>t.value=e)},null,512),[[o.lH,t.value]]),(0,l.eW)("全部 "),(0,l.bo)((0,l.Lk)("input",{type:"checkbox","onUpdate:modelValue":i[2]||(i[2]=e=>u.value=e)},null,512),[[o.lH,u.value]]),(0,l.eW)("人物 "),(0,l.bo)((0,l.Lk)("input",{type:"checkbox","onUpdate:modelValue":i[3]||(i[3]=e=>c.value=e)},null,512),[[o.lH,c.value]]),(0,l.eW)("事物 "),(0,l.bo)((0,l.Lk)("input",{type:"checkbox","onUpdate:modelValue":i[4]||(i[4]=e=>b.value=e)},null,512),[[o.lH,b.value]]),(0,l.eW)("地点 ")]),(0,l.Lk)("div",null,[(0,l.eW)(" 本地相册最大值mb"),(0,l.bo)((0,l.Lk)("input",{type:"number","onUpdate:modelValue":i[5]||(i[5]=e=>s.value=e)},null,512),[[o.Jo,s.value]]),v,(0,l.eW)(" 云相册最大值mb"),(0,l.bo)((0,l.Lk)("input",{type:"number","onUpdate:modelValue":i[6]||(i[6]=e=>h.value=e)},null,512),[[o.Jo,h.value]])]),(0,l.Lk)("div",null,[(0,l.eW)(" 本地相册限制格式"),(0,l.bo)((0,l.Lk)("input",{type:"text","onUpdate:modelValue":i[7]||(i[7]=e=>k.value=e)},null,512),[[o.Jo,k.value]]),d,(0,l.eW)(" 云相册限制格式b"),(0,l.bo)((0,l.Lk)("input",{type:"text","onUpdate:modelValue":i[8]||(i[8]=e=>m.value=e)},null,512),[[o.Jo,m.value]])]),(0,l.Lk)("div",null,[(0,l.Lk)("button",{onClick:O},"选择相片")]),(0,l.Lk)("div",null,[(0,l.Lk)("img",{src:g.value,style:{width:"200px"}},null,8,f)])]))}},s=t(1241);const h=(0,s.A)(b,[["__scopeId","data-v-57af97bc"]]);var k=h,m={name:"App",components:{HelloWorld:k}};const y=(0,s.A)(m,[["render",u]]);var g=y;(0,o.Ef)(g).mount("#app")}},n={};function t(o){var l=n[o];if(void 0!==l)return l.exports;var u=n[o]={exports:{}};return e[o].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,o,l,u){if(!o){var a=1/0;for(p=0;p<e.length;p++){o=e[p][0],l=e[p][1],u=e[p][2];for(var i=!0,r=0;r<o.length;r++)(!1&u||a>=u)&&Object.keys(t.O).every((function(e){return t.O[e](o[r])}))?o.splice(r--,1):(i=!1,u<a&&(a=u));if(i){e.splice(p--,1);var c=l();void 0!==c&&(n=c)}}return n}u=u||0;for(var p=e.length;p>0&&e[p-1][2]>u;p--)e[p]=e[p-1];e[p]=[o,l,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var l,u,a=o[0],i=o[1],r=o[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(l in i)t.o(i,l)&&(t.m[l]=i[l]);if(r)var p=r(t)}for(n&&n(o);c<a.length;c++)u=a[c],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(p)},o=self["webpackChunkaihelper"]=self["webpackChunkaihelper"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(4557)}));o=t.O(o)})();
//# sourceMappingURL=app.df0d260f.js.map