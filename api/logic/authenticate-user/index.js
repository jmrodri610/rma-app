const { validate, errors: { CredentialsError } } = require('utils')
const { models: { User } } = require('data')

module.exports = function (username, password) {
    validate.string(username)
    validate.string.notVoid('username', username)
    validate.string(password)
    validate.string.notVoid('password', password)

    return (async () => {
        const user = await User.findOne({ username, password })

        if (!user) throw new CredentialsError('wrong credentials')

        user.lastAccess = new Date

        await user.save()

        const initials = user.name[0].toUpperCase() + user.surname[0]?.toUpperCase();
        const tech = `${user.name} ${user.surname}`;

        const id = user.id

        return { id, initials, tech }
    })()
}