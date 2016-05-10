import React from 'react';
import {FloatingButtonContainer, FloatingButtonMain, FloatingButtonChildren} from './parts/floatingButton';

var Main = React.createClass({
  actionChildren1(){
    console.log('actionChildren1');
  },
  actionChildren2(){
    console.log('actionChildren2');
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
    //up down right left effect
    effect:'up'
  },
  render(){
    return(
      <div>
        <div id='floatingPostion' style={{width:1,height:1,position:'fixed',bottom:200,right:200}}></div>

          <FloatingButtonContainer targetId='floatingPostion'>
            <FloatingButtonMain
              style={this.FBS.buttonStyle} onClick={this.actionFloatButton}
              FBS={this.FBS}
              />
            <FloatingButtonChildren
              style={this.FBS.buttonStyle}
              iconClass='fa fa-cog' onClick={this.actionChildren1}
              label='Setting'
              labelStyle={this.FBS.labelSetting.labelStyle}
              labelPostion={this.FBS.labelSetting.labelPostion}
              labelDistance={this.FBS.labelSetting.labelDistance}
              />
            <FloatingButtonChildren
              style={this.FBS.buttonStyle} iconClass='fa fa-wrench' onClick={this.actionChildren2}
              label='Ranch'
              labelStyle={this.FBS.labelSetting.labelStyle}
              labelPostion={this.FBS.labelSetting.labelPostion}
              labelDistance={this.FBS.labelSetting.labelDistance}
              />
          </FloatingButtonContainer>
      </div>
    );
  }
})
