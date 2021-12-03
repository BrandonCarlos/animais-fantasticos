export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);//Macete - .map(Number) já retorna o array em NÚMEROS
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);//Macete - .map(Number) já retorna o array em NÚMEROS
  console.log(horarioSemana);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;//então está aberto
  
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])

  if(semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}


// const agora = new Date();

// const futuro = new Date('Dec 24 2021 23:59');


// //quantos dias falta para o natal?
// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarDias(agora.getTime())
// const diasFuturo = transformarDias(futuro.getTime());

// console.log(diasAgora);//passaram 18950.728591643518 dias desde 1970 até 2021 que estamos agora
// console.log(diasFuturo);
// console.log(futuro.getTime());// falta tudo isso pra 24 de dezembro = 1545703140000
// console.log(Math.floor(diasFuturo - diasAgora));//faltas 35 dias