import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          ></Counter>
        ))}
      </div>
    );
  }

  handleDelete = counterId => {
    console.log("Delete acionado!", counterId);
    const newCounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: newCounters });
  };
}

export default Counters;
