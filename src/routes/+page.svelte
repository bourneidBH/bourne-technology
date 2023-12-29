<script lang="ts">
  import Border from '../components/Border.svelte';
  import profile from '$lib/assets/t-bucket.jpg';
  import shurclean from '$lib/assets/shurclean-after.jpg'
  import portal from '$lib/assets/portal-login-screen.jpg'
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
<div class="grid grid-cols-1 place-items-center md:grid-cols-2">
  <div class="overflow-y-hidden">
    <img src={shurclean} class="object-cover object-top" alt="ShurClean website redesign" />
  </div>
  <div class="max-w-prose mx-auto p-6 md:p-12">
    <h1 class="text-center text-3xl">What I build</h1>
    <p>I build full-stack and static websites to your design specs or I can design and build the complete site for you.</p>
    <ul class="grid grid-cols-2 gap-2 mx-auto">
      <li>Progressive web apps</li>
      <li>Static websites</li>
      <li>WordPress websites</li>
      <li>WordPress plugins</li>
      <li>Graphics</li>
      <li>Web design</li>
    </ul>
  </div>
</div>
<Border direction="right" />
<div class="grid grid-cols-1 place-items-center md:grid-cols-2">
  <div class="max-w-prose mx-auto p-6 md:p-12">
    <h1 class="text-center text-3xl">Technologies I use</h1>
    <ul class="grid grid-cols-2 gap-2 mx-auto">
      <li>React</li>
      <li>NextJS</li>
      <li>JavaScript</li>
      <li>PHP</li>
      <li>WordPress</li>
      <li>GraphQL</li>
      <li>MongoDB</li>
      <li>MySQL</li>
      <li>HTML</li>
      <li>CSS/SCSS</li>
      <li>Photoshop</li>
      <li>Illustrator</li>
    </ul>
  </div>
  <div class="overflow-y-hidden">
    <img src={portal} class="object-cover object-top" alt="Braustin Homes sales portal" />
  </div>
</div>
<Border direction="left" />