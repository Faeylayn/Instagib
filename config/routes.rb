Rails.application.routes.draw do
  root 'staticpages#root'
  get '/users/new', to: 'api/users#new'
  post '/users', to: 'api/users#create'
  resource :session
  namespace :api, defaults: { format: :json } do
    get "/search", to: "static_pages#search"
    resources :users, only: [:show]
    resources :screenshots

    resources :albums

    resources :comments
    resources :taggings
    resources :game_taggings
  end


end
