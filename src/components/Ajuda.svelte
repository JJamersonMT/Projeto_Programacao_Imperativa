
<html lang="pt-br">
    <head>
        <title>Ajuda</title>
    </head>    
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
            background-color: #5fa500;
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    
        h1 {
            margin-top: 9.5vh;
            font-size: 45px;
            text-shadow: 2px 2px #343b33;
            text-decoration: underline;
            margin-bottom:30px;
        }
        
        .help{
            border:2px solid #000;  
            border-radius:5px;
            padding:10px;
            background-color:#DCDCDC;
            margin-top:5vh;
            width: 40%
        }
        .help p {
            font-family: 'Press Start 2P', sans-serif;
            font-size:14px;       
        }
        .help span{
            font-family: 'Press Start 2P', sans-serif;
            font-size:14px;  
            color:#006400;
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
            margin-top: 30px;
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
            a {
                text-decoration: none;
                color: #fff;
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
    
        footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 15px;
    margin-top: 3.6vh;
    min-height: 10vh;
    background-color: #000;
    color: #fff;
    width: 100%;
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
    
    
<body>
           <div class="container">
            <h1>AJUDA</h1>   
            <div class="help">
                <p>
            Objetivo: <br>        
            O objetivo do jogo é alcançar o máximo possível de pontos, 
            que são acumulados ao comer as maçãs, ao mesmo tempo que evita a colisão 
            com os obstáculos que aparecem aleatoriamente na tela. <br><br>
            Como Jogar: <br>
            Controle o movimento da cobrinha com as teclas W.A.S.D: <br>
            W: <span> Cima</span>, A: <span> Esquerda </span>, S: <span> Baixo </span> & D: <span> Direita</span>
            
        </p>    
       </div> 
       <a href="/">
        <button>Voltar ao menu</button>
    </a>    
    <footer>
        <div class="itens-footer">
            <span class="text-secondary"> Jogo Da Cobrinha &copy; 2023</span>
            <a class="github" href="https://github.com/Projeto-Allan" target="blank">GitHub</a>
        </div>    
    </footer>    

   
           </div> 
  
</body>           
</html>
