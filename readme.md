Demo
--------
[jsFiddle - http://jsfiddle.net/eu81273/b9Pnw/](https://jsfiddle.net/sujkh/wdL4bL46/2/)

Start
----------
    git clone https://github.com/sujkh85/ReactFloatingButton.git
    cd ReactFloatingButton
    npm install
    npm start


Dependencies
----------
[jquery@1.12.3 or jquery@2.2.3](https://jquery.com/)

[react@0.14.8](https://facebook.github.io/react/index.html)

[Font-Awesome](https://fortawesome.github.io/Font-Awesome)

Use
-----------
    if you use react-float-button in project
    please use src/floatingButton.js and src/main.js

Custom
---------
if you want custom

###FontIcon###

select icon in [Font-Awesome](https://fortawesome.github.io/Font-Awesome/icons/)

    ex)
    <FloatingButtonChildren iconClass='fa fa-eye' />


###Style###

change button size, button color, icon size is possible.

style in FloatingButtonMain or FloatingButtonChildren

    <FloatingButtonChildren
      style={{width:60,height:60,fontSize:30}} iconClass='fa fa-eye'/>

###FloatButtonSetting###

can button distance setting

    FBS:{
      buttonDistance : 80,  
    },

animation speed

    FBS:{
      speed : 500,  
    },

buttonStyle

    FBS:{
      buttonStyle:{
        width:60,
        height:60,
        fontSize:30
      },
    },

animation direction  (up down left right)

    FBS:{
      effect : 'up',  
    },

Image
-----
![img](https://github.com/sujkh85/ReactFloatButton/blob/master/demo.png?raw=true)
![img2](https://github.com/sujkh85/ReactFloatButton/blob/master/demo2.png?raw=true)
