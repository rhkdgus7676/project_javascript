'use strict';

//callback hell example

class UserStorage{
  loginUser(id,password, onSeccess, onError){
    setTimeout(()=> {
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ){
        onSeccess(id);
      }else{
        onError(new Error('not found'));
      }
    },2000);
  }

  getRoles(user, onSeccess, onError){
    setTimeout(()=>{
      if(user==='ellie'){
        onSeccess({name: 'ellie', role:'admin'});
      }else{
        onError(new Error('no access'));
      }
    },1000);
  }
}
