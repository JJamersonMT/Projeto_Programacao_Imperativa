import { colisao } from "./colisao";
export function verifica(ponto,cobra,bloco){
	ponto.iniciaAtributos()
	if (
			ponto.el.style.top == cobra.el.style.top &&
			ponto.el.style.left == cobra.el.style.left
	) {
			cobra.comeu = true;
			console.log("foiii");
			let vx, vy;
			cobra.res = true;
			vx = (Math.floor(Math.random() * 20))  ;
			vy = (Math.floor(Math.random() * 20))  ;
			ponto.el.style.top = vx * 20 +'px';
			ponto.el.style.left = vy* 20 +'px';
	}

	colisao(cobra,bloco)

}
