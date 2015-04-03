Rails.application.routes.draw do
  root 'staticpages#root'

  resource :session
  namespace :api, defaults: { format: :json } do
    get "/search", to: "static_pages#search"
    get "/homefeed", to: "screenshots#homefeed"
    resources :users, only: [:show, :update, :create]
    resources :screenshots
    resources :followings
    resources :favorites

    resources :albums

    resources :comments
    resources :taggings
    resources :game_taggings
  end


end
