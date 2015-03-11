Rails.application.routes.draw do
  root 'staticpages#root'

  resources :users

  resources :screenshots

  resource :session


end
