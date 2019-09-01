
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

  // A resource is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license.
  .createTable('resources', tbl => {
    // a unique Id.
    tbl.increments();
    // a name. This column is required.
    tbl.string('resource_name').notNullable().unique();
    // a description.
    tbl.text('resource_description');
  })

  // An task one of the steps needed to complete the project.
  .createTable('tasks', tbl => {
    // a unique Id.
    tbl.increments();
    // a description of what needs to be done. This column is required.
    tbl.string('task_description').notNullable();
    // a notes column to add additional information.
    tbl.text('task_notes');
    // a boolean that indicates if the task has been completed. 
      // This column cannot be NULL, the default value should be false.
    tbl.boolean('project_completed').notNullable();
  })


};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('table');
};
