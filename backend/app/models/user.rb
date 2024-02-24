class User < ApplicationRecord
  def self.find_or_create_from_auth_hash(auth_hash)
    where(provider: auth_hash.provider, uid: auth_hash.uid).first_or_initialize.tap do |user|
      user.email = auth_hash.info.email
      user.name = auth_hash.info.name
      user.nickname = auth_hash.info.nickname
      user.image = auth_hash.info.image
      user.tokens = auth_hash.credentials.token 
      user.save!
    end
  end
  def self.find_by_token(token)
    find_by(tokens: token)
  end
end