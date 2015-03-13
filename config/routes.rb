Rails.application.routes.draw do
  root 'staticpages#root'
  resources :users
  resource :session
  namespace :api, defaults: { format: :json } do

    resources :screenshots

    resources :albums
  end


end
