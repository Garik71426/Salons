import Messages from './../Messages';

class Validator {
   validateField(fieldName, value) {
        switch(fieldName) {
            case 'name':
                const nameValid = value.length <= 30 && value.length >= 1 ; 
                // if(!nameValid) {
                //     formValid = false;
                // } 
                return (nameValid) ? '' : Messages.validationErrors.salonNameError;
            case 'info':
                const infoValid = value.length <= 700 ; 
                //  if(!infoValid) {
                //     this.informationChangeSalon.formValid = false;
                // } 
                return (infoValid) ? '' : Messages.validationErrors.infoError;
            case 'phone':
                const phoneValid = /(^[+]{0,1}[0-9]{0,12})$/.test(value);
                // if(!phoneValid) {
                //     this.informationChangeSalon.formValid = false;
                // }
                return (phoneValid) ? '' : Messages.validationErrors.phoneError;
            case 'address':
                const addressValid = value.length <= 30  && value.length >= 1; 
                /* if(!addressValid) {
                    this.informationChangeSalon.formValid = false;
                }*/
                return (addressValid) ? '' : Messages.validationErrors.addressError;
             case 'category':
                const categoryValid = value.length <= 30  && value.length >= 1 ; 
                //  if(!infoValid) {
                //     this.informationChangeSalon.formValid = false;
                // } 
                return (categoryValid) ? '' : Messages.validationErrors.categoryError;
            default:
            	return '';
        }

    }
}
export default Validator;