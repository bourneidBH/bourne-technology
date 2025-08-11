<script lang="ts">
  import AlternatingSection from '../../components/AlternatingSection.svelte'
  import Border from '../../components/Border.svelte';
  import type { Block } from '../../types/index'
  import shurclean from '$lib/assets/shurclean_after.png'
  import hikerTrailer from '$lib/assets/hiker-trailer.png'
  import braustinPortal from '$lib/assets/portal-login-screen.jpg'
  import progressive from '$lib/assets/progressive-edge.png'
  import ropeworks from '$lib/assets/bournes-ropeworks.png'
  import hogebuilt from '$lib/assets/hogebuilt.png'
  import willman from '$lib/assets/willman_after.png'
  import spn from '$lib/assets/snowplow-news_after.png'
  import bloapco from '$lib/assets/bloapco-after2.png'
  import kbContractors from '$lib/assets/kb-contractors.png'
  import argo from '$lib/assets/argo-after.png'
  import swaphogg from '$lib/assets/swaphogg.png'

  export const blocks: Block[] = [
    {
      title: 'SwapHogg Website',
      bodyParagraphs: [
        `New WordPress website including design, build and content creation. Integrates with existing MetaLocator dealer locator.`,
        `Built in partnership with Smart Interactive Media`,
      ],
      bodyList: ['WordPress', 'Divi', 'WooCommerce', 'PHP'],
      imageSrc: swaphogg,
      imageAlt: 'Argo Industries redesign and build',
      projectUrl: 'https://swaphogg.com/',
    },
    {
      title: 'Argo Industries Website',
      bodyParagraphs: [
        `Complete website redesign and rebuild to better align with marketing goals.`,
        `Built in partnership with Chameleon Communications`,
      ],
      bodyList: ['WordPress', 'Divi', 'PHP'],
      imageSrc: argo,
      imageAlt: 'Argo Industries redesign and build',
      projectUrl: 'https://argoind.com/',
    },
    {
      title: 'KB Contractors Website',
      bodyParagraphs: [
        `Complete website redesign and replatform from SquareSpace to WordPress. Includes a custom Project post type for the project gallery.`,
        `Built in partnership with InContext, Inc.`,
      ],
      bodyList: ['WordPress', 'Beaver Builder', ],
      imageSrc: kbContractors,
      imageAlt: 'KB Contractors redesign and build',
      projectUrl: 'https://kbcontractors.com/',
    },
    {
      title: 'BloApCo Website',
      bodyParagraphs: [
        `Complete website redesign and rebuild, moving to a headless NextJS site with WordPress backend for content. NextJS frontend layouts are populated via GraphQL queries.`,
        `Built in partnership with Smart Interactive Media.`,
      ],
      bodyList: ['WordPress', 'ACF', 'NextJS', 'React', 'GraphQL', 'TailwindCSS', 'TypeScript'],
      imageSrc: bloapco,
      imageAlt: 'BloApCo website redesign and build',
      projectUrl: 'https://www.bloapco.com',
    },
    {
      title: 'Willman Industries Website',
      bodyParagraphs: [
        `Redesign of a WordPress site, changing to a modern theme compatible with current versions of WordPress and PHP.`,
        `Built in partnership with Smart Interactive Media.`,
      ],
      bodyList: ['WordPress', 'Divi'],
      imageSrc: willman,
      imageAlt: 'Willman Industries website redesign and build',
      projectUrl: 'https://willmanind.com',
    },
    {
      title: 'ShurClean Website',
      bodyParagraphs: [
        `Full visual redesign and rebuild of a non-responsive PHP site. New mobile responsive site built in NextJS with TypeScript and Tailwind CSS.`, 
        `Dynamic pages are generated from MarkDown files to simplify making content edits.`,
        `Built in partnership with Smart Interactive Media.`,
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
        `Built in partnership with Smart Interactive Media.`,
        ],
      bodyList: ['PHP', 'WordPress', 'WooCommerce', 'ACF', 'React', 'Vite', 'DaisyUI', 'TypeScript', 'PDFMake'],
      imageSrc: hikerTrailer,
      imageAlt: 'Hiker Trailer custom trailer configurator',
      projectUrl: 'https://hikertrailers.com/hikertrailer-configurator/',
    },
    {
      title: 'Snow Plow News Website Customizations',
      bodyParagraphs: [
        `A variety of custom functionality integrated with a WordPress site. A custom blog module allows advertising to be inserted in the post archives. Custom search and filter tools for dealers, suppliers, and snowplow comparisons.`,
        `Built in partnership with Smart Interactive Media.`,
        ],
      bodyList: ['PHP', 'WordPress', 'Divi', 'ACF', 'CSS', 'JavaScript'],
      imageSrc: spn,
      imageAlt: 'Snow Plow News website customizations',
      projectUrl: 'https://snowplownews.com/',
    },
    {
      title: 'Hogebuilt Fender Kit Builder',
      bodyParagraphs: [
        `A custom WordPress plugin with a simple UI to determine which aftermarket fender components fit a semi trailer based on trailer specifications. Integrates with WordPress, WooCommerce and ACF filter possible options based on each previous selection. Built in partnership with Smart Interactive Media.`,
      ],
      bodyList: ['WordPress', 'WooCommerce', 'ACF', 'PHP', 'CSS'],
      imageSrc: hogebuilt,
      imageAlt: 'Hogebuilt semi trailer custom fender kit builder',
      projectUrl: 'https://www.hogebuilt.com/product-category/half-tandem-fenders/custom-mounting-options-half-tandem-fenders/'
    },
    {
      title: 'Progressive Edge Website',
      bodyParagraphs: [
        `Full website redesign and build using WordPress and Divi page builder. Built in partnership with Smart Interactive Media.`,
      ],
      bodyList: ['WordPress', 'Divi', 'PHP', 'CSS'],
      imageSrc: progressive,
      imageAlt: 'Progressive Edge website',
      projectUrl: 'https://progressive-edge.com'
    },
    {
      title: 'Braustin Homes Internal Sales Portal',
      bodyParagraphs: [
        `Frontend rebuild to client supplied designs, replatform from React to NextJS to make use of Next routing. Full reusable component library built with Styled Components. Built a dynamic document service for generate sales paperwork.`,
        `Simplifies and reduces data entry with an user-friendly interface for inputing all customer selections.`,
        `Generates dynamic PDFs for purchase orders and autofills required government forms from Mongo database.`,
        ],
      bodyList: ['NextJS', 'NodeJS', 'MongoDB', 'Styled Components', 'SCSS', 'PDFLib', 'Handlebars'],
      imageSrc: braustinPortal,
      imageAlt: 'Braustin Homes private sales portal'
    },
    // {
    //   title: `Bourne's Ropeworks`,
    //   bodyParagraphs: [
    //     `Design and build of a simple responsive HTML website to showcase client rope splicing service.`,
    //     ],
    //   bodyList: ['HTML', 'CSS', 'PHP'],
    //   imageSrc: ropeworks,
    //   imageAlt: `Bourne's Ropeworks website`,
    //   projectUrl: `https://bournesropeworks.com/`,
    //   codeUrl: `https://github.com/bourneidBH/bournes-ropeworks`, 
    // },
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