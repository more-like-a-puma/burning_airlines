Rails.application.routes.draw do
  # root :to => 'users#new'
  root 'main#home'

  resources :users
  resources :reservations
  resources :planes
  resources :flights

end
