(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mobile-loopCountDown"],{"013a":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-countdown[data-v-19d52df4]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-countdown-item[data-v-19d52df4]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?2?%;-webkit-border-radius:%?6?%;border-radius:%?6?%;white-space:nowrap;-webkit-transform:translateZ(0);transform:translateZ(0)}.u-countdown-time[data-v-19d52df4]{margin:0;padding:0;line-height:1}.u-countdown-colon[data-v-19d52df4]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?5?%;line-height:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?4?%}.u-countdown-scale[data-v-19d52df4]{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center center;transform-origin:center center}',""]),t.exports=e},"1b25":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-line[data-v-4c063dd6]{vertical-align:middle}',""]),t.exports=e},3951:function(t,e,i){"use strict";i.r(e);var n=i("eb4c"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"41d2":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uCountDown:i("fd6b").default,uLine:i("e5fc").default,uIcon:i("6b1a").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"main"},[i("u-count-down",{ref:"countDown",staticStyle:{display:"none"},attrs:{timestamp:t.countDownTime},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},end:function(e){arguments[0]=e=t.$handleEvent(e),t.end.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"currentTitle"},[t._v(t._s(t.currentTitle))]),i("span",{staticClass:"loopTimerLeftTimeText"},[t._v(t._s(t.showTime))]),i("u-line",{attrs:{color:"gray",length:"75%",margin:"30rpx auto","hair-line":!1}}),i("v-uni-view",{staticClass:"nextTimerInfo"},[i("v-uni-view",{staticClass:"infoBox"},[i("v-uni-view",{staticClass:"info"},[t._v(t._s(t.leftStep))]),i("v-uni-view",{staticClass:"description"},[t._v("剩余次数")])],1),i("v-uni-view",{staticClass:"infoBox"},[i("v-uni-view",{staticClass:"info"},[t._v(t._s(t.nextTitle))]),i("v-uni-view",{staticClass:"description"},[t._v("下个步骤名称")])],1),i("v-uni-view",{staticClass:"infoBox"},[i("v-uni-view",{staticClass:"info"},[t._v(t._s(t.nextShowTime))]),i("v-uni-view",{staticClass:"description"},[t._v("下个步骤时长")])],1)],1)],1),i("v-uni-view",{staticClass:"buttonGroup"},[0==t.isPaused?i("v-uni-view",{staticClass:"buttonGroup"},[i("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.restart.apply(void 0,arguments)}}},[i("u-icon",{attrs:{name:"reload",size:"50"}})],1),i("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pause.apply(void 0,arguments)}}},[i("u-icon",{attrs:{name:"pause",size:"50"}})],1),i("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nextStep.apply(void 0,arguments)}}},[i("u-icon",{attrs:{name:"arrow-rightward",size:"50"}})],1)],1):i("v-uni-view",{staticClass:"buttonGroup"},[i("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goOn.apply(void 0,arguments)}}},[i("u-icon",{attrs:{name:"play-right-fill",size:"50"}})],1),i("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goback.apply(void 0,arguments)}}},[i("u-icon",{attrs:{name:"close",size:"50",color:"red"}})],1)],1)],1)],1)},r=[]},"456f":function(t,e,i){"use strict";i.r(e);var n=i("41d2"),o=i("3951");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("6d8c");var s,a=i("f0c5"),u=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"b3c3d7f0",null,!1,n["a"],s);e["default"]=u.exports},"4c45":function(t,e,i){"use strict";i.r(e);var n=i("e6d5"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"4c86":function(t,e,i){"use strict";var n=i("5339"),o=i.n(n);o.a},5339:function(t,e,i){var n=i("013a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("660790ba",n,!0,{sourceMap:!1,shadowMode:!1})},"56b3":function(t,e,i){"use strict";var n=i("92d1"),o=i.n(n);o.a},6947:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-countdown"},[t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:[t.letterStyle]},[t._v(t._s(t.d))])],1):t._e(),t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"天"))]):t._e(),t.showHours?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.h))])],1):t._e(),t.showHours?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"时"))]):t._e(),t.showMinutes?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.i))])],1):t._e(),t.showMinutes?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"分"))]):t._e(),t.showSeconds?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.s))])],1):t._e(),t.showSeconds&&"zh"==t.separator?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v("秒")]):t._e()],1)},r=[]},"6d8c":function(t,e,i){"use strict";var n=i("7c9e"),o=i.n(n);o.a},"6e83":function(t,e,i){"use strict";i.r(e);var n=i("c296"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"7c9e":function(t,e,i){var n=i("9786");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("5d9e3359",n,!0,{sourceMap:!1,shadowMode:!1})},"92d1":function(t,e,i){var n=i("1b25");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("7e80a838",n,!0,{sourceMap:!1,shadowMode:!1})},9786:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".main[data-v-b3c3d7f0]{position:absolute;top:15%;width:100%}.buttonGroup[data-v-b3c3d7f0]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;margin-top:%?150?%;bottom:10%;position:absolute}.buttonGroup .button[data-v-b3c3d7f0]{border:1px solid #f1f1f1;width:%?90?%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-border-radius:50%;border-radius:50%;color:#2283f6;-webkit-box-shadow:0 %?7?% %?10?% rgba(0,0,0,.19);box-shadow:0 %?7?% %?10?% rgba(0,0,0,.19)}.loopTimerLeftTimeText[data-v-b3c3d7f0]{font-size:%?150?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.nextTimerInfo[data-v-b3c3d7f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;margin-top:%?50?%}.nextTimerInfo .infoBox[data-v-b3c3d7f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.nextTimerInfo .infoBox .info[data-v-b3c3d7f0]{font-size:%?60?%}.nextTimerInfo .infoBox .description[data-v-b3c3d7f0]{font-size:%?30?%;color:grey}.currentTitle[data-v-b3c3d7f0]{text-align:center;font-size:%?75?%;color:grey}",""]),t.exports=e},c296:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-line",props:{color:{type:String,default:"#e4e7ed"},length:{type:String,default:"100%"},direction:{type:String,default:"row"},hairLine:{type:Boolean,default:!0},margin:{type:String,default:"0"},borderStyle:{type:String,default:"solid"}},computed:{lineStyle:function(){var t={};return t.margin=this.margin,"row"==this.direction?(t.borderBottomWidth="1px",t.borderBottomStyle=this.borderStyle,t.width=this.$u.addUnit(this.length),this.hairLine&&(t.transform="scaleY(0.5)")):(t.borderLeftWidth="1px",t.borderLeftStyle=this.borderStyle,t.height=this.$u.addUnit(this.length),this.hairLine&&(t.transform="scaleX(0.5)")),t.borderColor=this.color,t}}};e.default=n},dd0a:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-line",style:[t.lineStyle]})},r=[]},e5fc:function(t,e,i){"use strict";i.r(e);var n=i("dd0a"),o=i("6e83");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("56b3");var s,a=i("f0c5"),u=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"4c063dd6",null,!1,n["a"],s);e["default"]=u.exports},e6d5:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-count-down",props:{timestamp:{type:[Number,String],default:0},autoplay:{type:Boolean,default:!0},separator:{type:String,default:"colon"},separatorSize:{type:[Number,String],default:30},separatorColor:{type:String,default:"#303133"},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:30},bgColor:{type:String,default:"#fff"},height:{type:[Number,String],default:"auto"},showBorder:{type:Boolean,default:!1},borderColor:{type:String,default:"#303133"},showSeconds:{type:Boolean,default:!0},showMinutes:{type:Boolean,default:!0},showHours:{type:Boolean,default:!0},showDays:{type:Boolean,default:!0},hideZeroDay:{type:Boolean,default:!1}},watch:{timestamp:function(t,e){this.clearTimer(),this.start()}},data:function(){return{d:"00",h:"00",i:"00",s:"00",timer:null,seconds:0}},computed:{itemStyle:function(){var t={};return this.height&&(t.height=this.height+"rpx",t.width=this.height+"rpx"),this.showBorder&&(t.borderStyle="solid",t.borderColor=this.borderColor,t.borderWidth="1px"),this.bgColor&&(t.backgroundColor=this.bgColor),t},letterStyle:function(){var t={};return this.fontSize&&(t.fontSize=this.fontSize+"rpx"),this.color&&(t.color=this.color),t}},mounted:function(){this.autoplay&&this.timestamp&&this.start()},methods:{start:function(){var t=this;this.clearTimer(),this.timestamp<=0||(this.seconds=Number(this.timestamp),this.formatTime(this.seconds),this.timer=setInterval((function(){if(t.seconds--,t.$emit("change",t.seconds),t.seconds<0)return t.end();t.formatTime(t.seconds)}),1e3))},formatTime:function(t){t<=0&&this.end();var e=0,i=0,n=0,o=0;e=Math.floor(t/86400),i=Math.floor(t/3600)-24*e;var r=null;r=this.showDays?i:Math.floor(t/3600),n=Math.floor(t/60)-60*i-24*e*60,o=Math.floor(t)-24*e*60*60-60*i*60-60*n,r=r<10?"0"+r:r,n=n<10?"0"+n:n,o=o<10?"0"+o:o,e=e<10?"0"+e:e,this.d=e,this.h=r,this.i=n,this.s=o},end:function(){this.clearTimer(),this.$emit("end",{})},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}};e.default=n},eb4c:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{timerList:[],leftStep:0,tempLoopTimerGroup:{},showTime:"",countDownTime:0,currentIndex:0,currentTitle:"",nextIndex:0,nextTitle:0,nextTime:0,nextShowTime:0,isPaused:!1,pauseTime:0}},methods:{createAudio:function(){var t=uni.getStorageSync("setting").volume,e=uni.getStorageSync("setting").ringtone,i=uni.getStorageSync("ringtoneList");this.ringtoneAudio=uni.createInnerAudioContext(),this.ringtoneAudio.src="../../static/ringtone/"+i[e].label+".mp3",this.ringtoneAudio.volume=t/100},next:function(t){return t==this.timerList.length-1?0:t+1},updateCurrentInfo:function(){this.countDownTime=this.timerList[this.currentIndex].time,this.showTime=this.mytime.secondsToString(this.countDownTime),this.currentTitle=this.timerList[this.currentIndex].title},updateNextInfo:function(){this.nextIndex=this.next(this.nextIndex),this.nextTime=this.timerList[this.nextIndex].time,this.nextTitle=this.timerList[this.nextIndex].title,this.nextShowTime=this.mytime.secondsToString(this.nextTime)},updateLeftStep:function(){this.leftStep--,this.leftStep<0&&(this.countDownTime=0,uni.navigateTo({url:"index"}))},pause:function(){this.pauseTime=this.$refs.countDown.seconds,this.isPaused=!0,this.countDownTime=0,this.ringtoneAudio.stop()},goOn:function(){this.countDownTime=this.pauseTime,this.isPaused=!1},restart:function(){this.$refs.countDown.seconds=this.timerList[this.currentIndex].time+1},goback:function(){uni.navigateTo({url:"index"})},nextStep:function(){this.currentIndex=this.next(this.currentIndex),this.updateCurrentInfo(),this.updateNextInfo(),this.updateLeftStep()},change:function(e){this.showTime=this.mytime.secondsToString(e),5==e&&(t.log("5秒"),this.ringtoneAudio.play())},end:function(){this.ringtoneAudio.stop(),this.currentIndex=this.next(this.currentIndex),this.updateCurrentInfo(),this.updateNextInfo(),this.updateLeftStep()}},onLoad:function(){this.tempLoopTimerGroup=uni.getStorageSync("tempLoopTimerGroup"),this.timerList=this.tempLoopTimerGroup.timerList;var t=this.tempLoopTimerGroup.count;0==this.timerList.length&&0==t&&uni.navigateTo({url:"index"}),this.leftStep=this.timerList.length*t-1,this.createAudio(),this.updateCurrentInfo(),this.updateNextInfo()}};e.default=i}).call(this,i("5a52")["default"])},fd6b:function(t,e,i){"use strict";i.r(e);var n=i("6947"),o=i("4c45");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("4c86");var s,a=i("f0c5"),u=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"19d52df4",null,!1,n["a"],s);e["default"]=u.exports}}]);