Rails.application.routes.draw do
  root :to => 'users#new'

  resources :users
  resources :reservations
  resources :planes
  resources :flights

end
