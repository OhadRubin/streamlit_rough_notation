(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{24:function(e,t,n){e.exports=n(32)},32:function(e,t,n){"use strict";n.r(t);var s=n(9),o=n.n(s),r=n(21),i=n.n(r),a=n(8),c=n(15),l=n(0),u=n(1),d=n(2),_=n(3),p=n(19),v=n(23),m=["value","index","index_is_selected","onMouseEnter","onMouseLeave","onMouseClick"],f=function(e){Object(d.a)(n,e);var t=Object(_.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).node=void 0,s._onMouseClick=function(e,t){s.setState({is_selected:!0}),t(e)},s.state={is_hovering:!1,is_selected:!1},s.node=null,s}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=this.state.is_hovering,s=(t.value,t.index),r=t.index_is_selected,i=(t.onMouseEnter,t.onMouseLeave,t.onMouseClick),a=Object(c.a)(t,m),l=r()==s;return l&&this.node&&this.node.scrollIntoView({behavior:"smooth",block:"center"}),o.a.createElement("span",null,o.a.createElement(v.a,Object.assign({},a,{type:"underline",onMouseEnter:function(){return e.setState({is_hovering:!0})},onMouseLeave:function(){return e.setState({is_hovering:!1})},onClick:function(){return e._onMouseClick(s,i)},show:l||n}))," \xa0  ",o.a.createElement("div",{ref:function(t){return e.node=t}}),"  ")}}]),n}(o.a.Component),h=function(e){Object(d.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={numClicks:0,isFocused:!1,is_hovering:-1,is_selected:-1},e.get_is_selected=function(){return e.state.is_selected},e.set_is_selected=function(t){t>=0&&e.setState({is_selected:t})},e.render=function(){var t=e.props.args.name;e.set_is_selected(e.props.args.selected_index);var n=e.props.theme,s={};if(console.log("rerendered"),n){var r="1px solid ".concat(e.state.isFocused?n.primaryColor:"gray");s.border=r,s.outline=r}var i=t,c={animate:!1,strokeWidth:2,iterations:1,multiline:!0,onMouseClick:e.onClicked};return i.map((function(t,n){var s=Object(a.a)({value:t,index:n,index_is_selected:function(){return e.get_is_selected()}},c);return o.a.createElement(f,s)}))},e.onClicked=function(t){e.setState((function(e){return{is_selected:t}}),(function(){return p.a.setComponentValue(e.state.is_selected)}))},e}return Object(u.a)(n)}(p.b),b=Object(p.c)(h);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.da0426b3.chunk.js.map