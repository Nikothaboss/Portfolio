import { ProjectsStyled } from "./projects.styled"
import { Text, Flex, Center } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "./projectsData";
import { colors, device, fonts } from "../../app.styled";
import Footer from "../Footer/Footer";
import { useResize } from "../../utils/resize";


const Project = ({project, description, image, projectLink, id, tech}) => {
    const {screenWidth} = useResize()
    return (
    <Flex className="project" id={id}>
        <Flex position="relative" justifyContent={"center"} >
            <Center position={screenWidth < 1200 && "absolute"} bottom="0" top="0" w="100%" h="100%" >
                <img src={image} alt={project} />
            </Center>
            <Flex className="project-info" bg={screenWidth < 1200 && "#081e26ce"}  >
                <Text as="h2" fontSize={screenWidth > 768 ? "1.5rem" : "1.3rem"} fontWeight="600" p="0 1rem" mb="1rem" fontFamily={fonts.poppins}>
                    {project}
                </Text>
                <Flex className="description-container">
                    <Text fontSize={screenWidth > 768 ? "1.2rem" : "1rem"}>{description}</Text>
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
    </Flex>
    )
}

const Projects = () => {
    console.log(projectsData)
    return (
        <ProjectsStyled minH="100vh" >
            <Flex className="projects-container">
                <Text as="h1" fontSize="3.5rem" fontFamily={fonts.poppins} pb="2rem">Projects</Text>
               {projectsData.map(({project, description, image, id, tech})=> (
                   <Project project={project} description={description} image={image} key={id} tech={tech} />
               ))} 
            <Footer />
            </Flex>
        </ProjectsStyled>
    )
}

export default Projects
