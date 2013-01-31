EmberFormPatterns::Application.routes.draw do
  resources :gifts
  root :to => 'main#index'
end
