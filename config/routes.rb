Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'fish/index'
      post 'fish/create'
      delete 'fish/:id', to: 'fish#destroy'
    end
  end

  root 'fish#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
