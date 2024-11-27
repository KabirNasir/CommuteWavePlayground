const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
    const { Users } = this.entities;

    this.before('READ', '*', async (req) => {
        const userId = req.user.id;
        const user = await SELECT.one.from(Users).where({ ID: userId });

        if (!user) {
            req.reject(401, 'User not registered. Redirecting to registration page.', { location: '/register' });
        }
    });
});