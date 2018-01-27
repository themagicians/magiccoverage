module.exports = function(sequelize, DataTypes) {
    var Players = sequelize.define("Players", {
        round_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        player_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        player_deck: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return Players;
};