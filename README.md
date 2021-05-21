## <div align="center"><img width="500" alt="kickbacker_logo" src="https://user-images.githubusercontent.com/71670060/119078326-d25fba80-b9aa-11eb-8578-35f03d680a2b.PNG"></div>


KickBacker, a Kickstarter clone, is a crowdfunding platform that allows content creators to post their dream projects that they would like others to help bring to life by meeting their funding goal. Users can create their own projects or search for and view other users' projects by category as well as back them for a reward.

Try out the app here on [Heroku!](https://kickbacker.herokuapp.com)

THe KickBacker build utilizes a React/Redux frontend framework integrated with a Rails/PostgreSQL backend.

### Frontend
* `React` - Open source, component-based JavaScript/UI library
* `Redux` - Commonly used with React, Redux is also a JavaScript library with a primary function of handling application state
* `Jquery/Ajax` - JavaScript library used to send promise-based, asynchronous HTTP requests to REST endpoints and perform CRUD operations

### Backend
* `Ruby on Rails` - Server-side web application framework written in Ruby
* `PostgreSQL` - Open-source relational database management system emphasizing extensibility and SQL compliance
* `BCrypt` - Password hashing/salting for user authentication
* `AWS S3` - Cloud service platform that assists in hosting image assests

## Features:
* Navbar modal that previews user backed and created projects and leads to their dashboard
* User Dashboard that shows all user related projects and access to edit and delete links
* User status management on project show page checks if user is already a backer, is the project creator or if they are signed in and displays appropriate messages.
* Users can view existing projects while not logged in
* Users can create, edit, delete and back projects and rewards if logged in
* Users can search for existing projects
* Users can discover new projects through categories


## Logging In to Back a Project:
* Incorporated a series of checks on the user/project status to see if the user is eligible to back the project, checking if they were logged in, were the project creator, were already a backer of the project or if the project had ended.
* In this example the user needs to log in before being able to back a project reward

![backing](https://user-images.githubusercontent.com/71670060/119169565-04a70180-ba17-11eb-9524-716999ca6106.gif)


```javascript
//project_show.jsx

  signedIn(){
    return this.props.session !== null;
  }

  isCreator(){
    return this.props.session === this.props.project.creator.id
  }
  projectOver(){
    return this.daysLeft(this.props.project) === 0;
  }

  isBacker(){
    if(this.props.project.backings){
    const backings = Object.values(this.props.project.backings);
    let backers = [];
    
    backings.forEach((backing)=>{
      backers.push(backing.backer_id);
    })
    return backers.includes(this.props.session)
    }else{
      return false
    }
  }
  backerSubmitEligible(){
    if(this.signedIn() && !this.isCreator() && !this.projectOver() && !this.isBacker()){
      return(
        <input className='reward-support-submit' type="submit" value='Continue'/>
      )
    } else {
      return(
        <div className='reward-support-submit-disabled'>Continue</div>
      )
    }
    
  }

  backerMessage(){
    if(this.isBacker()){
      return (<div>You backed this project!</div>)
    }
  }

  rewardErrorMessage(){
    if(this.isCreator()){
      return (
        <p className='reward-error'>You cannot back your own project</p>
      )
    } else if(this.isBacker()){
      return (
        <p className='reward-error'>You have already backed this project</p>
      )
    } else if(!this.signedIn()){
      return (
        <p className='reward-error'>You must be signed in to back a project</p>
      )
    }  
  }
```

## Search:


![search](https://user-images.githubusercontent.com/71670060/119175892-420f8d00-ba1f-11eb-84eb-42ec4d5f0ebf.gif)

```javascript
//search_page.jsx

results(){
    const{projects} = this.props;
    const projectResults = [];
    if(projects){
      const lowerCasedQuery = this.props.query.toLowerCase();
      if(lowerCasedQuery === 'everything'){
        return(
          <section className='search-results'>
            <h1>Explore <strong>{Object.values(projects).length} projects</strong></h1>
            <div className='search-projects-container'>
              {Object.values(projects).map(project => (
                <ProjectSearchItem
                  project={project}
                  key={[project.id]}
                />
              ))}
            </div>
          </section>
        )
      }
      Object.values(projects).forEach((project) =>{
        if(project.title.toLowerCase().includes(lowerCasedQuery)
        || project.category.name.toLowerCase().includes(lowerCasedQuery)
        || project.description.toLowerCase().includes(lowerCasedQuery)
        || project.creator.username.toLowerCase().includes(lowerCasedQuery)
        || project.location.toLowerCase().includes(lowerCasedQuery)
        ){
          projectResults.push(project);
        }
      });
      if(projectResults.length > 0){
        return(
          <section className='search-results'>
            <h1>Explore <strong>{projectResults.length} projects</strong></h1>
            <div className='search-projects-container'>
              {projectResults.map(project => (
                <ProjectSearchItem
                  project={project}
                  key={[project.id]}
                />
              ))}
            </div>
          </section>
        )
      } else {
        return(
          <div>
            <div className='search-no-results'>
              <h1><i className="fas fa-exclamation-circle"></i>   We can't find projects that match your search</h1>
              <h2>Check out a collection of popular and recommended options below</h2>
            </div>
            <section className='search-results'>
              <h1>Explore <strong>{Object.values(projects).length} projects</strong></h1>
              <div className='search-projects-container'>
                {Object.values(projects).map(project => (
                  <ProjectSearchItem
                    project={project}
                    key={[project.id]}
                  />
                ))}
              </div>
            </section>
          </div>
          
          
        )
      }
      
    }

  
```




## User Dashboard:
<img width="851" alt="User Dashboard" src="https://user-images.githubusercontent.com/71670060/115057851-6664d080-9e99-11eb-80ca-a16df36c7fa2.PNG">


## Future Implementations
 - 
 - 
 - 
 - 


