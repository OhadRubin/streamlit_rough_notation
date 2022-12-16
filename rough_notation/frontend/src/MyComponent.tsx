import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import { RoughNotation } from "react-rough-notation";
import { Map } from "typescript";
import { useState, useEffect } from 'react';

interface State {
  isFocused: boolean
  is_selected: number
  my_callback: any
}

function MyRoughNotation(props: any){
  const [is_hovering_bool, setIsHovering] = React.useState(false);
    function _onMouseClick(index: any, onMouseClick: any){
      onMouseClick(index);
    }
  const {
    value: value,
    index: index,
    index_is_selected: index_is_selected,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onMouseClick: onMouseClick,
    ...rest
  } = props;
    
    const _index_is_selected = index_is_selected()==index;
    return (<span>
      <RoughNotation {...rest} type='underline'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => _onMouseClick(index, onMouseClick)}
        show={_index_is_selected || is_hovering_bool} >
        {value}

      </RoughNotation> &nbsp; 
       </span >
    )   
  }    


export function HigherFunc(props:any) {
  const { values: values, query_is_selected: query_is_selected, _props: _props, set_my_hook: set_my_hook } = props;
  const [has_set_hook, setHook] = React.useState(0);
  const itemsRef:any = React.useRef(null);
  function scrollToId(itemId: any) {
    const map = getMap();
    const node:any = map.get(itemId);
    console.log(map);
    console.log(node);
    if (node) {
      node.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    }
    
  }
  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }
  function buildRef(node: any, index: any) {
    console.log("ref called with index=" + index);
    const map = getMap();
    if (node) {
      map.set(index, node);
    }
  }
  function set_ref(index:any,node: any) {{
      
      getMap().set(index, node);
    }
  }
  const _func = (value: string, index: any) => {
    const rest = {
      value: value,
      index: index,
      index_is_selected: () => query_is_selected(),
      ..._props
    };
    return (
      <span key={index}
        ref={(node: any) => { buildRef(node, index); }}>

        <MyRoughNotation {...rest}/>
      </span>
    )
  };
  const res = values.map(_func)
  
  useEffect(() => {
    set_my_hook(scrollToId);}, [has_set_hook]

  );

  return (<span>{res}</span>)
}




class MyComponent extends StreamlitComponentBase<State> {
  public state = {
    isFocused: false, is_selected: -1, my_callback: (i: any) => { }     
    }; 
  


  private get_is_selected = () => {
    return this.state.is_selected;
  }
  private set_is_selected = (i: any) => {
    if (i >= 0) {
      this.state.my_callback(this.state.is_selected);
      this.setState({ is_selected: i });
      console.log("set_is_selected with parameter i=" + i)
    }
  }
  private set_my_hook = (setIDX: any) => {
    this.setState({ my_callback: setIDX });
  }
  private onClicked = (i: any) => {
    
    this.setState(
      prevState => ({ is_selected: i }),
      () => {
        
        Streamlit.setComponentValue(this.state.is_selected);
      }
    )
    // this.state.my_callback(this.state.is_selected);
  }
  public render = (): ReactNode => {

    const name = this.props.args["name"]
    this.set_is_selected(this.props.args["selected_index"])

    const { theme } = this.props
    const style: React.CSSProperties = {}

    if (theme) {
      const borderStyling = `1px solid ${
        this.state.isFocused ? theme.primaryColor : "gray"
      }`
      style.border = borderStyling
      style.outline = borderStyling
    }
    
    
    const values: any = name;
    const props = {
      animate: false,
      strokeWidth: 2,
      iterations:1,
      multiline:true,
      onMouseClick: this.onClicked,
    };
    
    
    return <HigherFunc values={values} query_is_selected={this.get_is_selected} _props={props} set_my_hook={this.set_my_hook}></HigherFunc>;

  }

}

export default withStreamlitConnection(MyComponent)
