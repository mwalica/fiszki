export default function validateLogin(values) {
    let errors = {};

    //email errors
    if(!values.email) {
        errors.email = "Wymagany adres e-mail";
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Niewłaściwy format danych";
    }

    //password errors
    if(!values.password) {
        errors.password = "Wymagane hasło";
    } 

    return errors;
}