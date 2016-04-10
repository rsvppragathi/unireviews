'use strict';

import React 				from 'react';
import Questions 			from 'components/Questions';
import QuestionsActions 			from 'actions/QuestionsActions';
import Header 				from 'Header';

var App = React.createClass({
	getInitialState: function() {
		return {

		};
	},	
	componentWillMount: function(){
		QuestionsActions.fetch();
	},
	render: function() {
		return (
			<div className="app-inner">
				<div className='content'>
					<Questions/>
				</div>
			</div>
		);
	}
});

export default App;
