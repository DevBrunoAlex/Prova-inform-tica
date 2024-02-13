
const perguntas = [
    {
        pergunta: "Qual é a principal função do ábaco?",
        respostas: [
            "Realizar operações matemáticas complexas",
            "Auxiliar no aprendizado de línguas estrangeiras",
            "Formatar um computador",
        ],
        correta: 0
    },
    {
        pergunta: "Quem foi Arquimedes?",
        respostas: [
            "Um famoso pintor renascentista",
            "Um filósofo grego antigo",
            "Um matemático e físico grego",
        ],
        correta: 2
    },
    {
        pergunta: "Quem foi o pai da computação",
        respostas: [
            "Arquimedes",
            "Alan Turing",
            "Steve Jobs",
        ],
        correta: 1
    },
    {
        pergunta: "Qual computador possibilitou o acesso a população geral?",
        respostas: [
            "Maquina de turing",
            "Apple II",
            "ENIAC",
        ],
        correta: 1
    },
    {
        pergunta: "Quem criou o computador Apple II?",
        respostas: [
            "Steve Jobs",
            "Alan turing",
            "Arquimedes",
        ],
        correta: 0
    },
    {
        pergunta: "Em que Era tecnológica nós estamos?",
        respostas: [
            "Computação pré-histórica",
            "Bug do milênio",
            "Computação em nuvem",
        ],
        correta: 2
    },
    {
        pergunta: "O que você entendo por computadores?",
        respostas: [
            "São maquinas grandes e caras",
            "São utilizadas para vencer guerras",
            "Fazem parte do nosso cotidiano",
        ],
        correta: 2
    },
    {
        pergunta: "Qual nota você daria para essa aula?",
        respostas: [
            "0 a 3",
            "4 a 7",
            "7 a 10",
        ],
        correta: 2
    },
    {
        pergunta: "Qual o melhor instrutor que você já conheceu?",
        respostas: [
            "Ramon",
            "Cerutti",
            "Bruno Alex",
        ],
        correta: 2
    },
    {
        pergunta: "Esta preparada para as próximas aulas?",
        respostas: [
            "Sim",
            "Não",
            "Talvez",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const quizItem = template.content.cloneNode(true)

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostarTotal = document.querySelector('#acertos span')
mostarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta


    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
           const estaCorreta = event.target.value == item.correta

           corretas.delete(item)
           if(estaCorreta) {
            corretas.add(item)
           }
           
           mostarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }



        quizItem.querySelector('dl').appendChild(dt)

        
    }

quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}
