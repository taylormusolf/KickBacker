json.extract! user, :id, :username, :email
json.projects do
  user.projects.each do |project|
    json.set! project.id do
      json.extract! project, :id, :title
    end
  end
end