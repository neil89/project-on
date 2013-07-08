class ProjectTeamSerializer < ActiveModel::Serializer
  attributes :id,
             :coworker_id,
             :project_id

end