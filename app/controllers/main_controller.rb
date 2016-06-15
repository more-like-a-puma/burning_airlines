class MainController < ApplicationController
  before_action :fetch_user

  def new
    # Show the login form
  end

  def home
    # Show the homepage
  end

  def show
    # Show the search results
  end

  private
    def authenticate
      # redirect_to users_path if @current_user
    end
end
