import React      			from 'react';
import Reflux 					from 'reflux';
import Question 				from 'components/Question';
import QuestionsStore		from 'stores/QuestionsStore';


var Questions = React.createClass({
  mixins: [Reflux.connect(QuestionsStore, 'questions')],
  render: function() {
    console.log(this.state.questions);
    return (
      <div className='questions-outer'>
      	<h1>What do you want to know about <br/> Cal Poly San Luis Obispo?</h1>
      	<div className='tools'>
      		<p>Showing all {this.state.questions ? this.state.questions.length : 0} questions asked</p>
      	</div>
	      <div className='questions'>
	      	{this.state.questions ? this.state.questions.map(function(m){
	      		return <Question data={m}/>
	      	}) : null}
	      </div>
      </div>
    );
  }
});

export default Questions;