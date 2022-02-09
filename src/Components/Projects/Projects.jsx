import { ProjectsStyled } from "./projects.styled"
import { Text, Flex } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "./projectsData";
import { device, fonts } from "../../app.styled";
import Footer from "../Footer/Footer";


const Project = ({project, description, image, projectLink, id, tech}) => {
    return (
    <Flex className="project" id={id}>
        <img src={image} alt={project} />
        <Flex className="project-info">
            <Text as="h2" fontSize="1.5rem" fontWeight="600" p="1rem" fontFamily={fonts.poppins}>{project}</Text>
            <Flex className="description-container">
                <Text>{description}</Text>
            </Flex>
            <ul className="tech-container">
                {tech.map(d => (
                    <li className="tech-item">{d}</li>
                ))}
            </ul>
            <Flex justifyContent="flex-start" p="1rem">
                <a href={projectLink}>
                    <FaGithub size="2rem" />
                </a>
            </Flex>
        </Flex>
    </Flex>
    )
}

const Projects = () => {
    console.log(projectsData)
    return (
        <ProjectsStyled minH="100vh" >
            <Flex className="projects-container">
                <Text as="h1" fontSize="3.5rem" fontFamily={fonts.poppins}>Projects</Text>
               {projectsData.map(({project, description, image, id, tech})=> (
                   <Project project={project} description={description} image={image} key={id} tech={tech} />
               ))} 
            <Footer />
            </Flex>
        </ProjectsStyled>
    )
}

export default Projects
