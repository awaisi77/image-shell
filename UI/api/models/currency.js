/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Currency', {
		Id: {
			type: DataTypes.INTEGER(11),
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		DisplayName: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		Type: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	}, {
		tableName: 'Currency'
	});
};
