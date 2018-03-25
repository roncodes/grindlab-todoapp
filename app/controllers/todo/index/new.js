import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
	actions: {
		createTodo: function(todo) {
			var controller = this;
			todo.save().then(function() {
				return controller.transitionToRoute('todo.index').then(function() {
					controller.send('resetForm');
				});
			});
		},

		resetForm: function() {
			this.set('todo', this.store.createRecord('todo', {
				title: null
			}));
		}
	},

	todo: computed(function() {
		return this.store.createRecord('todo', {
			title: null
		})
	})
});
