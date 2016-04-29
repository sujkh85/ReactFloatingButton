

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
    const buttonDistance = 80;

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
            'top':top +10
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

/*components*/
var FloatingButtonContainer = React.createClass({
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

var FloatingButtonMain = React.createClass({

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

var FloatingButtonChildren = React.createClass({
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


ReactDOM.render(<Main/>, document.getElementById('app'));
