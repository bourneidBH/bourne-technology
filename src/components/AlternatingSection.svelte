<script lang="ts">
  import Border from "./Border.svelte";
  export let index: number
  export let title: string
  export let bodyParagraph: string | undefined
  export let bodyList: string[] | undefined
  export let imageSrc: string
  export let imageAlt: string
  export let projectUrl: string | undefined
  export let codeUrl: string | undefined

</script>

<div class={index % 2 == 0 ? "grid grid-cols-1 place-items-center md:grid-cols-2" : "grid grid-cols-1 place-items-center md:grid-cols-2"}>
  {#if index % 2 == 0}
    <div class="overflow-y-hidden">
      <img src={imageSrc} class="object-cover object-top" alt={imageAlt} />
    </div>
  {/if}
  <div class="max-w-prose mx-auto p-6 md:p-12">
    <h1 class="text-center text-3xl">{title}</h1>

    {#if bodyParagraph}
      <p>{bodyParagraph}</p>
    {/if}

    {#if bodyList}
      <ul class="grid grid-cols-1 gap-2 mx-auto sm:grid-cols-2">
        {#each bodyList as item}
          <li>{item}</li>
        {/each}
      </ul>
    {/if}

    {#if projectUrl}
      <a class="btn" href={projectUrl} target="_blank" rel="noreferrer noopener">See the site</a>
    {/if}

    {#if codeUrl}
      <a class="btn-outline" href={codeUrl} target="_blank" rel="noreferrer noopener">See the code</a>
    {/if}
  </div>
  {#if index % 2 !== 0}
    <div class="overflow-y-hidden">
      <img src={imageSrc} class="object-cover object-top" alt={imageAlt} />
    </div>
  {/if}
</div>
<Border direction={index % 2 !== 0 ? 'left' : 'right'} />
