import { a as attr } from './attributes-BeaNKpgU.js';
import { x as pop, v as push } from './index-QgA_8tlm.js';
import '@emailjs/browser';
import './escaping-CqgfEcN3.js';

function _page($$payload, $$props) {
  push();
  let isLoading = false;
  $$payload.out += `<section class="w-4/5 mx-auto mb-12"><form id="contact-form" class="flex flex-col md:w-2/3 xl:w-1/3 m-auto mt-8 lg:mt-6 mb-10"><h1 class="uppercase mt-20 text-center mb-10">Contact me</h1> <label for="firstname">Firstname:</label> <input name="firstname" placeholder="Firstname" class="px-2 py-1 rounded text-black" required> <label for="lastname" class="mt-2">Lastname:</label> <input name="lastname" placeholder="Lastname" class="px-2 py-1 rounded text-black" required> <label for="email" class="mt-2">Email:</label> <input name="email" placeholder="Email" class="px-2 py-1 rounded text-black" required type="email"> <label for="company" class="mt-2">Company:</label> <input name="company" placeholder="Company" class="px-2 py-1 rounded text-black"> <label for="message" class="mt-2">Message:</label> <textarea name="message" placeholder="Message..." class="px-2 py-1 h-32 rounded text-black" required></textarea> <button type="submit" class="mt-5 bg-green-700 py-1 px-4 rounded shadow flex items-center justify-center"${attr("disabled", isLoading, true)}>`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `Send`;
  }
  $$payload.out += `<!--]--></button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></form></section>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CH6x0PSd.js.map
