class ProjectSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :starting_date,
             :ending_date,
             :description,
             :creator_id

  has_many :coworkers, embed: :id
  has_many :profiles, embed: :id
end