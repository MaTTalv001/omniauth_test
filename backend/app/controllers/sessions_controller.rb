class SessionsController < ApplicationController
  skip_before_action :authenticate_request, only: [:create]
  def create
    # OmniAuthで提供される認証情報を取得
    user_info = request.env['omniauth.auth']
    user = User.find_or_create_from_auth_hash(user_info)

    # トークン生成（JWTなど）
    token = generate_token_for_user(user)

    # フロントエンドにリダイレクトし、トークンをクエリパラメーターとして付加
    redirect_to "http://localhost:3040/auth?token=#{token}"
  end

  private

  def generate_token_for_user(user)
  # トークンの有効期限を設定（例: 24時間）
  exp = Time.now.to_i + 24 * 3600

  # トークンに含めるペイロードの設定
  payload = { user_id: user.id, exp: exp }

  # ログでpayloadを確認
  Rails.logger.info "Payload for JWT: #{payload}"

  # 秘密鍵（環境変数やRailsの秘密情報から取得することを推奨）
  hmac_secret = ENV['JWT_SECRET_KEY']

  # ログでhmac_secretを確認
  Rails.logger.info "HMAC Secret for JWT: #{hmac_secret}"

  # JWTトークンの生成
  token = JWT.encode(payload, hmac_secret, 'HS256')

  # ログで生成されたトークンを確認
  Rails.logger.info "Generated JWT Token: #{token}"

  token
end
end