/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Sale', {
		ItemId: {
			type: DataTypes.STRING(100),
			primaryKey: true,
			allowNull: false
		},
		Price: {
			type: DataTypes.DECIMAL(),
			allowNull: false
		},
		EndingPrice: {
			type: DataTypes.DECIMAL(),
			allowNull: false
		},
		CurrencyId: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Type: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'Sale'
	});
};
