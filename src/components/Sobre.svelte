<script>

  import { get_root_for_style } from "svelte/internal";

</script>
<html lang="pt-br">
<head>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <title>Sobre</title>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap");
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        * {
            font-family: "Inconsolata", monospace;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            background-color: #5fa500;
            
        }
        .container {
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        h1 {
            margin-top: 10vh;
            font-size: 45px;
            text-shadow: 2px 2px #343b33;
            text-decoration: underline;
            margin-bottom:30px;
        }
        .sobre{
            border:2px solid #000;  
            border-radius:5px;
            padding:10px;
            background-color:#DCDCDC;
            margin-top:5vh;
            width: 40%
        }
        .sobre p , .sobre span{
            font-family: 'Press Start 2P', sans-serif;
            font-size:14px;       
 }
        button {
            color: #fff;
            width: 250px;
            padding:18px;
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
            margin-top:8.4vh;
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
        a {
            text-decoration: none;
            color: #fff;
        }
        footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 15px;
  margin-top: 6.7vh;
  min-height: 9.6vh;
  background-color: #000;
  color: #fff;
  width: 100vw;
}
.itens-footer {
  display: flex;
  align-items: center;
}
footer a {
  text-decoration: none;
  color: #fff;
}

footer a:hover {
  color: #a8a7a7;
}
.github{
    padding-left: 5px;
}
    </style>
</head>
<body>
    <body>
        <div class="container">
            <h1>SOBRE</h1>
            <div class="sobre"    >
                <p>O jogo da cobrinha foi desenvolvido por um grupo de alunos do <span style="color:#006400;"> IFPE Campus Igarassu.</span>Aonde o objetivo é acumular o maior número de pontos possível comendo as maçãs e  movimentando a cobra pela tela desviando dos obstáculos. <br> <br> Alunos: Mateus Santiago, José Jamerson, Dômini Coutinho, José Glênio e Caio Rodrigues</p>
            </div>
            <a href="/">
                <button>Voltar pro menu</button>
            </a>
           
            <footer>
                <div class="itens-footer">
                  <span class="text-secondary"> Jogo Da Cobrinha &copy; 2023</span>
                  <a class="github" href="https://github.com/Projeto-Allan" target="blank">GitHub</a>
                </div>
              </footer>
        </div>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
          AOS.init();
        </script>
    </body>
</body>
</html>

   