import React      			from 'react';

var Question = React.createClass({
  render: function() {
    return (
      <div className='question'>
        <span className='label'>QUESTION</span>   

        <p className='data'>{this.props.data.data}</p>
        
        <div className='answers'>
          {this.props.data.answers ? this.props.data.answers.map(function(a){
            return <div className='answer'><span className="label">ANSWER</span> <p className="data">{a.data}</p></div>
          }) : null}
        </div>
        <div className='tags'>
          <span className='tag'>DORMS</span>
          <span className='tag'>LIFE</span>
        </div>   
        <div className='clearfix'></div>

      </div>
    );
  }
});

export default Question;