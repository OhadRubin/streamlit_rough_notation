(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{21:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=21},22:function(e,t){},27:function(e,t,n){e.exports=n(43)},37:function(e,t){},38:function(e,t){},39:function(e,t){},40:function(e,t){},41:function(e,t){},42:function(e,t){},43:function(e,t,n){"use strict";n.r(t);var o=n(7),c=n.n(o),s=n(23),r=n.n(s),a=n(0),i=n(1),u=n(2),l=n(3),_=n(9),d=n(15),f=n(6),p=n(19),m=n(26),v=n(25),b=["value","index","index_is_selected","onMouseEnter","onMouseLeave","onMouseClick"];function k(e){var t=c.a.useState(!1),n=Object(f.a)(t,2),o=n[0],s=n[1];var r=e.value,a=e.index,i=e.index_is_selected,u=(e.onMouseEnter,e.onMouseLeave,e.onMouseClick),l=Object(d.a)(e,b),_=i()==a;return c.a.createElement("span",null,c.a.createElement(m.a,Object.assign({},l,{type:"underline",onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},onClick:function(){return function(e,t){t(e)}(a,u)},show:_||o}),r)," \xa0")}function y(e){var t=e.values,n=e.query_is_selected,s=e._props,r=e.set_my_hook,a=c.a.useState(0),i=Object(f.a)(a,2),u=i[0],l=(i[1],c.a.useRef(null));function d(e){var t=p(),n=t.get(e);console.log(t),console.log(n),n&&n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}function p(){return l.current||(l.current=new v.Map),l.current}var m=t.map((function(e,t){var o=Object(_.a)({value:e,index:t,index_is_selected:function(){return n()}},s);return c.a.createElement("span",{key:t,ref:function(e){!function(e,t){var n=p();e&&n.set(t,e)}(e,t)}},c.a.createElement(k,o))}));return Object(o.useEffect)((function(){r(d)}),[u]),c.a.createElement("span",null,m)}var h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isFocused:!1,is_selected:-1,my_callback:function(e){}},e.get_is_selected=function(){return e.state.is_selected},e.set_is_selected=function(t){t>=0&&(e.state.my_callback(e.state.is_selected),e.setState({is_selected:t}))},e.set_my_hook=function(t){e.setState({my_callback:t})},e.onClicked=function(t){e.setState((function(e){return{is_selected:t}}),(function(){p.a.setComponentValue(e.state.is_selected)}))},e.render=function(){var t=e.props.args.name;e.props.args.selected_index!=e.state.is_selected&&e.set_is_selected(e.props.args.selected_index);var n=e.props.theme,o={};if(n){var s="1px solid ".concat(e.state.isFocused?n.primaryColor:"gray");o.border=s,o.outline=s}var r=t,a={animate:!1,strokeWidth:2,iterations:1,multiline:!0,onMouseClick:e.onClicked};return c.a.createElement(y,{values:r,query_is_selected:e.get_is_selected,_props:a,set_my_hook:e.set_my_hook})},e}return Object(a.a)(n)}(p.b),E=Object(p.c)(h);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.35daa990.chunk.js.map