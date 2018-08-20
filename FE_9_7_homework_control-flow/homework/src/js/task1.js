const login=prompt('Enter login:');
let date=new Date().getHours();

if(login===null || !login){
  alert('Canceled');
}else if(login.length<4){
  alert('I don`t know any users having name length less than 4 symbols');
}else if(login==='User'){
  const password=prompt('Enter password:');

  if(!password){
    alert('Canseled');
  }else if(password==='SuperUser'){
    if(date<20){
      alert('Good day!');
    }else{
      alert('Good evening!');
    }

  }else{
    alert('Wrong password');
  }

}else{
  alert('I don’t know you');
}
