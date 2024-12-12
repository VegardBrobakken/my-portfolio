import { T as store_get, V as stringify, W as slot, X as unsubscribe_stores, x as pop, v as push } from './index-QgA_8tlm.js';
import { p as page } from './stores-BlHNU1Jv.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import './exports-CTha0ECg.js';

function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  let mobileMenuOpen = false;
  {
    if (store_get($$store_subs ??= {}, "$page", page).url.pathname) {
      mobileMenuOpen = false;
    }
  }
  $$payload.out += `<nav class="bg-slate-900 text-white p-4 flex justify-between items-center"><div><a href="/" class="text-white hover:text-orange-400 transition font-bold text-xl">Vegard Brobakken</a></div> <div class="hidden lg:flex space-x-4"><a href="/"${attr("class", `hover:text-orange-400 transition ${stringify([
    store_get($$store_subs ??= {}, "$page", page).url.pathname === "/" ? "text-orange-400" : ""
  ].filter(Boolean).join(" "))}`)}>Home</a> <a href="/projects"${attr("class", `hover:text-orange-400 transition ${stringify([
    store_get($$store_subs ??= {}, "$page", page).url.pathname === "/projects" ? "text-orange-400" : ""
  ].filter(Boolean).join(" "))}`)}>Projects</a> <a href="/contact"${attr("class", `hover:text-orange-400 transition ${stringify([
    store_get($$store_subs ??= {}, "$page", page).url.pathname === "/contact" ? "text-orange-400" : ""
  ].filter(Boolean).join(" "))}`)}>Contact</a></div> <button class="lg:hidden block text-white focus:outline-none" id="menu-button" aria-label="Toggle navigation menu"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button> <div id="mobile-menu"${attr("class", `absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col space-y-4 p-4 shadow-lg lg:hidden ${stringify([(mobileMenuOpen ? "" : "hidden") ? "hidden" : ""].filter(Boolean).join(" "))}`)}><a href="/"${attr("class", `hover:text-orange-400 transition ${stringify([
    store_get($$store_subs ??= {}, "$page", page).url.pathname === "/" ? "text-orange-400" : ""
  ].filter(Boolean).join(" "))}`)}>Home</a> <a href="/projects"${attr("class", `hover:text-orange-400 transition ${stringify([
    store_get($$store_subs ??= {}, "$page", page).url.pathname === "/projects" ? "text-orange-400" : ""
  ].filter(Boolean).join(" "))}`)}>Projects</a> <a href="/contact"${attr("class", `hover:text-orange-400 transition ${stringify([
    store_get($$store_subs ??= {}, "$page", page).url.pathname === "/contact" ? "text-orange-400" : ""
  ].filter(Boolean).join(" "))}`)}>Contact</a></div></nav> <main class="lg:p-4 lg:m-5"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> <footer class="bg-slate-900 text-white p-4 text-center mt-28 flex items-center justify-center md:justify-between md:flex-row"><div class="p-4 hidden md:block"></div> <p>© ${escape_html(currentYear)} Vegard Brobakken</p> <div class="flex flex-row gap-3"><a class="hover:text-orange-400 hover:scale-110 transition" href="https://github.com/VegardBrobakken"><img class="hidden md:block" src="/images/projects/github.png" alt="GitHub logo."></a> <a class="hover:text-orange-400 hover:scale-110 transition" href="https://www.linkedin.com/in/vegard-brobakken-68065a257/"><img src="/images/projects/linkedin.png" alt="GitHub logo."></a></div></footer>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-DQ_fEOWd.js.map
