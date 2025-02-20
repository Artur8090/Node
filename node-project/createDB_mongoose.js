const mongoose = require('mongoose');
const { required } = require('nconf');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/myProject');
  console.log('Connected successfully to server');

  const user = new User({ 
    name: 'itgenik', 
    password: 'qwerty' 
  });

  await user.save();
  user.done()
}


async function main() {
  await mongoose
    .connect('mongodb://127.0.0.1:27017/webchatdb');

	// Сздание нового документа
	const user = new User({ 
    name: 'itgenik', 
    password: 'qwerty' 
  });

}
await user.save();
	user.done();