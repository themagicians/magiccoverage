module.exports = function(sequelize, DataTypes) {
    var Decks = sequelize.define("Decks", {
        deck_name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        format: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};