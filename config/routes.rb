Rails.application.routes.draw do
  root :to => 'main#home'

  resources :users
  resources :reservations
  resources :planes
  resources :flights
  resources :main

  get '/homepage' => 'main#home'
  get '/search' => 'main#show' # BACKBONE SHOULD START
  get '/searchresults' => 'main#show'
  get '/signup' => 'users#new'
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  get '/currentuser' => 'session#show'

end
