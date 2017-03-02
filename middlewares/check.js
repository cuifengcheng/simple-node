var checkmiddleWare = {}

checkmiddleWare.checkLogin = function(req,res,next){
	if(!req.session.user){
		req.flash("error","用户未登录")
		return res.redirect('/signin')
	}
	next();
}
checkmiddleWare.checkNotLogin = function(req,res,next){
	if(req.session.user){
		req.flash("error","用户已登录")
		return res.redirect("back")
	}
	next();
}

module.exports = checkmiddleWare;