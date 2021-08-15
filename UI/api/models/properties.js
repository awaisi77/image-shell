/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Properties', {
		Id: {
			type: DataTypes.INTEGER(11),
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		Name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		Value: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
		ItemId: {
			type: DataTypes.STRING(100),
			allowNull: false,
		}
	}, {
		tableName: 'Properties'
	});
};
