

var Main = React.createClass({
  actionChildren1(){
    console.log('actionChildren1');
  },
  actionChildren2(){
    console.log('actionChildren2');
  },
  //floatButtonSetting
  FBS:{
    showFlag:false,
    isFirst : true,
    tag : {},
    target : {},
    top : 0,
    childrenLength : 0,
    buttonDistance : 80,

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

    if(!this.showFloatButtonFlag){
      this.floatButtonSetting.showFlag = true;

      for(count ; count < this.FBS.childrenLength; count++){
        var targetTop = this.FBS.top - this.FBS.buttonDistance * count;
        var child = this.FBS.tag.parentNode.childNodes[count];
        //top속성이 없기 때문에 부여한다.메인버튼zIndex는 100
        $(child).css('top',$(child).offset().top).css('z-index',100-count);

        $(child).stop().animate({
            'top':targetTop
        }, 300);
      }
      this.FBS.target
        .css('transition','all 0.3s')
        .css('transform','rotateZ(-45deg)');
    }
    else{
      this.floatButtonSetting.showFlag = false;

      for(count ; count < this.FBS.childrenLength; count++){
        $(this.FBS.tag.parentNode.childNodes[count]).stop().animate({
            'top':this.FBS.top
        }, 500);
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
