module.exports = function(sequelize, DataTypes) {
    var Events = sequelize.define("Events", {
        coverage_provider: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event_sponsor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        format: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    Events.associate = function(models) {
        Events.hasMany(models.Rounds, {
            onDelete: "cascade"
        });
    };

    return Events;
};

