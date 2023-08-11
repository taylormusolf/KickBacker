import React from 'react';
// import { withRouter } from 'react-router';
import {Link, Redirect} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { updateProject, fetchProject,createProject, resetProjectErrors } from '../../actions/project_actions';

export default function ProjectForm(){
  const dispatch = useDispatch();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [project, setProject] = useState({
    title: '',
    category_id: '',
    description: '',
    campaign: '',
    updates: '',
    faq: '',
    location: '',
    start_date: '',
    end_date: '',
    funding_goal: '',
    creator_id: ''
  });
  const {projectId} = useParams();
  const oldProject = useSelector((state) => state?.entities?.projects ? state.entities.projects[projectId] : null);
  const currentUser = useSelector((state) => state.session);

  useEffect(()=>{
    resetProjectErrors();
    handScroll();
    if(projectId){
      dispatch(fetchProject(projectId));
    }
  }, [projectId]);

  useEffect(()=>{
    if(projectId && oldProject){
      const {title, description, campaign, location, faq, id, funding_goal, start_date, end_date, updates} = oldProject;
      setProject({
        id,
        title,
        category_id: oldProject.category.id,
        description,
        campaign,
        updates,
        faq,
        location,
        start_date,
        end_date,
        funding_goal,
        creator_id: oldProject.creator.id
      });
    }
  }, [oldProject])


  const update = (field) => {
    return e => setProject({...project, [field]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', project.id);
    formData.append('project[title]', project.title);
    formData.append('project[category_id]', project.category_id);
    formData.append('project[description]', project.description);
    formData.append('project[campaign]', project.campaign);
    formData.append('project[updates]', project.updates);
    formData.append('project[faq]', project.faq);
    formData.append('project[location]', project.location);
    formData.append('project[start_date]', project.start_date);
    formData.append('project[end_date]', project.end_date);
    formData.append('project[funding_goal]', project.funding_goal);
    formData.append('project[creator_id]', currentUser.id);
    if (project.imageFile) {
      formData.append('project[photo]', project.imageFile);
    }
    if(projectId){
      dispatch(updateProject(formData, oldProject.id)).then(action => history.push(`/projects/${action.project.id}`))
    } else {
      dispatch(createProject(formData).then(action => history.push(`/projects/${action.project.id}`)))
    }
  }
  const handScroll = () =>{
    window.scrollTo(0, 0)
  }


  const handleFile = (e) =>{
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProject({...project, imageFile: file, imageUrl: reader.result})
    }
    if (file) {
      reader.readAsDataURL(file)
    } else {
      setProject({...project, imageUrl: '', imageFile: null})
    }
    setProject(...project, {
      imageFile: e.currentTarget.files[0],
      imageUrl: e.currentTarget.files[0],
    })
  }

  const renderErrors = ()=> {
    return(
      <ul>
        {/* {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))} */}
      </ul>
    );
  }
  console.log('category', project.category_id)

  // if (!project) return null;
  const preview = project.imageUrl? <img src={project.imageUrl}/> : project.photo_url ? <img src={project.photo_url}/> : null
  
  if(page === 1){
    return(
      <div className="new-project-container">
      <h1 className="new-project-title">Select a primary category for your project.</h1>
      <h2>These will help backers find your project, and you can change them later if you need to.</h2>
      <div className="new-project-form">
        <label>Project Category
          <br/>
          {project?.category_id && <select defaultValue={project.category_id ? `${project.category_id}` : ''} className='new-project-categories' onChange={update('category_id')}>
            <option value='' disabled={true}>Select your category</option>
            <option value="1">Art</option>
            <option value="2">Comics & Illustration</option>
            <option value="3">Design & Tech</option>
            <option value="4">Film</option>
            <option value="5">Food & Craft</option>
            <option value="6">Games</option>
            <option value="7">Music</option>
            <option value="8">Publishing</option>
          </select>}
        </label>
        <h1>Getting started with your project!</h1>
        <button disabled={!project?.category_id} onClick={()=> setPage(2)}>Next:Project Title</button>
        <div className='project-errors'>{renderErrors()}</div>
      </div>
    </div>
    )
  } else if(page === 2){
    return(
      <div className="new-project-container">
      <h1 className="new-project-title">{projectId ? 'Update Project': 'Create Project'}</h1>
      <div className="new-project-form">
        <label>Project Title
          <input
            type="text"
            value={project?.title}
            placeholder="Your Memoirs" 
            onChange={update('title')}
            className="project-field"
          />
          </label>
        <label>Project Description
          <textarea
            value={project?.description}
            placeholder="What is your project about?" 
            onChange={update('description')}
            className="project-field"
          />
        </label>
        <div className='project-errors'>{renderErrors()}</div>
        <button onClick={()=> setPage(1)}>Back:Project Category</button>
        <button disabled={!project?.title || !project?.description} onClick={()=> setPage(3)}>Next:Project Campaign Details</button>
      </div>
    </div>
    )
  } else if(page === 3){
    return(
      <div className="new-project-container">
      <h1 className="new-project-title">{projectId ? 'Update Project': 'Create Project'}</h1>
      <div className="new-project-form">
        <label>Campaign (optional)
          <textarea 
            type="text"
            value={project?.campaign}
            placeholder="What is the story and risks associated?" 
            onChange={update('campaign')}
            className="project-field"
          />
        </label>
        
        <label>Updates (optional)
          <textarea
            type="text"
            value={project?.updates}
            placeholder="Anything you would like to share?" 
            onChange={update('updates')}
            className="project-field"
          />
        </label>
        
        <label>FAQ (optional)
          <textarea
            type="text"
            value={project?.faq}
            placeholder="Frequently Asked Questions..." 
            onChange={update('faq')}
            className="project-field"
          />
        </label>
        <div className='project-errors'>{renderErrors()}</div>
        <button onClick={()=> setPage(2)}>Back:Project Title</button>
        <button onClick={()=> setPage(4)}>Next:Project Location</button>
      </div>
    </div>
    )
  } else if(page === 4){
    return(
      <div className="new-project-container">
      <h1 className="new-project-title">{projectId ? 'Update Project': 'Create Project'}</h1>
      <div className="new-project-form">
        
        <label>Location
          <input
            type="text"
            value={project?.location}
            placeholder="Where you at?" 
            onChange={update('location')}
            className="project-field"
          />
        </label>

        <div className='project-errors'>{renderErrors()}</div>
        <button onClick={()=> setPage(3)}>Back: Campaign Details</button>
        <button disabled={!project?.location} onClick={()=> setPage(5)}>Next: Project Dates and Goal</button>
      </div>
    </div>
    )
  } else if (page === 5){
    return(
      <div className="new-project-container">
      <h1 className="new-project-title">{projectId ? 'Update Project': 'Create Project'}</h1>
      <div className="new-project-form">
        <label>Project Start Date
          <input
            type='date'              
            value={project?.start_date.slice(0,10)}
            onChange={update('start_date')}
            className="project-field"
          />
        </label>
        <label>Project End Date
          <input
            type='date'              
            value={project?.end_date.slice(0,10)}
            onChange={update('end_date')}
            className="project-field"
          />
        </label>
        <label>Funding Goal
          <input required
            type="currency"
            value={project?.funding_goal}
            placeholder="Be realistc"
            onChange={update('funding_goal')}
            className="project-field"
          />
        </label>

        <div className='project-errors'>{renderErrors()}</div>
        <button onClick={()=> setPage(4)}>Back: Location</button>
        <button disabled={!project?.start_date || !project?.end_date || !project?.funding_goal} onClick={()=> setPage(6)}>Next: Project Image</button>
      </div>
    </div>
    )
  } else if(page === 6){
    return(
      <div className="new-project-container">
      <h1 className="new-project-title">{projectId ? 'Update Project': 'Create Project'}</h1>
      <div className="new-project-form">
        <label>Upload Project Image (optional)
          <div className='picture-container'>
            <input
            className='picture-input'
            type="file"
            onChange={handleFile}
            />
            {preview}
          </div>
          
        </label>

        <div className='project-errors'>{renderErrors()}</div>
        <button onClick={()=> setPage(5)}>Back: Project Dates and Goal</button>
        <button onClick={handleSubmit}>Finalize</button>
      </div>
    </div>
    )
  }



}