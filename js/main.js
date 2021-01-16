var title = document.querySelector(".title")
title.textContent = "Aparecida Nutricionista"

var patient = document.querySelector("#first-patient")

var tdWeight = patient.querySelector(".info-peso");
var weight = tdWeight.textContent;

var tdHeight = patient.querySelector(".info-altura")
var height = tdHeight.textContent;

var tdImc = patient.querySelector(".info-imc")
var imc = weight/(Math.pow(height, 2))
tdImc.textContent = imc;

