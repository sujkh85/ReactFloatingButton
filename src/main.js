import React from 'react';
import {FloatingButtonContainer, FloatingButtonMain, FloatingButtonChildren} from './parts/floatingButton';

var Main = React.createClass({
  actionChildren1(){
    console.log('actionChildren1');
  },
  actionChildren2(){
    console.log('actionChildren2');
  },
  showFloatButtonFlag:false,
  actionFloatButton(event){
    const tag = event.currentTarget
    const target = $(tag);
    const top = target.offset().top;
    const childrenLength = tag.parentNode.childNodes.length;
    //setting
    const buttonDistance = 80;
    const childrenCorrection = 10;
    var count = 1;

    if(!this.showFloatButtonFlag){
      this.showFloatButtonFlag = true;

      for(count ; count < childrenLength; count++){
        var targetTop = top - buttonDistance * count;
        var child = tag.parentNode.childNodes[count];
        //top속성이 없기 때문에 부여한다.메인버튼zIndex는 100
        $(child).css('top',$(child).offset().top).css('z-index',100-count);

        $(tag.parentNode.childNodes[count]).stop().animate({
            'top':targetTop
        }, 300);
      }
      target.css('transition','all 0.3s').css('transform','rotateZ(-45deg)');
    }
    else{
      this.showFloatButtonFlag = false;

      for(count ; count < childrenLength; count++){
        $(tag.parentNode.childNodes[count]).stop().animate({
            'top':top +childrenCorrection
        }, 500);
      }
      target.css('transition','all 0.3s').css('transform','rotateZ(0deg)');
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
