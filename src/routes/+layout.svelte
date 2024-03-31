<script>
  import { page } from '$app/stores';
  import '../app.css'
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  export const prerender = true
</script>

<svelte:head>
  <title>{`${$page.data.title} - Bourne Technology LLC`}</title>
  <meta name="description" content={$page.data.description} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<Navbar />
<main class="pt-[66px] min-h-[calc(100vh-64px)]">
  <slot />
</main>
<Footer />