import React, { Component } from 'react';


class Counter extends React.Component {
    state={ 
        value: this.props.value
        
      
    };

    // constructor(){
    //     super();
    //     this.handleIncrement =this.handleIncrement.bind(this);

    // }

    handleIncrement = (product) =>{
      
       this.setState({ cvalue: this.state.count + 1 });

    };

 

    // renderTags(){
    //     if(this.state.tags.length === 0) return <p>There are no tags!</p>;

    //     return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>
    // }
   

    render() { 
      
        return <div>
            {/* <img src={ this.state.imageUrl } alt=" " /> */}
            <span style={ { fontSize: 20 } } className={ this.getBadgeClasses() }>{this.formatCount()}</span>
            <button onClick={ () => this.handleIncrement({ id: 1}) } className="btn btn-secondary btn-sm">Increment</button>
            {/* { this.state.tags.length === 0 && 'Please create a new tag!' }
            { this.renderTags() } */}

        </div>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    
    }
     
}


export default Counter;