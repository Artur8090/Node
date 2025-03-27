exports.index = function (req, res) {
	res.render("index", {
		title: "Веб-чат",
		date: (new Date()).toDateString(),
		layout: './layouts/main-layout',
		user: req.session.user || null
	});
}

exports.about = function (req, res) {
	res.render("about", {
		title: "Веб-чат",
		layout: './layouts/main-layout'
	});
}