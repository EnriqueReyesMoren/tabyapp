const passport = require("passport")
const googleStrategy = require("passport-google-oauth20").Strategy
const User = require("../models/User")

passport.use(
    new googleStrategy({
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: "/auth/google/callback"
        },
        async(_, __, profile, done) => {
            console.log("PROFILE:", profile)
            const user = await User.findOne({ googleID: profile.id })
            const userWithEmail = await User.findOne({
                email: profile.emails[0].value
            })

            const {
                displayName,
                photos,
                emails,
                id
            } = profile
            if (!user && userWithEmail) return done(null, false, {
                message: "There is another account with this email"
            })

            if (!user && !userWithEmail) {
                const user = await User.create({
                    googleID: id,
                    photo: photos[0].value,
                    username: displayName,
                    email: emails[0].value
                })
                done(null, user)
            }
            done(null, user)
        }
    )
)