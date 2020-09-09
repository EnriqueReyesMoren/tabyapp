exports.catchErrors = controller => (req, res, next) =>
    controller(req, res).catch(next)



exports.ensureLogin = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.redirect("/welcome")
    }
}