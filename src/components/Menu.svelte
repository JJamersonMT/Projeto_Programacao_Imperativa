<html lang="pt-br">
<head>
    <title>Document</title>
</head>
<body>
<main>
    <div class="main">
        <h1>Jogo Da Cobrinha</h1>
        <div id="aj" on:keypress on:click ={() => trocarEstado("jogo")}>Jogar!</div>
        <div id="btns">
            <div  class="help-sob" on:keypress on:click={() => trocarEstado("ajuda")}>Ajuda</div>
            <div class="help-sob" on:keypress on:click={() => trocarEstado("sobre")}>Sobre</div>
        </div>  
    </div>
    <footer>
        <div class="itens-footer">
          <span class="text-secondary"> Jogo Da Cobrinha &copy; 2023</span>
          <a class="github" href="https://github.com/Projeto-Allan" target="blank">GitHub</a>
        </div>
      </footer>
</main>
</body>
</html>
<style>
    @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap");
    * {
        margin: 0;
        padding: 0;
    }

    main {
        background-color: #5fa500;
        background-size: cover;
        height: 100vh;
    }
    .main {
        font-family: "Inconsolata", monospace;
        width: 100vw;
        height: 85vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 700;
    }
    h1 {
        font-size: 4em;
        margin-bottom: 1em;
        text-shadow: 3px 3px #343b33;
    }

    #aj {
        display: block;
        width: 10em;
        height: 1em;
        line-height: 1em;
        font-size: xx-large;
        padding: 0.2em 0.4em;
        margin-bottom: 0.2em;
        background-image: radial-gradient(
            circle at 120.71% 50%,
            #5fa500 0,
            #3f9b00 25%,
            #0e8f00 50%,
            #008313 75%,
            #00771d 100%
        );

        color: #fff;
        border: 3px solid #000;
        border-radius: 0.2em;
        text-decoration: none;
        text-align: center;
        transition: 2s;
        margin-bottom: 10px;
        cursor: pointer;
    }
    #aj:hover {
        animation: pulsante 1s alternate;
        background-image: radial-gradient(
            circle at -16.45% 25.82%,
            #5fa500 0,
            #3f9b00 25%,
            #0e8f00 50%,
            #008313 75%,
            #00771d 100%
            );
        }

    #btns {
        display: flex;
        flex-direction: row;
        margin-top: 5px;
        cursor: pointer;
    }

    .help-sob{
        display: block;
        width: 4em;
        height: 0.8em;
        line-height: 0.8em;
        font-size: x-large;
        padding: 0.3em 1.45em;
        margin-right: 0.2em;
        margin-left: 0.2em;
        border: 3px solid #0004a2;
        background-color: #ffffff;
        color: #0004a2;
        border-radius: 0.2em;
        text-decoration: none;
        text-align: center;
        transition: 0.2s;
    }
   .help-sob:hover {
        background-color: #0004a2;
        color: #ffffff;
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
    footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 15px;
  margin-top: 5vh;
  height: 10vh;
  background-color: #000;
  color: #fff;
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
    
    <script>
        import { estado } from "../estado";
        import { trocarEstado } from "../estado";
     </script>
        