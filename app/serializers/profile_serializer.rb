class ProfileSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :tools,
             :number

  has_many :projects, ember: :id
  has_many :people, ember: :id           
end
