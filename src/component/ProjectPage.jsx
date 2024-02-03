import React, {useEffect, useState} from "react";
import { projectAPI } from "./ProjectAPI";
import { useParams } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";

const ProjectPage = (props) => {
    const [loading, setLoading] = useState(false)
    const [project, setProject] = useState(null)
    const [error, setError] = useState(null)
    const params = useParams();
    const id = Number(params.id)

    useEffect(()=>{
        setLoading(true)
        projectAPI.find(id).then(data =>{
            setProject(data);
            setLoading(false);
        }).catch(e =>{
            setError(e);            
            setLoading(false);
        });
    }, [id]);
    return(
        <div>
            <h1>Data Wisata Bali</h1>
            {loading &&(
                <div className="center-page">
                    <span className="spinner primary"></span>
                    </div>
            )}

            {error &&(
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse"></span>
                                {error}
                            </p>
                        </section>
                    </div>
                </div>
            )}
            {project && <ProjectDetail project={project}/>}
        </div>
    )
}

export default ProjectPage