<script>
  //Importando as telas do jogo 

  import Menu from './components/Menu.svelte';
  import Sobre from './components/Sobre.svelte';
  import Jogo from './components/Jogo.svelte';
  import Ajuda from './components/Ajuda.svelte';
  import Fim from './components/Fim.svelte';


  import {estado} from './estado';
</script>

{#if $estado === 'menu'}
  <Menu/>
{:else if $estado === 'jogo'}
  <Jogo/>
{:else if $estado === 'sobre'}
  <Sobre/>
{:else if $estado ==='ajuda'}
  <Ajuda/>
{:else if $estado ==='gameover'}
  <Fim/>
{/if}