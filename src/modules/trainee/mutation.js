import userInstance from '../../service/user';

export default {
  createTrainee: (parent, args) => {
    const { user } = args;
    return userInstance.createUser(user);
  },

  updateTrainee: (parent, args) => {
    const { id, role, name } = args;
    return userInstance.updateUser(id, role, name);
  },

  deleteTrainee: (parent, args) => {
    const { id } = args;
    return userInstance.deleteUser(id);
  },
};
