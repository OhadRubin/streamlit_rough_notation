(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{24:function(e,t,n){e.exports=n(32)},32:function(e,t,n){"use strict";n.r(t);var s=n(9),i=n.n(s),r=n(21),o=n.n(r),a=n(8),c=n(15),u=n(0),l=n(1),d=n(2),_=n(3),p=n(19),v=n(23),m=["value","index","index_is_selected","onMouseEnter","onMouseLeave","onMouseClick"],f=function(e){Object(d.a)(n,e);var t=Object(_.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e))._onMouseClick=function(e,t){s.setState({is_selected:!0}),t(e)},s.state={is_hovering:!1,is_selected:!1},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=this.state.is_hovering,s=t.value,r=t.index,o=t.index_is_selected,a=(t.onMouseEnter,t.onMouseLeave,t.onMouseClick),u=Object(c.a)(t,m),l=o()==r;return i.a.createElement("span",null,i.a.createElement(v.a,Object.assign({},u,{type:"underline",onMouseEnter:function(){return e.setState({is_hovering:!0})},onMouseLeave:function(){return e.setState({is_hovering:!1})},onClick:function(){return e._onMouseClick(r,a)},show:l||n}),s)," \xa0")}}]),n}(i.a.Component),h=function(e){Object(d.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numClicks:0,isFocused:!1,is_hovering:-1,is_selected:-1},e.get_is_selected=function(){return e.state.is_selected},e.set_is_selected=function(t){t>=0&&e.setState({is_selected:t})},e.render=function(){var t=e.props.args.name;e.set_is_selected(e.props.args.selected_index);var n=e.props.theme,s={};if(console.log("rerendered"),n){var r="1px solid ".concat(e.state.isFocused?n.primaryColor:"gray");s.border=r,s.outline=r}var o=t,c={animate:!1,strokeWidth:2,iterations:1,multiline:!0,onMouseClick:e.onClicked};return o.map((function(t,n){var s=Object(a.a)({value:t,index:n,index_is_selected:function(){return e.get_is_selected()}},c);return i.a.createElement(f,s)}))},e.onClicked=function(t){e.setState((function(e){return{is_selected:t}}),(function(){p.a.setComponentValue(e.state.is_selected)}))},e}return Object(l.a)(n)}(p.b),b=Object(p.c)(h);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.da40dd9f.chunk.js.map