const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // get a single user by either their id or their username
    getSingleUser: async (_, args, context) => {
      // Context would include the user object if authenticated
      const foundUser = await User.findOne({
        $or: [{ _id: context.user ? context.user._id : args.id }, { username: args.username }],
      });
      if (!foundUser) {
        throw new Error('Cannot find a user with this id!');
      }
      return foundUser;
    },
    // Add other queries if needed
  },
  Mutation: {
    // create a user, sign a token, and send it back
    createUser: async (_, args) => {
      const user = await User.create(args.input);
      if (!user) {
        throw new Error('Something is wrong!');
      }
      const token = signToken(user);
      return { token, user };
    },
    // login a user, sign a token, and send it back
    login: async (_, args) => {
      const user = await User.findOne({ $or: [{ username: args.input.username }, { email: args.input.email }] });
      if (!user) {
        throw new Error("Can't find this user");
      }

      const correctPw = await user.isCorrectPassword(args.input.password);
      if (!correctPw) {
        throw new Error('Wrong password!');
      }
      const token = signToken(user);
      return { token, user };
    },
    // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
    saveBook: async (_, args, context) => {
      // Context would include the user object if authenticated
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedBooks: args.input } },
        { new: true, runValidators: true }
      );
      if (!updatedUser) {
        throw new Error('Error saving book.');
      }
      return updatedUser;
    },
    // remove a book from `savedBooks`
    deleteBook: async (_, args, context) => {
      // Context would include the user object if authenticated
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId: args.bookId } } },
        { new: true }
      );
      if (!updatedUser) {
        throw new Error("Couldn't find user with this id!");
      }
      return updatedUser;
    },
    // Add other mutations if needed
  },
};

module.exports = resolvers;
