const Sequelize = require('sequelize');
const connection = require('../../database/connection');
const Category = require('../categories/Categories');

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
    }
},
    {
        freezeTableName: true
    }
);

// → Database Relationships
Article.belongsTo(Category); // → 1 article belongs to 1 Category (1 to 1)
Category.hasMany(Article);  // → 1 Category has many Articles (1 to N)

// → Exports this Model
module.exports = Article;