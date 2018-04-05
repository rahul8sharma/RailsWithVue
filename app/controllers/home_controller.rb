class HomeController < ApplicationController
  require "google_drive"

  def index
  end

  def get_google_drive_data
    google_drive_data = connect_to_google_drive(params[:google_drive_url])

    respond_to do |format|
      format.json { render json: google_drive_data }
    end
  end

  def reorder
  end

  def drag_and_drop
  end

  private

    def connect_to_google_drive(google_drive_url)
      session = GoogleDrive::Session.from_config("config/client_secret.json")
      file = session.file_by_url(google_drive_url)
      file.worksheets.first.rows.each { |row| puts row.first(6).join(" | ") }
    end
end
