const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const bcrypt = require('bcrypt');


passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    (username, password, done) => {
        User.findOne({ username })
            .then(foundUser => {
                if (!foundUser) {
                    done(null, false, { message: 'Incorrect username' });
                    return;
                }

                if (!bcrypt.compareSync(password, foundUser.password)) {
                    done(null, false, { message: 'Incorrect password' });
                    return;
                }

                done(null, foundUser);
            })
            .catch(err => done(err));
    }
));

//actually using

/* passport.use(
  new LocalStrategy({
          usernameField: "username",
          passwordField: "password"
      },
      async(username, password, done) => {
          try {
              const user = await User.findOne({ username })
              if (!user) return done(null, false, { message: "Incorrect username" })
              if (!compareSync(password, user.password))
                  return done(null, false, { message: "Incorrect password" })
              done(null, user)
          } catch (error) {
              console.error(error)
              done(error)
          }
      }
  )
) */