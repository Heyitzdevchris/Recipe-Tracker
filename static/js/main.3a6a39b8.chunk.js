(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),c=a(8),o=a(4),u=(a(14),a(3)),s=a(5);var p=function(e){var t=e.addRecipe,a=Object(n.useState)({name:"",cuisine:"",photo:"",ingredients:"",preparation:""}),r=Object(o.a)(a,2),i=r[0],c=r[1],p=function(e){var t=e.target,a=t.name,n=t.value;c((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(u.a)({},a,n))}))};return l.a.createElement("form",{name:"create",onSubmit:function(e){e.preventDefault(),""!==i.name.trim()&&""!==i.cuisine.trim()&&""!==i.photo.trim()&&""!==i.ingredients.trim()&&""!==i.preparation.trim()?(t(i),c({name:"",cuisine:"",photo:"",ingredients:"",preparation:""})):alert("Please fill in all the required fields.")}},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{name:"name",value:i.name,onChange:p,placeholder:"name"})),l.a.createElement("td",null,l.a.createElement("input",{name:"cuisine",value:i.cuisine,onChange:p,placeholder:"cuisine"})),l.a.createElement("td",null,l.a.createElement("input",{name:"photo",value:i.photo,onChange:p,placeholder:"photo"})),l.a.createElement("td",null,l.a.createElement("textarea",{name:"ingredients",value:i.ingredients,onChange:p,placeholder:"ingredients"})),l.a.createElement("td",null,l.a.createElement("textarea",{name:"preparation",value:i.preparation,onChange:p,placeholder:"preparation"})),l.a.createElement("td",null,l.a.createElement("button",{type:"submit"},"Create"))))))};var m=function(e){var t=e.recipe,a=e.deleteRecipe;return l.a.createElement("tr",null,l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.cuisine),l.a.createElement("td",null,l.a.createElement("img",{src:t.photo,alt:t.name,className:"scale-down"})),l.a.createElement("td",{className:"content-td"},l.a.createElement("p",null,t.ingredients)),l.a.createElement("td",{className:"content-td"},l.a.createElement("p",null,t.preparation)),l.a.createElement("td",null,l.a.createElement("button",{name:"delete",onClick:function(){a(t.name)}},"Delete")))};a(15);var d=function(e){var t=e.recipes,a=e.deleteRecipe;return l.a.createElement("div",{className:"recipe-list"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Cuisine"),l.a.createElement("th",null,"Photo"),l.a.createElement("th",null,"Ingredients"),l.a.createElement("th",null,"Preparation"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement(m,{key:t,recipe:e,deleteRecipe:a})})))))},h=[{name:"Tuna Poke with Mango",cuisine:"Hawaiian",photo:"https://www.foodista.com/sites/default/files/styles/recype/public/tunapokebowlwithmango22.jpg",ingredients:"1 package of sushi grade tuna. 1 cup cooked quinoa \xbd avocado, sliced. \xbd mango, cubed. 1 shredded carrot. 1 small sliced cucumber. poke sauce.",preparation:"1. Chop tuna into cubes. 2. Toss with 1 tbsp sesame oil and 1 tbsp tamari. Set aside. 3. Layer your poke bowl starting with quinoa. 4. Whisk all poke sauce ingredients in a bowl and pour over the poke bowl. 5. Garnish with sesame seeds and furikake. 6. Top with chopped scallions."},{name:"Guacamole",cuisine:"Mexican",photo:"https://www.foodista.com/sites/default/files/styles/recype/public/017.jpg",ingredients:"3 ripe avocados. \xbe cup finely chopped Roma tomato. 2 serrano chiles very finely chopped (seeded and deveined). 3 heaping tablespoons of finely chopped onion. 3 tablespoons of minced cilantro. Salt to taste",preparation:"1. Remove the flesh of the avocados. 2. Mash the avocados with the back of a fork. 3. Add the other ingredients and incorporate evenly. 4. Add salt to taste."}];var E=function(){var e=Object(n.useState)(h),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("h1",null,"Delicious Food Recipes")),l.a.createElement(d,{recipes:a,deleteRecipe:function(e){r((function(t){return t.filter((function(t){return t.name!==e}))}))}}),l.a.createElement(p,{addRecipe:function(e){r((function(t){return[].concat(Object(c.a)(t),[e])}))}}))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.3a6a39b8.chunk.js.map