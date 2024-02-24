# app/controllers/api/v1/users_controller.rb

module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_request

      def show_current_user
        render json: current_user
      end
    end
  end
end
