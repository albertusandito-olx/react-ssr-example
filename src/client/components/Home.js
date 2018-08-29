import React from 'react';

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>I'm the home component</div>
				<button onClick={() => console.log('Hi there!')}>Press me!</button>
			</div>
		);
	}
	
};

export default Home;