import { estado, pontuacao, trocarEstado } from '../estado.js'
import {verifica} from '../src/verifica.js'
import { colisao } from './colisao.js'

export function main(ponto,cobra,bloco,cenario){

	document.addEventListener("keydown", (e) => {


		if(e.key!='w'&&e.key!='d'&&e.key!='s'&&e.key!='a'){
			return
		}else{
			cenario.key=e.key
		}




	})
	setInterval(()=>{
		if(cobra.loop==true){
			cobra.movimenta(cenario.key)
			cenario.iniciaAtributos()
			cobra.score(bloco.el,cenario.el)
			verifica(ponto,cobra,bloco)
			colisao(cobra,bloco)
			if(cobra.decrementa==true){
				cobra.decrementa=false
				pontuacao.pontos -= 1
			}
			if(pontuacao.pontos>=0){
				console.log(pontuacao.pontos)
			}else{
				cobra.loop=false
				trocarEstado('gameover')

			}

	}1

	},90)


}

// if( e.key != "w" && e.key != "d" && e.key != "s" && e.key != "a" ){

	// }
