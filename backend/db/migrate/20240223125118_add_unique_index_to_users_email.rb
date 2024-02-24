class AddUniqueIndexToUsersEmail < ActiveRecord::Migration[7.1]
  def change
    # emailカラムに一意性のインデックスを追加
    add_index :users, :email, unique: true
  end
end
