(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),s=n.n(o),c=n(21),i=n.n(c),r=(n(32),n(25)),u=n(2),l=n(12),d=n(3),p=n(14),h=n(15),j="548c5797-a590-40d0-8f9e-48d758ca9ae7",b={api:new(function(){function e(t){Object(p.a)(this,e),this.options=t}return Object(h.a)(e,[{key:"getInitialCards",value:function(){return fetch(this.options.baseUrl+"/cards",{headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"getUserInfo",value:function(){return fetch(this.options.baseUrl+"/users/me",{headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"editProfile",value:function(e,t){return this.name=e,this.about=t,fetch(this.options.baseUrl+"/users/me",{method:"PATCH",body:JSON.stringify({name:"".concat(this.name),about:"".concat(this.about)}),headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return console.log(e),e})).catch((function(e){console.log(e)}))}},{key:"addCard",value:function(e,t){return this.name=e,this.link=t,fetch(this.options.baseUrl+"/cards",{method:"POST",body:JSON.stringify({name:"".concat(this.name),link:"".concat(this.link)}),headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return this.id=e,fetch(this.options.baseUrl+"/cards/"+e,{method:"DELETE",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"likeCard",value:function(e){return fetch(this.options.baseUrl+"/cards/like/"+e,{method:"PUT",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"deleteLike",value:function(e){return fetch(this.options.baseUrl+"/cards/like/"+e,{method:"DELETE",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"updateAvatar",value:function(e){return this.link=e,fetch(this.options.baseUrl+"/users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:"".concat(this.link)}),headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject(" ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}}]),e}())({baseUrl:"https://nomoreparties.co/cohort9",headers:{authorization:j,"Content-Type":"application/json"}})};function m(e){return m=function(e){Object(d.g)();return e.jwt===j&&(e.history.push("/user"),!0)}}var f=m,_=s.a.createContext(),O=n(23),g=n(11),x=n(26),v=n(24),k=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={username:"",password:""},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(a)),a}return Object(h.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(O.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.username&&this.state.password&&(this.props.history.push("/user"),this.props.onLogIn())}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)("h3",{className:"login__welcome",children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"login__form",children:[Object(a.jsx)("label",{htmlhtmlFor:"username",children:"\u041b\u043e\u0433\u0438\u043d:"}),Object(a.jsx)("input",{className:" popup__input login__input",required:!0,id:"username",name:"username",type:"text",value:this.state.username,onChange:this.handleChange,placeholder:"\u041b\u044e\u0431\u043e\u0439 \u043b\u043e\u0433\u0438\u043d"}),Object(a.jsx)("label",{htmlhtmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),Object(a.jsx)("input",{required:!0,id:"password",name:"password",className:"popup__input login__input",type:"password",value:this.state.password,onChange:this.handleChange,placeholder:"\u041b\u044e\u0431\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(a.jsx)("div",{className:"login__button-container button__submit",children:Object(a.jsx)("button",{type:"submit",onSubmit:this.handleSubmit,className:"login__link",children:"\u0412\u043e\u0439\u0442\u0438"})})]}),Object(a.jsxs)("div",{className:"login__signup",children:[Object(a.jsx)("p",{children:"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(a.jsx)("p",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430"})]})]})}}]),n}(s.a.Component),C=Object(d.h)(k),N=n.p+"static/media/logo.fad4f8a5.svg";var S=function(e){return Object(a.jsxs)("header",{className:"header root__section",children:[Object(a.jsx)("img",{src:N,id:"logo",alt:"mesto logo",className:"logo"}),e.isLoggedIn&&Object(a.jsx)("button",{className:"button button__signOut",type:"submit",onClick:function(t){t.preventDefault(),e.onLogOut()},children:"\u0412\u044b\u0439\u0442\u0438"})]})};var y=function(e){var t=s.a.useContext(_);return Object(a.jsxs)("div",{className:"place-card",id:e.card._id,children:[Object(a.jsx)("div",{className:"place-card__image",onMouseUp:function(t){t.target.classList.contains("place-card__image")&&e.onCardClick(e.card)},style:{backgroundImage:"url("+e.card.link+")"},children:e.card.owner._id===t._id?Object(a.jsx)("button",{className:"place-card__delete-icon",onMouseUp:function(){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443?")&&e.onCardDelete(e.card)}}):""}),Object(a.jsxs)("div",{className:"place-card__description",children:[Object(a.jsx)("h3",{className:"place-card__name",children:e.card.name}),Object(a.jsxs)("div",{className:"place-card__like-box",children:[Object(a.jsx)("button",{className:"place-card__like-icon ".concat(e.card.likes.some((function(e){return e._id===t._id}))?"place-card__like-icon_liked":""),onMouseUp:function(){e.onCardLike(e.card)}}),Object(a.jsx)("span",{className:"place-card__like-number",children:e.card.likes.length})]})]})]})};var U=function(e){var t=s.a.useContext(_);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"profileRoot",className:"profile root__section",children:Object(a.jsxs)("div",{className:"user-info",children:[Object(a.jsx)("div",{id:"userInfoPic",className:"user-info__photo",style:{backgroundImage:"url("+t.avatar+")",cursor:"pointer"},onMouseUp:e.onEditAvatar}),Object(a.jsxs)("div",{id:"userInfoData",className:"user-info__data",children:[Object(a.jsx)("h1",{id:"userInfoName",className:"user-info__name",children:t.name}),Object(a.jsx)("p",{id:"userInfoJob",className:"user-info__job",children:t.about}),Object(a.jsx)("button",{id:"userInfoEditButton",className:"button user-info-edit__button",onMouseUp:e.onEditProfile,children:"Edit"})]}),Object(a.jsx)("button",{id:"userInfoButton",className:"button user-info__button",onMouseUp:e.onAddPlace,children:"+"})]})}),Object(a.jsx)("div",{id:"placesList",className:"places-list root__section",children:e.cards&&e.cards.map((function(t,n){return Object(a.jsx)(y,{onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,card:t},n)}))})]})},L=n.p+"static/media/close.8a65f75d.svg";var P=function(e){return Object(a.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_is-opened":""," "),children:Object(a.jsxs)("div",{className:"popup__content",children:[Object(a.jsx)("img",{src:L,alt:"close",className:"popup__close",onMouseUp:e.onClose}),Object(a.jsx)("h3",{className:"popup__title popup__title_".concat(e.name),children:e.title}),Object(a.jsxs)("form",{id:"popupForm".concat(e.name),className:"popup__form",name:"form",noValidate:!0,onSubmit:e.onSubmit,children:[e.children,Object(a.jsx)("button",{id:"popupButton".concat(e.name),disabled:e.buttonDisabled,type:"submit",className:"button popup__button",children:""===e.buttonText?e.submitBtnTitle:e.buttonText})]})]})})};var w=function(e){var t=s.a.useState(""),n=Object(u.a)(t,2),o=n[0],c=n[1],i=s.a.useState(""),r=Object(u.a)(i,2),l=r[0],d=r[1],p=s.a.useState(""),h=Object(u.a)(p,2),j=h[0],b=h[1],m=s.a.useState(""),f=Object(u.a)(m,2),_=f[0],O=f[1],g=s.a.useState(""),x=Object(u.a)(g,2),v=x[0],k=x[1],C=s.a.useState(""),N=Object(u.a)(C,2),S=N[0],y=N[1],U=function(e){return 0===e.target.value.length?"\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":1===e.target.value.length||e.target.value.length>=30?"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0442 2 \u0434\u043e 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":""},L=function(e){return 0===e.target.value.length?"\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":/^((ftp|http|https):\/\/)?(www\.)?([A-Za-z\u0410-\u042f\u0430-\u044f0-9]{1}[A-Za-z\u0410-\u042f\u0430-\u044f0-9\-]*\.?)*\.{1}[A-Za-z\u0410-\u042f\u0430-\u044f0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/.test(e.target.value)?"":"\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0430"};return Object(a.jsx)(P,{onSubmit:function(t){t.preventDefault(),!j&&!S&&l&&v&&(e.onAddCard({cardName:o,cardLink:_}),d(""),k(""))},isOpen:e.isOpen,onClose:e.onClose,name:"addCardPopup",submitBtnTitle:"+",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:e.buttonText,buttonDisabled:!(!j&&!S&&l&&v),children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{id:"inputName",type:"text",name:"name",required:!0,minLength:"2",maxLength:"30",onChange:function(e){d(e.target.value),c(e.target.value),b(U(e))},className:"popup__input popup__input_type_name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(a.jsx)("span",{id:"error-inputName",className:"error",children:j}),Object(a.jsx)("input",{id:"inputLink",type:"url",name:"link",required:!0,minLength:"2",onChange:function(e){k(e.target.value),O(e.target.value),y(L(e))},className:"popup__input popup__input_type_link-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(a.jsx)("span",{id:"error-inputLink",className:"error",children:S})]})})};var I=function(e){var t=s.a.useContext(_),n=s.a.useState(""),o=Object(u.a)(n,2),c=o[0],i=o[1],r=s.a.useState(""),l=Object(u.a)(r,2),d=l[0],p=l[1],h=s.a.useState(""),j=Object(u.a)(h,2),b=j[0],m=j[1],f=s.a.useState(""),O=Object(u.a)(f,2),g=O[0],x=O[1],v=s.a.useState(""),k=Object(u.a)(v,2),C=k[0],N=k[1],S=s.a.useState(""),y=Object(u.a)(S,2),U=y[0],L=y[1];s.a.useEffect((function(){i(t.name),x(t.about)}),[t]);var w=function(e){return 0===e.target.value.length?"\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":1===e.target.value.length?"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0442 2 \u0434\u043e 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":""};return Object(a.jsx)(P,{onSubmit:function(t){t.preventDefault(),!b&&!U&&d&&C&&(e.onUpdateUser({name:c,about:g}),p(""),N(""))},isOpen:e.isOpen,onClose:e.onClose,name:"editPopup",submitBtnTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:e.buttonText,buttonDisabled:!(!b&&!U&&d&&C),children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{id:"inputUserNameEdit",type:"text",minLength:"2",maxLength:"30",value:d,onChange:function(e){p(e.target.value),i(e.target.value),m(w(e))},required:!0,name:"userName",className:"popup__input popup__input_type_userName",placeholder:"\u0418\u043c\u044f"}),Object(a.jsx)("span",{id:"error-inputUserNameEdit",className:"error",children:b}),Object(a.jsx)("input",{id:"inputUserInfoEdit",type:"text",name:"userInfo",minLength:"2",value:C,onChange:function(e){N(e.target.value),x(e.target.value),L(w(e))},required:!0,className:"popup__input popup__input_type_userInfo",placeholder:"\u041e \u0441\u0435\u0431\u0435"}),Object(a.jsx)("span",{id:"error-inputUserInfoEdit",className:"error",children:U})]})})};var T=function(e){var t=s.a.useContext(_),n=s.a.useState(""),o=Object(u.a)(n,2),c=o[0],i=o[1],r=s.a.useState(""),l=Object(u.a)(r,2),d=l[0],p=l[1],h=s.a.useState(""),j=Object(u.a)(h,2),b=j[0],m=j[1],f=s.a.useRef();s.a.useEffect((function(){i(t.avatar)}),[t]);var O=function(e){return 0===e.target.value.length?"\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":/^((ftp|http|https):\/\/)?(www\.)?([A-Za-z\u0410-\u042f\u0430-\u044f0-9]{1}[A-Za-z\u0410-\u042f\u0430-\u044f0-9\-]*\.?)*\.{1}[A-Za-z\u0410-\u042f\u0430-\u044f0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/.test(e.target.value)?"":"\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0430"};return Object(a.jsx)(P,{onSubmit:function(t){t.preventDefault(),!b&&d&&(e.onUpdateAvatar({avatar:f.current.value}),p(""))},isOpen:e.isOpen,onClose:e.onClose,name:"EditPhotoPopup",submitBtnTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:e.buttonText,buttonDisabled:!(!b&&d),children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{value:d,ref:f,onChange:function(e){p(e.target.value),i(e.target.value),m(O(e))},avatar:c,id:"inputLinkPhoto",type:"url",name:"link",required:!0,minLength:"2",className:"popup__input popup__input_type_link-url_photo",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440"}),Object(a.jsx)("span",{id:"error-inputLinkPhoto",className:"error",children:b})]})})};var E=function(e){return Object(a.jsx)("div",{id:"popupPic",className:"popup popup__pic ".concat(!1!==e.card?"popup_is-opened":""),children:Object(a.jsxs)("div",{className:"popup__content popup__content_pic",children:[Object(a.jsx)("img",{id:"popupPicOpen",src:e.card.link,className:"popup-pic__open",alt:""}),Object(a.jsx)("img",{src:L,onMouseUp:e.onClose,alt:"",id:"popupClosePic",className:"popup__close"})]})})};var A=function(){return Object(a.jsx)("footer",{className:"footer root__section",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var D=function(e){var t=b.api,n=s.a.useState(!1),c=Object(u.a)(n,2),i=c[0],p=c[1],h=s.a.useState(!1),m=Object(u.a)(h,2),O=m[0],g=m[1],x=s.a.useState(!1),v=Object(u.a)(x,2),k=v[0],N=v[1],y=s.a.useState(!1),L=Object(u.a)(y,2),P=L[0],D=L[1],M=s.a.useState(""),B=Object(u.a)(M,2),F=B[0],q=B[1],z=s.a.useState(""),J=Object(u.a)(z,2),Z=J[0],R=J[1],H=s.a.useState(""),V=Object(u.a)(H,2),G=V[0],K=V[1],Q=s.a.useState(!1),W=Object(u.a)(Q,2),X=W[0],Y=W[1];Object(o.useEffect)((function(){var e=localStorage.getItem("jwt");e&&f(e)&&(Y(!0),$())}));var $=function(){t.getUserInfo().then((function(e){q(e)})),t.getInitialCards().then((function(e){console.log(e),R(e)}))},ee=function(){K(""),D(!1),g(!1),p(!1),N(!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(S,{isLoggedIn:X,onLogOut:function(){Y(!1),localStorage.removeItem("jwt",j)}}),Object(a.jsx)(l.a,{children:Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{exact:!0,path:"/",children:X?Object(a.jsx)(d.a,{to:"/user"}):Object(a.jsx)(C,{onLogIn:function(){Y(!0),localStorage.setItem("jwt",j),$()}})}),Object(a.jsx)(d.b,{exact:!0,path:"/user",children:X?Object(a.jsxs)(_.Provider,{value:F,children:[Object(a.jsx)(U,{onEditProfile:function(){p(!0)},onAddPlace:function(){g(!0)},onEditAvatar:function(){N(!0)},onCardClick:function(e){D(e)},cards:Z,onCardLike:function(e){e.likes.some((function(e){return e._id===F._id}))?t.deleteLike(e._id).then((function(t){var n=Z.map((function(n){return n._id===e._id?t:n}));R(n)})):t.likeCard(e._id).then((function(t){var n=Z.map((function(n){return n._id===e._id?t:n}));R(n)}))},onCardDelete:function(e){e.owner._id===F._id&&t.deleteCard(e._id).then((function(){var t=Z.filter((function(t){return t._id!==e._id}));R(t)}))}}),Object(a.jsx)(E,{card:P,onClose:ee}),Object(a.jsx)(w,{isOpen:O,onClose:ee,onAddCard:function(e){K("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),t.addCard(e.cardName,e.cardLink).then((function(e){R([].concat(Object(r.a)(Z),[e])),ee()}))},buttonText:G}),Object(a.jsx)(I,{isOpen:i,onClose:ee,onUpdateUser:function(e){K("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),t.editProfile(e.name,e.about).then((function(e){q(e),ee()}))},buttonText:G}),Object(a.jsx)(T,{isOpen:k,onClose:ee,onUpdateAvatar:function(e){K("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),t.updateAvatar(e.avatar).then((function(e){q(e),ee()}))},buttonText:G})]}):Object(a.jsx)(d.a,{to:"/"})})]})}),Object(a.jsx)(A,{})]})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.3bc5d0d5.chunk.js.map