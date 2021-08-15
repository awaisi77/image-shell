/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Collection', {
		UserId: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		CollectionId: {
			type: DataTypes.STRING(100),
			primaryKey: true,
			allowNull: false
		},
		CollectionName: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		Description: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		Logo: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
	}, {
		tableName: 'Collection'
	});
};
