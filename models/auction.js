module.exports = (sequelize, DataTypes) => (
	sequelize.define('action', {
		bid:{
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		msg:{
			type: DataTypes.STRING(100),
			allowNull: true,
		},
	}, {
		timestamps: true,
		paranoid: true,
	})
);
