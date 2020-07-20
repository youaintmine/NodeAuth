const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.Register = async function(req,res,next){
  const { username, password } = req.body;
  console.log(req.body);
  bcrypt.genSalt(10, (err, salt) => {
    if(err) throw err;
    password = hash;
  })
  User.findOne({username: username})
  .then(user => {
    if(user) {
      res.status(404).json({
        status:"fail",
        message: "User not created!!"
      })
      // alert('User already registered');
      // res.render('register', {
      //   username,
      //   password
      // });
    } else {
      const newUser = User.create({
        username,password
      });
      if(newUser){
      console.log(newUser);
      res.redirect('/users/login');
    }else {
      res.status(404).send("Not create");
    }
    }
  });
  // try{
  // const newUser =await User.create({
  //       username:username,
  //       password:password
  //     });
  //   if(newUser){
  //     res.status(200).json({
  //       status:"success",
  //       message: newUser
  //     })
  //   }else{
  //     res.status(404).json({
  //       status:"fail",
  //       message: "User not created!!"
  //     })
  //   }
  // }catch(err){
  //   res.status(400).json({
  //     status:"fail",
  //     message: "Internal error"+err
  //   })
  // }
}

// exports.login =async function(req, res, next){
//   const username
// }
