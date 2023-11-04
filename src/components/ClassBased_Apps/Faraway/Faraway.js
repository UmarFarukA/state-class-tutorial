import React, { Component } from "react";

import "./Faraway.css";

// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      currentDescription: "",
      currentQuantity: 1,
      sort: "input",
    };
  }

  addItems = (e) => {
    e.preventDefault();

    this.setState((prevState) => {
      const newItem = {
        description: prevState.currentDescription,
        quantity: prevState.currentQuantity,
        packed: false,
        id: Date.now(),
      };

      return {
        list: [...prevState.list, newItem],
        currentDescription: "",
        currentQuantity: "",
      };
    });
  };

  handleDescription = (e) =>
    this.setState({ currentDescription: e.target.value });

  handleQuantity = (e) => this.setState({ currentQuantity: e.target.value });

  handleDelete = (id) => {
    const filetered_list = this.state.list.filter((item) => item.id !== id);
    this.setState({
      list: filetered_list,
    });
  };

  handleSort = (e) => {
    this.setState({
      sort: e.target.value,
    });
  };

  handleToggle = (id) => {
    // const toggleList = this.state.list.map(item => item.id === id ? { ...item, packed: !item.packed } : item)

    this.setState((prevState) => {
      prevState.list.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      );
    });
  };

  handleReset = () => {
    this.setState({
      list: [],
      currentDescription: "",
      currentQuantity: 1,
      sort: "input",
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Form
          quantity={this.state.currentQuantity}
          description={this.state.currentDescription}
          handleDescription={this.handleDescription}
          handleQuantity={this.handleQuantity}
          addItems={this.addItems}
        />
        <PackingList
          state={this.state.list}
          handleDelete={this.handleDelete}
          handleToggle={this.handleToggle}
          handleReset={this.handleReset}
          handleSort={this.handleSort}
          sort={this.state.sort}
        />
        <Stats state={this.state.list} />
        <Footer />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>🌳 Far Way 💼</h1>
      </div>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <form className="menu" onSubmit={this.props.addItems}>
        <p>What do you need 🥰 for your trip? </p>
        <select
          name="itemNum"
          id="itemNum"
          className="selectOption"
          value={this.props.quantity}
          onChange={this.props.handleQuantity}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="itemName"
          id="itemName"
          className="inputItem"
          value={this.props.description}
          onChange={this.props.handleDescription}
        />
        <div>
          <button className="btnAdd">Add</button>
        </div>
      </form>
    );
  }
}

class PackingList extends Component {
  constructor(props) {
    super();
    this.state = {
      sortItems: [],
    };
  }

  render() {
    return (
      <div className="container">
        <ul className="parkingList">
          <div className="parkingList-items">
            {this.props.state.map((item) => (
              <Item
                key={item.id}
                quantity={item.quantity}
                description={item.description}
                packed={item.packed}
                id={item.id}
                handleDelete={this.props.handleDelete}
                handleToggle={this.props.handleToggle}
              />
            ))}
          </div>

          <div className="actions">
            <select
              className="sortOptions"
              value={this.props.sort}
              onChange={this.props.handleSort}
            >
              <option value="input">Sort by Input</option>
              <option value="description">Sort by Description</option>
              <option value="packed">Sort by Packed</option>
            </select>
            <button className="btn-clear" onClick={this.props.handleReset}>
              Clear List
            </button>
          </div>
        </ul>
      </div>
    );
  }
}

class Item extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="itemContainer">
        <li className={this.props.packed ? "packed" : ""}>
          <input
            type="checkbox"
            value={this.props.packed}
            onChange={() => {
              this.props.handleToggle(this.props.id);
            }}
          />
          <span>{this.props.quantity}</span>
          <p>{this.props.description}</p>
          <span
            className="btn-delete"
            onClick={() => {
              this.props.handleDelete(this.props.id);
            }}
          >
            x
          </span>
        </li>
      </div>
    );
  }
}

class Stats extends Component {
  constructor(props) {
    super();
  }

  render() {
    if (!this.props.state.length) {
      return (
        <>
          <p className="stats">Start adding some items to your packing list</p>
        </>
      );
    }

    const count = this.props.state.length;
    const countToggle = this.props.state.filter((item) => item.packed);
    const percent = Math.ceil((countToggle / count) * 100);

    return (
      <>
        {percent === 100 ? (
          <p className="stats">You have alread packed all items</p>
        ) : (
          <p className="stats">
            You have {count} items on your list, and you already packed{" "}
            {countToggle} ({percent}%){" "}
          </p>
        )}
      </>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>Copyright ©️ {new Date().getFullYear()} U-3 Technologies Inc.</p>
      </div>
    );
  }
}

export default Main;
