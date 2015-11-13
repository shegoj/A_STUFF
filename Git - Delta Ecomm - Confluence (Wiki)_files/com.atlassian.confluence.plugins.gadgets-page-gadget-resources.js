;try {
/* module-key = 'com.atlassian.confluence.plugins.gadgets:page-gadget-resources', location = 'script/page-gadget.js' */
AJS.PageGadget={loadTemplate:function(a){return AJS.template(AJS.$("script[title='"+a+"']")[0].text)},pagePicker:function(c){var a=c.getPref("pageName"),b=c.getPref("pageId"),d=c.getMsg("gadget.confluence.quickfind.page.name.description");return{userpref:"pageId",label:c.getMsg("gadget.confluence.quickfind.page.name.label"),description:d,id:"page-picker",type:"callbackBuilder",callback:function(g){var f={pageId:b,pageName:a,pageDescription:d};g.append(AJS.PageGadget.loadTemplate("pagePicker").fillHtml(f));var e=function(h){return AJS.$.param({type:"page,blogpost",query:AJS.escape(h)})};AJS.PageGadget.doPageQuickFind(e,c,f)}}},clearPagePickerValues:function(){AJS.$("#pageId").val("");AJS.$("#pageName").val("");AJS.$("#quickfind-page").focus()},spacePicker:function(d){var c=d.getPref("spaceKey"),a=d.getPref("spaceName"),b=d.getMsg("gadget.confluence.quickfind.space.name.description");return{userpref:"spaceKey",label:d.getMsg("gadget.confluence.quickfind.space.name.label"),description:b,id:"space-picker",type:"callbackBuilder",callback:function(l){var k=d.getMsg("gadget.confluence.quickfind.space.search.default"),j={spaceKey:c,spaceName:a,spaceDescription:b,i18nAllSpaces:k,spaceValue:a||""};l.append(AJS.PageGadget.loadTemplate("spacePicker").fillHtml(j));AJS.Confluence.Binder.placeholder();var h=AJS.$("#quickfind-space-container"),e=AJS.$("#quickfind-space");e.bind("reset.default-text",function(){AJS.$("#spaceKey").val("")});var i=function(s,p){if(p){this.hide("selected");var r=p.find("span").data("properties").restObj;var o=r.name;AJS.$("#spaceName").val(o);e.val(o);var q=r.key;var n=AJS.$("#spaceKey").val();AJS.$("#spaceKey").val(q);var m={};if(q==n){m.pageName=AJS.$("#pageName").val();m.pageId=AJS.$("#pageId").val()}AJS.PageGadget.doPageQuickFind(function(t){return AJS.$.param({type:"page,blogpost",spaceKey:AJS.$("#spaceKey").val(),query:AJS.escape(t)})},d,m);if(!m.pageName){AJS.PageGadget.clearPagePickerValues()}s.preventDefault()}};var g=function(m){return AJS.$.param({type:"spacedesc,personalspacedesc",query:AJS.escape(m)})};var f=d.getMsg("gadget.confluence.quickfind.space.search.no.matches");AJS.PageGadget.doQuickNav(e,h,i,g,f)}}},doPageQuickFind:function(c,h,e){AJS.$("#quickfind-page").remove();var b=AJS.$("#quickfind-page-container"),f="";if(e&&e.pageId){f=e.pageName}b.prepend(AJS.PageGadget.loadTemplate("pageField").fillHtml({pageValue:f}));var g=AJS.$("#quickfind-page");var d=function(l,j){if(j){this.hide("selected");AJS.$("#pageId-error").remove();var k=j.find("span").data("properties").restObj;var i=k.title;AJS.$("#pageName").val(i);AJS.$("#pageId").val(k.id);AJS.$("#spaceKey").val(k.space.key);g.val(i).blur();l.preventDefault()}};var a=h.getMsg("gadget.confluence.quickfind.page.search.no.matches");AJS.PageGadget.doQuickNav(g,b,d,c,a)},doQuickNav:function(f,c,d,b,a){var g=function(){AJS.$("div.aui-shadow-parent").remove();var i=AJS.$("div.aui-dd-parent",c);var h=i.offset().top+i.height()+3;if(AJS.$(window).height()<h){gadgets.window.adjustHeight(h)}};var e={makeParams:b,ajsDropDownOptions:{selectionHandler:function(j,i){var h=d.call(this,j,i);gadgets.window.adjustHeight(AJS.$("#config").height());return h}},dropdownPostprocess:function(h){if(!AJS.$("> ol",h).length){AJS.$(h).append(AJS.$("<ol/>").addClass("no-match").append(AJS.$("<li/>").append(AJS.$("<span/>").html(a))))}AJS.$("> ol:last-child",h).addClass("last");AJS.$("a",h).attr("tabindex","-1")},dropdownPlacement:function(h){AJS.$(".search-drop-down",c).append(h)},makeRestMatrixFromData:AJS.REST.makeRestMatrixFromSearchData};f.quicksearch("/rest/prototype/1/search/name.json",g,e)},resizeGadget:function(){var c=0;var b=function(){var g=AJS.PageGadget.iFrame.contents().find("#content").outerHeight();var f=AJS.$("body");g+=parseInt(f.css("padding-bottom"),10)+parseInt(f.css("padding-top"),10);if(g){gadgets.window.adjustHeight(Math.max(100,g+20))}AJS.PageGadget.iFrame.removeClass("resizing")};var a=function(h){for(var f=0,g=h.length;f<g;f++){if(!AJS.$(h[f]).find("object").outerHeight()){return false}}return true};var e=function(){var g=AJS.PageGadget.iFrame.contents().find("#Slides");if(!a(g)&&++c<20){var f=arguments.callee;setTimeout(function(){f()},500);return}b()};AJS.PageGadget.iFrame.addClass("resizing");var d=AJS.PageGadget.iFrame.contents().find("#Slides").length;if(d){e()}else{b()}},addLinks:function(){var a=AJS.PageGadget.links;if(a.length==0){return}var c=AJS.$("#confluence-page").contents().find("#page-links ol");for(var b in a){c.append(AJS.PageGadget.loadTemplate("pageLink").fillHtml(a[b]))}AJS.$("#page-links li").addClass("list-length-"+a.length)}};AJS.toInit(function(a){var b=AJS.Gadget({baseUrl:AJS.params.contextPath,useOauth:"/rest/gadget/1.0/currentUser",config:{descriptor:function(){var c=this;return{action:"/rest/gadget/1.0/pagegadget/validate.json",fields:[AJS.PageGadget.spacePicker(c),AJS.PageGadget.pagePicker(c),{id:"show-link",userpref:"showLink",type:"checkbox",options:[{id:"showLink",label:c.getMsg("gadget.confluence.page.showlink"),selected:c.getPref("showLink")=="true",value:"true"}]},{id:"is-editable",userpref:"isEditable",type:"checkbox",options:[{id:"isEditable",label:c.getMsg("gadget.confluence.page.isEditable"),selected:c.getPref("isEditable")=="true",value:"true"}]},AJS.gadget.fields.nowConfigured()]}}},view:{enableReload:true,onResizeAdjustHeight:true,template:function(d){var f=this,c=f.getPref("pageId");var e=function(l){var i=[];if(f.getPref("showLink")=="true"){i.push({id:"viewLink",href:AJS.params.contextPath+"/pages/viewpage.action?pageId="+c,label:f.getMsg("gadget.confluence.page.view"),iconClass:"view-icon"})}if(l.userCanEditPage&&f.getPref("isEditable")=="true"){i.push({id:"editLink",href:AJS.params.contextPath+"/pages/edit"+l.contentType+".action?pageId="+c,label:f.getMsg("gadget.confluence.page.edit"),iconClass:"edit-icon"})}AJS.PageGadget.links=i;gadgets.window.setTitle(l.pageTitle);var h=f.getView().empty();var j=AJS.$("<iframe/>").attr("id","confluence-page").attr("name","confluence-page");AJS.PageGadget.iFrame=j;h.append(j);var k=j[0].contentWindow||tmp.contentDocument,g=k.document;g.open();g.write(l.html);g.close()};AJS.$.ajax({url:AJS.params.contextPath+"/rest/gadget/1.0/pagegadget/getrenderedpage.json",type:"GET",dataType:"json",data:{pageId:c},success:function(g){e(g)},error:function(g,h){if(g.status===401){f.showMessage("warning",f.getMsg("gadget.confluence.page.permission.error"),false)}AJS.log("Error loading page");gadgets.window.adjustHeight(200)}})}}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
