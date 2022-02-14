import { ProjectsStyled } from "./projects.styled"
import { Text, Flex, Center, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "./projectsData";
import { colors, device, fonts } from "../../app.styled";
import Footer from "../Footer/Footer";
import { useResize } from "../../utils/resize";
import { aboutAnimations } from "../../utils/animations";



const Project = ({project, description, image, projectLink, netlifyLink, id, tech}) => {
    const {screenWidth} = useResize()
    const aboutProjectBg = useColorModeValue("#dadada", "#09161b" )
    const bg = useColorModeValue("#9b9b9bdf", "#081e26df" )
    return (
    <Flex className="project" id={id}>
        <Flex position="relative" justifyContent={"center"}  >
            <Center  position={screenWidth < 1200 && "absolute"} bottom="0" top="0" w="100%" h="100%" >
                <img src={image} alt={project} />
            </Center>
            <Flex className="project-info" bg={screenWidth < 1200 && bg}  >
                <Text as="h2" fontSize={screenWidth > 768 ? "1.5rem" : "1.3rem"} fontWeight="600" p="0 1rem" mb="1rem" fontFamily={fonts.poppins}>
                    {project}
                </Text>
                <Flex className="description-container" bg={aboutProjectBg}>
                    <Text fontSize={screenWidth > 768 ? "1.2rem" : "1rem"}>{description}</Text>
                </Flex>
                <ul className="tech-container">
                    {tech.map(d => (
                        <li className="tech-item">{d}</li>
                    ))}
                </ul>
                <Flex justifyContent="flex-start" p="1rem">
                    <a target="_blank" href={projectLink} class="github link">
                        <FaGithub size="2rem" />
                    </a>
                    <a target="_blank" href={netlifyLink}>
                        <FaExternalLinkAlt size="2rem" />
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
        <ProjectsStyled minH="100vh"
          variants={aboutAnimations}
          initial="pageInitial"
          animate="pageEnter"
          exit="pageExit"
          >
            <Flex className="projects-container">
                <Text as="h1" fontSize="2.5rem" fontFamily={fonts.poppins} fontWeight={600} pb="2rem" >Projects i've worked on</Text>
               {projectsData.map(({project, description, image, id, tech, projectLink, netlifyLink})=> (
                   <Project 
                   project={project} 
                   description={description} 
                   image={image} 
                   key={id} 
                   tech={tech} 
                   projectLink={projectLink}
                   netlifyLink={netlifyLink}
                   />
               ))} 
            <Footer />
            </Flex>
        </ProjectsStyled>
    )
}

export default Projects
