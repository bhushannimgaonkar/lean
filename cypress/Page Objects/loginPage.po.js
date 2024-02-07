class loginPage
{

 usernamefield(){

    return 'input[name="username"]';
 }

 passwordfield(){

    return 'input[type="password"]';


 }

 loginButton(){

    return 'button[type="submit"]';
 }

 loginerrormessage(){

    return 'Invalid credentials';
 }


}

const login = new loginPage();

export default login;

