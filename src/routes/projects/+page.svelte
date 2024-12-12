<script context="module"></script>

<script lang="ts">
  import ProjectModule from "../../modules/projectmodule";
  export const prerender = true;

  const projects = ProjectModule.getAll();

  let userSearch = "";
  let sortOrder = "newest";

  $: filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(userSearch.toLowerCase()) ||
      project.description.toLowerCase().includes(userSearch.toLowerCase())
  );

  $: sortedProjects =
    sortOrder === "newest"
      ? [...filteredProjects].reverse()
      : [...filteredProjects];
</script>

<section class="mt-16 w-4/5 mx-auto">
  <div class="flex flex-col md:flex-row w-full justify-between items-center">
    <div>
      <h2 class="uppercase text-xl">Recent projects</h2>
    </div>
    <div
      class="flex flex-col md:flex-row gap-3 md:text-end mt-3 md:mt-0 w-2/3 lg:w-1/3"
    >
      <input
        bind:value={userSearch}
        class="px-3 py-1 rounded-xl w-full md:w-1/2"
        placeholder="search..."
      />
      <select
        bind:value={sortOrder}
        class="px-3 py-1 rounded-xl border bg-white text-gray-700 w-full md:w-1/2"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
    {#each sortedProjects as project}
      <article class="rounded-xl shadow bg-slate-900 flex flex-col">
        <div class="flex items-center">
          <img
            src={project.imageUrl}
            class="rounded-t-xl h-full"
            alt={project.name}
          />
        </div>
        <div class="p-4 flex flex-col flex-grow">
          <h3 class="text-lg font-bold text-orange-400">{project.name}</h3>
          <p class="mt-3 mb-auto">{project.description}</p>
          <p class="mt-3">
            Grade: <span class="font-bold">{project.grade}</span>
          </p>
          <div class="mt-3 flex flex-row justify-between">
            <p>
              Link:
              <a
                href={project.projectUrl}
                target="_blank"
                class="underline hover:text-orange-400 transition"
                >{project.shortUrl}</a
              >
            </p>
            <p class="italic text-gray-400">{project.date}</p>
          </div>
        </div>
      </article>
    {/each}
  </div>
</section>
