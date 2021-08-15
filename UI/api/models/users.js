/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('User', {
		UserId: {
			type: DataTypes.STRING(100),
			allowNull: false,
			primaryKey: true
		},
		UserName: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		EmailAddress: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		Bio: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		CreatedDateTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
	}, {
		tableName: 'User'
	});
};
