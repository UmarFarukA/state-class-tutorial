import React from "react";
import "./Eat.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

class Main extends React.Component {
  constructor(props) {
    super();
    this.state = {
      friends: initialFriends,
      showAddForm: false,
    };
  }

  handleShowAddFriendForm = () => {
    this.setState({
      showAddForm: !this.state.showAddForm,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <FriendsList friends={this.state.friends} />
          {this.state.showAddForm && <AddFriendForm />}

          <div className="btn-add">
            <Button click={this.handleShowAddFriendForm}>
              {this.state.showAddForm ? "Close" : "Add Friend"}
            </Button>
          </div>
        </div>
        <BillForm />
      </div>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <button className="btn" onClick={this.props.click}>
        {this.props.children}
      </button>
    );
  }
}

class FriendsList extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <ul>
        {this.props.friends.map((friend) => (
          <Friend friend={friend} />
        ))}
      </ul>
    );
  }
}

class Friend extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <li className="friendList">
        <img src={this.props.friend.image} alt={this.props.friend.name} />
        <p>
          <h4>{this.props.friend.name}</h4>
          <p
            className={
              this.props.friend.balance < 0
                ? "red"
                : this.props.friend.balance === 0
                ? "even"
                : "green"
            }
          >
            {" "}
            {this.props.friend.balance < 0
              ? "You owe Clark"
              : this.props.friend.balance === 0
              ? "You and " + this.props.friend.name + " are even"
              : this.props.friend.name + ` owes you`}{" "}
            ${Math.abs(this.props.friend.balance)}
          </p>
        </p>
        <Button>Select</Button>
      </li>
    );
  }
}

class AddFriendForm extends React.Component {
  render() {
    return (
      <form className="addForm">
        <div className="fields">
          <label>🧑‍🤝‍🧑Friend name</label>
          <input type="text" />
        </div>

        <div className="fields">
          <label>🖼️Image name</label>
          <input type="text" />
        </div>

        <Button>Add</Button>
      </form>
    );
  }
}

class BillForm extends React.Component {
  render() {
    return (
      <div className="bill-form">
        <form>
          <h2 className="form-title">split a Bill with X</h2>
          <div className="fields">
            <label>💷 Bill value</label>
            <input type="text" />
          </div>

          <div className="fields">
            <label>🧍Your expense</label>
            <input type="text" />
          </div>
          <div className="fields">
            <label>🧑‍🤝‍🧑X's expense</label>
            <input type="text" disabled />
          </div>
          <div className="fields">
            <label>😀 Who is paying the bill</label>
            <select>
              <option value="user">User</option>
              {/* <option value={friend.name}>{friend.name}</option> */}
            </select>
          </div>
        </form>

        <div className="btn-split">
          <Button>Split Bill</Button>
        </div>
      </div>
    );
  }
}

export default Main;
