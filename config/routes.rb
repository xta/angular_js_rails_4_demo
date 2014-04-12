Restauranteur::Application.routes.draw do
  get "static_pages/index"
  resources :restaurants

  root 'static_pages#index'
end
