(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),c=a.n(i),s=(a(12),a(3)),l=a(4),o=a(6),u=a(5),m=function(e){return r.a.createElement("form",{onSubmit:e.submit},r.a.createElement("input",{type:"text",onChange:e.change,placeholder:"Wpisz maiasto.."}),r.a.createElement("button",null,"Wyszukaj miasto"))},h=function(e){var t=e.weather,a=t.date,n=t.city,i=t.sunrise,c=t.sunset,s=t.temp,l=t.wind,o=t.pressure,u=t.err,m=null;if(!u&&n){var h=new Date(1e3*i).toLocaleTimeString(),p=new Date(1e3*c).toLocaleTimeString();m=r.a.createElement("div",null,r.a.createElement("h3",null,"Wyniki wyszukiwania dla miasta ",r.a.createElement("em",null,n)),r.a.createElement("h4",null,"Dane dla dnia i godziny: ",a),r.a.createElement("h4",null,"Aktualna temperatura: ",s,"\xb0C"),r.a.createElement("h4",null,"Wsch\xf3d s\u0142o\u0144ca dzisiaj o ",h),r.a.createElement("h4",null,"Zach\xf3d s\u0142o\u0144ca dzisiaj o ",p),r.a.createElement("h4",null,"Aktualna si\u0142a wiatru ",l,"m/s"),r.a.createElement("h4",null,"Aktualne ci\u015bnienie ",o,"hPa"))}return r.a.createElement("div",{className:"result"},u?"Nie mamy w bazie miasta ".concat(n):m)},p=(a(13),"a30dc76c8a569467302ffb89eaaea2ec"),d=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={value:"",date:"",city:"",sunrise:"",sunset:"",temp:"",wind:"",pressure:"",err:!1},e.handlerImputChange=function(t){e.setState({value:t.target.value})},e.handlerCitySubmit=function(t){t.preventDefault(),console.log("potwierdzenie");var a="http://api.openweathermap.org/data/2.5/weather?q=".concat(e.state.value,"&appid=").concat(p,"&units=metric");fetch(a).then((function(e){if(e.ok)return e;throw Error("B\u0142\u0105d")})).then((function(e){return e.json()})).then((function(t){var a=(new Date).toLocaleString();e.setState({err:!1,date:a,city:e.state.value,sunrise:t.sys.sunrise,sunset:t.sys.sunset,temp:t.main.temp,wind:t.wind.speed,pressure:t.main.pressure})})).catch((function(t){e.setState({err:!0,city:e.state.value})}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,{value:this.state.value,change:this.handlerImputChange,submit:this.handlerCitySubmit}),",",r.a.createElement(h,{weather:this.state}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.7d7bf27a.chunk.js.map