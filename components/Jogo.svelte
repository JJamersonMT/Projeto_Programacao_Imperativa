<script>

	import { pontuacao,estado,cobra,ponto,bloco,cenario } from "../estado";
	import {main} from '../src/main.js'

	// ponto.iniciaAtributos()

	main(ponto,cobra,bloco,cenario)
	setInterval(()=>{
		pontuacao.pontos = pontuacao.pontos
	},100)

</script>


<head>
    <title>Jogo </title>
    <style>
        body {
            background-color: #caf3c0;
        }
        main {
            height: 95vh;
            width: 95vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 4em;
        }
        .imagenPonto{
            position:relative;
            width: 100%;
            height: 100%;
        }
        button {
            margin: 0 auto;
            margin-top: 5vh;
            color: #fff;
            font-weight: 900;
            width: 200px;
            height: 50px;
            border: 3px solid black;
            border-radius: 10px;
            font-size: 20px;
            font-weight: 900;
            background-image: radial-gradient(
                circle at 120.71% 50%,
                #5fa500 0,
                #3f9b00 25%,
                #0e8f00 50%,
                #008313 75%,
                #00771d 100%
            );
            cursor: pointer;
        }
        button:hover {
            background-image: radial-gradient(
                circle at -16.45% 25.82%,
                #5fa500 0,
                #3f9b00 25%,
                #0e8f00 50%,
                #008313 75%,
                #00771d 100%
            );
            animation: pulsante 1s alternate;
        }

        #menu {
            margin-top: 27em;
        }

        #placar {
            margin-top: -8em;
        }

        #cenario {
            position: absolute;
            top: 15vh;
            height: 400px;
            width: 400px;
            border: 5px solid #000;
            background-color: rgb(22, 89, 0);
        }
        .cobra {
            position: absolute;
            display: block;
            background-color: rgb(128, 255, 0);
            width: 20px;
            height: 20px;
        }

        .obstaculoT {
            position: absolute;
            display: block;
            background-color: yellow;
            width: 20px;
            height: 20px;
        }
        #ponto {
            position: absolute;
            display: block;
            background-color: transparent;
            border-radius: 50%;
            width: 20px;
            height: 20px;
        }
        @keyframes pulsante {
            0% {
                transform: scale(1);
            }
            25% {
                transform: scale(1.1);
            }
            50% {
                transform: scale(0.9);
            }
            75% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }
    </style>
</head>
<body>
    <main>
        <div id="cenario">
            <span class="cobra" id="cobra0" />
            <span id="ponto" ><img class="imagenPonto" src="../public/maca.png" alt=""/></span>
        </div>

        <div id="placar">
            <h2>Pontos:{pontuacao.pontos}</h2>
        </div>
        <div id="menu">
            <a href="/">
                <button>Voltar</button>
            </a>
        </div>
    </main>
</body>
