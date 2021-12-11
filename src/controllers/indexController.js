let { validationResult } = require("express-validator");

module.exports = {
    index: (req, res) => {
        let color = req.cookies.color;
        res.render('index', {
            title: 'Formulario',
            session: req.session, 
            user: req.session.user,
            color: color
        });
    },
    indexProcess: (req, res)=> {
        let errors = validationResult(req);
        let color = req.cookies.color;
        if(errors.isEmpty()){
            req.session.user = req.body;

            if(req.body.remember){
                res.cookie("color", req.body.colors, {
                    expires: new Date(Date.now() + 900000),
                    httpOnly: true,
                    secure: true
                });
            }
            res.render("index", {
                title: "Form info",
                user: req.session.user,
                session: req.session,
                color
            })
        }else {
            delete req.session.user;
            res.render("index", { title: "Formulario", errors: errors.errors, user: req.session.user, session: req.session})
        }
    },
    thanks: (req, res)=> {
        console.log(req.cookies.color)
        let color = req.cookies.color;
        res.render("thanks", {
            title: "Gracias!",
            color: color
        })
    },
    remove: (req, res)=> {
        if(req.cookies.color){
            res.cookie("color", "", {maxAge: -1});
        }
        res.redirect("/");
    }
}