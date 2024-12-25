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

    section?.querySelectorAll('button').forEach((button) => {
      button.disabled = false
      button.style.backgroundColor = `hsl(${parseInt(button.innerText) * steps}, 100%, 50%)`
    })

    reset()
  }
</script>

<section
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
  }

  button {
    aspect-ratio: 1;
    font-size: 2.5em;
    border: none;
    border-radius: 0.5em;
    text-shadow: 0 0 5px black; /* Add a stronger text shadow */
    box-shadow: inset 0 0 1em rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    color: white;
    position: relative;
    overflow: hidden;
  }

  button:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0)
    );
    border-radius: 0.5em;
    pointer-events: none;
  }

  button:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  button:disabled {
    opacity: 0.35;
  }
</style>
