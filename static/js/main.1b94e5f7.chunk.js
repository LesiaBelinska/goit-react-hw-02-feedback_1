(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={list:"Statistics_list__3oKT7",item:"Statistics_item__1vE2T"}},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),i=a(5),s=a.n(i),o=(a(15),a(6)),r=a(7),d=a(8),l=a(10),b=a(9),u=(a(16),a(0));function j(e){var t=e.title,a=e.children;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),a]})}var h=a(4),v=a.n(h);function O(e){var t=e.options,a=e.onLeaveFeedback;return Object(u.jsx)("div",{className:v.a.options,children:t.map((function(e){return Object(u.jsx)("button",{className:v.a.button,type:"button","data-feedback":e,onClick:a,children:e},e)}))})}var f=a(1),k=a.n(f);function p(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,i=e.positiveFeedbackPercentage;return Object(u.jsx)(u.Fragment,{children:n>0?Object(u.jsxs)("ul",{className:k.a.list,children:[Object(u.jsxs)("li",{className:k.a.item,children:["Good:",t]}),Object(u.jsxs)("li",{className:k.a.item,children:["Neutral:",a]}),Object(u.jsxs)("li",{className:k.a.item,children:["Bad:",c]}),Object(u.jsxs)("li",{className:k.a.item,children:[" Total:",n," "]}),Object(u.jsxs)("li",{className:k.a.item,children:["Positive feedback:",i,"%"]})]}):Object(u.jsx)("p",{className:k.a.notification,children:"no feedback..."})})}var m=function(e){Object(l.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var a=t.target.dataset.feedback;e.setState((function(e){return Object(o.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){var t=e.state,a=t.good,c=t.neutral;return a+t.bad+c},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,a=e.countTotalFeedback();return a?+(t/a*100).toFixed(0):0},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad,n=this.countTotalFeedback(),i=this.countPositiveFeedbackPercentage();return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{title:"Please leave feedback",children:Object(u.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:this.handleFeedback})}),Object(u.jsx)(j,{title:"Statistics",children:Object(u.jsx)(p,{good:t,neutral:a,bad:c,total:n,positiveFeedbackPercentage:i})})]})}}]),a}(c.Component),x=m;s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))},4:function(e,t,a){e.exports={options:"FeedbackOptions_options__3HQio",button:"FeedbackOptions_button__3n-hy"}}},[[18,1,2]]]);
//# sourceMappingURL=main.1b94e5f7.chunk.js.map