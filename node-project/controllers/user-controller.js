const User = require("../models/users")

exports.registerPage = function (req, res) {
	res.render("register", {
		title: "Регистрация",
        user: req.session.user || null,
		layout: './layouts/main-layout'
	});
}
exports.authorizationPage = function (req, res) {
	res.render('authorization', { title: 'Web-chat', user: req.session.user || null},)
}

exports.login = async function (req, res) {

    console.log(req)
    
	try {
        	const { login, password } = req.body;
		const user = await User.findOne({ login, password });
		if (user) {
			req.session.user = {id: user._id, name: user.login}
			res.redirect('/');
		} else {
			res.render('authorization', {
				errMessage: 'Incorrect password or username',
				title: 'Web-chat',
				login,
				password,
                user: req.session.user || null 
			});
		}
	} catch (err) {
		console.error('Login error:', err);
		res.render('authorization', {
			errMessage: 'An error occurred. Please try again.',
			title: 'Web-chat',
			login,
			password,user: req.session.user || null

		});
	}
};
exports.logout = function(req, res){
	delete req.session.user;
	res.redirect('/')
}
exports.addUser = async function (req, res) {

    try {
        const { login, password } = req.body;
        const userDocument = await User.findOne({ login });
        if (!userDocument) {
            const user = new User({ login, password });
            await user.save();
            res.render('register', {
                successMess: `Пользователь "${login}" успешно зарегистрирован. Вы можете войти в <a href="http://localhost:3000/users/authorization">авторизацию</a>.`,
				title: 'Регистрация',
                layout: './layouts/main-layout',
                user: req.session.user || null
            });
        } else {
            res.render('register', {
                errMess: 'Пользователь с таким именем уже существует',
                errSelector: 'login',
                title: 'Регистрация',
                login,
                password,
                layout: './layouts/main-layout',
                user: req.session.user || null
            });
        }
    } catch (err) {
        let errSelector = '';
        let errMess = 'An error occurred. Please try again.';

        if (err.errors) {
            if (err.errors.password) {
                errSelector = 'password';
                errMess = 'Invalid password format.';
            } else if (err.errors.login) {
                errSelector = 'login';
                errMess = 'Invalid login format.';
            }
        } 

        res.render('register', {
            errSelector,
            errMess,
            title: 'Регистрация',
            login,
            password,
            layout: './layouts/main-layout',
            user: req.session.user || null
        });
    }
};
exports.chatPage = function (req, res){
    res.render('chat', {title: 'Web-chat',user: req.session.user || null})
}
