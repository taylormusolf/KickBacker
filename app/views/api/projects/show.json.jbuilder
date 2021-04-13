json.partial! 'project', project: @project
json.creator do
  json.extract! @project.creator, :id, :username, :bio
  json.projects do
    @project.creator.projects.each do |project|
      json.set! project.id do
        json.extract! project, :id, :title
      end
    end
  end
  json.backings do
    @project.creator.backings.each do |backing|
      json.set! backing.id do
        json.extract! backing, :id
      end
    end
  end
end
if @project.photo.attached?
  json.photo_url url_for(@project.photo)
else
  json.photo_url ""
end
json.backings do
  @project.backings.each do |backing|
    json.set! backing.backer_id do
      json.extract! backing, :id, :amount_pledged
    end
  end
end
json.rewards do
  @project.rewards.each do |reward|
    json.set! reward.id do
      json.extract! reward, :id, :title, :description, :cost
    end
  end
end
json.category do
  json.extract! @project.category, :id, :name
end
