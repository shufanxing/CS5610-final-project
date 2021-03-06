var mongoose = require("mongoose");
var UserSchema = require("./user.schema.server");
var UserModel = mongoose.model("UserModel", UserSchema);
UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findAllUsers = findAllUsers;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUserName = findUserByUserName;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findUserByFacebookId=findUserByFacebookId;

module.exports = UserModel;


function findUserByFacebookId(facebookId) {
  return UserModel.findOne({'facebook.id': facebookId});
}

function updateUser(userId, user){
  return UserModel.updateOne({_id: userId}, user );
}

function findUserByUserName(username){
  return UserModel.findOne({username: username});
}

function findUserByCredentials(username, password){
  return UserModel.findOne({username: username, password: password});
}

function createUser(user){
  return UserModel.create(user);
}

function findAllUsers(){
  return UserModel.find(function (err, doc) {
    console.log(doc);
  })
}

function findUserById(userId){
  return UserModel.findOne({_id: userId});
}

function deleteUser(userId) {
  return UserModel.deleteOne({_id: userId});
}
