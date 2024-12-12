import { Z as ensure_array_like, x as pop, v as push } from './index-QgA_8tlm.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

let imageFolderUrl = "/images/projects";
const ProjectModule = (() => {
  const projects = [
    {
      id: 1,
      name: "PRO105 Creative Web Project exam",
      imageUrl: `${imageFolderUrl}/pro105.jpg`,
      description: "Exam in PRO105 at Kristiania University College. Developed along with 3 other students. Responsible for homepage and 'rainforest-page'.",
      grade: "Approved",
      date: "nov 2022",
      projectUrl: "https://github.com/VegardBrobakken/pro105-kreativt-webprosjekt",
      shortUrl: "github.com/pro105-exam"
    },
    {
      id: 2,
      name: "innlandetmiljopark.no",
      imageUrl: `${imageFolderUrl}/im.jpg`,
      description: "Website developed for Innlandet Miljøpark AS. Written in HTML, CSS and PHP.",
      grade: "-",
      date: "jan 2023 - mar 2023",
      projectUrl: "https://innlandetmiljopark.no/",
      shortUrl: "innlandetmiljopark.no"
    },
    {
      id: 3,
      name: "PGR208 Android Programming exam",
      imageUrl: `${imageFolderUrl}/android.jpg`,
      description: "Exam in PGR208 at Kristiania University College 2023. The solution is developed together with a co-student. The app is written in Kotlin and needs an android emulator to run.",
      grade: "A",
      date: "nov 2023",
      projectUrl: "https://github.com/VegardBrobakken/PGR208_androidprog_exam",
      shortUrl: "github.com/android-exam"
    },
    {
      id: 4,
      name: "DS3103 Web Development exam",
      imageUrl: `${imageFolderUrl}/ds-exam.jpg`,
      description: "Solo exam in DS3103 web development at Kristiania University College. The solution is built with React and a dotnet c# webapi. Focused on CRUD towards the api.",
      grade: "A",
      date: "dec 2023",
      projectUrl: "https://github.com/VegardBrobakken/DS3103-Webutvikling-eksamen",
      shortUrl: "github.com/webdev-exam"
    },
    {
      id: 5,
      name: "snertbygg.no",
      imageUrl: `${imageFolderUrl}/snertbygg.jpg`,
      description: "Company website made for Snertingdal Bygg & Graveservice AS in 2024. Developed in React with JavaScript and Bootstrapcss",
      grade: "-",
      date: "mar 2023",
      projectUrl: "https://snertbygg.no/",
      shortUrl: "snertbygg.no"
    },
    {
      id: 6,
      name: "KWS2100 Map-based Web Systems",
      imageUrl: `${imageFolderUrl}/kws2100.jpg`,
      description: "React application with OpenLayers developed together with a fellow student in KWS2100 Map-based Web Systems. Focus on displaying real-time data on a map. ",
      grade: "B",
      date: "may 2024",
      projectUrl: "https://github.com/kristiania-kws2100-2024/kws2100-exam-VegardBrobakken",
      shortUrl: "github.com/kws2100-exam"
    },
    {
      id: 7,
      name: "PRO202 Agile project exam",
      imageUrl: `${imageFolderUrl}/v3logo.jpg`,
      description: "Graphical user interface for the open source memory forensics tool Volatility3. Developed together with 7 other students as part of the PRO202 - Agile Methods exam at Kristiania University College.",
      grade: "A",
      date: "jun 2024",
      projectUrl: "https://github.com/ArianMathai/Volatility3-GUI",
      shortUrl: "github.com/Volatility3-GUI"
    },
    {
      id: 8,
      name: "ArtVista - TDS200 Cross Plattform ",
      imageUrl: `${imageFolderUrl}/artvista.jpg`,
      description: "React Native Expo app developed for TDS200 exam at Kristiania University College. Social Media app with focus on uploading and sharing artworks with other artists. Runs on iOS simulator, Android emulator and web.",
      grade: "-",
      date: "nov 2024",
      projectUrl: "#",
      shortUrl: "coming soon"
    },
    {
      id: 9,
      name: "NewsApp - PG5602 iOS programming exam",
      imageUrl: `${imageFolderUrl}/newsapp.jpg`,
      description: "iOS news app developed for PG5602 iOS programming exam. Focus on fetching data from newsapi.org and handling it in SwiftData.",
      grade: "-",
      date: "dec 2024",
      projectUrl: "#",
      shortUrl: "coming soon"
    }
  ];
  const getAll = () => structuredClone(projects);
  const getById = (id) => {
    return structuredClone(projects.find((project) => project.id === id));
  };
  return {
    getAll,
    getById
  };
})();
function _page($$payload, $$props) {
  push();
  let filteredProjects, sortedProjects;
  const projects = ProjectModule.getAll();
  let userSearch = "";
  filteredProjects = projects.filter((project) => project.name.toLowerCase().includes(userSearch.toLowerCase()) || project.description.toLowerCase().includes(userSearch.toLowerCase()));
  sortedProjects = [...filteredProjects].reverse();
  const each_array = ensure_array_like(sortedProjects);
  $$payload.out += `<section class="mt-16 w-4/5 mx-auto"><div class="flex flex-col md:flex-row w-full justify-between items-center"><div><h2 class="uppercase text-xl">Recent projects</h2></div> <div class="flex flex-col md:flex-row gap-3 md:text-end mt-3 md:mt-0 w-2/3 lg:w-1/3"><input${attr("value", userSearch)} class="px-3 py-1 rounded-xl w-full md:w-1/2" placeholder="search..."> <select class="px-3 py-1 rounded-xl border bg-white text-gray-700 w-full md:w-1/2"><option value="newest">Newest</option><option value="oldest">Oldest</option></select></div></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<article class="rounded-xl shadow bg-slate-900 flex flex-col"><div class="flex items-center"><img${attr("src", project.imageUrl)} class="rounded-t-xl h-full"${attr("alt", project.name)}></div> <div class="p-4 flex flex-col flex-grow"><h3 class="text-lg font-bold text-orange-400">${escape_html(project.name)}</h3> <p class="mt-3 mb-auto">${escape_html(project.description)}</p> <p class="mt-3">Grade: <span class="font-bold">${escape_html(project.grade)}</span></p> <div class="mt-3 flex flex-row justify-between"><p>Link: <a${attr("href", project.projectUrl)} target="_blank" class="underline hover:text-orange-400 transition">${escape_html(project.shortUrl)}</a></p> <p class="italic text-gray-400">${escape_html(project.date)}</p></div></div></article>`;
  }
  $$payload.out += `<!--]--></div></section>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-By0Edomz.js.map
