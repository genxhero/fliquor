# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#

class User < ApplicationRecord
  attr_reader :password
  after_initialize :ensure_token
  validates :password, length: {minimum: 6, allow_nil: true  }
  validates :username, :password_digest, :email, :first_name, :last_name, :session_token, presence: true, uniqueness: true

  has_many :albums,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "Album"

  has_many :photos,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "Photo"

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(uname, pword)
    user = User.find_by(username: uname)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end


  def reset_token
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_token
   self.session_token ||= SecureRandom::urlsafe_base64
  end

end
