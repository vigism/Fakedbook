class Comment < ApplicationRecord

    validates :post_id, :content, presence: true

end