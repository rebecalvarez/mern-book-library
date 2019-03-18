(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(59)},50:function(e,t,a){},51:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(23),r=a.n(l),c=a(61),s=a(63),i=a(62),m=a(8),u=a(9),d=a(13),b=a(10),h=a(14),v=a(6),p=a.n(v),f=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_KEY,g={getGoogleBooks:function(e){return p.a.get("".concat("https://www.googleapis.com/books/v1").concat("/volumes","?").concat("q=").concat(e,"&").concat("maxResults=").concat("15","&key=").concat(f))},saveBook:function(e){return p.a.post("/api/bookshelf",e)},getBookshelf:function(){return p.a.get("/api/bookshelf")},deleteBook:function(e){return p.a.delete("/api/bookshelf/".concat(e))}};a(50);var k=function(e){return o.a.createElement("div",{className:"container mt-4"},o.a.createElement("div",{className:"jumbotron text-center text-white",style:{backgroundImage:"url(".concat(e.image,")"),backgroundSize:"cover"}},o.a.createElement("h1",{className:"display-4 title"},e.title),o.a.createElement("p",{className:"lead"},e.lead),o.a.createElement("hr",{className:"my-4"}),o.a.createElement("p",{className:"instructions"},e.instructions)))};a(51);var E=function(e){return o.a.createElement("div",{className:"row mb-5"},o.a.createElement("div",{className:"col-lg-12"},e.books.map(function(t){return o.a.createElement("div",{className:"card mt-4",key:t._id?t._id:t.googleBookId},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},t.title),o.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},t.subtitle),o.a.createElement("div",{className:"media"},o.a.createElement("img",{src:t.thumbnail,className:"align-self-center mr-3",alt:"BookThubmnail"}),o.a.createElement("div",{className:"media-body"},o.a.createElement("h6",{className:"mt-0"},t.authors.join(",")),o.a.createElement("p",{className:"mb-0"},t.description),o.a.createElement("p",{className:"mb-0"},o.a.createElement("small",{className:"text-muted"},t.pageCount," pages.")),o.a.createElement("p",{className:"mb-2"},o.a.createElement("small",{className:"text-muted"},"Published ",t.publishedDate)))),o.a.createElement("a",{className:"btn btn-info mr-1 mt-2",href:t.link,target:"_blank",rel:"noopener noreferrer"},"View Book"),o.a.createElement("button",{className:e.buttonType,onClick:e.buttonAction,id:t._id?t._id:t.googleBookId},e.buttonText)))})))},N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.loadBookshelf=function(){g.getBookshelf().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){g.deleteBook(e.target.id).then(function(e){return a.loadBookshelf()}).catch(function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadBookshelf()}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(k,{title:"My Bookshelf",lead:"All of my books stored in one place",instructions:"View your book at Google , or remove it from your book from the bookshelf ...",image:"https://lancaster.lancasterlibraries.org/wp-content/uploads/sites/13/2018/03/banner-ebooks.jpg"}),o.a.createElement(E,{books:this.state.books,buttonAction:this.deleteBook,buttonType:"btn btn-danger mt-2",buttonText:"Delete Book"}))}}]),t}(n.Component);var w=function(e){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"book-search"},"Search:"),o.a.createElement("input",{type:"text",value:e.search,onChange:e.handleInputChange,className:"form-control",id:"book-search",placeholder:"e.g. Lord of the Rings"})),o.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:e.handleFormSubmit},"Search"))))))},y=(a(16),function(e){var t=[];return e.map(function(e){var a={title:e.volumeInfo.title,authors:e.volumeInfo.authors?e.volumeInfo.authors:"No Author Listed",description:e.volumeInfo.description?e.volumeInfo.description:"No Description Listed",googleBookId:e.id,thumbnail:e.volumeInfo.imageLinks.thumbnail?e.volumeInfo.imageLinks.thumbnail:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/170px-No_image_available.svg.png",link:e.volumeInfo.canonicalVolumeLink,pageCount:e.volumeInfo.pageCount,subtitle:e.volumeInfo.subtitle,publishedDate:e.volumeInfo.publishedDate};return t.push(a),t}),t}),B=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={search:"",results:[],error:""},a.saveBook=function(e){var t=a.state.results.find(function(t){return t.googleBookId===e.target.id}),n={title:t.title,authors:t.authors,description:t.description,googleBookId:t.googleBookId,thumbnail:t.thumbnail,link:t.link,pageCount:t.pageCount,subtitle:t.subtitle,publishedDate:t.publishedDate};g.saveBook(n).then(function(e){console.log(e.status,e.statusText)}).catch(function(e){console.log(e)})},a.handleInputChange=function(e){a.setState({search:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),g.getGoogleBooks(a.state.search).then(function(e){var t=y(e.data.items);a.setState({results:t})}).catch(function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(k,{title:"Search",lead:"Using Google Books API",instructions:"Search for a book; the view it on Google Books, or add it to your Bookshelf...",image:"https://media.istockphoto.com/vectors/library-books-in-banner-vector-id700439034"}),o.a.createElement(w,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),o.a.createElement(E,{books:this.state.results,buttonAction:this.saveBook,buttonType:"btn btn-sucess mt-2",buttonText:"Save Book"}))}}]),t}(n.Component);function I(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function x(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function j(e){var t=e.size,a=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}var C=function(){return o.a.createElement(I,{fluid:!0},o.a.createElement(x,null,o.a.createElement(j,{size:"md-12"},o.a.createElement(k,null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},_=a(60);var D=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark justify-content-between "},o.a.createElement(_.a,{to:"/",className:"/"===window.location.pathname||"/search"===window.location.pathname?"nav-link active navbar-brand":"nav-link navbar-brand"},"Navbar"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement(_.a,{to:"/",className:"/"===window.location.pathname||"/search"===window.location.pathname?"nav-link active":"nav-link"},"Home ",o.a.createElement("span",{className:"sr-only"},"(current)"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement(_.a,{to:"/bookshelf",className:"/bookshelf"===window.location.pathname?"nav-link active":"nav-link"},"My Bookshelf")))))};var S=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(D,null),o.a.createElement(s.a,null,o.a.createElement(i.a,{exact:!0,path:"/",component:B}),o.a.createElement(i.a,{exact:!0,path:"/search",component:B}),o.a.createElement(i.a,{exact:!0,path:"/bookshelf",component:N}),o.a.createElement(i.a,{component:C}))))};r.a.render(o.a.createElement(S,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.02404b95.chunk.js.map