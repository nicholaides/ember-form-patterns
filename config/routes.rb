EmberFormPatterns::Application.routes.draw do
  resources :gifts
  match '/(*anything)' => 'main#index'
end
