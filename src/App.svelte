<script lang="ts">
  // @TODO: add background music(?)
  // @TODO: add shapes to the game (⭐ ❤️ 🏆 🎈 😊 🐱 🧩 🍬)
  // @TODO: add feedback sounds

  import { onMount } from 'svelte'
  import Game from './lib/Game.svelte'

  const storedLevel = localStorage.getItem('currentLevel')
  const initialLevel = storedLevel ? parseInt(storedLevel) : 4
  const storedHighestLevel = localStorage.getItem('highestLevel')
  const highestLevel = storedHighestLevel ? parseInt(storedHighestLevel) : 4

  let level = $state(initialLevel)
  let game = $state<Game>()
  let endcard = $state<HTMLElement>()

  let gameWon = $state(false)
  let endPoints = $state(0)
  let endDuration = $state(0)

  function win(points: number, duration: number) {
    endPoints = points + parseInt(localStorage.getItem('currentPoints') || '0')
    gameWon = true
    endDuration = duration

    endcard?.classList.remove('hidden')
  }

  function lose(points: number) {
    endPoints = points + parseInt(localStorage.getItem('currentPoints') || '0')
    gameWon = false

    endcard?.classList.remove('hidden')
  }

  function reset() {
    endPoints = 0
    endcard?.classList.add('hidden')
  }

  function progress() {
    level = Math.pow(Math.sqrt(level) + 1, 2)

    const currentPoints = parseInt(localStorage.getItem('currentPoints') || '0')
    localStorage.setItem(
      'currentPoints',
      (currentPoints + endPoints).toString()
    )

    if (level > highestLevel) {
      localStorage.setItem('highestLevel', level.toString())
    }
  }

  $effect(() => {
    level

    localStorage.setItem('currentLevel', level.toString())

    return () => {
      game?.restart()
    }
  })

  onMount(() => {
    localStorage.setItem('currentPoints', '0')

    game?.restart()
  })
</script>

<main>
  <h1>
    Zähle bis
    <select bind:value={level}>
      <option value={4}>4</option>
      <option
        disabled={highestLevel < 9}
        value={9}>9</option
      >
      <option
        disabled={highestLevel < 16}
        value={16}>16</option
      >
      <option
        disabled={highestLevel < 25}
        value={25}>25</option
      >
      <option
        disabled={highestLevel < 36}
        value={36}>36</option
      >
      <option
        disabled={highestLevel < 49}
        value={49}>49</option
      >
      <option
        disabled={highestLevel < 64}
        value={64}>64</option
      >
      <option
        disabled={highestLevel < 81}
        value={81}>81</option
      >
      <option
        disabled={highestLevel < 100}
        value={100}>100</option
      >
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

      {#if endDuration}
        <small>in {endDuration.toFixed(2)} Sekunden</small>
      {/if}

      <p class="endstate">
        {#if gameWon}
          🏆
        {:else}
          😢
        {/if}
      </p>

      <p>Deine Punkte: <strong>{endPoints}</strong></p>

      {#if gameWon}
        <button
          class="gameWon"
          onclick={progress}>Nächstes Level</button
        >
      {/if}
      <button onclick={() => game?.restart(true)}>Erneut Spielen</button>
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
    border-radius: 0.5em;
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
