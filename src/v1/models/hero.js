'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Hero extends Model {
		static associate(models) {
			this.belongsToMany(models.Image, {
				through: {
					model: models.ImageAssociation,
					unique: false,
					scope: {
						owner_type: 'Hero',
					},
				},
				foreignKey: 'owner_id',
				constraints: false,
				as: 'images',
			});
		}
	}

	Hero.init(
		{
			title: { type: DataTypes.STRING, allowNull: false },
			subtitle: { type: DataTypes.STRING, allowNull: true },
			desc: { type: DataTypes.TEXT, allowNull: true },
			cta_json: { type: DataTypes.TEXT, allowNull: true },
			cta_text: { type: DataTypes.STRING, allowNull: true },
			cta_link: { type: DataTypes.STRING, allowNull: true },
			is_published: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
		},
		{
			sequelize: sequelize,
			underscored: true,
			modelName: 'Hero',
		},
	);
	return Hero;
};
