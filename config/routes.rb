Rails.application.routes.draw do
  root :to => 'main#show'

  resources :users
  resources :reservations
  resources :planes
  resources :flights
  resources :main

  get '/homepage' => 'main#home'
  get '/searchresults' => 'main#show'
  get '/signup' => 'users#new'
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy'

  get '/currentuser' => 'session#show'

end
