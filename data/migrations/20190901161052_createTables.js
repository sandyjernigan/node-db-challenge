
exports.up = function(knex) {
  return knex.schema
  // A project is what needs to be done.
  .createTable('projects', tbl => {
    // a unique Id.
    tbl.increments();
    // a name. This column is required.
    tbl.string('project_name').notNullable().unique();
    // a description
    tbl.text('project_description');
    // a boolean that indicates if the project has been completed. 
    // This column cannot be NULL, the default value should be false.
    tbl.boolean('project_completed').notNullable();
  })

   
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('table');
};
