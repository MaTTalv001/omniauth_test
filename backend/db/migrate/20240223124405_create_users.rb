class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :provider
      t.string :uid
      t.string :email
      t.string :name
      t.string :nickname
      t.string :image
      t.text :tokens

      t.timestamps
    end
  end
end
