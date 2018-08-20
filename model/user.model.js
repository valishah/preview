const gstore = require('gstore-node')();
const { Schema } = gstore;

/**
 * Schema for user model
 */
const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, optional: true },
  email: { type: String, validate: 'isEmail', required: true },
  password: { type: String, read: false, optional: true },
  createdOn: { type: String, default: gstore.defaultValues.NOW, write: false, read: false },
  // dateOfBirth: { type: Date },
  // bio: { type: String, excludeFromIndexes: true },
  // website: { validate: 'isURL', optional: true },
  // ip: {
  //     validate: {
  //         rule: 'isIP',
  //         args: [4],
  //     }
  // },
  // accessList: {
  //     validate: {
  //         rule: validateAccessList,
  //     }
  // },
});

module.exports = gstore.model('User', userSchema);
