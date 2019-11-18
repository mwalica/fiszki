export default function validateAdd(values) {
    let errors = {};

    //english errors
    if(!values.english) {
        errors.english = "Nie wpisano słowa";
    } else if(!/^[A-Za-z,'?. ]{1,}$/i.test(values.english)) {
        errors.english = "Nie wpisano poprawne słowo";
    }

    //polish errors
    if(!values.polish) {
        errors.polish = "Nie wpisano słowa";
    } else if(!/^[A-ZŹŻĆŁŚĆa-zżźćąęłóń(),?. ]{1,}$/i.test(values.polish)) {
        errors.polish = "Nie wpisno poprawne słowo";
    }

    return errors;
}