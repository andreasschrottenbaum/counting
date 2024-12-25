<script lang="ts">
  import { tick } from 'svelte'

  let { level, win, lose, reset } = $props()

  let numbers = $state<any[]>([])
  let currentNumber = 1
  let section: HTMLElement
  let points = 0
  let columns = $state(1)

  function setNext(event: Event) {
    const button = event.target as HTMLButtonElement
    const nextNumber = parseInt(button.textContent || '0')

    if (nextNumber === currentNumber) {
      button.disabled = true
      currentNumber++

      points += nextNumber

      if (nextNumber === level) {
        win(points)
      }
    } else {
      lose(points)
    }
  }

  export async function restart() {
    numbers = [...Array(level).keys()]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

    currentNumber = 1
    points = 0
    columns = Math.ceil(Math.sqrt(numbers.length))

    const steps = 360 / level

    await tick()

    section.querySelectorAll('button').forEach((button) => {
      button.disabled = false
      button.style.backgroundColor = `hsl(${parseInt(button.innerText) * steps}, 100%, 50%)`
    })

    reset()
  }
</script>

<section
  data-level={level}
  bind:this={section}
  style="--columns: {columns};"
>
  {#each numbers as number}
    <button onclick={setNext}>{number + 1}</button>
  {/each}
</section>

<style>
  section {
    display: grid;
    gap: 0.5em;
    min-width: 30vw;
    grid-template-columns: repeat(var(--columns), 1fr);

    button {
      aspect-ratio: 1;
      font-size: 2.5em;
      border: none;
      border-radius: 0.5em;
      text-shadow: 0 0 2px black;
      box-shadow: inset 0 0 1em rgba(0, 0, 0, 0.5);
    }
  }

  button:disabled {
    opacity: 0.35;
  }
</style>
