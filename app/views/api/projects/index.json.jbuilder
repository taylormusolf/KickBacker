@projects.each do |project|
  json.set! project.id do
    json.partial! 'project', project: project
    json.creator do
      json.extract! project.creator, :id, :username
    end
    if project.photo.attached?
      json.photo_url url_for(project.photo)
    else
      json.photo_url ""
    end
  end
  
end
  