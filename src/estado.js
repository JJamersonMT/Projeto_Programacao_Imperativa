import { writable } from 'svelte/store'

export let estado = writable('menu')

export function trocarEstado(novoEstado){
    estado.set(novoEstado)
}