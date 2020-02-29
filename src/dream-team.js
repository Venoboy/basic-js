module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let team = '';
  members.forEach(member => {
    if (typeof (member) === "string"){
      team += member.trim().charAt(0).toUpperCase()
    }
  });
  return team ? team.split('').sort().join('') : null;
};