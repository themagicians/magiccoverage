module.exports = function(sequelize, DataTypes) {
    var Players = sequelize.define("Players", {
        round_number: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        player_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        player_deck: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};