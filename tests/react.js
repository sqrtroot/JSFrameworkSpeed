$(document).ready(function() {
	var forceUpdate = false;
	var timeoutId = null;
	var callback = function(){
		if(forceUpdate){
			renderComponent.forceUpdate();
			timeoutId = null;
		}
	}
	var ReactComponent = React.createClass({
		displayName: "ReactComponent",
		getInitialState: function() {
			return {
				data: []
			};
		},
		shouldComponentUpdate: function(nextProps, nextState){
			if(nextProps.data != this.state.data){
				return false;	
			}
			return true;
		},
		componentDidUpdate: function(){
			forceUpdate = false;
		},
		render: function() {
			return (
				React.createElement("span", null, 
					this.state.data
					)
				);
		}
	});

	var renderComponent = React.render(React.createElement(ReactComponent), $('#reactMountNode')[0]);

	window.RClear = function(optimize) {
		renderComponent.setState({
			data: []
		});
		if(!optimize){
			renderComponent.forceUpdate();
		}
	};

	window.RPush = function(data, optimize) {
		renderComponent.state.data.push(data);
		renderComponent.setState();
		if(!optimize){
			renderComponent.forceUpdate();
		}
	}
	window.RUpdate = function(){
		renderComponent.forceUpdate();
	}
});