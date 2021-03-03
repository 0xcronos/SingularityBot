const {  defaultRole } = require('../config.json');

const handleMemberAdd = (guildmember) => {
	const role = guildMember.guild.roles.cache.find((role) => role.name === defaultRole);
	guildMember.setNickname(`[${defaultRole}] ` + guildMember.user.username);
	guildMember.roles.add(role, 'Bienvenido al servidor!');
};

module.exports = {
    handleMemberAdd
};
