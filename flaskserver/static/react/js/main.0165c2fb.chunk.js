(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},37:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(29),r=a.n(l),s=a(13),o=a(1),c=a(31),h=a(8),m=a(9),u=a(11),d=a(10),p=(a(37),a(16)),v=a.n(p),g=1;function b(e,t){var a;return a={cmd:g,data:{phone:t,name:e},auth:""},void v.a.post("https://whatsupconnect.com",a).catch((function(e){return console.log(e)})).then((function(e){return console.log(e)}))}var y=/^\d{10}$/,f=/^[a-zA-Z ]{1,15}$/,E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={phonenumber:"",displayname:"",legalAgreement:!1,profileCreated:!1,validPhoneNumber:!0,validDisplayname:!0,validLegalAgreement:!0},n}return Object(m.a)(a,[{key:"validatePhoneNumber",value:function(){return y.test(this.state.phonenumber)}},{key:"validateLegalAgreement",value:function(){return this.state.legalAgreement}},{key:"validateDisplayName",value:function(){return f.test(this.state.displayname)}},{key:"handleCreateProfile",value:function(e){e.preventDefault();var t=this.validatePhoneNumber(),a=this.validateDisplayName(),n=this.validateLegalAgreement();t&&a&&n?(b(this.state.displayname,this.state.phonenumber,this.state.legalAgreement),this.props.history.push("/auth")):this.setState({validPhoneNumber:t,validDisplayname:a,validLegalAgreement:n})}},{key:"handleDisplayNameChange",value:function(e){this.setState({displayname:e.target.value})}},{key:"handlePhoneNumberChange",value:function(e){this.setState({phonenumber:e.target.value})}},{key:"handleLegalAgreementChange",value:function(e){this.setState({legalAgreement:e.target.checked})}},{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleCreateProfile.bind(this),"data-testid":"create-profile"},i.a.createElement("label",{htmlFor:"displayname"},"Display Name:"),i.a.createElement("input",{id:"displayname",name:"displayname",placeholder:"John Smith",value:this.state.displayname,className:this.state.validDisplayname?"valid-data":"invalid-data",onChange:this.handleDisplayNameChange.bind(this)}),i.a.createElement("div",{"data-testid":"bad-displayname-message",className:this.state.validDisplayname?"hidden":"visible"},i.a.createElement("p",null,"Display name should only contain letters and spaces, while from 1 to 15 characters long")),i.a.createElement("label",{htmlFor:"phonenumber"},"Phone Number:"),i.a.createElement("input",{id:"phonenumber",name:"phoneNumber",placeholder:"8888888888",value:this.state.phonenumber,className:this.state.validPhoneNumber?"valid-data":"invalid-data",onChange:this.handlePhoneNumberChange.bind(this)}),i.a.createElement("div",{"data-testid":"bad-phonenumber-message",className:this.state.validPhoneNumber?"hidden":"visible"},i.a.createElement("p",null,"Phone numbers need to be 10 digits long.")),i.a.createElement("p",{"data-testid":"legalText"},"legal"),i.a.createElement("input",{id:"legalAgreement",type:"checkbox",value:this.state.legalAgreement,className:this.state.validLegalAgreement?"valid-data":"invalid-data",name:"agreed",onChange:this.handleLegalAgreementChange.bind(this)}),i.a.createElement("label",{htmlFor:"legalAgreement"},"I Agree To The Terms And Conditions"),i.a.createElement("div",{"data-testid":"bad-legalagreement-message",className:this.state.validLegalAgreement?"hidden":"visible"},i.a.createElement("p",null,"You must agree to the terms and conditions to use Hang.")),i.a.createElement("input",{type:"submit",value:"Login"}))}}]),a}(i.a.Component),A=Object(o.f)(E);var N=function(e){e.component;var t=Object(c.a)(e,["component"]);return i.a.createElement(o.b,Object.assign({},t,{render:function(e){return i.a.createElement(A,null)}}))},j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={activities:[]},n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){var e=["hello","world"];this.setState({activities:e})}},{key:"render",value:function(){return i.a.createElement("ul",null,this.state.activities.map((function(e,t){return i.a.createElement("li",null,e)})))}}]),a}(i.a.Component),k=a(14),C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleAuthentication=n.handleAuthentication.bind(Object(k.a)(n)),n.state={authenticated:!1},n}return Object(m.a)(a,[{key:"handleAuthentication",value:function(){this.setState({authenticated:!0})}},{key:"render",value:function(){return this.state.authenticated?i.a.createElement(o.a,{to:"/"}):i.a.createElement("form",{onSubmit:this.handleAuthentication},i.a.createElement("input",{name:"code",placeholder:"12345"}),i.a.createElement("input",{type:"submit",value:"View Activities"}))}}]),a}(i.a.Component);r.a.render(i.a.createElement(s.a,null,i.a.createElement(N,{exact:!0,path:"/",component:j}),i.a.createElement(o.b,{path:"/login",component:A}),i.a.createElement(o.b,{path:"/auth",component:C})),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.0165c2fb.chunk.js.map