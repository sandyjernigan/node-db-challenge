
exports.seed = function(knex, Promise) {
  return knex('projects').insert([   
    {
      project_name: 'project name here',
      project_description: 'the project description',
      project_completed: false
     },
    {
      project_name: 'another project',
      project_description: 'and the project description',
      project_completed: false
    }
  ]);
};
