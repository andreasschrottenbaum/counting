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
      button.style.setProperty(
        '--bgColor',
        `hsl(${parseInt(button.innerText) * steps}, 100%, 50%)`
      )
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
  data-columns={columns}
>
  {#each numbers as number, i}
    <button
      onclick={setNext}
      class="shape-{number % 10}">{number + 1}</button
    >
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

  [data-columns='2'] button {
    font-size: clamp(1.5em, 20vw, 5.5em);
  }

  [data-columns='3'] button {
    font-size: clamp(1.5em, 13vw, 5.5em);
  }

  [data-columns='4'] button {
    font-size: clamp(1.5em, 10vw, 5.5em);
  }

  button {
    aspect-ratio: 1;
    font-size: clamp(1.5em, 4vw, 4.5em);
    border: none;
    text-shadow: 0 0 5px black;
    color: white;
    position: relative;
    width: 100%;
    background: transparent;
  }

  button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--bgColor);
    backdrop-filter: blur(10px);
    z-index: -1;
    transition: background 0.2s;
  }

  button:hover::before {
    background: rgba(255, 255, 255, 0.2);
  }

  :global(button:disabled) {
    opacity: 0.35;
    color: #888;

    &.current {
      color: black;
    }
  }

  :global(button.current) {
    box-shadow: 0 0 5px #888;
    color: black;
  }

  /* Shape 0: Circle */
  button.shape-0::before {
    border-radius: 50%;
  }

  /* Shape 1: Square (default) */
  button.shape-1::before {
    border-radius: 0;
  }

  /* Shape 2: Triangle */
  button.shape-2::before {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 15L85 85H15L50 15Z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 15L85 85H15L50 15Z'/%3E%3C/svg%3E");
  }

  /* Shape 3: Star */
  button.shape-3::before {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L61 35H97L68 57L79 91L50 70L21 91L32 57L3 35H39L50 0Z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L61 35H97L68 57L79 91L50 70L21 91L32 57L3 35H39L50 0Z'/%3E%3C/svg%3E");
  }

  /* Shape 4: Pentagon */
  button.shape-4::before {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L90 35L75 90H25L10 35L50 0Z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L90 35L75 90H25L10 35L50 0Z'/%3E%3C/svg%3E");
  }

  /* Shape 5: Hexagon */
  button.shape-5::before {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0L75 0L100 50L75 100L25 100L0 50L25 0Z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0L75 0L100 50L75 100L25 100L0 50L25 0Z'/%3E%3C/svg%3E");
  }

  /* Shape 6: Heart */
  button.shape-6::before {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 100L15 65C-5 45-5 10 15 5C35 0 50 15 50 15C50 15 65 0 85 5C105 10 105 45 85 65L50 100Z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 100L15 65C-5 45-5 10 15 5C35 0 50 15 50 15C50 15 65 0 85 5C105 10 105 45 85 65L50 100Z'/%3E%3C/svg%3E");
  }

  /* Shape 7: Diamond */
  button.shape-7::before {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50L50 0Z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50L50 0Z'/%3E%3C/svg%3E");
  }

  /* Shape 8: Cross */
  button.shape-8::before {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M35 0H65V35H100V65H65V100H35V65H0V35H35V0Z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M35 0H65V35H100V65H65V100H35V65H0V35H35V0Z'/%3E%3C/svg%3E");
  }

  /* Shape 9: Octagon */
  button.shape-9::before {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M29.3 0H70.7L100 29.3V70.7L70.7 100H29.3L0 70.7V29.3L29.3 0Z'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M29.3 0H70.7L100 29.3V70.7L70.7 100H29.3L0 70.7V29.3L29.3 0Z'/%3E%3C/svg%3E");
  }

  /* Common mask properties */
  [class^='shape-'] {
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
  }

  /* Add more shapes using ::before pseudo-element */
  button[class^='shape-']::before {
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
  }
</style>
