module.exports = function(sequelize, DataTypes) {
    var Rounds = sequelize.define("Rounds", {
        round_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        player1_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        player2_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        player1_deck: {
            type: DataTypes.STRING,
            allowNull: false
        },
        player2_deck: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coverage_link: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    Rounds.associate = function(models) {
        Rounds.belongsTo(models.Events, {
            foreignKey: {
            	allowNull: false
            }
        });
    };

    return Rounds;
};

