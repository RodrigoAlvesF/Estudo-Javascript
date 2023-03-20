//Get: recuperam valores
//Set: setam valores
var data = new Date()

document.write (data.getDate () + "/" + (data.getMonth() + 1 ) + "/" + data.getFullYear())

//20 / 03 / 2023

document.write("<br>")
//Adicionar ou remover dias
document.write (data.toString())
data.setDate(data.getDate() + 720)
document.write("<hr>")
document.write (data.toString())

document.write("<br><br><br><br><br>")

//Adicionar ou remover meses
document.write (data.toString())
data.setMonth(data.getMonth() + 2)
document.write("<hr>")
document.write (data.toString())

document.write("<br><br><br><br><br>")

//Adicionar ou remover meses
document.write (data.toString())
data.setFullYear(data.getFullYear() - 2)
document.write("<hr>")
document.write (data.toString())

document.write("<br><br><br><br><br>")

//15/01/2023
var data1 = new Date(2023, 0, 15)

//23/02/2023
var data2 = new Date(2023, 1, 15)

//Quantos dias tem entre essas duas datas?
//OBS: os meses vão de 0 ~ 11

document.write(data1.toString())
document.write("<hr>")
document.write(data2.toString())
document.write("<br><br>")

//converter datas para algo que possamos calcular
document.write(data1.getTime())
document.write("<br>")
document.write(data2.getTime())
document.write("<br><br>")
//getTime: recupera a quantidade de milisegundos que existe entre as datas de 01/jan/1970 até a var data (data1 e data2)

//encontrar a quantidade de milisegundos entre data1 e data2
var ms_entre_datas = data2 - data1
document.write(ms_entre_datas)
document.write("<br><br>")
//1 dia tem 24, cada hora tem 60 min
//Cada minuto tem 60 sec
//Cada segundo tem 1000ms
//Então quantos ms existem em 1 dia?

var ms_por_dia = (1*24*60*60*1000)
document.write("1 dia tem: " + ms_por_dia + "ms")
document.write("<br>")

document.write ("Entre as datas apresentas há " + ms_entre_datas / ms_por_dia + " dias")