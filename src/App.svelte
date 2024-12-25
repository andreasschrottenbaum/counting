<script lang="ts">
  import { onMount } from 'svelte'
  import Game from './lib/Game.svelte'

  const storedLevel = localStorage.getItem('level')
  const initialLevel = storedLevel ? parseInt(storedLevel) : 9

  let level = $state(initialLevel)
  let game = $state<Game>()
  let endcard = $state<HTMLElement>()

  let endpoints = $state(0)
  let gameWon = $state(false)

  function win(points: number) {
    endpoints = points
    gameWon = true

    endcard?.classList.remove('hidden')
  }

  function lose(points: number) {
    endpoints = points
    gameWon = false

    endcard?.classList.remove('hidden')
  }

  function reset() {
    endpoints = 0
    endcard?.classList.add('hidden')
  }

  $effect(() => {
    level

    localStorage.setItem('level', level.toString())

    return () => {
      game?.restart()
    }
  })

  onMount(() => {
    game?.restart()
  })
</script>

<main>
  <h1>
    Zähle bis <select bind:value={level}>
      {#each Array.from({ length: 8 }, (_, i) => (i + 2) * (i + 2)) as i}
        <option value={i}>{i}</option>
      {/each}
    </select>
  </h1>

  <Game
    {win}
    {lose}
    {reset}
    {level}
    bind:this={game}
  ></Game>

  <div
    class="endcard hidden"
    bind:this={endcard}
  >
    <div class="inner">
      <h3>
        {#if gameWon}
          Du hast Gewonnen!
        {:else}
          Du hast leider Verloren
        {/if}
      </h3>

      <p class="endstate">
        {#if gameWon}
          🏆
        {:else}
          😢
        {/if}
      </p>

      <p>Deine Punkte: {endpoints}</p>

      <button onclick={game.restart}>Erneut Spielen</button>
    </div>
  </div>
</main>

<style>
  main {
    display: grid;
    place-content: center;
    padding-bottom: 1em;
  }

  select {
    font-size: 1em;
    font-family: inherit;
    font-weight: bold;
    padding: 0.5em;
  }

  .endcard {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);

    display: grid;
    gap: 1rem;
    place-content: center;
  }

  .endcard.hidden {
    display: none;
  }

  .endcard .inner {
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    color: #333;
    aspect-ratio: 1;
  }

  .endstate {
    font-size: 3em;
    text-align: center;
    margin: 0;
  }
</style>
