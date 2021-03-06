Rails.application.routes.draw do
  root 'staticpages#root'

  resource :session
  get "/session/guest", to: "sessions#guest"
  get "/session/destroy", to: "sessions#destroy"
  namespace :api, defaults: { format: :json } do
    get "/search", to: "static_pages#search"
    get "/homefeed", to: "screenshots#homefeed"
    get "/personalfeed", to: "screenshots#personalFeed"
    resources :users, only: [:show, :update, :create]
    resources :screenshots
    resources :followings
    resources :favorites

    resources :albums

    resources :comments
    resources :taggings
    resources :game_taggings

    resources :messages
  end


end
