class User {
  constructor(
    id,
    username,
    firstName,
    lastName,
    email,
    password,
    profilePicture,
    numSongs,
    numLegions,
    numVotes,
    numVictories
  ) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.profilePicture = profilePicture;
    this.numSongs = numSongs;
    this.numLegions = numLegions;
    this.numVotes = numVotes;
    this.numVictories = numVictories;
  }
}

export default User;
