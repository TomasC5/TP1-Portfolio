import Project from './personalProjects.jsx'
import dashboard from '../src/assets/dashboard.png'
import landingpage from '../src/assets/landingpage.png'
import taskmanager from '../src/assets/taskmanager.png'

function Projects() {
    
    return(
        <div className="projGrid">
            <Project projImg={dashboard} proj="Dashboard" summary="responsive React dashboard featuring reusable components, interactive UI elements, and organized data presentation."/>
            <Project projImg={taskmanager} proj="Task Manager" summary="Dynamic JavaScript task management application that allows users to add, edit, complete, and delete tasks."/>
            <Project projImg={landingpage} proj="Responsive Landing Page" summary="Modern, responsive landing page using HTML, CSS, and JavaScript."/>
        </div>
    );
}

export default Projects