const Sequelize = require('sequelize');
const connection = require('../../database/connection')

const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "The field cannot be empty"
            }
        }
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
    {
        freezeTableName: true
    }
);

// → Exports this Model
module.exports = Category;