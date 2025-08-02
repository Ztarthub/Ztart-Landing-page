const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Contact = sequelize.define('Contact', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      len: [2, 255]
    }
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [10, 1000]
    }
  },
  service: {
    type: DataTypes.STRING(100),
    allowNull: true,
    validate: {
      isIn: [['ztart-pay', 'ztart-broker', 'ztart-ride', 'ztart-home', 'ztart-work', 'ztart-academy']]
    }
  },
  status: {
    type: DataTypes.ENUM('pending', 'read', 'replied', 'archived'),
    defaultValue: 'pending'
  }
}, {
  tableName: 'contacts',
  indexes: [
    {
      fields: ['email']
    },
    {
      fields: ['created_at']
    },
    {
      fields: ['status']
    }
  ]
});

module.exports = Contact;