class JwtService
  def self.decode(token)
  body, _ = JWT.decode(token, ENV['JWT_SECRET_KEY'], true, { algorithm: 'HS256' })
  Rails.logger.info "Decoded JWT payload: #{body}"
  HashWithIndifferentAccess.new body
rescue JWT::ExpiredSignature, JWT::VerificationError => e
  raise
end
end
