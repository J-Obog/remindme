const User = require('#models/user');

exports.getUserData = async (req, res) => {
    const { accessJwt } = req;

    try {
        const user = await User.findOne({
            where: { id: accessJwt.jti },
            attributes: { exclude: ['password'] },
        });
        return res.status(200).json({ user });
    } catch (e) {
        return res.status(500).json(e);
    }
};
