const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { secret, expiresIn } = require('../config/jwt-secret');

const saltRounds = 10;
module.exports = {
	generated_tokens: (data) => new Promise((resolve, reject) => {
		try {
			resolve(jwt.sign(data, secret, { expiresIn }));
		} catch (error) {
			reject(error);
		}
	}),
	decode_tokens: (data) => new Promise((resolve, reject) => {
		try {
			resolve(jwt.verify(data.slice(7), secret));
		} catch (error) {
			reject(error);
		}
	}),
	randomTracking: (length) => {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	},
	hash_password: (password) => new Promise((resolve, reject) => {
		try {
			bcrypt.genSalt(saltRounds, (err, salt) => {
				if (err) {
					throw err;
				} else {
					bcrypt.hash(password, salt, (err, hash) => {
						if (err) {
							throw err;
						} else {
							console.log(hash);
							resolve(hash);
						}
					});
				}
			});
		} catch (error) {
			reject(error);
		}
	}),
	decode_password: (hash, password) => new Promise((resolve, reject) => {
		try {
			bcrypt.compare(password, hash, (err, isMatch) => {
				if (err) {
					throw err;
				} else if (!isMatch) {
					reject('Password doesn\'t match!');
				} else {
					resolve(true);
				}
			});
		} catch (error) {
			reject(error);
		}
	}),
	text_to_lowercase: (data) => new Promise((resolve, reject) => {
		try {
			resolve(data.toLowerCase());
		} catch (error) {
			reject(error);
		}
	}),
	text_to_uppercase: (data) => new Promise((resolve, reject) => {
		try {
			resolve(data.toUpperCase());
		} catch (error) {
			reject(error);
		}
	}),
};
