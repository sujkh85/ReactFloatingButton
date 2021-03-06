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
  componentDidMount(){
    this.FBS = Object.assign({}, this.FBS, this.props.FBS);
  },
  //floatButtonSetting
  FBS:{
    //autoSetting please don't touch
    showFlag:false,
    isFirst : true,
    tag : {},
    target : {},
    top : 0,
    left : 0,
    childrenLength : 0,
    //userSetting
    buttonDistance : 80,
    speed :500,
    buttonStyle:{
      width:60,
      height:60,
      fontSize:30
    },
    labelSetting:{
      labelStyle:{color:'#4dd0e1'},
      labelPostion:'left',
      labelDistance:130
    },
    //up down right left effect
    effect:'up'
  },
  actionFloatButton(event){
    if(this.FBS.isFirst){
      this.FBS.isFirst = false
      this.FBS.tag = event.currentTarget
      this.FBS.target = $(this.FBS.tag);
      this.FBS.top
        = this.FBS.target.offset().top;
      this.FBS.left = this.FBS.target.offset().left;
      this.FBS.childrenLength
        = this.FBS.tag.parentNode.childNodes.length;
    }

    var count = 1;

    //
    if(!this.FBS.showFlag){
      this.FBS.showFlag = true;

      for(count ; count < this.FBS.childrenLength; count++){
        //effect up
        var location ={};
        var child ={};
        if('up' === this.FBS.effect){

          location = this.FBS.top - this.FBS.buttonDistance * count;
          child = this.FBS.tag.parentNode.childNodes[count];
          $(child).css('top',$(child).offset().top).css('z-index',100-count);
          //effect up down
          $(child).stop().animate({
              'top':location
          }, this.FBS.speed);
        }
        else if('down' === this.FBS.effect){

          location = this.FBS.top + this.FBS.buttonDistance * count;
          child = this.FBS.tag.parentNode.childNodes[count];
          $(child).css('top',$(child).offset().top).css('z-index',100-count);
          //effect up down
          $(child).stop().animate({
              'top':location
          }, this.FBS.speed);
        }
        else if('left' === this.FBS.effect){
          location = this.FBS.left - this.FBS.buttonDistance * count;
          child = this.FBS.tag.parentNode.childNodes[count];
          $(child).css('left',$(child).offset().left).css('z-index',100-count);
          //effect up down
          $(child).stop().animate({
              'left':location
          }, this.FBS.speed);
        }
        else if('right' === this.FBS.effect){
          location = this.FBS.left + this.FBS.buttonDistance * count;
          child = this.FBS.tag.parentNode.childNodes[count];
          $(child).css('left',$(child).offset().left).css('z-index',100-count);
          //effect up down
          $(child).stop().animate({
              'left':location
          }, this.FBS.speed);
        }



      }
      this.FBS.target
        .css('transition','all 0.3s')
        .css('transform','rotateZ(-45deg)');
    }
    else{
      this.FBS.showFlag = false;
      if('up' === this.FBS.effect || 'down' === this.FBS.effect){
        for(count ; count < this.FBS.childrenLength; count++){
          $(this.FBS.tag.parentNode.childNodes[count]).stop().animate({
              'top':this.FBS.top
          }, this.FBS.speed);
        }
      }
      else if('right' === this.FBS.effect || 'left' === this.FBS.effect){
        for(count ; count < this.FBS.childrenLength; count++){
          $(this.FBS.tag.parentNode.childNodes[count]).stop().animate({
              'left':this.FBS.left
          }, this.FBS.speed);
        }
      }

      this.FBS.target.css('transition','all 0.3s').css('transform','rotateZ(0deg)');
    }
  },
  render(){
    //default style
    var styles = {width:90,height:90,backgroundColor:'#4dd0e1',position:'fixed',zIndex:100,borderRadius:'50%',display:'table',color:'white',fontSize:40,boxShadow: '10px 10px 20px 5px grey'}
    //changed style
    var doneStyles = Object.assign({}, styles, this.props.style);
    //default icon
    var iconClass = this.props.iconClass || 'fa fa-plus';

    return(
      <div style={doneStyles} onClick={this.actionFloatButton} className={this.props.className}>
        <div style={{display:'table-cell',verticalAlign:'middle',textAlign:'center'}}>
          <i className={iconClass} aria-hidden="true"></i>
        </div>
      </div>
    );
  }
})

export var FloatingButtonChildren = React.createClass({
  over(event){
    //console.log(event.target.parentNode);
    //const target = $(event.target.parentNode.parentNode);
    const children = event.target.parentNode.parentNode.lastChild;


    if('right' === this.props.labelPostion){
      $(children).css('left',$(event.target).offset().left + this.props.labelDistance).css('top',$(event.target).offset().top).css('display','block')
    }
    else if('left' === this.props.labelPostion){
      $(children).css('left',$(event.target).offset().left - this.props.labelDistance).css('top',$(event.target).offset().top).css('display','block')
    }
    else if('up' === this.props.labelPostion){
      $(children).css('top',$(event.target).offset().top + this.props.labelDistance).css('left',$(event.target.parentNode.parentNode).offset().left).css('display','block')
    }
    else if('down' === this.props.labelPostion){
      $(children).css('top',$(event.target).offset().top - this.props.labelDistance).css('left',$(event.target.parentNode.parentNode).offset().left).css('display','block')
    }
  },
  out(event){
    const children = event.target.parentNode.parentNode.lastChild;
    $(children).css('display','none');
  },
  render(){
    //default style
    var styles = {width:90,height:90,backgroundColor:'#4dd0e1',position:'fixed',zIndex:1,borderRadius:'50%',display:'table',color:'white',fontSize:40,boxShadow: '10px 10px 20px 5px grey'}
    //changed style
    var doneStyles = Object.assign({}, styles, this.props.style);

    //default labelStyles
    var labelStyles = {
      display:'none',
      color:'#4dd0e1',
      position:'fixed',
      boxShadow: '10px 10px 20px 5px grey',
      border:'5px solid white',
      borderRadius:10,
      height:30,
      width:120,
      textAlign:'center'
    }

    var doneLabelStyles = Object.assign({}, labelStyles, this.props.labelStyle);
    //default icon
    var iconClass = this.props.iconClass || 'fa fa-bolt';

    return(
        <div style={doneStyles} onClick={onClick={this.props.onClick} className={this.props.className} >
          <div style={{display:'table-cell',verticalAlign:'middle',textAlign:'center'}}>
            <i className={iconClass}
              aria-hidden="true"
              onMouseOver={this.over} onMouseOut={this.out}></i>
          </div>
          <div style={doneLabelStyles}>{this.props.label}</div>
        </div>
    );
  }
})
