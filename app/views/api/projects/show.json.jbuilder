json.project do
  json.extract! @project, :id, :title, :description, :campaign, :updates, :faq, :location, :start_date, :end_date, :funding_goal, :creator_id
  json.creator do
    json.extract! @project.creator, :id, :username
  end
end

