<script lang="ts">
  import AlternatingSection from '../../components/AlternatingSection.svelte'
  import Border from '../../components/Border.svelte';
  import type { Block } from '../../types/index'
  import shurclean from '$lib/assets/shurclean-after.jpg'
  import hikerTrailer from '$lib/assets/hiker-trailer.png'

  export const blocks: Block[] = [
    {
      title: 'ShurClean Website',
      bodyParagraphs: [
        `Full visual redesign and rebuild of a non-responsive static PHP site. New mobile responsive site built in NextJS with TypeScript and Tailwind CSS.`, 
        `Dynamic pages are generated from MarkDown files to simplify making content edits.`,
      ],
      bodyList: ['NextJS', 'TypeScript', 'TailwindCSS'],
      imageSrc: shurclean,
      imageAlt: 'ShurClean website redesign and build',
      projectUrl: 'https://shurcleanwi.com',
    },
    {
      title: 'Hiker Trailer Configurator',
      bodyParagraphs: [
        `A custom WordPress plugin with a NextJS frontend that integrates with WooCommerce and Advanced Custom Fields (ACF) to enable complex option availability combinations and generate a user-friendly UI that allows customers to save and order custom trailers. UI available in light mode or dark mode based on user selection.`,
        `Generates dynamic PDFs for purchase orders and internal build process routing.`,
        ],
      bodyList: ['PHP', 'WordPress', 'WooCommerce', 'ACF', 'NextJS', 'TailwindCSS', 'TypeScript', 'PDFMake'],
      imageSrc: hikerTrailer,
      imageAlt: 'Hiker Trailer custom trailer configurator'
    },
  ]
</script>

<div class="max-w-prose mx-auto my-6">
  <h1 class="text-center text-3xl">Recent Projects</h1>
</div>
<Border direction='left' />
{#each blocks as block, i}
  <AlternatingSection 
    title={block.title}
    bodyParagraphs={block?.bodyParagraphs}
    bodyList={block?.bodyList}
    imageSrc={block.imageSrc}
    imageAlt={block.imageAlt}
    projectUrl={block?.projectUrl}
    codeUrl={block?.codeUrl}
    index={i}
  />
{/each}