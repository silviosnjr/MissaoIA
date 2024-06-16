const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você começa um novo projeto de programação, qual é a sua abordagem inicial?",
        alternativas: [
            {
                texto: "Gosto de planejar detalhadamente antes de começar a codificar.",
                afirmacao: "<b>Organização</b> é uma característica forte sua, valorizando o planejamento detalhado."
            },
            {
                texto: "Prefiro começar a codificar logo e ajustar o plano conforme avanço.",
                afirmacao: "Você se destaca pela <b>dinamismo</b>, gostando de aprender e ajustar durante o processo."
            }
        ]
    },
    {
        enunciado: "Como você lida com problemas ou bugs no seu código?",
        alternativas: [
            {
                texto: "Gosto de resolver os problemas sozinho, pesquisando e testando diferentes soluções.",
                afirmacao: "Independência define sua abordagem para resolver problemas, confiando nas suas <b>habilidades de pesquisa</b>."
            },
            {
                texto: "Prefiro pedir ajuda a colegas ou em fóruns de programação quando encontro dificuldades.",
                afirmacao: "Colaboração é essencial para você, apreciando a <b>troca de conhecimento</b> com outros programadores."
            }
        ]
    },
    {
        enunciado: "Qual é a sua preferência em relação à estética versus funcionalidade em um projeto?",
        alternativas: [
            {
                texto: "Acredito que a funcionalidade é mais importante que a estética.",
                afirmacao: "<b>Pragmatismo</b> é uma característica sua, priorizando a funcionalidade e a eficiência do código."
            },
            {
                texto: "Valorizo muito a estética e gosto de criar interfaces visualmente atraentes.",
                afirmacao: "<b>Detalhista</b>, você dá muita importância à aparência e à experiência do usuário."
            }
        ]
    },
    {
        enunciado: "Qual é a sua postura em relação ao aprendizado de novas tecnologias?",
        alternativas: [
            {
                texto: "Prefiro me aprofundar nas tecnologias que já conheço bem antes de explorar novas.",
                afirmacao: "<b>Foco</b> é seu ponto forte, preferindo dominar suas ferramentas atuais."
            },
            {
                texto: "Gosto de experimentar e aprender novas tecnologias constantemente.",
                afirmacao: "<b>Curiosidade</b> é uma marca sua, sempre em busca de novas ferramentas e técnicas."
            }
        ]
    },
    {
        enunciado: "Como você prefere trabalhar em um projeto?",
        alternativas: [
            {
                texto: "Prefiro trabalhar sozinho, tendo total controle sobre o projeto.",
                afirmacao: "<b>Independência</b> é uma preferência sua, gostando de ter controle total sobre seus projetos."
            },
            {
                texto: "Gosto de trabalhar em equipe, colaborando e compartilhando responsabilidades.",
                afirmacao: "<b>Trabalho em equipe</b> é algo que você valoriza, apreciando a colaboração e a partilha de responsabilidades."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 