const passport = require("passport")
const facebookStrategy = require("passport-facebook").Strategy
const User = require("../models/User")




passport.use(
    new facebookStrategy({
            clientID: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
            callbackURL: "http://localhost:3000/auth/facebook/callback",
            profileFields: ["id", "email", "gender", "link", "name", "photos"]
        },
        async(accessToken, refreshToken, profile, done) => {
            console.log("PROFILE:", profile)
            const user = await User.findOne({
                facebookID: profile.id
            })
            const userWithEmail = await User.findOne({
                email: profile.emails[0].value
            })
            if (!user && userWithEmail) return done(null, false, {
                message: "There is another account with this email"
            })
            if (!user && !userWithEmail) {
                const user = await User.create({
                    facebookID: profile.id,
                    email: profile.emails[0].value,
                    username: profile.name.giveName,
                    profilePic: profile.photos[0].value
                })
                done(null, user)
            }
            done(null, user)
        }
    )
)