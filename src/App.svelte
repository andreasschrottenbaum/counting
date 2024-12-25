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
    Zähle bis
    <select bind:value={level}>
      <option value={4}>4</option>
      <option value={9}>9</option>
      <option value={16}>16</option>
      <option value={25}>25</option>
      <option value={36}>36</option>
      <option value={49}>49</option>
      <option value={64}>64</option>
      <option value={81}>81</option>
      <option value={100}>100</option>
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

      <p>Deine Punkte: <strong>{endpoints}</strong></p>

      {#if gameWon}
        <button
          class="gameWon"
          onclick={() => (level = Math.pow(Math.sqrt(level) + 1, 2))}
          >Nächstes Level</button
        >
      {/if}
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
    padding: 0 0.5em;
  }

  .endcard {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);

    display: grid;
    gap: 1rem;
    place-content: center;
    text-align: center;
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
  }

  .endcard h3 {
    margin: 0;
  }

  .endcard button {
    display: block;
    margin: 0 auto 1em;
    font-size: 1em;
    padding: 0.5em 1em;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .endstate {
    font-size: 3em;
    margin: 0;
  }

  .gameWon {
    background-color: #4caf50;
  }
</style>
