const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
// ohk const {PrismaClient}=require("@@prisma/client");kaam nhi kiya
const {PrismaClient}=require("../generated/prisma");
const prisma=new PrismaClient();
module.exports.postSignup= async function(req, res){
    try{
    const {username, email, password}= req.body;

    const hashed= await bcrypt.hash(password, 11);
    const newuser= await prisma.user.create({data: {username, email, password: hashed}});

    const token= jwt.sign({userId: newuser.id}, process.env.JWT_SECRET, {expiresIn: '1d'});

    res.cookie('token', token, {
        httpOnly: true,// can not ne accesed through js
        secure: process.env.NODE_ENV==='production',//true karna padta hai application jab production pe chalta hai agar hum chahte hai ki secure network pe bhi cookie work kare. production pe its https
        sameSite: 'lax',
        maxAge: 86400000,// iske baad cookie will end
    });

    const user=await prisma.user.findUnique({
        where: {id: newuser.id},
        select: {id: true, username: true, email:true,},
    });
    res.status(201).json({user});
    }catch(error){
        console.error(error);
        res.status(400).json({message: 'signup failed', error});// 404 client ki galti hai meri nhi
    }

}  


module.exports.postLogin=async function(req,res){
    try{
        const {email,password}=req.body;
        
        
        const user=await prisma.user.findUnique({ where:{email}})
        if (!user) return res.status(404).json({error:"User not Found"});
        
        const isMatch=await bcrypt.compare(password,user.password);
        if (!isMatch) return res.status(401).json({error: "Invalid credentials"});
        
        const token=jwt.sign(
            {userId:user.id},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        );

        console.log(email,password);

        res.cookie('token', token, {
            httpOnly: true,      //makes cookie inaccessible to JS on client side
            secure: process.env.NODE_ENV === 'production',   //sends cookie only over https 
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            maxAge: 86400000,
        })

        res.json({user:{id:user.id,username:user.username,email}});

    }catch(error){
        // console.log(error);
        res.status(500).json({error:"Login Failed"});
    }
}

module.exports.fetchLogin=async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(404).json({
    message: "Not Logged in user",
    user: null
  })
  console.log(res.statusCode);

  try {
    const tokenData = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token Data", tokenData);

    const user = await prisma.user.findUnique({
      where: { id: tokenData.userId },
      select: { id: true, username: true },
    })

    // console.log(user);
    return res.status(200).json({
      message: "Logged in user",
      user: user
    })

     } catch (err) {
    res.status(500).json({
      msg: "error occured"
    })
  }
}


module.exports.logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // ✅ FIXED
    }); // 'token' = your JWT cookie name
    res.json({ message: "Logged out" });
}