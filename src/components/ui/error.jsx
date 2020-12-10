import React,{Component} from "react"
import {Transition,Icon} from 'semantic-ui-react'
 export default class Error extends Component{
    constructor(props){
        super(props);
        this.state ={
            text:'',
            display:false,
            animation:'jiggle'
        }
    }
    componentWillReceiveProps(nextProps){
           if(nextProps.display){
            this.setState({text:nextProps.text,display:true,animation:'jiggle' },()=>{
                setTimeout(() => {
                    this.setState({display:false,animation:"swing down"})
                    }, 3000);
            })
           }
        
    }
    // componentDidMount(){
    //     if(this.props.text){
    //         this.setState({text:this.props.text,display:this.props.display },()=>{
              
    //         })
    //        }
    // }
    render(){
        var {display,text,animation} = this.state
        return(
            <Transition visible={display} animation={animation} duration={500}>
            <div className="x-error">
              <div>
                <Icon name='exclamation circle' />
              </div>
              <div className="text">
                <h4>Error</h4>
               {text}
              </div>
            </div>
          </Transition>
  )
    }
  }