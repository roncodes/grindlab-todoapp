import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
	actions: {
		deleteTodo: function(todo) {
			todo.destroyRecord();
		}
	},

	/** 
	 * All of the todo models in the app
	 *
	 * @return array
	 */
 	allTodos: computed(function() {
 		return this.store.findAll('todo');
 	}),

 	todos: computed('allTodos.[]', function() {
 		return this.get('allTodos').filter(function(todo) {
 			return todo.get('title') !== null;
 		});
 	})
});
