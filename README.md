<div align='center'><img width="400" alt="kickbacker_logo" src="https://user-images.githubusercontent.com/71670060/119078326-d25fba80-b9aa-11eb-8578-35f03d680a2b.PNG"></div>


KickBacker, a Kickstarter clone, is a crowdfunding platform that allows content creators to post their dream projects that they would like others to help bring to life by meeting their funding goal. Users can create their own projects or search for and view other users' projects by category as well as back them for a reward.

Try out the app here on [Heroku!](https://kickbacker.herokuapp.com/)

The KickBacker build utilizes a React/Redux frontend framework integrated with a Ruby on Rails/PostgreSQL backend.

## Technologies:

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
* Users can view existing projects while not logged in
* User Authentication - users can sign up or log in to a corresponding user account
* Users can create, edit, delete and back projects and rewards if logged in
* Users can discover new projects through category pages or can search for existing projects
* User Dashboard that shows all user related projects and access to edit and delete links
* User status management on project show page checks if user is already a backer, is the project creator or if they are signed in and displays appropriate messages.


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

## Search Backend:
* User's search query is passed in via :wildcard in frontend URL `/projects/search/:query` which is then mapped within an AJAX request to a backend route of `/api/projects?query=${query}`
* That AJAX request is routed to the corresponding controller action which in this case is a method called `index`
* Within this method an ActiveRecord query is run matching against project's title or category name in backend controller.
* If there are no results or if a query of 'everything' was used, then all projects are returned.

```javascript
//frontend/util/project_api_util.js

export const fetchProjects = (query) => { //function can either receive a query and filter results or receive no query and return 
  let path;
  if(query){
    path = `/api/projects?query=${query}`
  } else {
    path = `/api/projects`
  }
  return $.ajax({
    method: 'GET',
    url: path
  })
};

```


```ruby
# app/controllers/api/projects_controller.rb
def index
    @projects = Project.all.with_attached_photo.includes({creator: [:projects, :backings]}, :backings, :rewards, :category) #ActiveRecord query that prefetches all projects and corresponding associated data
    if params[:query] && params[:query].downcase != 'everything' #check if there was a query provided and if it wasn't the 'everything' query
      @projects = @projects.joins(:category).where('projects.title ILIKE (?) or categories.name ILIKE (?)', "%#{params[:query]}%", "%#{params[:query]}%")
      #this above query chains off of the one 2 lines above as one query since ActiveRecord Queries are lazy loaded.
    end
    render :index
end


```


## Search Frontend:
* User's search query is passed in via :wildcard in frontend URL `/projects/search/:query` and then passed as an argument to `fetchProjects` function.
* In the below code block you will see how the `SearchPage` component handles fetching the search results and checking if no search matches were found.  
* If there are no results, user receives a message that no projects were found and all projects are returned.

![search](https://user-images.githubusercontent.com/71670060/119175892-420f8d00-ba1f-11eb-84eb-42ec4d5f0ebf.gif)

```javascript

//search_page.jsx


componentDidMount(){
    this.setState({receivedResults: true}) //receivedResults is a state Boolean that confirms we found matching search results. Right now we are assuming we will.
    this.props.fetchProjects(this.props.query)
      .then(res => Object.keys(res.projects).length === 0 
      ? this.fetchSuggestions() 
      : null);  //we call fetchProjects backend query function with a query argument that comes from the user search and if there are no results we call fetchSuggestions.

componentDidUpdate(prevProps){ //works the sames as componentDidMount but is watching for if the query has changed via new user search input
    if(prevProps.query !== this.props.query){
      this.setState({receivedResults: true})
      this.props.fetchProjects(this.props.query).then(res => Object.keys(res.projects).length === 0 
      ? this.fetchSuggestions() 
      : null);
    }
  }

  fetchSuggestions(){ //if there are no search results we are going to fetch other projects as suggestions to show instead
    this.props.fetchProjects(); //backend query that will fetch projects
    this.setState({receivedResults: false}) //we have confirmed no search results returned so we set receivedResults to false
  }
  results(){ //function to determine jsx output for the projects we will render
    const{projects} = this.props; //projects being passed through via mapStateToProps
    const projectResults = Object.values(projects); //convert object of project objects to an array of project objects

    if(projects){
      if(this.state.receivedResults){ //condition checking we received matching project results
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
      } else { //alternative condition for the scenario we got no matches and will instead show project suggestions
        return(
          <div>
            <div className='search-no-results'>
              <h1><i className="fas fa-exclamation-circle"></i>   We can't find projects that match your search</h1>
              <h2>Check out a collection of popular and recommended options below</h2>
            </div>
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
          </div>
        )
      }
    }
  }


```

## Future Implementations:
 - Project funded and ended features
 - Search dropdown and additional filtering
 - Additional Edit features for Rewards


