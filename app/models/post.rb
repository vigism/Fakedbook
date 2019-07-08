class Post < ApplicationRecord 

validates :author_id, :profile_id, :content, presence: true

end