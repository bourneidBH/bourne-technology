<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import logo from '$lib/assets/bourne-technology-logo_white.svg'

  const routes = [
    {href: `${base}/`, name: 'About'},
    {href: `${base}/projects`, name: 'Projects'},
    {href: `${base}/contact`, name: 'Contact'},
  ]

  let open = false

  /** Dispatch event on click outside of node */
  function clickOutside(node: HTMLElement) {
    
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
        node.dispatchEvent(
          new CustomEvent('click_outside', node)
        )
      }
    }

    document.addEventListener('click', handleClick, true);
    
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    }
  }
  
  function toggleOpen() {
    open = !open
  }

  function closeNav() {
    open = false;
  }

  onNavigate(() => {
    closeNav()
  })
  
</script>

<div class="fixed top-0 z-40 w-full flex items-center justify-between bg-neutral-dark p-2 border-b-2 border-primary">
  <a href="/" aria-label="Bourne Technology home page">
    <img src={logo} alt="Bourne Technology logo" width="200px" height="33px" />
  </a>
  <div class="hidden text-center font-bold uppercase md:block">Web Development Services</div>
  <button class="p-2 text-primary text-2xl scale-x-150 hover:text-white" on:click={toggleOpen}>
    &equiv;
  </button>
</div>

<nav use:clickOutside on:click_outside={closeNav} class:open={open} class="transition-[width] transition-700 hidden z-50 w-0 h-0 fixed top-0 right-0 p-4 bg-neutral-dark [&.open]:block [&.open]:w-full [&.open]:h-full [&.open]:md:w-[300px] [&.open]:md:shadow-[-3px_0_5px_rgba(0,0,0,0.7)]">
  <ul class="w-full grid grid-cols-1">
    <button class="text-primary font-bold text-2xl justify-self-end hover:text-white"  on:click={toggleOpen}>&khcy;</button>

    {#each routes as route}
      <li class="py-2 hover:text-primary [&.active]:text-primary">
        <a href={route.href} class:active={$page.url.pathname === route.href} class="font-medium">
          {route.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>