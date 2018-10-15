Rails.application.routes.draw do
  root to: 'static_pages#root'
    namespace :api, defaults: { format: :json } do
      resources :album_joins, only: [:create, :destroy]
      resources :users, only: [:new, :show, :create]
      resource :session, only: [:create, :destroy]
      resources :photos, only: [:index, :show, :create, :update, :destroy]
      resources :albums, only: [:new, :index, :create, :update, :destroy, :show]
    end
end
