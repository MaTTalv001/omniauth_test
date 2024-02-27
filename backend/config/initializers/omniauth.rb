Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, ENV['GITHUB_KEY'], ENV['GITHUB_SECRET'], scope: "read:org"
  OmniAuth.config.allowed_request_methods = [:post, :get]
  OmniAuth.config.logger = Rails.logger
end