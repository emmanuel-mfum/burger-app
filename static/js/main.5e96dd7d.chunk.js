(this["webpackJsonpburger-app"]=this["webpackJsonpburger-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2uleX",BreadTop:"BurgerIngredient_BreadTop__2Diet",Seeds1:"BurgerIngredient_Seeds1__7nbB3",Seeds2:"BurgerIngredient_Seeds2__1nW-_",Meat:"BurgerIngredient_Meat__2bRLk",Cheese:"BurgerIngredient_Cheese__3QWMG",Salad:"BurgerIngredient_Salad__n3xwq",Bacon:"BurgerIngredient_Bacon__1ktzd"}},,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__1E6W4",Open:"SideDrawer_Open__fe0m6",Close:"SideDrawer_Close__4ir7L",Logo:"SideDrawer_Logo__rYJ0c"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__2W8rM",Label:"BuildControl_Label__ayVqB",Less:"BuildControl_Less__aQGXh",More:"BuildControl_More__3EzxR"}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2owVr",Logo:"Toolbar_Logo__1c00v",DesktopOnly:"Toolbar_DesktopOnly__28mX8"}},function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1IYW3",OrderButton:"BuildControls_OrderButton__24bVI",enable:"BuildControls_enable__1UJEF"}},,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__hfOIF",active:"NavigationItem_active__6GBU5"}},function(e,t,n){e.exports={Button:"Button_Button__1yf5r",Success:"Button_Success__13cRl",Danger:"Button_Danger__3sY7v"}},,,,,,,,,,function(e,t,n){e.exports={Content:"Layout_Content__3oY9d"}},function(e,t,n){e.exports={Logo:"Logo_Logo__2Ge-0"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__r8NME"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__3V9Oe"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__ToO21"}},function(e,t,n){e.exports={Burger:"Burger_Burger__1ki0O"}},function(e,t,n){e.exports={Modal:"Modal_Modal__33sp1"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__2ryp9",load2:"Spinner_load2__1z3Nq"}},,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(25),i=n.n(s),c=(n(40),n(2)),o=n(3),d=n(5),l=n(4),u=n(6),j=n(26),h=n.n(j),b=n(12),p=n.n(b),O=n.p+"static/media/burger-logo.ec69c7f6.png",g=n(27),m=n.n(g),_=n(0),f=function(){return Object(_.jsx)("div",{className:m.a.Logo,children:Object(_.jsx)("img",{src:O,alt:"MyBurger"})})},x=n(28),v=n.n(x),C=n(15),k=n.n(C),B=function(e){return Object(_.jsx)("li",{className:k.a.NavigationItem,children:Object(_.jsx)("a",{href:e.link,className:e.active?k.a.active:null,children:e.children})})},y=function(){return Object(_.jsxs)("ul",{className:v.a.NavigationItems,children:[Object(_.jsx)(B,{link:"/",active:!0,children:"Burger Builder"}),Object(_.jsx)(B,{link:"/",children:" Checkout "})]})},S=n(29),w=n.n(S),N=function(e){return Object(_.jsxs)("div",{className:w.a.DrawerToggle,onClick:e.clicked,children:[Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{})]})},I=function(e){return Object(_.jsxs)("header",{className:p.a.Toolbar,children:[Object(_.jsx)(N,{clicked:e.drawerToggleClicked}),Object(_.jsx)("div",{className:p.a.Logo,children:Object(_.jsx)(f,{})}),Object(_.jsx)("nav",{className:p.a.DesktopOnly,children:Object(_.jsx)(y,{})})]})},D=n(10),H=n.n(D),T=n(30),L=n.n(T),M=function(e){return e.show?Object(_.jsx)("div",{className:L.a.Backdrop,onClick:e.clicked}):null},P=function(e){var t=[H.a.SideDrawer,H.a.Close];return e.open&&(t=[H.a.SideDrawer,H.a.Open]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(M,{show:e.open,clicked:e.closed}),Object(_.jsxs)("div",{className:t.join(" "),children:[Object(_.jsx)("div",{className:H.a.Logo,children:Object(_.jsx)(f,{})}),Object(_.jsx)("nav",{children:Object(_.jsx)(y,{})})]})]})},F=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={showSideDrawer:!1},r.sideDrawerClosedHandler=r.sideDrawerClosedHandler.bind(Object(u.a)(r)),r.sideDrawerToggleHandler=r.sideDrawerToggleHandler.bind(Object(u.a)(r)),r}return Object(o.a)(n,[{key:"sideDrawerClosedHandler",value:function(){this.setState({showSideDrawer:!1})}},{key:"sideDrawerToggleHandler",value:function(){this.setState((function(e){return{showSideDrawer:!e.SideDrawer}}))}},{key:"render",value:function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(I,{drawerToggleClicked:this.sideDrawerToggleHandler}),Object(_.jsx)(P,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),Object(_.jsx)("main",{className:h.a.Content,children:this.props.children})]})}}]),n}(r.Component),E=n(9),R=n(35),U=n(31),W=n.n(U),q=n(8),Y=n.n(q),z=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(_.jsx)("div",{className:Y.a.BreadBottom});break;case"bread-top":e=Object(_.jsxs)("div",{className:Y.a.BreadTop,children:[Object(_.jsx)("div",{className:Y.a.Seeds1}),Object(_.jsx)("div",{className:Y.a.Seeds2})]});break;case"meat":e=Object(_.jsx)("div",{className:Y.a.Meat});break;case"cheese":e=Object(_.jsx)("div",{className:Y.a.Cheese});break;case"salad":e=Object(_.jsx)("div",{className:Y.a.Salad});break;case"bacon":e=Object(_.jsx)("div",{className:Y.a.Bacon});break;default:e=null}return e}}]),n}(r.Component),A=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(R.a)(Array(e.ingredients[t])).map((function(e,n){return Object(_.jsx)(z,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(_.jsx)("p",{children:"Please start adding ingredients!"})),Object(_.jsxs)("div",{className:W.a.Burger,children:[Object(_.jsx)(z,{type:"bread-top"}),t,Object(_.jsx)(z,{type:"bread-bottom"})]})},G=n(13),J=n.n(G),V=n(11),X=n.n(V),Q=function(e){return Object(_.jsxs)("div",{className:X.a.BuildControl,children:[Object(_.jsx)("div",{className:X.a.Label,children:e.label}),Object(_.jsx)("button",{className:X.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(_.jsx)("button",{className:X.a.More,onClick:e.added,children:"More"})]})},K=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Z=function(e){return Object(_.jsxs)("div",{className:J.a.BuildControls,children:[Object(_.jsxs)("p",{children:["Current Price: ",Object(_.jsx)("strong",{children:e.price.toFixed(2)})," "]}),K.map((function(t){return Object(_.jsx)(Q,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(_.jsx)("button",{className:J.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:"ORDER NOW"}),Object(_.jsx)("button",{className:J.a.OrderButton,onClick:e.reset,children:"RESET ORDER"})]})},$=n(32),ee=n.n($),te=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentDidUpdate",value:function(){console.log("[Modal] did update")}},{key:"render",value:function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(M,{show:this.props.show,clicked:this.props.modalClosed}),Object(_.jsx)("div",{className:ee.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(r.Component),ne=n(16),re=n.n(ne),ae=function(e){return Object(_.jsx)("button",{className:[re.a.Button,re.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})},se=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(){console.log("[Order Summary] will update")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return Object(_.jsxs)("li",{children:[Object(_.jsx)("span",{style:{textTransform:"capitalize"},children:t})," : ",e.props.ingredients[t]]},t)}));return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h3",{children:" Your Order "}),Object(_.jsx)("p",{children:" A delicious burger with the following ingredients : "}),Object(_.jsx)("ul",{children:t}),Object(_.jsx)("p",{children:Object(_.jsxs)("strong",{children:["Total Price: ",this.props.price.toFixed(2)]})}),Object(_.jsx)("p",{children:" Continue to checkout ? "}),Object(_.jsx)(ae,{btnType:"Danger",clicked:this.props.purchaseCancelled,children:"CANCEL"}),Object(_.jsx)(ae,{btnType:"Success",clicked:this.props.purchaseContinued,children:"CONTINUE"})]})}}]),n}(r.Component),ie=n(33),ce=n.n(ie),oe=function(){return Object(_.jsx)("div",{className:ce.a.Loader,children:"Loading..."})},de=function(e,t){return function(n){Object(d.a)(a,n);var r=Object(l.a)(a);function a(e){var t;return Object(c.a)(this,a),(t=r.call(this,e)).state={error:null},t.errorConfirmedHandler=t.errorConfirmedHandler.bind(Object(u.a)(t)),t}return Object(o.a)(a,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"errorConfirmedHandler",value:function(){this.setState({error:null})}},{key:"render",value:function(){var n=this;return this.reqInterceptor=t.interceptors.request.use((function(e){return n.setState({error:null}),e})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(e){n.setState({error:e})})),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(te,{show:this.state.error,modalClosed:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(_.jsx)(e,Object(E.a)({},this.props))]})}}]),a}(r.Component)},le=n(34),ue=n.n(le).a.create({baseURL:"https://burger-app-87735-default-rtdb.firebaseio.com/"}),je={salad:.5,cheese:.4,meat:1.3,bacon:.7},he=de(function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={ingredients:null,totalPrice:4,purchasable:!1,purchasing:!1,loading:!1,error:!1},r.addIngredientHandler=r.addIngredientHandler.bind(Object(u.a)(r)),r.removeIngredientHandler=r.removeIngredientHandler.bind(Object(u.a)(r)),r.purchaseHandler=r.purchaseHandler.bind(Object(u.a)(r)),r.purchaseCancelHandler=r.purchaseCancelHandler.bind(Object(u.a)(r)),r.purchaseContinueHandler=r.purchaseContinueHandler.bind(Object(u.a)(r)),r.resetIngredientHandler=r.resetIngredientHandler.bind(Object(u.a)(r)),r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;ue.get("https://burger-app-87735-default-rtdb.firebaseio.com/ingredients.json").then((function(t){e.setState({ingredients:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"addIngredientHandler",value:function(e){var t=this.state.ingredients[e]+1,n=Object(E.a)({},this.state.ingredients);n[e]=t;var r=je[e],a=this.state.totalPrice+r;this.setState({totalPrice:a,ingredients:n}),this.updatePurchaseState(n)}},{key:"removeIngredientHandler",value:function(e){var t=this.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(E.a)({},this.state.ingredients);r[e]=n;var a=je[e],s=this.state.totalPrice-a;this.setState({totalPrice:s,ingredients:r}),this.updatePurchaseState(r)}}},{key:"purchaseHandler",value:function(){this.setState({purchasing:!0})}},{key:"purchaseCancelHandler",value:function(){this.setState({purchasing:!1})}},{key:"purchaseContinueHandler",value:function(){var e=this;this.setState({loading:!0});var t={ingredients:this.state.ingredients,price:this.state.totalPrice,customer:{name:"Emmanuel",address:{street:"Test Street",zipcode:"WR56GH",country:"Canada"},email:"test@mail.com"},deliveryMethod:"fastest"};ue.post("/orders.json",t).then((function(t){return e.setState({loading:!1,purchasing:!1})})).catch((function(t){return e.setState({loading:!1,purchasing:!1})}))}},{key:"resetIngredientHandler",value:function(){this.setState({ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1})}},{key:"render",value:function(){var e=Object(E.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.state.error?Object(_.jsx)("p",{children:"Ingredients cannot be loaded "}):Object(_.jsx)(oe,{});return this.state.ingredients&&(r=Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(A,{ingredients:this.state.ingredients}),Object(_.jsx)(Z,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,price:this.state.totalPrice,ordered:this.purchaseHandler,reset:this.resetIngredientHandler})]}),n=Object(_.jsx)(se,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.state.totalPrice})),this.state.loading&&(n=Object(_.jsx)(oe,{})),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(te,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:n}),r]})}}]),n}(r.Component),ue),be=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(_.jsx)("div",{children:Object(_.jsx)(F,{children:Object(_.jsx)(he,{})})})}}]),n}(r.Component),pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))};i.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(be,{})}),document.getElementById("root")),pe()}],[[60,1,2]]]);
//# sourceMappingURL=main.5e96dd7d.chunk.js.map