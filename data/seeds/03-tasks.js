
exports.seed = function(knex, Promise) {
  return knex('tasks').insert([   
    {
      task_description: 'task description',
      task_notes: 'the task notes',
      task_completed: false,
      project_id: 1
     },
    {
      task_description: 'nother task description',
      task_notes: 'the task notes',
      task_completed: false,
      project_id: 1
    }
  ]);
};