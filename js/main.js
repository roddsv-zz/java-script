var title = document.querySelector(".title")
title.textContent = "Aparecida Nutricionista"

var patient = document.querySelector("#first-patient")

var tdWeight = patient.querySelector(".info-peso");
var weight = tdWeight.textContent;

var tdHeight = patient.querySelector(".info-altura")
var height = tdHeight.textContent;

var imc = weight/(Math.pow(height, 2))

console.log(imc)

/*Revisando: o document.querySelector vai numa tag HTML e extrai o conteúdo dela pro JS (na integra, com todas as
as tags). Depois, eu salvo esse conteúdo numa variável. Depois eu chamo a variavel.querySelector para escolher o
id ou a class desejado e guardo numa nova variável. Por fim, eu invoco o variavel.textContent para extrair somente
o texto de dentro da tag.*/