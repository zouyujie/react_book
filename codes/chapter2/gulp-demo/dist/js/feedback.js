"use strict";!function(e,n,t,s){var o="dcloudio#mui",r="customer",i="pass01!",a="mui://user";n.getUser=function(t){var e=localStorage.getItem(a);if(e)t&&t(JSON.parse(e));else{var s="mui-user-"+(new Date).getTime();Easemob.im.Helper.registerUser({username:s,password:i,appKey:o,success:function(e){var n={username:s,password:i};localStorage.setItem(a,JSON.stringify(n)),t&&t(n)},error:function(e){plus.nativeUI.toast(e.message)}})}},n.login=function(t){n.getUser(function(e){var n=new Easemob.im.Connection;n.init({onOpened:function(){n.setPresence(),t&&t(e,n)}}),n.open({user:e.username,pwd:e.password,appKey:o})})},n.send=function(i,a){n.login(function(e,n){var t="问题:"+i.question;if(i.contact&&(t+="; 联系方式:"+i.contact+";"),n.sendTextMessage({to:r,msg:t,type:"chat"}),!i.images||i.images.length<1)a&&a();else{var s=0,o=!1;i.images.forEach(function(e){n.sendPicture({fileInputId:e,to:r,onFileUploadError:function(e){alert(JSON.stringify(e)),o=!0},onFileUploadComplete:function(e){s++,!o&&s>=i.images.length&&a&&a()}})})}})}}(mui,window.feedback={},window,document);