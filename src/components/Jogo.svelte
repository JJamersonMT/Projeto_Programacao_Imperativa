<script>
    import { estado } from "../estado";

    let pontos = 0;
    function increment() {
        pontos = pontos + 1;
    }
    function decrement() {
        pontos = pontos - 1;
        if (pontos < 0) {
            $estado = "gameover";
        }
    }

    let keyR = "s";
    let comeu = false;
    let key;
    let cobraX, cobraY;
    document.addEventListener("keydown", (event) => {
        console.log(key);
        if (
            event.key != "w" &&
            event.key != "d" &&
            event.key != "s" &&
            event.key != "a" &&
            event.key != "p"
        ) {
            key = keyR;
        } else {
            key = event.key;
            keyR = key;
        }
    });
    let cobra = [];
    let atras = false;
    let sub = 0;
    let res = true;

    function movimenta(key) {
        cobra[0] = document.getElementById("cobra0");

        console.log(cobra[0].style.top);
        console.log(cobra[0].style.left);
        if (cobra[0].style.top === "") {
            cobra[0].style.top = "300px";
            cobra[0].style.left = "300px";
        }

        if (key == "w") {
            cobraX = parseInt(cobra[0].style.top.replace("px", ""));
            if (cobraX >= 20) {
                cobra[0].style.top = cobraX - 20 + "px";
            } else {
                cobra[0].style.top = cobraX + 380 + "px";
            }
        } else if (key == "d") {
            cobraY = parseInt(cobra[0].style.left.replace("px", ""));
            if (cobraY <= 360) {
                cobra[0].style.left = cobraY + 20 + "px";
            } else {
                cobra[0].style.left = cobraY - 380 + "px";
            }
        } else if (key == "s") {
            cobraX = parseInt(cobra[0].style.top.replace("px", ""));
            if (cobraX <= 360) {
                cobra[0].style.top = cobraX + 20 + "px";
            } else {
                cobra[0].style.top = cobraX - 380 + "px";
            }

        } else if (key == "a") {
            cobraY = parseInt(cobra[0].style.left.replace("px", ""));
            if (cobraY >= 20) {
                cobra[0].style.left = cobraY - 20 + "px";
            } else {
                cobra[0].style.left = cobraY + 380 + "px";
            }
        }
    }
    function verifica() {
        let ponto = document.getElementById("ponto");
        if (ponto.style.top == "") {
            ponto.style.top = "0px";
            ponto.style.left = "0px";
        }
        if (
            ponto.style.top == cobra[0].style.top &&
            ponto.style.left == cobra[0].style.left
        ) {
            comeu = true;
            console.log("foiii");
            let vx, vy;
            res = true;
            while (res) {
                vx = Math.floor(Math.random() * 19) * 20 + "px";
                vy = Math.floor(Math.random() * 19) * 20 + "px";
                for (let i = 0; i < cobra.length; i++) {
                    if (cobra[i].style.top == vx && cobra[i].style.left == vy) {
                        res = true;
                        break;
                    }
                    res = false;
                }
            }
            ponto.style.top = vx;
            ponto.style.left = vy;
        }
    }
    function colisao() {
        for (let i = 1; i < cobra.length; i++) {
            if (
                cobra[i].style.top == cobra[0].style.top &&
                cobra[i].style.left == cobra[0].style.left &&
                cobra[i].style.backgroundColor == "blue"
            ) {
                decrement();
                cobra[i].style.backgroundColor = "red";
            } else if (
                cobra[i].style.top == cobra[0].style.top &&
                cobra[i].style.left == cobra[0].style.left &&
                cobra[i].style.backgroundColor != "red"
            ) {
                decrement();
                cobra[i].style.backgroundColor = "blue";
            } else if (
                cobra[i].style.top == cobra[0].style.top &&
                cobra[i].style.left == cobra[0].style.left &&
                cobra[i].style.backgroundColor == "red"
            ) {
                decrement();
                $estado = "gameover";
            }
        }
    }
    function obstaculos() {
        let t = cobra.length;
        let elemento = document.createElement("span");
        elemento.setAttribute("id", "obs" + t);
        elemento.setAttribute("class", "obstaculoT");
        let div = document.querySelector("#cenario");
        div.appendChild(elemento);
        cobra[t] = document.getElementById("obs" + t);
        cobra[t].style.top = Math.floor(Math.random() * 19) * 20 + "px";
        cobra[t].style.left = Math.floor(Math.random() * 19) * 20 + "px";
    }
    function score() {
        if (comeu) {
            comeu = false;
            increment();
            obstaculos();
            console.log(pontos);
        }
    }
    setInterval(() => {
        movimenta(key);
        verifica();
        score();
        colisao();
    }, 100);
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
            background-color: red;
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
            <span id="ponto" />
        </div>

        <div id="placar">
            <h1>Pontos:{pontos}</h1>
        </div>
        <div id="menu">
            <a href="/">
                <button>Voltar</button>
            </a>
        </div>
    </main>
</body>
