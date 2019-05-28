class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :age
end
