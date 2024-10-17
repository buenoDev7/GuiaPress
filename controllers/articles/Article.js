const Sequelize = require('sequelize');
const connection = require('../../database/connection');

const Article = connection.define('articles', {
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
        allowNull: false,
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "The field cannot be empty"
            }
        }
    },
    freezeTableName: true
},
    {
        freezeTableName: true
    }
);

module.exports = Article;