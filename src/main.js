import React from 'react';
import {FloatingButtonContainer, FloatingButtonMain, FloatingButtonChildren} from './parts/floatingButton';

var Main = React.createClass({
  actionChildren1(){
    console.log('actionChildren1');
  },
  actionChildren2(){
    console.log('actionChildren2');
  },
  //floatButtonSetting please only touch buttonDistance,speed
  FBS:{
    //autoSetting please don't touch
    showFlag:false,
    isFirst : true,
    tag : {},
    target : {},
    top : 0,
    childrenLength : 0,
    //userSetting
    buttonDistance : 80,
    speed :500
  },
  actionFloatButton(event){
    if(this.FBS.isFirst){
      this.FBS.isFirst = false
      this.FBS.tag = event.currentTarget
      this.FBS.target = $(this.FBS.tag);
      this.FBS.top
        = this.FBS.target.offset().top;
      this.FBS.childrenLength
        = this.FBS.tag.parentNode.childNodes.length;
    }

    var count = 1;

    if(!this.FBS.showFlag){
      this.FBS.showFlag = true;

      for(count ; count < this.FBS.childrenLength; count++){
        var targetTop = this.FBS.top - this.FBS.buttonDistance * count;
        var child = this.FBS.tag.parentNode.childNodes[count];

        $(child).css('top',$(child).offset().top).css('z-index',100-count);

        $(child).stop().animate({
            'top':targetTop
        }, this.FBS.speed);
      }
      this.FBS.target
        .css('transition','all 0.3s')
        .css('transform','rotateZ(-45deg)');
    }
    else{
      this.FBS.showFlag = false;

      for(count ; count < this.FBS.childrenLength; count++){
        $(this.FBS.tag.parentNode.childNodes[count]).stop().animate({
            'top':this.FBS.top
        }, this.FBS.speed);
      }
      this.FBS.target.css('transition','all 0.3s').css('transform','rotateZ(0deg)');
    }
  },
  render(){
    return(
      <div>
        <div id='floatingPostion' style={{width:1,height:1,position:'fixed',bottom:200,right:200}}></div>

        <FloatingButtonContainer targetId='floatingPostion'>
          <FloatingButtonMain
            style={{width:60,height:60,fontSize:30}} onClick={this.actionFloatButton} ></FloatingButtonMain>
          <FloatingButtonChildren
            style={{width:60,height:60,fontSize:30}}
            iconClass='fa fa-bolt' onClick={this.actionChildren1}
            ></FloatingButtonChildren>
            <FloatingButtonChildren
              style={{width:60,height:60,fontSize:30}} iconClass='fa fa-eye' onClick={this.actionChildren2}
              ></FloatingButtonChildren>
        </FloatingButtonContainer>
      </div>
    );
  }
})
