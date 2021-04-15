Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :projects, only: [:index, :show, :create, :update, :destroy]
    resource :user, only: [:create]
    resources :session, only: [:create, :destroy]
    resources :backings, only: [:index, :show, :create, :destroy]
    resources :categories, only: [:index, :show]
    resources :rewards, only: [:index, :show, :create, :update, :destroy]
  end
  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
