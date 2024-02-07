class addEmployeePage{


    addemployeeMenu(){

        return 'Add Employee';
    }

    firstnamefield(){

        return 'input[name="firstName"]';
    }

    lastnamefield(){

        return 'input[name="lastName"]';
    }

    savebuttonfield(){

        return 'button[type="submit"]';
    }

    successmessagefield(){

        return 'Successfully Saved';
    }
      

}


const addEmployee =new addEmployeePage();

export default addEmployee;
