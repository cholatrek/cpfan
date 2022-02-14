if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometSaveSelectCollectionListItem_collection.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometSaveSelectCollectionListItem_collection",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"collection_title",storageKey:null},{args:null,kind:"FragmentSpread",name:"useCollectionThumbnailImage_collection"},{args:null,kind:"FragmentSpread",name:"useCollectionPrivacyScope_collection"}],type:"ContentCollection",abstractKey:"__isContentCollection"};e.exports=a}),null);
__d("CometSaveSelectCollectionRendererQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4623527911020534"}),null);
__d("CometSaveSelectCollectionRendererQuery.graphql",["CometSaveSelectCollectionRendererQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"scale"}],c=[{kind:"Literal",name:"first",value:10},{kind:"Literal",name:"use_case",value:"SAVE_BOTTOM_SHEET"}],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometSaveSelectCollectionRendererQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometSaveSelectCollection_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometSaveSelectCollectionRendererQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"SaverInfo",kind:"LinkedField",name:"saver_info",plural:!1,selections:[{alias:null,args:c,concreteType:"SaverInfoSaverContentCollectionsConnection",kind:"LinkedField",name:"saver_content_collections",plural:!1,selections:[{alias:null,args:null,concreteType:"SaverInfoSaverContentCollectionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d,{kind:"TypeDiscriminator",abstractKey:"__isContentCollection"},{alias:null,args:null,kind:"ScalarField",name:"collection_title",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:48},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:48}],concreteType:"Image",kind:"LinkedField",name:"collection_thumbnail_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope",plural:!1,selections:[{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"selected_option",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},d],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}],storageKey:'saver_content_collections(first:10,use_case:"SAVE_BOTTOM_SHEET")'},{alias:null,args:c,filters:["use_case"],handle:"connection",key:"SaveSelectCollection_saver_content_collections",kind:"LinkedHandle",name:"saver_content_collections"}],storageKey:null}],storageKey:null}]},params:{id:b("CometSaveSelectCollectionRendererQuery_facebookRelayOperation"),metadata:{},name:"CometSaveSelectCollectionRendererQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometSaveSelectCollectionTopCollections_collection.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{plural:!0},name:"CometSaveSelectCollectionTopCollections_collection",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometSaveSelectCollectionListItem_collection"}],type:"ContentCollection",abstractKey:"__isContentCollection"};e.exports=a}),null);
__d("SaveSelectCollectionPaginationQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3566230666729067"}),null);
__d("SaveSelectCollectionPaginationQuery.graphql",["SaveSelectCollectionPaginationQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:10,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],c=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"count"},{kind:"Literal",name:"use_case",value:"SAVE_BOTTOM_SHEET"}],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"SaveSelectCollectionPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"}],kind:"FragmentSpread",name:"CometSaveSelectCollection_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"SaveSelectCollectionPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"SaverInfo",kind:"LinkedField",name:"saver_info",plural:!1,selections:[{alias:null,args:c,concreteType:"SaverInfoSaverContentCollectionsConnection",kind:"LinkedField",name:"saver_content_collections",plural:!1,selections:[{alias:null,args:null,concreteType:"SaverInfoSaverContentCollectionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d,{kind:"TypeDiscriminator",abstractKey:"__isContentCollection"},{alias:null,args:null,kind:"ScalarField",name:"collection_title",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:48},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:48}],concreteType:"Image",kind:"LinkedField",name:"collection_thumbnail_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope",plural:!1,selections:[{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"selected_option",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},d],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:c,filters:["use_case"],handle:"connection",key:"SaveSelectCollection_saver_content_collections",kind:"LinkedHandle",name:"saver_content_collections"}],storageKey:null}],storageKey:null}]},params:{id:b("SaveSelectCollectionPaginationQuery_facebookRelayOperation"),metadata:{},name:"SaveSelectCollectionPaginationQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometSaveSelectCollection_viewer.graphql",["SaveSelectCollectionPaginationQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=["saver_info","saver_content_collections"];return{argumentDefinitions:[{defaultValue:10,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:a}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:a},fragmentPathInResult:["viewer"],operation:b("SaveSelectCollectionPaginationQuery.graphql")}},name:"CometSaveSelectCollection_viewer",selections:[{alias:null,args:null,concreteType:"SaverInfo",kind:"LinkedField",name:"saver_info",plural:!1,selections:[{alias:"saver_content_collections",args:[{kind:"Literal",name:"use_case",value:"SAVE_BOTTOM_SHEET"}],concreteType:"SaverInfoSaverContentCollectionsConnection",kind:"LinkedField",name:"__SaveSelectCollection_saver_content_collections_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"SaverInfoSaverContentCollectionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometSaveSelectCollectionListItem_collection"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}],storageKey:'__SaveSelectCollection_saver_content_collections_connection(use_case:"SAVE_BOTTOM_SHEET")'}],storageKey:null}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("CometSaveCollectionNameTextInput.react",["fbt","CometSaveCollectionConstants","CometTextInput.react","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useEffect,k=b.useRef,l=b.useState;function a(a){var b=a.inputValue,e=a.isLoading;e=e===void 0?!1:e;var f=a.inputLabel;f=f===void 0?h._(/*FBT_CALL*/"Name"/*FBT_CALL*/):f;var g=a.inputMaxLength,m=g===void 0?d("CometSaveCollectionConstants").COLLECTION_NAME_MAX_LENGTH:g;g=a.onChange;a=l(!1);var n=a[0],o=a[1],p=k();j(function(){var a=p.current;a&&a.focus()});j(function(){m!=null&&b.length===m?o(!0):n&&o(!1)},[b,n,m]);var q=h._(/*FBT_CALL*/"Character limit reached"/*FBT_CALL*/);a=function(){return i.jsx(c("TetraText.react"),{color:"negative",type:"body4",children:q})};var r=function(){return m!=null&&b.length===m?{reason:q,type:"ERROR"}:{type:"CORRECT"}};return i.jsxs(i.Fragment,{children:[i.jsx(c("CometTextInput.react"),{disabled:e,label:f,maxLength:m,onChange:g,placeholder:h._(/*FBT_CALL*/"Give your collection a name..."/*FBT_CALL*/),ref:p,validator:r,value:b}),i.jsx("div",{className:"jktsbyx5 gl3lb2sf",children:n&&a()})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometSaveCreateCollectionEmbeddedForm.react",["fbt","CometSaveCollectionNameTextInput.react","TetraButtonGroup.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useState;function a(a){var b=a.isLoading;b=b===void 0?!1:b;var d=a.maxCollectionNameLength,e=a.onCancel,f=a.onCreate;a=k("");var g=a[0],l=a[1];a=j(function(a){l(a.target.value)},[]);var m=j(function(){return f(g)},[g,f]);return i.jsxs(i.Fragment,{children:[i.jsx(c("CometSaveCollectionNameTextInput.react"),{inputMaxLength:d,inputValue:g,isLoading:b,onChange:a}),i.jsx(c("TetraButtonGroup.react"),{align:"end",direction:"backward",paddingTop:4,primary:{disabled:b||g==null||g.trim().length===0,label:h._(/*FBT_CALL*/"Create"/*FBT_CALL*/),onPress:m},secondary:{label:h._(/*FBT_CALL*/"Cancel"/*FBT_CALL*/),onPress:e,reduceEmphasis:!0}})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometSaveSelectCollectionListItem.react",["CometRelay","CometSaveCollectionConstants","CometSaveCollectionInitial.react","CometSaveSelectCollectionListItem_collection.graphql","TetraIcon.react","TetraListCell.react","react","useCollectionPrivacyScope","useCollectionThumbnailImage"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useCallback;function a(a){var e,f=a.onPress,g=a.selected,k=d("CometRelay").useFragment(h!==void 0?h:h=b("CometSaveSelectCollectionListItem_collection.graphql"),a.collection);a=j(function(){f(k.id)},[k.id,f]);var l=c("useCollectionPrivacyScope")(k);e=(e=c("useCollectionThumbnailImage")(k))==null?void 0:e.uri;e=e==null?{component:i.jsx(c("CometSaveCollectionInitial.react"),{name:k.collection_title,size:d("CometSaveCollectionConstants").COLLECTION_AVATAR_SIZE_LARGE}),type:"override"}:{shape:"roundedRect",size:d("CometSaveCollectionConstants").COLLECTION_AVATAR_SIZE_LARGE,source:{uri:e},type:"profile-photo"};g=g!=null?{on:g===!0,onPress:a,type:"radio"}:null;l=i.jsxs("span",{className:"pq6dq46d bp9cbjyn",children:[(l==null?void 0:l.icon)!=null&&i.jsx(c("TetraIcon.react"),{color:"secondary",icon:l.icon}),i.jsx("span",{className:"ggphbty4",children:l==null?void 0:l.label})]});return i.jsx(c("TetraListCell.react"),{addOnPrimary:e,addOnSecondary:g,body:l,headline:k.collection_title,headlineLineLimit:1,level:3,onPress:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometSaveSelectCollection.react",["CometInfiniteScrollTrigger.react","CometListCellGlimmer.react","CometRelay","CometSaveCollectionConstants","CometSaveSelectCollectionListItem.react","CometSaveSelectCollectionTopCollections_collection.graphql","CometSaveSelectCollection_viewer.graphql","CometScrollableArea.react","filterNulls","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react"),k=d("react").useCallback,l={listContainer:{paddingTop:"cxgpxx05",paddingBottom:"sj5x9vvc"},root:{width:"k4urcfbm"}},m=10,n=h!==void 0?h:h=b("CometSaveSelectCollectionTopCollections_collection.graphql");function a(a){var e=d("CometRelay").usePaginationFragment(i!==void 0?i:i=b("CometSaveSelectCollection_viewer.graphql"),a.viewer),f=e.data,g=e.hasNext,h=e.isLoadingNext,o=e.loadNext;e=d("CometRelay").useFragment(n,a.topCollections);var p=a.onSelectCollection,q=a.preselectedCollectionID;a=k(function(){g&&!h&&o(m)},[g,h,o]);var r=c("filterNulls")(e.map(function(a){return a==null?void 0:a.id}));r=new Set(r);f=((f=f.saver_info)==null?void 0:(f=f.saver_content_collections)==null?void 0:f.edges)||[];var s=[];for(var f=f,t=Array.isArray(f),u=0,f=t?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var v;if(t){if(u>=f.length)break;v=f[u++]}else{u=f.next();if(u.done)break;v=u.value}v=v;v=v==null?void 0:v.node;v!=null&&!r.has(v.id)&&s.push(v)}v=e.concat(s);var w=q!=null;u=v.map(function(a){return j.jsx(c("CometSaveSelectCollectionListItem.react"),{collection:a,onPress:p,selected:w?a.id===q:void 0},a.id)});return j.jsxs(c("CometScrollableArea.react"),{xstyle:l.root,children:[j.jsx("div",{className:c("stylex")(l.listContainer),children:u}),j.jsx(c("CometInfiniteScrollTrigger.react"),{hasMore:g,isLoading:h,onLoadMore:a,children:j.jsx(c("CometListCellGlimmer.react"),{imageSize:d("CometSaveCollectionConstants").COLLECTION_AVATAR_SIZE_LARGE,imageStyle:"roundedRect",numberOfItems:3})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometSaveSelectCollectionRenderer.react",["CometRelay","CometSaveSelectCollection.react","CometSaveSelectCollectionRendererQuery.graphql","WebPixelRatio","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e={scale:d("WebPixelRatio").get()};e=d("CometRelay").useLazyLoadQuery(h!==void 0?h:h=b("CometSaveSelectCollectionRendererQuery.graphql"),e);e=e.viewer;return e==null?null:i.jsx(c("CometSaveSelectCollection.react"),{onSelectCollection:a.onSelectCollection,preselectedCollectionID:a.preselectedCollectionID,topCollections:a.topCollections,viewer:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometSaveSelectCollectionDialog.react",["fbt","ix","CometCardedDialog.react","CometRow.react","CometRowItem.react","CometSaveCreateCollectionEmbeddedForm.react","CometSaveSelectCollectionRenderer.react","TetraButton.react","TetraListCell.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");var k=b.useCallback,l=b.useState;function a(a){var b=a.onClose,d=a.onCreateCollection,e=a.onSubmit,f=a.preselectedCollectionID,g=a.title;a=a.topCollections;var h=f==null;f=l(f);var i=f[0],n=f[1];f=k(function(a){h?(e(a),b()):n(a)},[h,b,e]);var o=k(function(a){d(a),b()},[b,d]),p=k(function(){e(i),b()},[b,e,i]);return j.jsx(c("CometCardedDialog.react"),{onClose:b,title:g,withCloseButton:!0,children:j.jsxs("div",{className:"cbu4d94t j83agx80",children:[j.jsx("div",{className:"rl9blezj j83agx80",children:j.jsx(c("CometSaveSelectCollectionRenderer.react"),{onSelectCollection:f,preselectedCollectionID:i,topCollections:a})}),j.jsx("div",{className:"dhix69tm wkznzc2l ccq6eem2"}),j.jsx("div",{className:"k4urcfbm kb5gq1qc c4hnarmi",children:j.jsx(m,{onCreateCollection:o,onSubmit:h?null:p})})]})})}a.displayName=a.name+" [from "+f.id+"]";function m(a){var b=a.onCreateCollection;a=a.onSubmit;var e=l(!1),f=e[0],g=e[1];e=k(function(){return g(!1)},[]);var m=k(function(){return g(!0)},[]);if(f)return j.jsx("div",{className:"l9j0dhe7 dati1w0a f10w8fjw hv4rvrfc pybr56ya",children:j.jsx(c("CometSaveCreateCollectionEmbeddedForm.react"),{maxCollectionNameLength:40,onCancel:e,onCreate:b})});else return j.jsxs("div",{children:[j.jsx("div",{className:"a8nywdso sj5x9vvc rz4wbd8a cxgpxx05",children:j.jsx(c("TetraListCell.react"),{addOnPrimary:{color:"gray",icon:d("fbicon")._(i("483770"),24),shape:"roundedRect",size:48,type:"contained-icon"},headline:h._(/*FBT_CALL*/"New Collection"/*FBT_CALL*/),level:3,onPress:m})}),j.jsx("div",{className:"dhix69tm wkznzc2l ccq6eem2"}),a?j.jsx(c("CometRow.react"),{direction:"backward",paddingHorizontal:16,paddingVertical:12,children:j.jsx(c("CometRowItem.react"),{children:j.jsx(c("TetraButton.react"),{label:h._(/*FBT_CALL*/"Done"/*FBT_CALL*/),onPress:a,padding:"wide",size:"medium",testid:void 0,type:"primary"})})}):null]})}m.displayName=m.name+" [from "+f.id+"]";g["default"]=a}),98);