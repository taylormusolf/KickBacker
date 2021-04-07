projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :description, :campaign, :updates, :faq, :location, :start_date, :end_date, :funding_goal, :creator_id
  end
end
