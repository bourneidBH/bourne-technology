<script lang="ts">
  export let direction: 'left' | 'right'
</script>

<div class={`w-full flex ${direction === 'right' ? 'justify-end' : 'justify-start'}`}>
  {#if direction === 'right'}
    <div class="triangle-right"></div>
  {/if}
  <div class="w-9/12 h-[16px] bg-primary"></div>
  {#if direction === 'left'}
    <div class="triangle-left"></div>
  {/if}
</div>