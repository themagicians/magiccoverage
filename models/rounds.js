module.exports = function(sequelize, DataTypes) {
    var Rounds = sequelize.define("Rounds", {
        round_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event_name: {
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

