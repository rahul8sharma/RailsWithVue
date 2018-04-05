Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  get 'home/drag_and_drop'
  get 'home/reorder'
  get 'home/get_google_drive_data'

  root to: "home#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
