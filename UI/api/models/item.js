/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Item', {
		ItemId: {
			type: DataTypes.STRING(100),
			primaryKey: true,
			allowNull: false
		},
		Image: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		Name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		ExternalLink: {
			type: DataTypes.STRING(2048),
			allowNull: true
		},
		Description: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		CollectionId: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		SensitiveContent: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		Address: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'Item'
	});
};
