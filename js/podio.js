// Definir o contexto do Handlebars
var piloto1 = { textoVariavel: "Luiz Hamilton" };
var posicao1 = { textoVariavel: "2º lugar" };
            
// Compilar o template do Handlebars
var template = Handlebars.compile(document.querySelector("h2").innerHTML);
var template = Handlebars.compile(document.querySelector("p").innerHTML);
            
// Renderizar o template com o contexto
document.querySelector("h2").innerHTML = template(piloto1);
document.querySelector("p").innerHTML = template(posicao1);