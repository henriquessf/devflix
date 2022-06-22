'use strict'
const bcrypt = require('bcrypt')

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('123456', 10)
    await queryInterface.bulkInsert('users', [
      {
        first_name: 'Admin',
        last_name: 'User',
        phone: '999999999',
        birth: '1990-01-01',
        email: 'admin@admin.com',
        password: hashedPassword,
        role: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {
      where: { email: 'admin@admin.com' }
    })
  }
}
