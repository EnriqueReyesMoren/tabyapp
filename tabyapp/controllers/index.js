exports.home = (req, res) => {
    console.log(req.session)
    res.render("index", )
}

/* exports.profile = (req, res) => {
    if (req.session.user) {
        res.render("profile", req.session.user)
    } else {
        res.redirect("/")
    }
} */
