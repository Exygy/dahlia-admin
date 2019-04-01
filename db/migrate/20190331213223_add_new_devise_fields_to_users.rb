class AddNewDeviseFieldsToUsers < ActiveRecord::Migration[5.1]
  def change
    change_table :users do |t|
      t.string :encrypted_password, null: false, default: ""
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at
    end
  end
end
