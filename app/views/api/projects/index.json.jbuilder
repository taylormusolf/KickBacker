json.projects do
  @projects.each do |project|
    json.set! project.id do
      json.extract! project, :id, :title, :campaign, :location, :start_date, :end_date, :funding_goal
      json.creator do
        json.extract! project.creator, :id, :username
      end
    end
  end
end

  