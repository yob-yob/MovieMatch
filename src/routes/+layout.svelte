<script>
  import "../app.css";
  import Navbar from "../components/navbar.svelte";
  import FooterNav from "../components/footer-nav.svelte";
</script>

<div class="flex flex-col min-h-screen overflow-x-hidden">
  <header class="">
    <Navbar />
  </header>
  <main class="flex-1 flex">
    <div class="flex-1">
      <slot />
    </div>
  </main>
  <footer >
    <FooterNav />
  </footer>
</div>