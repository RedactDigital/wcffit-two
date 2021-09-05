'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Roles',
      [
        {
          id: '1',
          role: 'Member',
          roleDescription: 'Limited access (free)',
          createdAt: '2000-01-01 00:00:00',
          updatedAt: '2000-01-01 00:00:00',
        },
        {
          id: '2',
          role: 'Premium Member',
          roleDescription: 'Full access (paid)',
          createdAt: '2000-01-01 00:00:00',
          updatedAt: '2000-01-01 00:00:00',
        },
        {
          id: '3',
          role: 'Support Staff',
          roleDescription: 'Restricted access to cms',
          createdAt: '2000-01-01 00:00:00',
          updatedAt: '2000-01-01 00:00:00',
        },
        {
          id: '4',
          role: 'Admin',
          roleDescription: 'Full access to everything in cms',
          createdAt: '2000-01-01 00:00:00',
          updatedAt: '2000-01-01 00:00:00',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  },
};
