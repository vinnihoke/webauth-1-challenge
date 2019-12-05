
exports.up = function(knex) {
  return(
	  knex.schema
	  	.createTable('users', table => {
			  table.increments();
			  table.string('name', 140).notNullable();
			  table.string('password').notNullable();
		  })
  )
};

exports.down = function(knex) {
  return(
	  knex.schema
	  	.dropTableIfExists('users')
  )
};
