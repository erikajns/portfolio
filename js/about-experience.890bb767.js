(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about-experience"],{"1dde":function(e,t,n){var c=n("d039"),r=n("b622"),o=n("2d00"),i=r("species");e.exports=function(e){return o>=51||!c((function(){var t=[],n=t.constructor={};return n[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"99af":function(e,t,n){"use strict";var c=n("23e7"),r=n("da84"),o=n("d039"),i=n("e8b5"),a=n("861d"),u=n("7b0b"),b=n("07fa"),f=n("8418"),s=n("65f0"),d=n("1dde"),l=n("b622"),p=n("2d00"),j=l("isConcatSpreadable"),O=9007199254740991,m="Maximum allowed index exceeded",g=r.TypeError,h=p>=51||!o((function(){var e=[];return e[j]=!1,e.concat()[0]!==e})),v=d("concat"),x=function(e){if(!a(e))return!1;var t=e[j];return void 0!==t?!!t:i(e)},w=!h||!v;c({target:"Array",proto:!0,forced:w},{concat:function(e){var t,n,c,r,o,i=u(this),a=s(i,0),d=0;for(t=-1,c=arguments.length;t<c;t++)if(o=-1===t?i:arguments[t],x(o)){if(r=b(o),d+r>O)throw g(m);for(n=0;n<r;n++,d++)n in o&&f(a,d,o[n])}else{if(d>=O)throw g(m);f(a,d++,o)}return a.length=d,a}})},a56e:function(e,t,n){"use strict";n("e70c")},e6b5:function(e,t,n){"use strict";n.r(t);n("99af");var c=n("7a23"),r={class:"about-more page container animate__animated animate__fadeInLeftBig"},o={class:"about-more__experience-detail"},i=Object(c["i"])("Back"),a={class:"about-more__experience-image"},u=["src"];function b(e,t,n,b,f,s){var d=Object(c["B"])("font-awesome-icon"),l=Object(c["B"])("router-link");return Object(c["u"])(),Object(c["f"])("div",r,[Object(c["g"])("div",o,[Object(c["g"])("h1",null,Object(c["E"])(this.companyName),1),Object(c["g"])("h3",null,Object(c["E"])(this.jobTitle),1),(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(f.experienceInfo,(function(e,t){return Object(c["u"])(),Object(c["f"])("div",{key:t},[Object(c["g"])("p",null,[Object(c["j"])(d,{class:"icon",icon:["fas","code-commit"]}),Object(c["i"])(" "+Object(c["E"])(e),1)])])})),128)),Object(c["j"])(l,{to:"/experience"},{default:Object(c["H"])((function(){return[i]})),_:1})]),Object(c["g"])("div",a,[Object(c["g"])("img",{src:"".concat(f.publicPath).concat(this.experienceImage)},null,8,u)])])}var f={name:"about-experience-page",data:function(){return{experienceInfo:this.$route.query.experience,publicPath:"/portfolio/",experienceImage:this.$route.query.image,companyName:this.$route.query.company,jobTitle:this.$route.query.position}}},s=(n("a56e"),n("6b0d")),d=n.n(s);const l=d()(f,[["render",b]]);t["default"]=l},e70c:function(e,t,n){}}]);
//# sourceMappingURL=about-experience.890bb767.js.map