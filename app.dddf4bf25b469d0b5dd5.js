(()=>{"use strict";(()=>{function e(e){let t=document.querySelector("#viewing").content.firstElementChild.cloneNode(!0),s=t.querySelector("iframe");return s.style.height="100vh",s.style.width="100vw",s.src=`https://witeboard.com/${e.tableName}`,t}class t{constructor(e){this.kosyClient=window.parent,this.kosyApp=e}startApp(){return new Promise(((e,t)=>{window.addEventListener("message",(t=>{let s=t.data;switch(s.type){case"receive-initial-info":e(s.payload);break;case"client-has-joined":this.kosyApp.onClientHasJoined(s.payload);break;case"client-has-left":this.kosyApp.onClientHasLeft(s.clientUuid);break;case"get-app-state":const t=this.kosyApp.onRequestState();this._sendMessageToKosy({type:"receive-app-state",payload:t,clientUuids:s.clientUuids});break;case"set-app-state":this.kosyApp.onProvideState(s.state);break;case"receive-message":this.kosyApp.onReceiveMessage(s.payload)}})),this._sendMessageToKosy({type:"ready-and-listening"})}))}stopApp(){this._sendMessageToKosy({type:"stop-app"})}relayMessage(e){this._sendMessageToKosy({type:"relay-message",payload:e})}_sendMessageToKosy(e){this.kosyClient.postMessage(e,"*")}}var s;!function(s){var i;(function(s){class i{constructor(){this.state={tableName:null},this.kosyApi=new t({onClientHasJoined:e=>this.onClientHasJoined(e),onClientHasLeft:e=>this.onClientHasLeft(e),onReceiveMessage:e=>this.processMessage(e),onRequestState:()=>this.getState(),onProvideState:e=>this.setState(e)})}start(){var e,t,s,i,n;return t=this,s=void 0,n=function*(){let t=yield this.kosyApi.startApp();this.initializer=t.clients[t.initializerClientUuid],this.currentClient=t.clients[t.currentClientUuid],this.state=null!==(e=t.currentAppState)&&void 0!==e?e:this.state,this.state.tableName=this.currentClient.clientLocation.table.tableUuid,this.renderComponent(),window.addEventListener("message",(e=>{this.processComponentMessage(e.data)}))},new((i=void 0)||(i=Promise))((function(e,a){function o(e){try{l(n.next(e))}catch(e){a(e)}}function r(e){try{l(n.throw(e))}catch(e){a(e)}}function l(t){var s;t.done?e(t.value):(s=t.value,s instanceof i?s:new i((function(e){e(s)}))).then(o,r)}l((n=n.apply(t,s||[])).next())}))}setState(e){this.state=e,this.renderComponent()}getState(){return this.state}onClientHasJoined(e){}onClientHasLeft(e){e!==this.initializer.clientUuid||this.state.tableName||this.kosyApi.stopApp()}processMessage(e){e.type}processComponentMessage(e){e.type}renderComponent(){!function(t){let s,i=document.getElementById("root");s=e;var n=i.cloneNode(!1);i.parentNode.replaceChild(n,i),n.appendChild(s(t))}({tableName:this.state.tableName,currentClient:this.currentClient,initializer:this.initializer})}log(...e){var t,s;console.log(`${null!==(s=null===(t=this.currentClient)||void 0===t?void 0:t.clientName)&&void 0!==s?s:"New user"} logged: `,...e)}}s.App=i,(new i).start()})((i=s.Integration||(s.Integration={})).Witeboard||(i.Witeboard={}))}(s||(s={}))})()})();