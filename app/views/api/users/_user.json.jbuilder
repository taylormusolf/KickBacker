json.extract! user, :id, :username, :email, :bio
json.projects do
  user.projects.each do |project|
    json.set! project.id do
      json.extract! project, :id, :title
      if project.photo.attached?
        json.photo_url url_for(project.photo)
      else
        json.photo_url ""
      end
    end
  end
end
json.backings do
  user.backings.each do |backing|
    json.set! backing.id do
      json.extract! backing, :id, :amount_pledged
        if backing.reward
          json.reward do
            json.extract! backing.reward, :id, :title, :description, :cost 
          end
        else
          json.reward ""
        end
      json.project do
        json.extract! backing.project, :id, :title
        if backing.project.photo.attached?
          json.photo_url url_for(backing.project.photo)
        else
          json.photo_url ""
        end
      end
    end
  end
end