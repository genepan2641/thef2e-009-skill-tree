webpackJsonp([1],{CwSp:function(t,e){},DUxp:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),l=i("fZjL"),n=i.n(l),r=i("gRE1"),a=i.n(r),c={props:{currentRank:{type:String}},data:function(){return{descPair:{noob:'Welcome aboard. Your mission is: <span class="rank__desc-remark">Collect the resources and learn the skills to upgrade the ship.</span> Good luck, captain!',beginner:'Congradulations! You become the <span class="rank__desc-remark">“Front-end Beginnner”</span>. Keep searching the resources to upgrade to the next level.',developer:'You’re doing well! Now you’re a <span class="rank__desc-remark">“Front-end Developer”</span>. It’s close to complete the upgrading program. Next level: Front-end Master.',master:'Excellent! You’re a <span class="rank__desc-remark">“Front-end Master”</span> now. But a new galary was just detected by the system. Captain, make your choice.'}}},filters:{capitalize:function(t){return t.toString().toUpperCase()}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rank"},[i("span",{staticClass:"rank__tag"},[t._v("CURRENT RANK")]),t._v(" "),i("br"),t._v(" "),i("h2",{staticClass:"rank__title"},[t._v("FRONT-END")]),t._v(" "),i("br"),t._v(" "),i("h2",{staticClass:"rank__title"},[t._v(t._s(t._f("capitalize")(t.currentRank)))]),t._v(" "),i("div",{staticClass:"rank__ship-wrapper"},t._l(Object.keys(t.descPair),function(e,s){return i("img",{directives:[{name:"show",rawName:"v-show",value:t.currentRank==e,expression:"currentRank == img"}],key:e,staticClass:"rank__ship",attrs:{index:s,src:"static/img/img-ship-"+e+"@2x.png",alt:""}})})),t._v(" "),i("div",{staticClass:"rank__desc"},[i("span",{domProps:{innerHTML:t._s(t.descPair[t.currentRank])}})])])},staticRenderFns:[]};var u=i("VU/8")(c,o,!1,function(t){i("CwSp")},null,null).exports,d={props:{disabled:{type:Boolean},skill:{type:Object},currentSkill:{type:Object},icon:{type:String},requireStatus:{type:Object,default:function(){return{}}},optionalStatus:{type:Object,default:function(){return{}}}},computed:{totalRequire:function(){return n()(this.skill.require).length},doneRequire:function(){return a()(this.skill.require).filter(function(t){return 1==t.done}).length},totalOptional:function(){return n()(this.skill.optional).length},doneOptional:function(){return a()(this.skill.optional).filter(function(t){return 1==t.done}).length}},methods:{clickOnItem:function(){this.disabled||this.$emit("click-on-item",this.skill)},isSelected:function(){return this.skill.title==this.currentSkill.title},isPartialDone:function(){return a()(this.skill.require).concat(a()(this.skill.optional)).some(function(t){return t.done})},isAllDone:function(){return a()(this.skill.require).concat(a()(this.skill.optional)).every(function(t){return t.done})}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skill-set__item",class:{"skill-set__item--is-disabled":t.disabled,"skill-set__item--is-selected":t.isSelected(),"skill-set__item--is-done-require":t.isPartialDone(),"skill-set__item--is-all-done":t.isAllDone()}},[i("div",{staticClass:"skill-set__icon-wrapper",on:{click:t.clickOnItem}},[i("i",{staticClass:"material-icons"},[t._v(t._s(t.icon))])]),t._v(" "),i("div",{staticClass:"skill-set__number text-center"},[i("i",{staticClass:"material-icons "},[t._v("settings")]),t._v(" "),i("span",{},[t._v(t._s(t.doneRequire)+"/"+t._s(t.totalRequire))])]),t._v(" "),i("div",{staticClass:"skill-set__number text-center"},[i("i",{staticClass:"material-icons "},[t._v("filter_tilt_shift")]),t._v(" "),i("span",{},[t._v(t._s(t.doneOptional)+"/"+t._s(t.totalOptional))])])])},staticRenderFns:[]};var p={name:"App",data:function(){return{currentSkill:{},basicSkills:{title:"BASIC SKILLS",icon:"category",require:{html:{title:"Learn HTML",done:!1},css:{title:"Basics of CSS",done:!1},js:{title:"Basics of Javascript",done:!1}},optional:{}},basicTools:{title:"BASIC TOOLS",icon:"build",require:{git:{title:"Git - Version Control",done:!1},terminal:{title:"Basic Terminal Usage",done:!1},textEditor:{title:"Text Editor",done:!1},researching:{title:"A Heart of Researching",done:!1}},optional:{}},cssFrameWork:{title:"CSS FRAMEWORK",icon:"flip_to_front",require:{bootstrap:{title:"Bootstrap",done:!1}},optional:{uiKit:{title:"UIKit",done:!1},foundation:{title:"Foundation",done:!1},semanticUI:{title:"Semantic UI",done:!1}}},cssPreprocessors:{title:"CSS PREPROCESSORS",icon:"view_quilt",require:{sass:{title:"Sass",done:!1},postCss:{title:"PostCss",done:!1}},optional:{less:{title:"Less",done:!1},stylus:{title:"Stylus",done:!1}}},cssArch:{title:"CSS ARCHITECHTURE",icon:"developer_board",require:{oocss:{title:"OOCSS",done:!1}},optional:{smacss:{title:"SMACCSS",done:!1},bem:{title:"BEM",done:!1}}},cssSkill:{title:"CSS SKILLS",icon:"devices",require:{responsive:{title:"Responsive",done:!1},flexbox:{title:"Flexbox",done:!1}},optional:{}},cssMastery:{title:"CSS MASTERY",icon:"widgets",require:{},optional:{gridLayout:{title:"Grid Layout",done:!1},animation:{title:"Animation",done:!1},transform:{title:"Transform 2D, 3D",done:!1}}},basicDom:{title:"BASIC DOM",icon:"hdr_strong",require:{},optional:{jQuery:{title:"jQuery",done:!1}}},webDrawing:{title:"WEB DRAWING",icon:"gradient",require:{},optional:{svg:{title:"SVG",done:!1},canvas:{title:"Canvas",done:!1},d3:{title:"D3.js",done:!1}}},jsSkill:{title:"JAVASCRIPT SKILLS",icon:"format_quote",require:{es6:{title:"ES6",done:!1}},optional:{}},jsFramework:{title:"JAVASCRIPT FRAMEWORK",icon:"developer_mode",require:{vue:{title:"Vue.js",done:!1},angular:{title:"Angular",done:!1},react:{title:"React.js",done:!1}},optional:{}},jsPreprocessors:{title:"JAVASCRIPT PREPROCESSORS",icon:"nfc",require:{},optional:{typeScript:{title:"TypeScript",done:!1},babel:{title:"Babel",done:!1},coffeeScript:{title:"CoffeeScript",done:!1}}},packageManagers:{title:"PACKAGE MANAGERS",icon:"device_hub",require:{npm:{title:"NPM",done:!1},yarn:{title:"YARN",done:!1}},optional:{bower:{title:"Bower",done:!1}}},taskRunner:{title:"TASK RUNNER",icon:"import_contacts",require:{npm:{title:"npm scripts",done:!1},gulp:{title:"gulp",done:!1}},optional:{grunt:{title:"grunt",done:!1}}},buildTools:{title:"BUILD TOOLS",icon:"table_chart",require:{webpack:{title:"Webpack",done:!1}},optional:{parcel:{title:"Parcel",done:!1}}}}},computed:{currentRank:function(){return{0:"noob",1:"beginner",2:"developer",3:"master"}[[this.enableCss,this.enableJs,this.enableManagers].filter(function(t){return 1==t}).length]},enableCss:function(){return a()(this.basicSkills.require).concat(a()(this.basicTools.require)).every(function(t){return 1==t.done})},enableJs:function(){return a()(this.cssFrameWork.require).concat(a()(this.cssPreprocessors.require)).concat(a()(this.cssArch.require)).concat(a()(this.cssSkill.require)).concat(a()(this.cssMastery.require)).every(function(t){return 1==t.done})},enableManagers:function(){return a()(this.basicDom.require).concat(a()(this.webDrawing.require)).concat(a()(this.jsSkill.require)).concat(a()(this.jsFramework.require)).concat(a()(this.jsPreprocessors.require)).every(function(t){return 1==t.done})},basic:function(){return[this.basicSkills,this.basicTools]},cssLine1:function(){return[this.cssFrameWork,this.cssPreprocessors,this.cssArch]},cssLine2:function(){return[this.cssSkill,this.cssMastery]},jsLine1:function(){return[this.basicDom,this.webDrawing]},jsLine2:function(){return[this.jsSkill,this.jsFramework,this.jsPreprocessors]},managersLine:function(){return[this.packageManagers,this.taskRunner,this.buildTools]},showDetailRequire:function(){return!this.isEmpty(this.currentSkill.require)},showDetailOptional:function(){return!this.isEmpty(this.currentSkill.optional)}},methods:{clickSkillItem:function(t){this.currentSkill=t},toggleSkill:function(t,e,i){this.currentSkill[i][e].done=!this.currentSkill[i][e].done},isEmpty:function(t){return 0==n()(t).length},isSkillSelected:function(t){return t.done}},components:{Rank:u,SkillItem:i("VU/8")(d,k,!1,function(t){i("cYvO")},null,null).exports}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"app-wrapper gradient-bg"},[i("div",{staticClass:"flex-box"},[i("div",{staticClass:"title-col"},[i("h1",{staticClass:"app__title"},[t._v("FRONT-END SKILL TREE")]),t._v(" "),i("rank",{attrs:{"current-rank":t.currentRank}})],1),t._v(" "),i("div",{staticClass:"tree-col"},[i("div",{staticClass:"basic-skill skill-set flex-box"},[t._m(0),t._v(" "),i("div",{staticClass:"skill-set-wrapper"},[i("div",{staticClass:"skill-set-row flex-box"},t._l(t.basic,function(e,s){return i("skill-item",{key:s,attrs:{icon:e.icon,disabled:!1,skill:e,"current-skill":t.currentSkill},on:{"click-on-item":t.clickSkillItem}})}))])]),t._v(" "),i("div",{staticClass:"css-skill skill-set flex-box",class:{"skill-set--disabled":!t.enableCss}},[t._m(1),t._v(" "),i("div",{staticClass:"skill-set-wrapper"},[i("div",{staticClass:"skill-set-row flex-box"},t._l(t.cssLine1,function(e,s){return i("skill-item",{key:s,attrs:{icon:e.icon,disabled:!t.enableCss,skill:e,"current-skill":t.currentSkill},on:{"click-on-item":t.clickSkillItem}})})),t._v(" "),i("div",{staticClass:"skill-set-row flex-box"},t._l(t.cssLine2,function(e,s){return i("skill-item",{key:s,attrs:{icon:e.icon,disabled:!t.enableCss,skill:e,"current-skill":t.currentSkill},on:{"click-on-item":t.clickSkillItem}})}))])]),t._v(" "),i("div",{staticClass:"js-skill skill-set flex-box",class:{"skill-set--disabled":!t.enableJs}},[t._m(2),t._v(" "),i("div",{staticClass:"skill-set-wrapper"},[i("div",{staticClass:"skill-set-row flex-box"},t._l(t.jsLine1,function(e,s){return i("skill-item",{key:s,attrs:{icon:e.icon,disabled:!t.enableJs,skill:e,"current-skill":t.currentSkill},on:{"click-on-item":t.clickSkillItem}})})),t._v(" "),i("div",{staticClass:"skill-set-row flex-box"},t._l(t.jsLine2,function(e,s){return i("skill-item",{key:s,attrs:{icon:e.icon,disabled:!t.enableJs,skill:e,"current-skill":t.currentSkill},on:{"click-on-item":t.clickSkillItem}})}))])]),t._v(" "),i("div",{staticClass:"managers-skill skill-set flex-box",class:{"skill-set--disabled":!t.enableManagers}},[t._m(3),t._v(" "),i("div",{staticClass:"skill-set-wrapper"},[i("div",{staticClass:"skill-set-row flex-box"},t._l(t.managersLine,function(e,s){return i("skill-item",{key:s,attrs:{icon:e.icon,disabled:!t.enableManagers,skill:e,"current-skill":t.currentSkill},on:{"click-on-item":t.clickSkillItem}})}))])])]),t._v(" "),i("div",{staticClass:"detail-col",staticStyle:{color:"white"}},[t.isEmpty(t.currentSkill)?t._e():i("div",{staticClass:"skill-detail"},[i("div",{staticClass:"skill-detail__up"},[i("i",{staticClass:"material-icons"},[t._v(t._s(t.currentSkill.icon))]),t._v(" "),i("h3",{staticClass:"subtitle"},[t._v(t._s(t.currentSkill.title))])]),t._v(" "),i("div",{staticClass:"skill-detail__down"},[i("div",{staticClass:"skill-detail__down-wrapper"},[t.showDetailRequire?i("div",[t._m(4),t._v(" "),t._l(t.currentSkill.require,function(e,s,l){return i("button",{key:""+s+l,staticClass:"skill-detail__skill-btn",class:{"skill-detail__skill-btn--is-selected":t.isSkillSelected(e)},on:{click:function(i){t.toggleSkill(e,s,"require")}}},[t._v(t._s(e.title)+"\n                ")])})],2):t._e(),t._v(" "),t.showDetailOptional?i("div",[t._m(5),t._v(" "),t._l(t.currentSkill.optional,function(e,s,l){return i("button",{key:""+s+l,staticClass:"skill-detail__skill-btn",class:{"skill-detail__skill-btn--is-selected":t.isSkillSelected(e)},on:{click:function(i){t.toggleSkill(e,s,"optional")}}},[t._v(t._s(e.title)+"\n                ")])})],2):t._e()])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rank-wrapper"},[e("img",{staticClass:"rank-img",attrs:{src:"static/img/img-planet-basics@2x.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rank-wrapper"},[e("img",{staticClass:"rank-img",attrs:{src:"static/img/img-planet-css@2x.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rank-wrapper"},[e("img",{staticClass:"rank-img",attrs:{src:"static/img/img-planet-js@2x.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rank-wrapper"},[e("img",{staticClass:"rank-img",attrs:{src:"static/img/img-planet-managers@2x.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w100 text-center"},[e("i",{staticClass:"material-icons"},[this._v("settings")]),this._v(" "),e("p",{staticClass:"paragraph"},[this._v("RECOMMENDED")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w100 text-center"},[e("i",{staticClass:"material-icons"},[this._v("filter_tilt_shift")]),this._v(" "),e("p",{staticClass:"paragraph"},[this._v("OPTIONAL")])])}]};var m=i("VU/8")(p,_,!1,function(t){i("DUxp")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:m},template:"<App/>"})},cYvO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.11f3aca78566c013c26e.js.map