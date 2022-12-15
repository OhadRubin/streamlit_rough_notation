import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import { RoughNotation } from "react-rough-notation";
import { Map } from "typescript";

interface State {
  numClicks: number
  isFocused: boolean
  is_hovering: number
  is_selected: number
}
// here we need to modify to add the _ref
class MyRoughNotation extends React.Component<{}, { is_hovering: boolean, is_selected: boolean}> {
  constructor(props:any) {
    super(props);
    this.state = {
      is_hovering: false, is_selected: false
    };
  }
  private _onMouseClick = (index: any, onMouseClick: any) => {
    
    this.setState({ is_selected: true });
    onMouseClick(index);
  }
  // componentDidMount() {
  //   // Check if the `node` property is not null before calling the
  //   // `scrollIntoView` method.
  //   if (this.state.is_selected){
  //     if (this.myRef) {
  //       this.myRef.scrollIntoView();
  //     }
  //   }
  // }
  render() {
    const props:any = this.props;
    const is_hovering = this.state.is_hovering;
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
    // this.setState({ is_selected: _index_is_selected });
    
    // if (_index_is_selected){
    //   console.log(this.myRef);
    //   // this.myRef.current.focus();  
    //   this.myRef.current.scrollIntoView({ behavior: "auto", block: "center", inline: "center" });
    // }


    

    
    return (<span>
      <RoughNotation {...rest} type='underline'
        onMouseEnter={() => this.setState({ is_hovering: true })}
        onMouseLeave={() => this.setState({ is_hovering: false })}
        onClick={() => this._onMouseClick(index, onMouseClick)}
        show={_index_is_selected || is_hovering} >
        {value}

      </RoughNotation> &nbsp; 
       </span >
    )   
  }    
}


class MyComponent extends StreamlitComponentBase<State> {
  // ref_list: React.Ref = [];
  // public itemsRef =  React.useRef(null) 
  public state = { numClicks: 0, isFocused: false, is_hovering: -1, is_selected: -1, 
    // itemsRef: React.useRef(new Map()) 
     
    }; 
  

  // public scrollToId(itemId: any) {
  //   const node = this.getMap().get(itemId);
  //   node.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'nearest',
  //     inline: 'center'
  //   });
  // }
  // public getMap(){
  //   // this.itemsRef.current.
  //   return this.state.itemsRef.current;
  // }
  // public buildRef(node: any, index: any) {
  //   let map = this.getMap()
  //   if (node) {
  //     map.set(index, node);
  //   } else {
  //     map.delete(index);
  //   }
  // }

  private get_is_selected = () => {
    return this.state.is_selected;
  }
  private set_is_selected = (i: any) => {
    if (i >= 0) {
      this.setState({ is_selected: i });
      // this.scrollToId(i);
    }

  }
  public render = (): ReactNode => {

    const name = this.props.args["name"]
    this.set_is_selected(this.props.args["selected_index"])

    // Streamlit sends us a theme object via props that we can use to ensure
    // that our component has visuals that match the active theme in a
    // streamlit app.
    const { theme } = this.props
    const style: React.CSSProperties = {}
    console.log("rerendered");

    // Maintain compatibility with older versions of Streamlit that don't send
    // a theme object.
    if (theme) {
      // Use the theme object to style our button border. Alternatively, the
      // theme style is defined in CSS vars.
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



    const func = (value: string, index: any) => 
    {
      const rest = {
        value: value,
        index: index,
        index_is_selected: () => this.get_is_selected() ,
         ...props 
      };
      return (
        <MyRoughNotation {...rest} 
          // key={index} 
          // ref={(node) => this.buildRef(node, index)}
        />
    )};
    
    return values.map(func);
  }

  private onClicked = (i: any) => {
    this.setState(
      prevState => ({ is_selected: i }),
      () => {
        Streamlit.setComponentValue(this.state.is_selected);
      }
    )
  }
}

export default withStreamlitConnection(MyComponent)
