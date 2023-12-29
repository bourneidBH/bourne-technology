<script>
  import '../app.css'
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<Navbar />
<main class="pt-[66px] min-h-[calc(100vh-64px)]">
  <slot />
</main>
<Footer />