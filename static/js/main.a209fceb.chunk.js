(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{47:function(e,s,t){},48:function(e,s,t){},49:function(e,s,t){"use strict";t.r(s);var a=t(0),i=t(3),r=t.n(i),n=t(14),c=t.n(n),o=t(5),m=t.n(o),l=t(15),d=t(16),u=t(17),j=t(20),v=t(19),p=t(18),b=t.n(p),g=t(2),h=t.n(g);t(47);function O(e){var s=e.year,t=e.title,i=e.summary,r=e.poster,n=e.genres;return Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{src:r,alt:t,title:t}),Object(a.jsxs)("div",{className:"movie_data",children:[Object(a.jsx)("h3",{className:"movie_title",children:t}),Object(a.jsx)("h5",{className:"movie_year",children:s}),Object(a.jsx)("ul",{className:"movie_genres",children:n.map((function(e,s){return Object(a.jsx)("li",{className:"genres_genre",children:e},s)}))}),Object(a.jsxs)("p",{className:"movie_summary",children:[i.slice(0,100),"..."]})]})]})}O.propsTypes={id:h.a.number.isRequired,year:h.a.number.isRequired,title:h.a.string.isRequired,summary:h.a.string.isRequired,poster:h.a.string.isRequired,genres:h.a.arrayOf(h.a.string).isRequired};var y=O,x=(t(48),function(e){Object(j.a)(t,e);var s=Object(v.a)(t);function t(){var e;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=s.call.apply(s,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(m.a.mark((function s(){var t,a;return m.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=s.sent,a=t.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return s.stop()}}),s)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,s=e.isLoading,t=e.movies;return Object(a.jsx)("section",{className:"container",children:s?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader_text",children:"Loading..."})}):t.map((function(e){return console.log(e),Object(a.jsx)("div",{className:"movies",children:Object(a.jsx)(y,{id:e.id,year:e.id,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)})}))})}}]),t}(r.a.Component));c.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.a209fceb.chunk.js.map