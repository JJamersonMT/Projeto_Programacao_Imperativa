import { pontuacao } from "../estado"

class Cobra{
	constructor(){
		this.pontos = 0
		this.el = this.el
		this.px = 0
		this.py = 0
		this.vel = 20
		this.loop = true
		this.comeu = false
		this.decrementa = false
		this.res = false;
	}
	set inseriPx(v){
		this.px=parseInt(this.el.style.top)+v;
		this.el.style.top=this.px+'px'
	}
	set inseriPy(v){
		this.py=parseInt(this.el.style.left)+v;
		this.el.style.left=this.py+'px'
	}
	pause(v){
		if(v===true)return
	}
	score(bloco,cenario){
		if(this.comeu){
			console.log('comeu')
			this.comeu = false;
			pontuacao.pontos+=1
			this.obstaculos(bloco,cenario)
		}
	}

	// set incremente(v){
	// 	this.pontos = this.pontos - 1;
	// 	if (this.pontos < 0) {
	// 		this.loop = false
	// 	}
	// }
	obstaculos(bloco,cenario){
		let t = bloco.length;
		let elemento = document.createElement("span");
		elemento.setAttribute("id", "obs" + t);
		elemento.setAttribute("class", "obstaculoT");
		cenario.appendChild(elemento);
		bloco[t] = document.getElementById("obs" + t);
		bloco[t].style.top = (Math.floor(Math.random() * 20))*20+ "px";
		bloco[t].style.left = (Math.floor(Math.random() * 20))*20+ "px";
	}
	iniciaAtributos(){
		if(document.getElementById("cobra0")&&(document.getElementById('cobra0').style.top=='')){
			this.el = document.getElementById("cobra0")
			this.el.style.top = Math.floor(Math.random() * 1)*(380)+ "px";
			this.el.style.left = Math.floor(Math.random() * 1)*(380)+ "px";
			document.getElementById("ponto").style.top = Math.floor(Math.random() * 1)*(380)+ "px";
			document.getElementById("ponto").style.left = Math.floor(Math.random() * 1)*(380)+ "px";
		}
	}
	// -- FUNCAO DE MOVIMENTO DA COBRA --
	movimenta(key) {
		this.iniciaAtributos()

		if (key == "w"){

			if(this.px >= 20) {
				this.inseriPx = -this.vel
			}else{
				this.inseriPx = 380
			}

		}else if(key == "d") {

			if (this.py <= 360) {
				this.inseriPy = this.vel
			}else {
				this.inseriPy = -380
		  }

		}else if(key == "s") {

			if (this.px <= 360) {
				this.inseriPx = this.vel
			}else {
				this.inseriPx = -380
		  }

		}else if(key == "a") {

			if(this.py >= 20) {
				this.inseriPy = -this.vel
			}else{
				this.inseriPy = 380
			}

		}
	}


}


export default Cobra
