Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :projects, only: [:index, :show, :create, :update, :destroy]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :backings, only: [:index, :show, :create, :destroy]
    resources :categories, only: [:index, :show]
    resources :rewards, only: [:index, :show, :create, :update, :destroy]
  end

  get '/', to: 'static_pages#root'
  # get '/', to: 'static_pages#root', constraints: lambda {|request| !request.xhr? && request.format.html? }
  # get '*path', to: 'static_pages#root', constraints: lambda {|request| !request.xhr? && request.format.html? } #checking that request is for html and not xhr(ajax request) so that frontend requests will hit it and requests for active record will pass it
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
