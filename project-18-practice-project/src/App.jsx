import ProjectSidebar from "./components/ProjectSidebar"
import NewProject from "./components/NewProject"
import NoProjectSelected from "./components/NoProjectSelected"
import { useState } from "react"

export default function App(){

    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: []
    })

    function handleStartAddProject(){
        setProjectsState(prevState => {
            return{
                ...prevState,
                selectedProjectId: null,
            }
        });
    }

    let content;

    console.log(projects)
    
    if(projectsState.selectedProjectId === null){
        content = <NewProject onAdd={handleAddProject}/>
    }else if (projectsState.selectedProjectId === undefined){
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }

    function handleAddProject(projectData){

        const newProject ={
           ...projectData,
           id: Math.random()
        }
        setProjectsState(prevState => {
            return {...prevState, projects: [...prevState.projects, newProject]}
        })
    }

    return(
        <main className="h-screen my-8 flex gap-8">
            <ProjectSidebar onStartAddProject={handleStartAddProject}/>
            {content}
        </main>
    )
}