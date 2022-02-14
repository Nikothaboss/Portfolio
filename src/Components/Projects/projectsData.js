import gameZonePic from "../../img/projects/gameZone2.png"
import gameOfBlog from "../../img/projects/gameOfBlogs.JPG"
import reactTaskManager from "../..//img/projects/reactTaskManager2.png"
export const projectsData = [
    {
        id: 1,
        project: "Game Zone E-commerce",
        description: "This was an exam on my second year at Noroff, the task was to make an e-commerce for a fictional company of my choosing using a self made Strapi API hosted on Heroku. I also created a login system so the user can add, edit and delete products",
        image: gameZonePic,
        projectLink: "https://github.com/Nikothaboss/Semesterprosjekt-2",
        tech: ["React", "Strapi", "Heroku", "Chakra UI", "Framer Motion"],
        netlifyLink: "https://compassionate-kilby-7c8106.netlify.app/"

    },
    {
        id: 2,
        project: "Game of Blogs",
        description: "This was my first exam at Noroff, here I was tasked with making a blog of my choosing. On this task I used a Wordpress headless API with vanilla JavaScript, HTML and CSS",
        image: gameOfBlog,
        projectLink: "https://github.com/Nikothaboss/Project-Exam-1",
        tech: ["JavaScript", "HTML", "CSS", "Wordpress API"],
        netlifyLink: "https://priceless-khorana-75f85c.netlify.app/posts.html"

    },
    {
        id: 3,
        project: "React Task Manager",
        description: "This is one of my earliest react projects. I made an app for tracking daily tasks using React and JSON server as a mock back end",
        image: reactTaskManager,
        projectLink: "https://github.com/Nikothaboss/React-Task-Manager",
        tech: ["React", "JSON server", "CSS"],
        netlifyLink: "https://vigilant-kepler-a54a00.netlify.app/"

    }
]