import React from "react";
import { Link } from "react-router-dom";


const FormatDescription = (description) =>{
    return description.substring(0,20) + "..."
}

const ProjectCard = (props) =>{
    const {project, onEdit}= props
    const handleEditClick = (projectBeingEdited) => {
        onEdit(projectBeingEdited)
    }

    return(
        <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section className="section dark ">
                <Link to={"/projects/" + project.id}>
                    <h5 className="strong">
                        <strong>{project.name}</strong>
                    </h5>
                    <p>{FormatDescription(project.description)}</p>
                    <p>reating : {project.budget.toLocaleString()}</p>
                </Link>
                <button className="bordered" onClick={()=>handleEditClick(project)}>
                    <span className="icon-edit"></span>
                    Edit
                </button>
                <button className="bordered secondary" >
                    <span className="icon-edit"></span>
                    Delete
                </button>
            </section>
        </div>
    )
}

export default ProjectCard