/* exports.ensureLogin = route => (req, res, next) => {
    if (req.user) next();
    else res.redirect(route);
} */

exports.ensureLogin = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.redirect("/welcome")
    }
}

exports.catchErrors = controller => (req, res, next) =>
    controller(req, res).catch(next)