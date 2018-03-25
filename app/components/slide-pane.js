import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
	/**
     * Class names for the component
     *
     * @return array
     */
	classNames: ['slide-pane'],

	/**
     * Toggle the slide panel on render
     *
     * @void
     */
	didInsertElement: function() {
		setTimeout(function() {
            $(this.$()).addClass('up');
        }.bind(this), 200);
	},

	/**
     * close panel on exit
     *
     * @void
     */
    willDestroyElement: function() {
        var clone = this.$().clone();
        this.$().parent().append(clone);
        setTimeout(function() {
            clone.removeClass('up');
        }, 200);
    }
});
