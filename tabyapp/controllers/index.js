exports.home = (req, res) => {
    console.log(req.session)
    res.render("index", {
        style: "stilo.css"
    })
}
exports.welcome = (req, res) => {
    res.render('welcome');
}