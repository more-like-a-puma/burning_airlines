Rails.application.routes.draw do
  root :to => 'main#home'

  resources :users
  resources :reservations
  resources :planes
  resources :flights
  resources :main

  if @admin
    get '/users' => 'users#index'
  end
  get '/homepage' => 'main#home'
  get '/search' => 'main#show'
  get '/signup' => 'users#new'
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy'

  get '/currentuser' => 'session#show'

end
