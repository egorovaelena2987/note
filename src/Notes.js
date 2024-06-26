import { Component } from "react";
import check from './check.jpeg';

export class Notes extends Component {
    state = {
        userInput: "",
        notes: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

        addItem(input) {
            if (input === '') {
                alert ('Please enter an item')
            } else {
            let listArray = this.state.notes;
            listArray.push(input);
            this.setState({notes: listArray, userInput: ''})
        }
        }

        deleteItem() {
            let listArray = this.state.notes;
            listArray = [];
            this.setState({notes: listArray})
        }

        crossedWord(event) {
            const li = event.target;
            li.classList.toggle('crossed');
        }
        onFormSubmit(e) {
            e.preventDefault();
        }
    
render() {
    return(
        <form onSubmit={this.onFormSubmit}>
        <div>
            <div className="container">
        <input type="text"
        placeholder="What do you need to do today?"
        onChange={(e) => {this.onChangeEvent(e.target.value)}}
        value={this.state.userInput}/>
        </div>
        <div className="container">
            <button className="btn add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
        </div>
        <div className="container">
        <ul>
            {this.state.notes.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
                    <img src={check} width="25px"/>
                    {item}</li>
            ))}
        </ul>
        </div>
        <div className="container">
            <button className="btn delete" onClick={() => this.deleteItem()}>Delete</button>
        </div>
        </div>
        </form>
    )
}

}