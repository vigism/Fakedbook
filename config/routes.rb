Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create,:show] do 
      
    end
    get 'post/all/:id', to: 'post#allUserPosts'
    resources :post, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    get 'users/', to: 'user#search'
    resources :friends, only: [:create,:update, :destroy, :index]

  end
  
  root "static_pages#root"
end
