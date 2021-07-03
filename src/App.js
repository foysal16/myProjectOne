import React, {Component} from 'react';


class App extends Component{
  state = {
    age: 21,
    name: 'Foysal Ahammed',
    profession: 'Designer',
  };

  render(){
    return (
        <div>
            <p>Hi, I am {this.state.age}</p>
            <p>My Age is : {this.state.name}</p>
            <p>My profession : {this.state.profession}</p>
            <button>Sumbit</button>
        </div>
    );
  }
}

export default App;