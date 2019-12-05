module.exports = {
	development: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./data/webauth-1-challenge.db3"
		},
		migrations: {
			directory: "./data/migrations"
		},
		seeds: {
			directory: "./data/seeds"
		},
		pool: {
			afterCreate: (connection, done) => {
				connection.run("PRAGMA foreign_keys = ON", done);
			}
		}
	}
}