webpackJsonp([1],Array(25).concat([function(e,t){e.exports=[{icon:"el-icon-menu",index:"zhjg",title:"智慧监管"},{icon:"el-icon-menu",index:"yryd",title:"一人一档"},{icon:"el-icon-date",index:"3",title:"微警务",subs:[{index:"wjw",title:"微警务"},{index:"wjw",title:"微警务"}]},{icon:"el-icon-star-on",index:"fxyp",title:"分析研判"},{icon:"el-icon-upload2",index:"znyj",title:"智能预警"}]},function(e,t,n){"use strict";n(59),n(60),n(61)},function(e,t,n){"use strict";var r=n(63);t.a=r.a},function(e,t,n){function r(e){n(89)}var s=n(3)(n(51),n(108),r,null,null);e.exports=s.exports},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(99),s=n.n(r),o=n(25),a=n.n(o);t.default={data:function(){return{menuItems:a.a,mode:"horizontal"}},components:{vMenu:s.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(95),s=n.n(r),o=n(97),a=n.n(o);t.default={components:{vHead:s.a,vSidebar:a.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(98),s=n.n(r),o=n(25),a=n.n(o);t.default={data:function(){return{menuItems:a.a}},components:{vMenu:s.a},computed:{onRoutes:function(){return this.$route.path.replace("/","")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["mode","menuItems"],computed:{onRoutes:function(){return this.$route.path.replace("/","")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["mode","menuItems"],methods:{onSelect:function(e){this.$router.push(e)}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{loginTitle:"苏州市公安局交警警务平台",copyRight:'<a href="http://10.35.243.54:88/sjjg">苏州市公安局交警警务平台</a> © 2016 苏州市公安局交通警察支队. 技术支持 <a href="http://www.cybertech.com.cn">苏州广达</a>',ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;t.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;localStorage.setItem("ms_username",t.ruleForm.username),t.$router.push("/home")})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}}}},function(e,t,n){"use strict";var r=n(85),s=(n.n(r),n(65));n.n(s)},function(e,t,n){"use strict";var r=n(1),s=n(71),o=n.n(s),a=n(86);n.n(a);r.default.use(o.a)},function(e,t,n){"use strict";var r=n(1),s=n(23),o=n.n(s),a=n(87);n.n(a);r.default.use(o.a)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=n(28),o=n.n(s),a=n(27);n(26);r.default.config.productionTip=!1,new r.default({el:"#app",router:a.a,template:"<App/>",components:{App:o.a}})},function(e,t,n){"use strict";var r=n(1),s=n(120),o=n(64),a=n(23),i=n.n(a);r.default.use(s.a);var u=(o.a,new s.a({routes:o.a}));u.beforeEach(function(e,t,n){i.a.LoadingBar.start(),e.meta.requireAuth?store.state.token?n():n({path:"/login",query:{redirect:e.fullPath}}):n()}),u.afterEach(function(){i.a.LoadingBar.finish(),window.scrollTo(0,0)}),t.a=u},function(e,t,n){"use strict";var r=n(100),s=n.n(r),o=n(96),a=n.n(o),i=n(101),u=(n.n(i),n(105)),c=n.n(u),l=n(104),d=n.n(l),v=n(103),m=n.n(v),f=n(102),p=n.n(f),_=n(106),h=n.n(_),b=[{path:"/",redirect:"/login"},{path:"/home",component:a.a,children:[{path:"/",redirect:"/welcome"},{path:"/welcome",redirect:"/zhjg"},{path:"/zhjg",component:c.a},{path:"/yryd",component:d.a},{path:"/wjw",component:m.a},{path:"/fxyp",component:p.a},{path:"/znyj",component:h.a}]},{path:"/login",name:"Login",component:s.a}];t.a=b},,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,function(e,t,n){function r(e){n(88)}var s=n(3)(n(52),n(107),r,"data-v-0798b2a1",null);e.exports=s.exports},function(e,t,n){function r(e){n(90)}var s=n(3)(n(53),n(111),r,"data-v-54521af3",null);e.exports=s.exports},function(e,t,n){function r(e){n(92)}var s=n(3)(n(54),n(117),r,"data-v-e1e3f910",null);e.exports=s.exports},function(e,t,n){var r=n(3)(n(55),n(109),null,null,null);e.exports=r.exports},function(e,t,n){var r=n(3)(n(56),n(110),null,null,null);e.exports=r.exports},function(e,t,n){function r(e){n(91)}var s=n(3)(n(57),n(116),r,"data-v-d6f0634e",null);e.exports=s.exports},function(e,t,n){function r(e){n(93)}var s=n(3)(n(58),n(119),r,"data-v-fbac005c",null);e.exports=s.exports},function(e,t,n){var r=n(3)(null,n(118),null,null,null);e.exports=r.exports},function(e,t,n){var r=n(3)(null,n(113),null,null,null);e.exports=r.exports},function(e,t,n){var r=n(3)(null,n(114),null,null,null);e.exports=r.exports},function(e,t,n){var r=n(3)(null,n(115),null,null,null);e.exports=r.exports},function(e,t,n){var r=n(3)(null,n(112),null,null,null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("v-menu",{attrs:{mode:"horizontal",menuItems:e.menuItems}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.onRoutes,mode:e.mode,"unique-opened":"",router:""}},[e._l(e.menuItems,function(t){return[t.subs?[n("el-submenu",{attrs:{index:t.index}},[n("template",{slot:"title"},[n("i",{class:t.icon}),e._v(e._s(t.title))]),e._v(" "),e._l(t.subs,function(t,r){return n("el-menu-item",{key:r,attrs:{index:t.index}},[e._v(e._s(t.title)+"\n        ")])})],2)]:[n("el-menu-item",{attrs:{index:t.index}},[n("i",{class:t.icon}),e._v(e._s(t.title)+"\n      ")])]]})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Menu",{attrs:{mode:"horizontal",theme:"light","active-name":e.onRoutes},on:{"on-select":e.onSelect}},[e._l(e.menuItems,function(t,r){return[t.subs?[n("Submenu",{attrs:{name:t.index}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"stats-bars"}}),e._v("\n          "+e._s(t.title)+"\n        ")],1),e._v(" "),e._l(t.subs,function(t,r){return n("Menu-item",{key:r,attrs:{name:t.index}},[e._v(e._s(t.title))])})],2)]:[n("Menu-item",{attrs:{name:t.index}},[n("Icon",{attrs:{type:"ios-paper"}}),e._v("\n        "+e._s(t.title)+"\n      ")],1)]]})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("v-head"),e._v(" "),n("v-sidebar"),e._v(" "),n("div",{staticClass:"content"},[n("transition",{attrs:{name:"move",mode:"out-in"}},[n("router-view")],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n  智能预警页面\n")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n  微警务页面\n")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n  一人一档页面\n")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n  智慧监管页面\n")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("header",{staticClass:"navbar"}),e._v(" "),n("main",{staticClass:"main"},[n("div",{staticClass:"login-wrap"},[n("div",{staticClass:"ms-title"},[e._v(e._s(e.loginTitle))]),e._v(" "),n("div",{staticClass:"ms-login"},[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"0px"}},[n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{placeholder:"用户名"},model:{value:e.ruleForm.username,callback:function(t){e.ruleForm.username=t},expression:"ruleForm.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submitForm("ruleForm")}},model:{value:e.ruleForm.password,callback:function(t){e.ruleForm.password=t},expression:"ruleForm.password"}})],1),e._v(" "),n("div",{staticClass:"login-btn"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("登录")])],1)],1)],1)])]),e._v(" "),n("footer",{staticClass:"footer"},[n("a",{attrs:{href:""}},[e._v("Chrome下载")]),e._v(" "),n("span",{staticClass:"pull-right text-muted",domProps:{innerHTML:e._s(e.copyRight)}})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"},[n("v-menu",{attrs:{mode:"vertical",menuItems:e.menuItems}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n  分析研判页面\n")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"crumbs"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",[n("i",{staticClass:"el-icon-setting"}),e._v(" 自述")])],1)],1),e._v(" "),n("div",{staticClass:"ms-doc"},[n("h3",[e._v("README.md")]),e._v(" "),n("article",[n("h1",[e._v("manage-system")]),e._v(" "),n("p",[e._v("基于Vue.js 2.x系列 + Element UI 的后台管理系统解决方案")]),e._v(" "),n("h2",[e._v("前言")]),e._v(" "),n("p",[e._v("之前在公司用了Vue + Element组件库做了个后台管理系统，基本很多组件可以直接引用组件库的，但是也有一些需求无法满足。像图片裁剪上传、富文本编辑器、图表等这些在后台管理系统中很常见的功能，就需要引用其他的组件才能完成。从寻找组件，到使用组件的过程中，遇到了很多问题，也积累了宝贵的经验。所以我就把开发这个后台管理系统的经验，总结成这个后台管理系统解决方案。")]),e._v(" "),n("p",[e._v("该方案作为一套多功能的后台框架模板，适用于绝大部分的后台管理系统（Web Management System）开发。基于vue.js,使用vue-cli脚手架快速生成项目目录，引用Element UI组件库，方便开发快速简洁好看的组件。分离颜色样式，支持手动切换主题色，而且很方便使用自定义主题色。")]),e._v(" "),n("h2",[e._v("功能")]),e._v(" "),n("el-checkbox",{attrs:{disabled:"",checked:""}},[e._v("Element UI")]),e._v(" "),n("br"),e._v(" "),n("el-checkbox",{attrs:{disabled:"",checked:""}},[e._v("登录/注销")]),e._v(" "),n("br"),e._v(" "),n("el-checkbox",{attrs:{disabled:"",checked:""}},[e._v("表格")]),e._v(" "),n("br"),e._v(" "),n("el-checkbox",{attrs:{disabled:"",checked:""}},[e._v("表单")]),e._v(" "),n("br"),e._v(" "),n("el-checkbox",{attrs:{disabled:"",checked:""}},[e._v("图表")]),e._v(" "),n("br"),e._v(" "),n("el-checkbox",{attrs:{disabled:"",checked:""}},[e._v("富文本编辑器")]),e._v(" "),n("br"),e._v(" "),n("el-checkbox",{attrs:{disabled:"",checked:""}},[e._v("markdown编辑器")]),e._v(" "),n("br"),e._v(" "),n("el-checkbox",{attrs:{disabled:"",checked:""}},[e._v("图片拖拽/裁剪上传")]),e._v(" "),n("br"),e._v(" "),n("el-checkbox",{attrs:{disabled:"",checked:""}},[e._v("支持切换主题色")]),e._v(" "),n("br"),e._v(" "),n("el-checkbox",{attrs:{disabled:"",checked:""}},[e._v("列表拖拽排序")]),e._v(" "),n("br")],1)])])},staticRenderFns:[]}}]),[62]);
//# sourceMappingURL=app.509ac52a0175d8d0a47b.js.map