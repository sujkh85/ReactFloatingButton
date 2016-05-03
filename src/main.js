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
        else if('right' === this.FBS.effect){
          location = this.FBS.left - this.FBS.buttonDistance * count;
          child = this.FBS.tag.parentNode.childNodes[count];
          $(child).css('left',$(child).offset().left).css('z-index',100-count);
          //effect up down
          $(child).stop().animate({
              'left':location
          }, this.FBS.speed);
        }
        else if('left' === this.FBS.effect){
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
    return(
      <div>
        <div id='floatingPostion' style={{width:1,height:1,position:'fixed',bottom:200,right:200}}></div>

        <FloatingButtonContainer targetId='floatingPostion'>
          <FloatingButtonMain
            style={this.FBS.buttonStyle} onClick={this.actionFloatButton} ></FloatingButtonMain>
          <FloatingButtonChildren
            style={this.FBS.buttonStyle}
            iconClass='fa fa-bolt' onClick={this.actionChildren1}
            ></FloatingButtonChildren>
            <FloatingButtonChildren
              style={this.FBS.buttonStyle} iconClass='fa fa-eye' onClick={this.actionChildren2}
              ></FloatingButtonChildren>
        </FloatingButtonContainer>
      </div>
    );
  }
})
