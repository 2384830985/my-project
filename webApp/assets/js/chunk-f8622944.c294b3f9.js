(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8622944"],{"814f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("t-content",{staticClass:"t-content-pad"},[a("div",[a("t-title",{attrs:{title:t.formItem.id?"修改文章":"新增文章"}}),a("t-content-con",{attrs:{content:"文章的新增修改。"}}),a("Form",{ref:"formItem",attrs:{model:t.formItem,rules:t.ruleInline,"label-width":80}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"文章标题"}},[a("Input",{attrs:{placeholder:"Enter something..."},model:{value:t.formItem.title,callback:function(e){t.$set(t.formItem,"title",e)},expression:"formItem.title"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"文章副标题"}},[a("Input",{attrs:{placeholder:"Enter something..."},model:{value:t.formItem.small,callback:function(e){t.$set(t.formItem,"small",e)},expression:"formItem.small"}})],1)],1)],1),a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"点赞数"}},[a("Input",{attrs:{disabled:"",placeholder:"Enter something..."},model:{value:t.formItem.good,callback:function(e){t.$set(t.formItem,"good",e)},expression:"formItem.good"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"点击数量"}},[a("Input",{attrs:{disabled:"",placeholder:"Enter something..."},model:{value:t.formItem.see,callback:function(e){t.$set(t.formItem,"see",e)},expression:"formItem.see"}})],1)],1)],1),a("FormItem",{attrs:{label:"文章类目"}},[a("Select",{model:{value:t.formItem.categoryId,callback:function(e){t.$set(t.formItem,"categoryId",e)},expression:"formItem.categoryId"}},t._l(t.skillCategoryList,function(e,n){return a("Option",{key:n,attrs:{value:e.id}},[t._v(t._s(e.name))])}),1)],1),a("FormItem",{attrs:{label:"图片上传"}},[a("Upload",{attrs:{action:t.action,name:"upload_file","max-size":1e3,"before-upload":t.handleBeforeUpload,"on-remove":t.removeImg,"default-file-list":t.defaultFileList,"on-success":t.onSuccessImg}},[a("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[t._v("Upload files")])],1)],1),a("FormItem",{attrs:{label:"文章内容"}},[a("mavon-editor",{attrs:{toolbars:t.toolbars},model:{value:t.formItem.content,callback:function(e){t.$set(t.formItem,"content",e)},expression:"formItem.content"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:t.cleans}},[t._v("取消")])],1)],1)],1)])},o=[],r=(a("96cf"),a("3b8d")),l=a("d225"),s=a("b0b4"),i=a("308d"),c=a("6bb5"),u=a("4e2b"),m=a("9ab4"),d=a("60a3"),f=a("b7f1"),p=a("b611"),b=a("e9a7"),g=a("8706"),I=a("a6d1"),h=a("bff1"),v=function(t){function e(){var t;return Object(l["a"])(this,e),t=Object(i["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.formItem={good:0,see:0,content:"",image:""},t.action=h["a"].imgUrl,t.toolbars={bold:!0,italic:!0,header:!0,underline:!0,mark:!0,superscript:!0,quote:!0,ol:!0,link:!0,help:!0,code:!0,subfield:!0,fullscreen:!0,readmodel:!0,undo:!0,trash:!0,navigation:!0},t.defaultFileList=[],t.ruleInline={},t.skillCategoryList={},t}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"created",value:function(){this.start()}},{key:"start",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(this.$route.query.id),t.next=3,Object(g["a"])().then(function(t){e.skillCategoryList=t.data.list});case 3:this.$route.query.id&&Object(I["b"])(this.$route.query.id).then(function(t){e.formItem=t.data,e.defaultFileList=[{name:"1",url:e.formItem.image}]});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"handleBeforeUpload",value:function(){var t=!0;return""!==this.formItem.image&&(t=!1,this.$Notice.warning({title:"Up to five pictures can be uploaded."})),t}},{key:"removeImg",value:function(){this.formItem.image=""}},{key:"submit",value:function(){var t=this;Object(I["d"])(this.formItem).then(function(e){console.log(e),t.cleans()})}},{key:"onSuccessImg",value:function(t){this.formItem.image=t.data.url}},{key:"cleans",value:function(){this.$router.push("/article/list")}}]),e}(d["c"]);v=m["a"]([Object(d["a"])({components:{TContentCon:b["a"],TTitle:p["a"],TContent:f["a"]}})],v);var y=v,k=y,O=k,j=a("2877"),C=Object(j["a"])(O,n,o,!1,null,"e3816484",null);e["default"]=C.exports},8706:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"d",function(){return r}),a.d(e,"b",function(){return l}),a.d(e,"c",function(){return s});var n=a("8aec"),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/manage/skillCategory/list",method:"post",data:t})},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/manage/skillCategory/updateServe",method:"post",data:t,success:{type:"message",state:"success",options:{content:"操作成功"}}})},l=function(t){return Object(n["a"])({url:"/manage/skillCategory/delete?skillCategoryId=".concat(t),method:"get",success:{type:"message",state:"success",options:{content:"删除成功"}}})},s=function(t){return Object(n["a"])({url:"/manage/skillCategory/detail?skillCategoryId=".concat(t),method:"get"})}},a6d1:function(t,e,a){"use strict";a.d(e,"c",function(){return o}),a.d(e,"d",function(){return r}),a.d(e,"a",function(){return l}),a.d(e,"b",function(){return s});var n=a("8aec"),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/manage/article/list",method:"post",data:t})},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/manage/article/updateSave",method:"post",data:t,success:{type:"message",state:"success",options:{title:"操作成功"}}})},l=function(t){return Object(n["a"])({url:"/manage/article/delete?articleId=".concat(t),method:"get",success:{type:"notice",state:"success",options:{title:"删除成功"}}})},s=function(t){return Object(n["a"])({url:"/manage/article/detail?articleId=".concat(t),method:"get"})}}}]);