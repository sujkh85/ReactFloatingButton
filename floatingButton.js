import React from 'react';

export var FloatingButtonContainer = React.createClass({
  getInitialState() {
    return {
      position: {
        top:0,
        left:0
      }
    };
  },
  componentDidMount(){
    var targetId = this.props.targetId;
    var position = $('#'+targetId).offset();
    this.setState({
      position:position
    })
  },
  //targetId
  render(){
    return(
      <div style={{position:'fixed',top:this.state.position.top,left:this.state.position.left}}>
      {this.props.children}
      </div>
    );
  }
})

export var FloatingButtonMain = React.createClass({

  render(){
    //default style
    var styles = {width:90,height:90,backgroundColor:'#4dd0e1',position:'fixed',zIndex:100,borderRadius:'50%',display:'table',color:'white',fontSize:40,boxShadow: '10px 10px 20px 5px grey'}
    //changed style
    var doneStyles = Object.assign({}, styles, this.props.style);
    //default icon
    var iconClass = this.props.iconClass || 'fa fa-plus';

    return(
      <div style={doneStyles} onClick={this.props.onClick} className={this.props.className}>
        <div style={{display:'table-cell',verticalAlign:'middle',textAlign:'center'}}>
          <i className={iconClass} aria-hidden="true"></i>
        </div>
      </div>
    );
  }
})

export var FloatingButtonChildren = React.createClass({
  render(){
    //default style
    var styles = {width:90,height:90,backgroundColor:'#4dd0e1',position:'fixed',zIndex:1,borderRadius:'50%',display:'table',color:'white',fontSize:40,boxShadow: '10px 10px 20px 5px grey'}
    //changed style
    var doneStyles = Object.assign({}, styles, this.props.style);
    //default icon
    var iconClass = this.props.iconClass || 'fa fa-bolt';

    return(
      <div style={doneStyles} onClick={this.props.onClick} className={this.props.className}>
        <div style={{display:'table-cell',verticalAlign:'middle',textAlign:'center'}}>
          <i className={iconClass} aria-hidden="true"></i>
        </div>
      </div>
    );
  }
})
