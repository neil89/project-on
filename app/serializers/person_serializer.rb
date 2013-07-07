class PersonSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :place,
             :email,
             :password,
             :academic,
             :professional,
             :knowledge,
             :icon_url

  has_many :friends, embed: :id
  has_many :projects_created, embed: :id
  has_many :projects, embed: :id
  has_many :profiles, embed: :id
end             