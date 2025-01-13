import User from '../models/user';
import Legion from '../models/legion';


export const mockUsers = [
  new User(1, 'user1', 'John', 'Doe', 'john.doe@example.com', 'password1', 'profile1.jpg', 10, 5, 20, 3),
  new User(2, 'user2', 'Jane', 'Smith', 'jane.smith@example.com', 'password2', 'profile2.jpg', 15, 3, 25, 5),
  new User(3, 'user3', 'Jim', 'Beam', 'jim.beam@example.com', 'password3', 'profile3.jpg', 8, 7, 18, 2),
  new User(4, 'user4', 'Jack', 'Daniels', 'jack.daniels@example.com', 'password4', 'profile4.jpg', 12, 4, 22, 4),
  new User(5, 'user5', 'Johnny', 'Walker', 'johnny.walker@example.com', 'password5', 'profile5.jpg', 20, 6, 30, 6),
  new User(6, 'user6', 'Jill', 'Valentine', 'jill.valentine@example.com', 'password6', 'profile6.jpg', 9, 5, 19, 3),
  new User(7, 'user7', 'Chris', 'Redfield', 'chris.redfield@example.com', 'password7', 'profile7.jpg', 14, 8, 24, 5),
  new User(8, 'user8', 'Leon', 'Kennedy', 'leon.kennedy@example.com', 'password8', 'profile8.jpg', 11, 3, 21, 4),
  new User(9, 'user9', 'Ada', 'Wong', 'ada.wong@example.com', 'password9', 'profile9.jpg', 13, 7, 23, 5),
  new User(10, 'user10', 'Claire', 'Redfield', 'claire.redfield@example.com', 'password10', 'profile10.jpg', 16, 4, 26, 6),
];

export const mockLegions = [
  new Legion(1, 'Legion of Doom', ['user1', 'user2', 'user3'], 10, true),
  new Legion(2, 'Knights of Valor', ['user4', 'user5'], 8, true),
  new Legion(3, 'Warriors of Light', ['user6', 'user7', 'user8'], 12, false),
  new Legion(4, 'Guardians of the Galaxy', ['user9', 'user10'], 15, true),
];
