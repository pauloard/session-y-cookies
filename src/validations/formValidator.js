let {body, check} = require("express-validator");

module.exports = [
    check("name")
        .notEmpty()
        .withMessage("Debes rellenar este campo."),

    check("name", "ingresa un nombre válido.")
        .isAlpha(),

    check("email")
        .notEmpty()
        .withMessage("Debes rellenar este campo."),

    check("email")
        .isEmail()
        .withMessage("Ingresa un email válido."),

    body("colors", "Selecciona un campo válido.").custom((value, {req})=> {
        /* let colors = ["green", "gray", "blue", "red", "yellow"];
        let option = "";
        colors.forEach(element => value === element ? option = false:"");

        return option === false ? option: true; */
        console.log("el value: " +value);
        console.log("el colors: " + req.body.colors);
        if(!req.body.colors){
            return false;
        }
        return true;
    })
]