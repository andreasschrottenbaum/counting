<script lang="ts">
  import { tick, onMount, onDestroy } from 'svelte'

  let { level, win, lose, reset } = $props()

  let numbers = $state<any[]>([])
  let currentNumber = 1
  let section: HTMLElement
  let points = 0
  let columns = $state(1)

  let startTime = 0
  let resizeTimer: number

  function setNext(event: Event) {
    const button = event.target as HTMLButtonElement
    const nextNumber = parseInt(button.textContent || '0')
    const endTime = Date.now()

    const currentNumberBtns = document.querySelectorAll(
      `button.current`
    ) as NodeListOf<HTMLButtonElement>
    currentNumberBtns.forEach((button) => {
      button.classList.remove('current')
    })

    button.classList.add('current')

    if (nextNumber === currentNumber) {
      button.disabled = true
      currentNumber++

      points += nextNumber

      if (nextNumber === 1) {
        startTime = Date.now()
      }

      if (nextNumber === level) {
        const duration = (endTime - startTime) / 1000

        win(points, duration)
      }
    } else {
      lose(points)
    }
  }

  function handleResize() {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      columns = Math.min(
        Math.ceil(Math.sqrt(numbers.length)),
        Math.floor(window.innerWidth / 60)
      )
    }, 100)
  }

  export async function restart(resetPoints = false) {
    numbers = [...Array(level).keys()]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

    currentNumber = 1
    points = 0
    columns = Math.min(
      Math.ceil(Math.sqrt(numbers.length)),
      Math.floor(window.innerWidth / 60)
    )
    const steps = 360 / level

    await tick()

    section?.querySelectorAll('button').forEach((button) => {
      button.disabled = false
      button.style.backgroundColor = `hsl(${parseInt(button.innerText) * steps}, 100%, 50%)`
    })

    section?.querySelector('button.current')?.classList.remove('current')

    if (resetPoints) {
      localStorage.setItem('currentPoints', '0')
    }

    reset()
  }

  onMount(() => {
    window.addEventListener('resize', handleResize)
  })

  onDestroy(() => {
    window.removeEventListener('resize', handleResize)
  })
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
    width: min(90vw, 800px);
    margin: 0 auto;
    grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
  }

  button {
    aspect-ratio: 1;
    font-size: clamp(1.5em, 4vw, 2.5em);
    border: none;
    border-radius: 0.5em;
    text-shadow: 0 0 5px black;
    box-shadow: inset 0 0 1em rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    color: white;
    position: relative;
    width: 100%;
  }

  button:before {
    content: '';
    position: absolute;
    inset: 0;
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

  :global(button.current) {
    box-shadow: 0 0 5px #888;
    color: black;
  }
</style>
