class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage(event) {
    event.preventDefault();
    if (!this.state.input) return;
    const messages = [...this.state.messages, this.state.input];
    console.log(messages);
    this.setState(({
      messages: messages,
      input: ''
    }))
  }
  render() {
    const items = this.state.messages.map(x => <li>{x}</li>)
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {items}
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
