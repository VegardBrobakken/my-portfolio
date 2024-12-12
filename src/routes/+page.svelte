<script>
  const birthDate = new Date("2002-05-25");
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
</script>

<!-- Landingpage -->
<section class="flex items-center justify-center flex-col lg:flex-row mt-20">
  <img
    src="/images/vegard.jpeg"
    class="rounded-full w-1/2 lg:w-1/6"
    alt="Foto. Vegard Brobakken."
  />
  <div class="m-3 text-center lg:text-left">
    <h1 class="text-3xl lg:text-6xl font-bold text-orange-400">
      Vegard Brobakken
    </h1>
    <p class="text-gray-100 mt-2 lg:ms-3 text-lg lg:text-xl">
      Frontend and mobile developer.
    </p>
  </div>
</section>

<!-- About me -->
<section class="mt-16 w-4/5 mx-auto">
  <h2 class="uppercase">About me</h2>
  <p class="mt-2">
    I am a {age} year old student pursuing a bachelor's degree in frontend and mobile
    development at Kristiania University in Oslo. Currently, I work as a back office
    engineer at NEP Norway and have previous experience in sales. I aspire to become
    a full-stack developer and am always eager to embrace new opportunities.
  </p>
  <a href="/contact">
    <button
      class="mt-3 py-2 px-4 bg-blue-800 hover:bg-blue-600 transition text-white rounded"
      >Contact me</button
    >
  </a>
</section>

<!-- Recent projects -->
<section class="mt-16 w-4/5 mx-auto">
  <h2 class="uppercase">Recent projects</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
    <article class="rounded-xl shadow bg-slate-900 flex flex-col">
      <div class="flex items-center">
        <img
          src="/images/projects/newsapp.jpg"
          class="rounded-t-xl h-full"
          alt="Screenshot. Newsapp homescreen."
        />
      </div>
      <div class="p-4 flex flex-col flex-grow">
        <h3 class="text-lg font-bold text-orange-400">iOS NewsApp</h3>
        <p class="mt-3 mb-3">
          iOS news app developed for PG5602 - iOS programming exam at Kristiania
          University. Focus on fetching data from newsapi.org and handling it in
          SwiftData.
        </p>
        <p class="mt-auto italic">
          Link: <a
            href="https://github.com/VegardBrobakken/NewsApp"
            target="_blank"
            class="underline hover:text-orange-400 transition"
            >https://github.com/NewsApp</a
          >
        </p>
      </div>
    </article>

    <article class="rounded-xl shadow bg-slate-900 flex flex-col">
      <div class="flex items-center">
        <img
          src="/images/projects/v3logo.jpg"
          class="h-full rounded-t-xl"
          alt="Screenshot. Volatility3 GUI."
        />
      </div>
      <div class="p-4 flex flex-col flex-grow">
        <h3 class="text-lg font-bold text-orange-400">Volatility3 GUI</h3>
        <p class="mt-3 mb-3">
          Graphical user interface for the open source memory forensics tool
          "Volatility3". Developed together with 7 other students as part of the
          PRO202 - Agile Methods exam at Kristiania University.
        </p>
        <p class="mt-auto italic">
          Link: <a
            href="https://github.com/ArianMathai/Volatility3-GUI"
            target="_blank"
            class="underline hover:text-orange-400 transition"
            >https://github.com/Volatility3</a
          >
        </p>
      </div>
    </article>

    <article class="rounded-xl shadow bg-slate-900 flex flex-col space-between">
      <div class="flex items-center">
        <img
          src="/images/projects/snertbygg.jpg"
          alt="Screenshot. Frontpage of snertbygg.no."
          class="rounded-t-xl h-full"
        />
      </div>
      <div class="p-4 flex flex-col flex-grow">
        <h3 class="text-lg font-bold text-orange-400">Snertbygg.no</h3>
        <p class="mt-3 mb-3">
          Company website made for Snertingdal Bygg & Graveservice AS in 2024.
        </p>
        <p class="mt-auto italic">
          Link: <a
            href="https://snertbygg.no/"
            target="_blank"
            class="underline hover:text-orange-400 transition"
            >https://snertbygg.no</a
          >
        </p>
      </div>
    </article>
  </div>
  <a href="/projects">
    <button
      class="mt-5 py-2 px-4 bg-blue-800 hover:bg-blue-600 transition text-white rounded"
      >View all projects</button
    >
  </a>
</section>
