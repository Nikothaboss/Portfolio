import gameZonePic from "../../img/projects/gameZone2.png";
import projectExam2 from "../../img/projects/projectExam2.png";
import rickAndMortyWiki from "../..//img/projects/rickAndMortyWiki.png";
export const projectsData = [
  {
    id: 1,
    project: "Game Zone E-commerce",
    description:
      "This was an exam on my second year at Noroff, the task was to make an e-commerce for a fictional company of my choosing using a self made Strapi API hosted on Heroku. I also created a login system so the user can add, edit and delete products",
    image: gameZonePic,
    projectLink: "https://github.com/Nikothaboss/Semesterprosjekt-2",
    tech: ["React", "Strapi", "Heroku", "Chakra UI", "Framer Motion"],
    netlifyLink: "https://compassionate-kilby-7c8106.netlify.app/",
  },
  {
    id: 2,
    project: "Bergen Booking",
    description:
      "This was my last exam at Noroff, I was tasked with making a booking site for a fictional business. There is one customer side where people can book rooms and send messages and also an admin side where you can log in to see bookings and edit hotels.",
    image: projectExam2,
    projectLink:
      "https://github.com/Noroff-FEU-Assignments/project-exam-2-Nikothaboss",
    tech: ["Next.js", "Styled Components", "Strapi", "Heroku", "Framer Motion"],
    netlifyLink: "https://exam-2-nikolai.vercel.app/",
  },
  {
    id: 3,
    project: "Rick and Morty Wiki",
    description:
      "This was one of my first projects using next.js, I tried it out using the rick and morty api and had some fun with it",
    image: rickAndMortyWiki,
    projectLink:
      "https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Nikothaboss",
    tech: ["Next.js", "Rick and Morty API", "React-Query", "YUP"],
    netlifyLink:
      "https://js-frameworks-course-assignment-nikothaboss-pldg5dqwu.vercel.app/",
  },
];
