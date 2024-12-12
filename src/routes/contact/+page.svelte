<script lang="ts">
  import emailjs from "@emailjs/browser";

  const service_id = "service_p04rw0i";
  const template_id = "template_zxhb5g9";
  const publicKey = "7KzFqgk89UUDu3XVm";

  let isLoading = false;
  let statusMessage: string | null = null;

  const sendEmail = async (e: Event): Promise<void> => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    isLoading = true;
    statusMessage = null;
    try {
      await emailjs.sendForm(service_id, template_id, form, publicKey);
      console.log("SUCCESS!");
      statusMessage = "Your message has been sent!";
    } catch (error: any) {
      console.log("FAILED...", error.text);
      statusMessage =
        "There was an error sending your message. Try again later";
    } finally {
      isLoading = false;
      setTimeout(() => {
        statusMessage = null;
      }, 5000);
    }
  };
</script>

<section class="w-4/5 mx-auto">
  <form
    on:submit={sendEmail}
    id="contact-form"
    class="flex flex-col md:w-2/3 xl:w-1/3 m-auto mt-8 lg:mt-6 mb-10"
  >
    <h1 class="uppercase mt-20 text-center mb-10">Contact me</h1>
    <label for="firstname">Firstname:</label>
    <input
      name="firstname"
      placeholder="Firstname"
      class="px-2 py-1 rounded text-black"
      required
    />
    <label for="lastname" class="mt-2">Lastname:</label>
    <input
      name="lastname"
      placeholder="Lastname"
      class="px-2 py-1 rounded text-black"
      required
    />
    <label for="email" class="mt-2">Email:</label>
    <input
      name="email"
      placeholder="Email"
      class="px-2 py-1 rounded text-black"
      required
      type="email"
    />
    <label for="company" class="mt-2">Company:</label>
    <input
      name="company"
      placeholder="Company"
      class="px-2 py-1 rounded text-black"
    />
    <label for="message" class="mt-2">Message:</label>
    <textarea
      name="message"
      placeholder="Message..."
      class="px-2 py-1 h-32 rounded text-black"
      required
    ></textarea>
    <button
      type="submit"
      class="mt-5 bg-green-700 py-1 px-4 rounded shadow flex items-center justify-center"
      disabled={isLoading}
    >
      {#if isLoading}
        <svg
          class="animate-spin h-5 w-5 mr-2 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
        Sending...
      {/if}
      {#if !isLoading}Send{/if}
    </button>
    {#if statusMessage}
      <p
        class={`mt-2 ${statusMessage.includes("error") ? "text-red-500" : "text-green-500"}`}
      >
        {statusMessage}
      </p>
    {/if}
  </form>
</section>
