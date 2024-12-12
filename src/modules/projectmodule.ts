
let imageFolderUrl = "/images/projects"

const ProjectModule = (() => {
    const projects = [
      {
        id: 1,
        name: "PRO105 Creative Web Project exam",
        imageUrl: `${imageFolderUrl}/pro105.jpg`,  
        description: "Exam in PRO105 at Kristiania University. Developed along with 3 other students. Resposible for homepage and 'rainforest-page'.",
        grade: "Approved",
        projectUrl: "https://github.com/VegardBrobakken/pro105-kreativt-webprosjekt",
        shortUrl: "https://github.com/pro105-exam"
      },
      {
        id: 2,
        name: "PGR208 Android Programming exam",
        imageUrl: `${imageFolderUrl}/android.jpg`, 
        description: "Exam in PGR208 at Kristiania University 2023. The solution is developed together with a co-student. The app is written in Kotlin and needs an android emulator to run.",
        grade: "A",
        projectUrl: "https://github.com/VegardBrobakken/PGR208_androidprog_exam",
        shortUrl: "https://github.com/PGR208-android-exam"

      },
      {
        id: 3,
        name: "innlandetmiljopark.no",
        imageUrl: `${imageFolderUrl}/im.jpg`, 
        description: "Website developed for Innlandet Miljøpark AS. Written in HTML, CSS and PHP.",
        grade: "-",
        projectUrl: "https://innlandetmiljopark.no/",
        shortUrl: "https://innlandetmiljopark.no/"
      },
      {
        id: 4,
        name: "DS3103 Web Development exam",
        imageUrl: `${imageFolderUrl}/ds-exam.jpg`, 
        description: "Solo exam in DS3103 web development at Kristiania University. The solution is built with React and a dotnet c# webapi. Focused on CRUD towards the api.",
        grade: "A",
        projectUrl: "https://github.com/VegardBrobakken/DS3103-Webutvikling-eksamen",
        shortUrl: "https://github.com/DS3103-Webdevelopment-exam"
      },
      {
        id: 5,
        name: "KWS2100 Map-based Web Systems",
        imageUrl: `${imageFolderUrl}/kws2100.jpg`, 
        description: "React application with OpenLayers developed together with a fellow student in KWS2100 Map-based Web Systems. Focus on displaying real-time data on a map. ",
        grade: "B",
        projectUrl: "https://github.com/kristiania-kws2100-2024/kws2100-exam-VegardBrobakken", 
        shortUrl: "https://github.com/kws2100-exam",
      },
      {
        id: 6,
        name: "snertbygg.no",
        imageUrl: `${imageFolderUrl}/snertbygg.jpg`, 
        description: "Company website made for Snertingdal Bygg & Graveservice AS in 2024.",
        grade: "-",
        projectUrl: "https://snertbygg.no/", 
        shortUrl: "https://snertbygg.no/",
      },
      {
        id: 7,
        name: "PRO202 Agile project exam",
        imageUrl: `${imageFolderUrl}/v3logo.jpg`, 
        description: "Graphical user interface for the open source memory forensics tool Volatility3. Developed together with 7 other students as part of the PRO202 - Agile Methods exam at Kristiania University.",
        grade: "A",
        projectUrl: "https://github.com/ArianMathai/Volatility3-GUI",
        shortUrl: "https://github.com/Volatility3-GUI"
      },
      {
        id: 8,
        name: "ArtVista - TDS200 Cross Plattform ",
        imageUrl: `${imageFolderUrl}/artvista.jpg`, 
        description: "React Native Expo app developed for TDS200 exam at Kristiania University. Social Media app with focus on uploading and sharing artworks with other artists. Runs on iOS simulator, Android emulator and web.",
        grade: "-",
        projectUrl: "#",
        shortUrl: "coming soon"
      },
      {
        id: 9,
        name: "NewsApp - PG5602 iOS programming exam",
        imageUrl: `${imageFolderUrl}/newsapp.jpg`, 
        description: "iOS news app developed for PG5602 iOS programming exam. Focus on fetching data from newsapi.org and handling it in SwiftData.",
        grade: "-",
        projectUrl: "#",
        shortUrl: "coming soon"
      },
      
    ];
  
    const getAll = () => structuredClone(projects);
  
    const getById = (id: number) => {
      return structuredClone(projects.find(project => project.id === id));
    };
  
    return {
      getAll,
      getById,
    };
  })();
  
  export default ProjectModule;
  