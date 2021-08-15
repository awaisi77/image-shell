/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Favorite', {
		UserId: {
			type: DataTypes.STRING(100),
			allowNull: false,
			primaryKey: true,
		},
		ItemId: {
			type: DataTypes.STRING(100),
			primaryKey: true,
			allowNull: false
		}
	}, {
		tableName: 'Favorite'
	});
};
