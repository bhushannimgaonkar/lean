class addJobTitlePage{
    
    jobdropdownMenu(){
      
        return '//span[contains(text(),"Job")]';

    }

    jobtitlemenuoption(){

        return 'ul[class="oxd-dropdown-menu"]>li:first-child';
    }

    jobtitleaddbutton(){

        return 'Add';
    }

    jobtitlefield(){
  
        return '(//input[@class="oxd-input oxd-input--active"])[2]';

    }
    jobdescriptionfield(){
       
        return 'textarea[placeholder="Type description here"]';

    }

    savebutton(){

        return 'button[type="submit"]';
    }

    successmessage(){

        return 'Successfully Saved';
    }

    errormessage(){

        return 'span[class*="error-message"]';
    }


}

const jobtitlepage = new addJobTitlePage(); 

export default jobtitlepage;