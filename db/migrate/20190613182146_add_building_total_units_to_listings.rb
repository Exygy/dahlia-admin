class AddBuildingTotalUnitsToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :building_total_units, :integer
  end
end
