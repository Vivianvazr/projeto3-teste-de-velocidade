//Escreva um programa em JS que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso).
//EXEMPLOS DE SAÍDA
//Situação 1:
//O Captuh está a 10km/h, e está mais rápido que o Oroch, que está a 7km/h!
//Situação 2:
//O Oroch está a 50km/h, e está mais rápido que o Captuh, que está a 25km/h!
//Situação 3:
//Tanto Captuh quando Oroch estão na mesma velocidade de 30km/h!
let vehicle1 = prompt('Digite o nome do primeiro veículo ')
let speed1 = prompt('Digite a velocidade do primeiro veículo ')
let vehicle2 = prompt('Digite o nome do segundo veículo ')
let speed2 = prompt('Digite a velocidade do segundo veículo ')
if (speed1>speed2) {
    alert(`O ${vehicle1} está a ${speed1}km/h, e está mais rápido que o ${vehicle2} que está a ${speed2}km/h`)
   
} else if (speed1<speed2)
        alert(`O ${vehicle2} está a ${speed2}km/h, e está mais rápido que o ${vehicle1} que está a ${speed1}km/h.`);
    
else {(speed1===speed2)
alert(`Tanto ${vehicle1} e ${vehicle2} estão na mesma velocidade de ${speed1}km/h`)

}
