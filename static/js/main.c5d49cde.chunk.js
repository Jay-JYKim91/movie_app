(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{59:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),r=n.n(a),i=n(29),c=n.n(i),o=n(9),u=n(2),j=n(17),m=n.n(j),l=n(30),d=n(11),p=n(12),b=n(14),v=n(13),h=n(31),O=n.n(h),x=n(5),y=n.n(x);n(59);function g(e){var t=e.id,n=e.year,a=e.title,r=e.summary,i=e.poster,c=e.genres;return Object(s.jsx)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:a,summary:r,poster:i,genres:c}},children:Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{src:i,alt:a,title:a}),Object(s.jsxs)("div",{className:"movie_data",children:[Object(s.jsx)("h3",{className:"movie_title",children:a}),Object(s.jsx)("h5",{className:"movie_year",children:n}),Object(s.jsx)("ul",{className:"movie_genres",children:c.map((function(e,t){return Object(s.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(s.jsxs)("p",{className:"movie_summary",children:[r.slice(0,100),"..."]})]})]})})}g.propsTypes={id:y.a.number.isRequired,year:y.a.number.isRequired,title:y.a.string.isRequired,summary:y.a.string.isRequired,poster:y.a.string.isRequired,genres:y.a.arrayOf(y.a.string).isRequired};var f=g,_=(n(63),function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(m.a.mark((function t(){var n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader_text",children:"Loading..."})}):n.map((function(e){return Object(s.jsx)("div",{className:"movies",children:Object(s.jsx)(f,{id:e.id,year:e.id,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)})}))})}}]),n}(r.a.Component));var N=function(){return Object(s.jsx)("span",{children:"About function"})},k=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(s.jsx)("span",{children:e.state.title}):null}}]),n}(r.a.Component);var q=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(o.b,{to:"/",children:"Home"}),Object(s.jsx)(o.b,{to:"/about",children:"About"})]})};var w=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(q,{}),Object(s.jsx)(u.a,{path:"/",exact:!0,component:_}),Object(s.jsx)(u.a,{path:"/about",component:N}),Object(s.jsx)(u.a,{path:"/movie/:id",component:k})]})};c.a.render(Object(s.jsx)(w,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.c5d49cde.chunk.js.map