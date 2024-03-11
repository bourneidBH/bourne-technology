<script lang="ts">
  import type { Block } from '../types';
  import Border from '../components/Border.svelte';
  import AlternatingSection from '../components/AlternatingSection.svelte';
  import profile from '$lib/assets/t-bucket.jpg';
  import shurclean from '$lib/assets/shurclean_after.png'
  import portal from '$lib/assets/portal-login-screen.jpg'

  export const blocks: Block[] = [
    {
      title: 'What I build',
      bodyParagraphs: ['I build full-stack and static websites to your design specs or I can design and build the complete site for you.'],
      bodyList: [
        'Progressive web apps',
        'Headless/Static websites',
        'WordPress websites',
        'WordPress plugins/themes',
        'Graphics',
        'Web design',
      ],
      imageSrc: shurclean,
      imageAlt: 'ShurClean website redesign',
    },
    {
      title: 'Technologies I use',
      bodyList: [
        'React',
        'NextJS',
        'JavaScript',
        'TypeScript',
        'NodeJS',
        'PHP',
        'WordPress',
        'GraphQL',
        'MongoDB',
        'MySQL',
        'HTML',
        'CSS/SCSS',
        'Photoshop',
        'Illustrator',
      ],
      imageSrc: portal,
      imageAlt: 'Braustin Homes internal sales portal'
    }
  ]
</script>

<div class="max-w-screen-lg mx-auto">
  <div class="grid grid-cols-1 place-items-center md:grid-cols-2">
    <div class="max-w-prose mx-auto p-6 md:p-12">
      <h1 class="text-center text-3xl">About me</h1>
      <p>
        I am a freelance full-stack web developer with a background in visual design who makes complex product information understandable with visually appealing, organized, user-friendly websites and graphics. I grasp it, imagine it, and build it.
      </p>
    </div>

    <div class="p-6 md:p-12">
      <img src={profile} alt="Bourne Technology owner profile" width="300px" height="300px" />
    </div>
  </div>
</div>

<Border direction="left" />
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
