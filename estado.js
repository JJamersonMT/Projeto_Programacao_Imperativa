import { writable } from 'svelte/store'
import Cobra from './src/Cobra'
import Bloco from './src/Bloco'
import Ponto from './src/Ponto'
import Cenario from './src/Cenario'

export let estado = writable('menu')
export let pontuacao = {
	pontos: 0 
}

export function trocarEstado(novoEstado){
    estado.set(novoEstado)
}

export const cobra = new Cobra()
export const bloco = new Bloco
export const ponto = new Ponto
export const cenario = new Cenario






