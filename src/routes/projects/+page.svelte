<script lang="ts">
  import ProjectModule from "../../modules/projectmodule";

  const projects = ProjectModule.getAll().reverse();
</script>

<section class="mt-16 w-4/5 mx-auto">
  <h2 class="uppercase text-xl">Recent projects</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
    {#each projects as project}
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
          <p class="mt-3 mb-3">
            Grade: <span class="font-bold">{project.grade}</span>
          </p>
          <p class="mt-auto italic">
            Link:
            <a
              href={project.projectUrl}
              target="_blank"
              class="underline hover:text-orange-400 transition"
              >{project.shortUrl}</a
            >
          </p>
        </div>
      </article>
    {/each}
  </div>
</section>
