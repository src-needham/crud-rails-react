class CreateFish < ActiveRecord::Migration[6.1]
  def change
    create_table :fish do |t|
      t.string :common_name
      t.string :scientific_name
      t.string :ph
      t.integer :quantity

      t.timestamps
    end
  end
end
