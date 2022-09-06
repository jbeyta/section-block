(()=>{"use strict";var e,t={859:()=>{const e=window.wp.blocks,t=window.wp.element,l=(window.wp.i18n,window.wp.blockEditor),a=window.wp.components;function o(e){return e.fullwidthBg?"cw-section-block-mother fullw":"cw-section-block-mother"}function n(e){let t={marginLeft:"auto",marginRight:"auto",width:"100%",maxWidth:e.fullWidth?"none":e.width+"px"};return e.paddingTop>0&&(t.paddingTop=e.paddingTop+"px"),e.paddingRight>0&&(t.paddingRight=e.paddingRight+"px"),e.paddingBottom>0&&(t.paddingBottom=e.paddingBottom+"px"),e.paddingLeft>0&&(t.paddingLeft=e.paddingLeft+"px"),t}function r(e){const l="custom"==e.backgroundSize&&e.backgroundSizeCustom?e.backgroundSizeCustom:"custom"!=e.backgroundSize||e.backgroundSizeCustom?e.backgroundSize:"cover";return e.imgData.url?(0,t.createElement)("div",{className:"cw-section-block-bg-img",style:{opacity:e.opacity+"%",backgroundPosition:e.backgroundPosition,backgroundSize:l,backgroundAttachment:e.backgroundAttachment,backgroundRepeat:e.backgroundRepeat,backgroundImage:e.imgData.url?"url("+e.imgData.url+")":""}}):""}function i(e){return e.videoData.url?(0,t.createElement)("video",{style:{opacity:e.opacity+"%"},autoplay:!0,loop:!0,muted:!0},(0,t.createElement)("source",{src:e.videoData.url,type:"video/mp4"})):""}function c(e){return e.backgroundColor?(0,t.createElement)("div",{className:"cw-section-block-bg-color",style:{backgroundColor:e.backgroundColor,background:e.backgroundColor&&e.backgroundColor2?"linear-gradient("+e.gradAngle+"deg, "+e.backgroundColor+" 0%, "+e.backgroundColor2+" 100%)":e.backgroundColor}}):""}(0,e.registerBlockType)("create-block/cw-section",{edit:function(e){let{attributes:d,setAttributes:u}=e;const m=(0,l.useBlockProps)(),g=[{name:"red",color:"#e40303"},{name:"orange",color:"#ff8c00"},{name:"yellow",color:"#ffed00"},{name:"green",color:"#008026"},{name:"teal",color:"#05929F"},{name:"darkteal",color:"#073f46"},{name:"lightblue",color:"#61c9d8"},{name:"paleblue",color:"#ebf6f7"},{name:"brown",color:"#613000"},{name:"gray",color:"#666"},{name:"black",color:"#000"},{name:"white",color:"#fff"}],b=o(d),s=n(d),p=r(d),v=i(d),C=c(d);let h=d.fullWidth?"":(0,t.createElement)(a.RangeControl,{label:"Limit Width",value:d.width,onChange:e=>u({width:e}),min:320,max:1400}),k="custom"==d.backgroundSize?(0,t.createElement)(a.RangeControl,{label:"Limit Width",value:d.backgroundSizeCustom,onChange:e=>u({backgroundSizeCustom:e}),min:0,max:100}):"";return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(a.PanelBody,{title:"Size",initialOpen:!1},(0,t.createElement)(a.ToggleControl,{label:"Full Width",checked:d.fullWidth,onChange:e=>u({fullWidth:e})}),h),(0,t.createElement)(a.PanelBody,{title:"Padding",initialOpen:!1},(0,t.createElement)(a.RangeControl,{label:"Top Padding",value:d.paddingTop,onChange:e=>u({paddingTop:e}),min:0,max:300}),(0,t.createElement)(a.RangeControl,{label:"Right Padding",value:d.paddingRight,onChange:e=>u({paddingRight:e}),min:0,max:300}),(0,t.createElement)(a.RangeControl,{label:"Bottom Padding",value:d.paddingBottom,onChange:e=>u({paddingBottom:e}),min:0,max:300}),(0,t.createElement)(a.RangeControl,{label:"Left Padding",value:d.paddingLeft,onChange:e=>u({paddingLeft:e}),min:0,max:300})),(0,t.createElement)(a.PanelBody,{title:"Border",initialOpen:!1},(0,t.createElement)("label",null,"Border Color"),(0,t.createElement)(a.ColorPalette,{colors:g,value:d.borderColor,onChange:e=>u({borderColor:e})}),(0,t.createElement)(a.RangeControl,{label:"Border Width",value:d.borderWidth,onChange:e=>u({borderWidth:e}),min:0,max:30}),(0,t.createElement)(a.RangeControl,{label:"Border Radius",value:d.borderRadius,onChange:e=>u({borderRadius:e}),min:0,max:30}),(0,t.createElement)(a.SelectControl,{label:"Border Style",value:d.borderStyle,onChange:e=>u({borderStyle:e}),options:[{label:"Solid",value:"solid"},{label:"Dotted",value:"dotted"},{label:"Dashed",value:"dashed"},{label:"Double",value:"double"}]})),(0,t.createElement)(a.PanelBody,{title:"Background Video",initialOpen:!1},(0,t.createElement)(l.MediaUploadCheck,null,(0,t.createElement)(l.MediaUpload,{className:"cw-section-bg-video wp-admin-cw-section-bg-video",allowedTypes:["video/mp4"],multiple:!1,value:d.videoData?d.videoData.id:"",onSelect:e=>u({videoData:e}),render:e=>{let{open:l}=e;return d.videoData.id?(0,t.createElement)("div",null,(0,t.createElement)("p",null,d.videoData.filename),(0,t.createElement)("p",null,(0,t.createElement)(a.Button,{onClick:()=>u({videoData:""}),className:"button is-small"},"Remove"))):(0,t.createElement)(a.Button,{onClick:l,className:"button"},"Select/Upload Video")}}))),(0,t.createElement)(a.PanelBody,{title:"Background Image",initialOpen:!1},(0,t.createElement)(l.MediaUploadCheck,null,(0,t.createElement)(l.MediaUpload,{className:"cw-section-bg-image wp-admin-cw-section-bg-image",allowedTypes:["image"],multiple:!1,value:d.imgData?d.imgData.id:"",onSelect:e=>u({imgData:e}),render:e=>{let{open:l}=e;return d.imgData.id?(0,t.createElement)("div",null,(0,t.createElement)("p",null,(0,t.createElement)("img",{src:d.imgData.url,width:d.imgData.width/2})),(0,t.createElement)("p",null,(0,t.createElement)(a.Button,{onClick:()=>u({imgData:""}),className:"button is-small"},"Remove"))):(0,t.createElement)(a.Button,{onClick:l,className:"button"},"Select/Upload Image")}})),(0,t.createElement)(a.SelectControl,{label:"Position",value:d.backgroundPosition,onChange:e=>u({backgroundPosition:e}),options:[{label:"Top Left",value:"top left"},{label:"Top Center",value:"top center"},{label:"Top Right",value:"top right"},{label:"Center Left",value:"center left"},{label:"Center Center",value:"center center"},{label:"Center Right",value:"center right"},{label:"Bottom Left",value:"bottom left"},{label:"Bottom Center",value:"bottom center"},{label:"Bottom Right",value:"bottom right"}]}),(0,t.createElement)(a.SelectControl,{label:"Size",value:d.backgroundSize,onChange:e=>u({backgroundSize:e}),options:[{label:"Cover",value:"cover"},{label:"Contain",value:"contain"}]}),k,(0,t.createElement)(a.SelectControl,{label:"Attachment",value:d.backgroundAttachment,onChange:e=>u({backgroundAttachment:e}),options:[{label:"Normal",value:"scroll"},{label:"Fixed",value:"fixed"}]}),(0,t.createElement)(a.SelectControl,{label:"Repeat",value:d.backgroundRepeat,onChange:e=>u({backgroundRepeat:e}),options:[{label:"Repeat",value:"repeat"},{label:"No Repeat",value:"no-repeat"}]})),(0,t.createElement)(a.PanelBody,{title:"Background Color",initialOpen:!1},(0,t.createElement)("label",null,"Solid Color"),(0,t.createElement)(a.ColorPalette,{colors:g,value:d.backgroundColor,onChange:e=>u({backgroundColor:e})}),(0,t.createElement)("label",null,"Gradient Color"),(0,t.createElement)(a.ColorPalette,{colors:g,value:d.backgroundColor2,onChange:e=>u({backgroundColor2:e})}),(0,t.createElement)(a.RangeControl,{label:"Gradient Angle",value:d.gradAngle,onChange:e=>u({gradAngle:e}),min:0,max:360})),(0,t.createElement)(a.PanelBody,{title:"Background Options",initialOpen:!1},(0,t.createElement)(a.ToggleControl,{label:"Make Background Full Browser Width",checked:d.fullwidthBg,onChange:e=>u({fullwidthBg:e})}),(0,t.createElement)(a.RangeControl,{label:"Background Image Opacity",value:d.opacity,onChange:e=>u({opacity:e}),min:0,max:100}))),(0,t.createElement)("div",m,(0,t.createElement)("div",{className:b},(0,t.createElement)("div",{className:"cw-section-block-bg",style:{borderWidth:d.borderWidth,borderRadius:d.borderRadius,borderColor:d.borderColor,borderStyle:d.borderStyle?d.borderStyle:"solid"}},v,p,C),(0,t.createElement)("div",{className:"cw-section-block-content",style:s},(0,t.createElement)("div",{className:"cw-section-block-inner"},(0,t.createElement)(l.InnerBlocks,null))))))},save:function(e){const{attributes:a}=e,d=o(a),u=n(a),m=r(a),g=i(a),b=c(a);return(0,t.createElement)("div",l.useBlockProps.save(),(0,t.createElement)("div",{className:d},(0,t.createElement)("div",{className:"cw-section-block-bg",style:{borderWidth:a.borderWidth,borderRadius:a.borderRadius,borderColor:a.borderColor,borderStyle:a.borderStyle?a.borderStyle:"solid"}},g,m,b),(0,t.createElement)("div",{className:"cw-section-block-content",style:u},(0,t.createElement)("div",{className:"cw-section-block-inner"},(0,t.createElement)(l.InnerBlocks.Content,null)))))}})}},l={};function a(e){var o=l[e];if(void 0!==o)return o.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,l,o,n)=>{if(!l){var r=1/0;for(u=0;u<e.length;u++){l=e[u][0],o=e[u][1],n=e[u][2];for(var i=!0,c=0;c<l.length;c++)(!1&n||r>=n)&&Object.keys(a.O).every((e=>a.O[e](l[c])))?l.splice(c--,1):(i=!1,n<r&&(r=n));if(i){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[l,o,n]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var o,n,r=l[0],i=l[1],c=l[2],d=0;if(r.some((t=>0!==e[t]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var u=c(a)}for(t&&t(l);d<r.length;d++)n=r[d],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},l=self.webpackChunkcw_section=self.webpackChunkcw_section||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=a.O(void 0,[431],(()=>a(859)));o=a.O(o)})();