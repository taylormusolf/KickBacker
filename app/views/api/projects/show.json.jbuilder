json.partial! 'project', project: @project
json.creator do
  json.extract! @project.creator, :id, :username, :bio
end
if @project.photo.attached?
  json.photo_url url_for(@project.photo)
else
  json.photo_url ""
end
json.backings do
  project.backings.each do |backing|
    json.set! backing.backer_id do
      json.extract! backing, :id, :amount_pledged
    end
  end
end
json.rewards do
  project.rewards each do |reward|
    json.set! reward.id do
      json.extract! reward, :id, :title, :description, :cost
    end
  end
end
