import {pontuacao, trocarEstado} from '../estado'
function timer(){
	let time = 200
	setTimeout(time=>{},time)
}
export async function colisao(cobra,bloco) {
	for(let i = 0; i < bloco.el.length; i++){

			if(cobra.el.style.top == bloco.el[i].style.top && cobra.el.style.left == bloco.el[i].style.left &&
				bloco.el[i].style.backgroundColor == "blue"){

					cobra.decrementa = true
					await timer()
					bloco.el[i].style.backgroundColor = "red";

			}else if(cobra.el.style.top == bloco.el[i].style.top && cobra.el.style.left == bloco.el[i].style.left &&
				bloco.el[i].style.backgroundColor != "red" &&
				bloco.el[i].style.backgroundColor != "blue"){
					cobra.decrementa = true
					await timer()
					bloco.el[i].style.backgroundColor = "blue";

			}else if(cobra.el.style.top == bloco.el[i].style.top && cobra.el.style.left == bloco.el[i].style.left &&
				bloco.el[i].style.backgroundColor == "red"){

					cobra.decrementa = true
					await timer()
					cobra.loop=false
					trocarEstado('gameover')

			}
	}
}
