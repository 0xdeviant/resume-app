(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{37:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i(32),s=i(33),o=i(35);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var c=new Map,l=new Map,h=0;function d(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(i=e.root)?(l.has(i)||(h+=1,l.set(i,h.toString())),l.get(i)):"0":e[t]);var i})).toString()}function p(e,t,i){if(void 0===i&&(i={}),!e)return function(){};var n=function(e){var t=d(e),i=c.get(t);if(!i){var n,r=new Map,s=new IntersectionObserver((function(t){t.forEach((function(t){var i,s=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=s),null==(i=r.get(t.target))||i.forEach((function(e){e(s,t)}))}))}),e);n=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:s,elements:r},c.set(t,i)}return i}(i),r=n.id,s=n.observer,o=n.elements,a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(t),s.observe(e),function(){a.splice(a.indexOf(t),1),0===a.length&&(o.delete(e),s.unobserve(e)),0===o.size&&(s.disconnect(),c.delete(r))}}function u(e){return"function"!==typeof e.children}var g=function(e){var t,i;function r(t){var i;return(i=e.call(this,t)||this).node=null,i._unobserveCb=null,i.handleNode=function(e){i.node&&(i.unobserve(),e||i.props.triggerOnce||i.props.skip||i.setState({inView:!!i.props.initialInView,entry:void 0})),i.node=e||null,i.observeNode()},i.handleChange=function(e,t){e&&i.props.triggerOnce&&i.unobserve(),u(i.props)||i.setState({inView:e,entry:t}),i.props.onChange&&i.props.onChange(e,t)},i.state={inView:!!t.initialInView,entry:void 0},i}i=e,(t=r).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var s=r.prototype;return s.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},s.componentWillUnmount=function(){this.unobserve(),this.node=null},s.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,i=e.root,n=e.rootMargin,r=e.trackVisibility,s=e.delay;this._unobserveCb=p(this.node,this.handleChange,{threshold:t,root:i,rootMargin:n,trackVisibility:r,delay:s})}},s.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},s.render=function(){if(!u(this.props)){var e=this.state,t=e.inView,i=e.entry;return this.props.children({inView:t,entry:i,ref:this.handleNode})}var r=this.props,s=r.children,o=r.as,c=r.tag,l=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(r,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(n.createElement)(o||c||"div",a({ref:this.handleNode},l),s)},r}(n.Component);g.displayName="InView",g.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var b=i(2),f=(t.default=function(){var e={hidden:{x:400,opacity:0,scale:.2},visible:{x:0,opacity:1,scale:1}};return Object(b.jsxs)("div",{style:f.rightAside,className:"container",children:[Object(b.jsx)(r.a,{children:Object(b.jsx)(s.a,{children:Object(b.jsx)("div",{children:Object(b.jsxs)("h1",{style:f.stackHeading,children:["The ",Object(b.jsx)("span",{style:{color:"#053754"},children:"Stack"})]})})})}),Object(b.jsx)(r.a,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)("hr",{style:{marginTop:70}}),Object(b.jsx)(g,{threshold:.15,triggerOnce:!0,children:function(t){var i=t.ref,n=t.inView;return Object(b.jsxs)(o.a.div,{ref:i,variants:e,initial:"hidden",animate:n?"visible":"hidden",transition:{duration:1},style:f.tech,children:[Object(b.jsx)(o.a.img,{style:f.techImg,width:"100%",src:"/assets/images/react.png",alt:"mern stack"}),Object(b.jsx)(o.a.img,{style:f.techImg,width:"100%",src:"/assets/images/mongo.png",alt:"mern stack"}),Object(b.jsx)(o.a.img,{style:f.techImg,width:"100%",src:"/assets/images/express.png",alt:"mern stack"}),Object(b.jsx)(o.a.img,{style:f.techImg,width:"100%",src:"/assets/images/node.png",alt:"mern stack"}),Object(b.jsx)("hr",{style:{marginBottom:50}})]})}})]})})]})},{rightAside:{height:"100%",backgroundColor:"#fff",padding:50},stackHeading:{textAlign:"center",fontSize:48,fontWeight:900,position:"relative",left:0,top:50,color:"#2a2b2a"},tech:{padding:window.innerWidth>500?"50px 150px":0,position:"relative",left:0},techImg:{marginBottom:70}})}}]);
//# sourceMappingURL=3.eaf49740.chunk.js.map