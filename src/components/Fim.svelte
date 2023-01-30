
<html lang="pt-br">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fim de jogo</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>  
   @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap");
    * {
        margin: 0;
        padding: 0;
    }
  
  main {
   
    background-size: cover;
    height: 100vh;
    }
    .main {
        font-family: "Inconsolata", monospace;
        background-color: #7fa500;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1 {
       margin-top:30vh;
        font-size: 4em;
        text-shadow: 2px 2px #343b33;
        background-color: red;
        padding:20px;
        border-radius:7px;
    }
    p{font-size:32px;
      margin-top:10px;
      margin-bottom:30px;
    }
    .try-again{
      text-align:center;
    }
    .fa-refresh{
      font-size:45px;
      color:black;
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
</head>
<body>
  <div class="main">
  <main>
      <h1>FIM DE JOGO!</h1>
    <div class="try-again">
      <p>Tente novamente!</p>
      <a href="/"><i class="fa fa-refresh fa-spin" ></i></a>
    </div>
    </main>
    <footer>
      <div class="itens-footer">
          <span class="text-secondary"> Jogo Da Cobrinha &copy; 2023</span>
          <a class="github" href="https://github.com/Projeto-Allan" target="blank">GitHub</a>
      </div>    
  </footer>   
  </div>
  <script>
  import { blank_object } from "svelte/internal";
  import Jogo from "./Jogo.svelte";
  
  </script>


</body>
</html>

