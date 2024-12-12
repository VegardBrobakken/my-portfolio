<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  const currentYear = new Date().getFullYear();

  let currentPath = "";
  let mobileMenuOpen = false;

  onMount(() => {
    currentPath = window.location.pathname;

    const menuButton = document.getElementById(
      "menu-button"
    ) as HTMLButtonElement;
    const mobileMenu = document.getElementById("mobile-menu") as HTMLDivElement;

    menuButton?.addEventListener("click", () => {
      if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
      } else {
        mobileMenu.classList.add("hidden");
      }
    });
  });

  $: {
    if ($page.url.pathname) {
      mobileMenuOpen = false;
    }
  }
</script>

<nav class="bg-slate-900 text-white p-4 flex justify-between items-center">
  <div>
    <a
      href="/"
      class="text-white hover:text-orange-400 transition font-bold text-xl"
      >Vegard Brobakken</a
    >
  </div>
  <div class="hidden lg:flex space-x-4">
    <a
      href="/"
      class="hover:text-orange-400 transition"
      class:text-orange-400={$page.url.pathname === "/"}
    >
      Home
    </a>
    <a
      href="/projects"
      class="hover:text-orange-400 transition"
      class:text-orange-400={$page.url.pathname === "/projects"}
    >
      Projects
    </a>
    <a
      href="/contact"
      class="hover:text-orange-400 transition"
      class:text-orange-400={$page.url.pathname === "/contact"}
    >
      Contact
    </a>
  </div>
  <button
    class="lg:hidden block text-white focus:outline-none"
    id="menu-button"
    aria-label="Toggle navigation menu"
    on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
  >
    <svg
      class="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
  <div
    id="mobile-menu"
    class:hidden={mobileMenuOpen ? "" : "hidden"}
    class="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col space-y-4 p-4 shadow-lg lg:hidden"
  >
    <a
      href="/"
      class="hover:text-orange-400 transition"
      class:text-orange-400={$page.url.pathname === "/"}
    >
      Home
    </a>
    <a
      href="/projects"
      class="hover:text-orange-400 transition"
      class:text-orange-400={$page.url.pathname === "/projects"}
    >
      Projects
    </a>
    <a
      href="/contact"
      class="hover:text-orange-400 transition"
      class:text-orange-400={$page.url.pathname === "/contact"}
    >
      Contact
    </a>
  </div>
</nav>

<main class="lg:p-4 lg:m-5">
  <slot />
</main>

<footer
  class="bg-slate-900 text-white p-4 text-center mt-16 flex items-center justify-center md:justify-between md:flex-row"
>
  <div class="p-4 hidden md:block"></div>
  <p>© {currentYear} Vegard Brobakken</p>
  <div class="flex flex-row gap-3">
    <a
      class="hover:text-orange-400 hover:scale-110 transition"
      href="https://github.com/VegardBrobakken"
    >
      <img
        class="hidden md:block"
        src="/images/projects/github.png"
        alt="GitHub logo."
      />
    </a>
    <a
      class="hover:text-orange-400 hover:scale-110 transition"
      href="https://www.linkedin.com/in/vegard-brobakken-68065a257/"
    >
      <img src="/images/projects/linkedin.png" alt="GitHub logo." />
    </a>
  </div>
</footer>
