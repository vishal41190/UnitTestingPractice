function LoginController(){

function isValidUserId(userList, user){

return userList.indexOf(user) >= 0;
}

function isValidUserASYNCId(userList,user,callback){
    setTimeout(function(){ callback(userList.indexOf(user) >= 0); },1);

}

return {
isValidUserId,
isValidUserASYNCId


}; 



}

module.exports = LoginController();


