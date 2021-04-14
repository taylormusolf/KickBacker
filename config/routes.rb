Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :projects, only: [:index, :show, :create, :update, :destroy]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resource :backings, only: [:index, :show, :create, :destroy]
    resource :categories, only: [:index, :show]
    resource :rewards, only: [:index, :show, :create, :update, :destroy]
  end
  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
