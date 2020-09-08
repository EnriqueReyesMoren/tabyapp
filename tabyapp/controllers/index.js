exports.home = (req, res) => {
    console.log(req.session)
    res.render("index", {
        style: "stilo.css"
    })
}
exports.welcome = (req, res) => {
    res.render('welcome');
}



/* exports.profile = (req, res) => {
    if (req.session.user) {
        res.render("profile", req.session.user)
    } else {
        res.redirect("/")
    }
} */
