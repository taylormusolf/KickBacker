import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router';
import { updateProject, fetchProject,createProject, resetProjectErrors } from '../../actions/project_actions';

export default function ProjectForm(){
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [errors, setErrors] = useState([]);
  const [page, setPage] = useState(3);
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
  const formType = projectId ? 'update' : 'create';

  useEffect(()=>{
    // dispatch(resetProjectErrors());
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
  }, [oldProject, projectId])


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
        {errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  // if (!project) return null;
  const preview = project.imageUrl? <img className='new-project-img-preview' src={project.imageUrl} alt='new'/> : oldProject?.photo_url ? <img className='new-project-img-preview' src={oldProject.photo_url} alt='old'/> : null
  
  const formContents = () => {
    if(page === 1){
      return(
        <>
          {page === 1 && formType === 'create' && <><h1 className='new-project-first'>First, let’s get you set up.</h1></>}
          <h1 className="new-project-title">Select a primary category for your project.</h1>
          <h2 className="new-project-subtitle">These will help backers find your project, and you can change them later if you need to.</h2>
          {/* <label>Project Category */}
            <br/>
            {(!projectId || project?.category_id) && 
            <select defaultValue={project.category_id ? `${project.category_id}` : ''} className='new-project-categories' onChange={update('category_id')}>
              <option value='' disabled={true}>Select</option>
              <option value="1">Art</option>
              <option value="2">Comics & Illustration</option>
              <option value="3">Design & Tech</option>
              <option value="4">Film</option>
              <option value="5">Food & Craft</option>
              <option value="6">Games</option>
              <option value="7">Music</option>
              <option value="8">Publishing</option>
            </select>}
            <div className='project-errors'>{renderErrors()}</div>
          {/* </label> */}
          <div className='new-project-buttons'>
            {formType === 'create' && <h1>Getting started with your project!</h1>}
            <button className='new-project-form-button' disabled={!project?.category_id} onClick={()=> !project?.category_id ? setErrors(['Need to fill out']) : setPage(2) || setErrors([])}>Next: Project Title</button>
          </div>
        </>
      )
    } else if(page === 2){
      return(
        <>
          <h1 className="new-project-title">Give your project a title.</h1>
          <h2 className="new-project-subtitle">Include a project description so people will know what your project is about.</h2>
          {/* <label>Project Title */}
            <div className="input-container">
              <input
                type="text"
                value={project?.title}
                // placeholder="Your project title" 
                onChange={update('title')}
                className="project-field"
              />
              <label id={project?.title && 'filled'}>Project Title</label>
            </div>
          {/* </label> */}
          {/* <label>Project Description */}
          <div className="input-container">
            <textarea
              value={project?.description}
              // placeholder="Describe what you'll be creating." 
              onChange={update('description')}
              className="project-field"
            />
            <label id={project?.description && 'filled'}>Project Description</label>
          </div>
          {/* </label> */}
          <div className='project-errors'>{renderErrors()}</div>
          <div className='new-project-buttons'>
            <button onClick={()=> setPage(1)}>{"<- Back: Project Category"}</button>
            <button className='new-project-form-button' disabled={!project?.title || !project?.description} onClick={()=> setPage(3)}> Next: Project Campaign Details</button>
          </div>
        </>
      )
    } else if(page === 3){
      return(
        <>
          <h1 className="new-project-title">Build out your project with Campaign notes, Updates and FAQ's.</h1>
          <h2 className="new-project-subtitle">These are all optional and you can add to them later.</h2>
          {/* <label>Campaign (optional) */}
            <textarea 
              type="text"
              value={project?.campaign}
              placeholder="Campaign: What is the story and risks associated?" 
              onChange={update('campaign')}
              className="project-field"
            />
          {/* </label> */}
          
          {/* <label>Updates (optional) */}
            <textarea
              type="text"
              value={project?.updates}
              placeholder="Updates: Anything you would like to share?" 
              onChange={update('updates')}
              className="project-field"
            />
          {/* </label> */}
          
          {/* <label>FAQ (optional) */}
            <textarea
              type="text"
              value={project?.faq}
              placeholder="Frequently Asked Questions..." 
              onChange={update('faq')}
              className="project-field"
            />
          {/* </label> */}
          <div className='project-errors'>{renderErrors()}</div>
          <div className='new-project-buttons'>
            <button className='new-project-form-button' onClick={()=> setPage(2)}>Back:Project Title</button>
            <button className='new-project-form-button' onClick={()=> setPage(4)}>Next:Project Location</button>
          </div>
        </>
      )
    }else if(page === 4){
      return(
        <>
          <h1 className="new-project-title">Set a location for your project.</h1>
          <h2 className="new-project-subtitle">Give your city and country of legal residence if you’re raising funds as an individual. If you’re raising funds for a business or nonprofit, select the country where the entity’s tax ID is registered.</h2>
          {/* <label>Location */}
            <input
              type="text"
              value={project?.location}
              placeholder="Location" 
              onChange={update('location')}
              className="project-field"
            />
          {/* </label> */}
          <div className='project-errors'>{renderErrors()}</div>
          <div className='new-project-buttons'>
            <button className='new-project-form-button' onClick={()=> setPage(3)}>Back: Campaign Details</button>
            <button className='new-project-form-button' disabled={!project?.location} onClick={()=> setPage(5)}>Next: Project Dates and Goal</button>
          </div>
        </>
      )  
    }else if (page === 5){
      return(
        <>
          <h1 className="new-project-title">Next, set preliminary start and end dates for your funding period as well as the funding goal.</h1>
          <h2 className="new-project-subtitle">These can be updated before your project funding launch date.</h2>
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
              placeholder="Funding Goal"
              onChange={update('funding_goal')}
              className="project-field"
            />
          </label>

          <div className='project-errors'>{renderErrors()}</div>
          <div className='new-project-buttons'>
            <button className='new-project-form-button' onClick={()=> setPage(4)}>Back: Location</button>
            <button className='new-project-form-button' disabled={!project?.start_date || !project?.end_date || !project?.funding_goal} onClick={()=> setPage(6)}>Next: Project Image</button>
          </div>
        </>
      )
    } else if(page === 6){
      return(
        <>
          <h1 className="new-project-title">Last one - upload a cover photo for your project.</h1>
          <h2 className="new-project-subtitle">This is optional but you should add one before your project launches.</h2>
          {/* <label>Upload Project Image (optional) */}
            <div className='picture-container'>
              <input
              className='picture-input'
              type="file"
              onChange={handleFile}
              />
              {preview}
            </div>
          
          {/* </label> */}
          { project.imageUrl ? <button onClick={()=> setProject({...project, imageUrl: ''})}>Cancel</button>: null}

          <div className='project-errors'>{renderErrors()}</div>
          <div className='new-project-buttons'>
            <button className='new-project-form-button' onClick={()=> setPage(5)}>Back: Project Dates and Goal</button>
            <button className='new-project-form-button' onClick={handleSubmit}>Finalize</button>
          </div>
        </>
      )
    }
  }


    return(
      <div className="new-project-container">
        <strong className='new-project-pagination'>{page} of 6</strong>
        <div className="new-project-form">
          {formContents()}
        </div>
        <div className="new-project-fineprint">Please note: Your ability to edit, hide, or delete a project is limited after you launch a project.</div>
    </div>
    )
        



}