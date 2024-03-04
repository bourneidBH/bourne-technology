<script lang="ts">
  import AlternatingSection from '../../components/AlternatingSection.svelte'
  import Border from '../../components/Border.svelte';
  import type { Block } from '../../types/index'
  import shurclean from '$lib/assets/shurclean-after.jpg'

  export const blocks: Block[] = [
    {
      title: 'ShurClean Website',
      bodyParagraph: `Full visual redesign and rebuild of a non-responsive static PHP site. New mobile responsive site built in NextJS with TypeScript and Tailwind CSS. Dynamic pages are generated from MarkDown files to simplify making content edits.`,
      imageSrc: shurclean,
      imageAlt: 'ShurClean website redesign and build',
      projectUrl: 'https://shurcleanwi.com',
    },
  ]
</script>

<Border direction='left' />
{#each blocks as block, i}
  <AlternatingSection 
    title={block.title}
    bodyParagraph={block?.bodyParagraph}
    bodyList={block?.bodyList}
    imageSrc={block.imageSrc}
    imageAlt={block.imageAlt}
    projectUrl={block?.projectUrl}
    codeUrl={block?.codeUrl}
    index={i}
  />
{/each}