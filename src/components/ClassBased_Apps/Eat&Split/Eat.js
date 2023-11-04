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
      friendName: "",
      friendImage: "https://i.pravatar.cc/48?u=",
      friendBalance: 0,
      selectedFriend: "",
      showBillForm: null,
      billValue: 0,
      userExpense: 0,
      otherExpense: 0,
    };
  }

  otherExpense =
    parseInt(this.state.billValue) - parseInt(this.state.userExpense);

  handleShowAddFriendForm = () => {
    this.setState({
      showAddForm: !this.state.showAddForm,
    });
  };

  handleAddFriendName = (e) => {
    this.setState({
      friendName: e.target.value,
    });
  };

  handleAddFriendImage = (e) => {
    this.setState({
      friendImage: e.target.value,
    });
  };

  handleAddFriend = (e) => {
    e.preventDefault();
    if (this.state.friendName === "" || this.state.friendImage === "") return;

    const newId = new Date();

    this.setState((prevFriend) => {
      const newFriend = {
        name: prevFriend.friendName,
        image: prevFriend.friendImage + `${newId}`,
        balance: prevFriend.friendBalance,
        id: newId,
      };

      return {
        friends: [...prevFriend.friends, newFriend],
        friendName: "",
        friendImage: "https://i.pravatar.cc/48?u=",
        showAddForm: false,
      };
    });
  };

  handleSelectFriend = (id) => {
    const friend = this.state.friends.filter((friend) => friend.id === id);
    this.setState({
      showBillForm: true,
      selectedFriend: friend[0],
    });
  };

  handleUserBill = (e) => {
    this.setState({ userExpense: e.target.value });
  };

  handleBillValue = (e) => {
    this.setState({ billValue: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <FriendsList
            friends={this.state.friends}
            selectFriend={this.handleSelectFriend}
            active={this.state.showBillForm}
          />
          {this.state.showAddForm && (
            <AddFriendForm
              addFriend={this.handleAddFriend}
              fname={this.state.friendName}
              fimage={this.state.friendImage}
              addFName={this.handleAddFriendName}
              addFImage={this.handleAddFriendImage}
            />
          )}

          <div className="btn-add">
            <Button click={this.handleShowAddFriendForm}>
              {this.state.showAddForm ? "Close" : "Add Friend"}
            </Button>
          </div>
        </div>
        {this.state.showBillForm && (
          <BillForm
            activeFriend={this.state.selectedFriend}
            billValue={this.state.billValue}
            userBill={this.state.userExpense}
            handleUserBill={this.handleUserBill}
            handleBillValue={this.handleBillValue}
            otherExpense={this.otherExpense}
          />
        )}
      </div>
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
          <Friend
            friend={friend}
            key={friend.id}
            selectFriend={this.props.selectFriend}
            activeSelection={this.props.active}
          />
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
          <span
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
          </span>
        </p>
        <Button
          click={() => {
            this.props.selectFriend(this.props.friend.id);
          }}
        >
          Select
        </Button>
      </li>
    );
  }
}

class AddFriendForm extends React.Component {
  render() {
    return (
      <form className="addForm" onSubmit={this.props.addFriend}>
        <div className="fields">
          <label>🧑‍🤝‍🧑Friend name</label>
          <input
            type="text"
            value={this.props.fname}
            onChange={this.props.addFName}
          />
        </div>

        <div className="fields">
          <label>🖼️Image name</label>
          <input
            type="text"
            value={this.props.fimage}
            onChange={this.props.addFImage}
          />
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
          <h2 className="form-title">
            split a Bill with {this.props.activeFriend.name}
          </h2>
          <div className="fields">
            <label>💷 Bill value</label>
            <input
              type="text"
              value={Number(this.props.billValue)}
              onChange={this.props.handleBillValue}
            />
          </div>

          <div className="fields">
            <label>🧍Your expense</label>
            <input
              type="text"
              value={this.props.userBill}
              onChange={this.props.handleUserBill}
            />
          </div>
          <div className="fields">
            <label>🧑‍🤝‍🧑{this.props.activeFriend.name}'s expense</label>
            <input type="text" disabled value={this.props.otherExpense} />
          </div>
          <div className="fields">
            <label>😀 Who is paying the bill</label>
            <select>
              <option value="user">User</option>
              <option value={this.props.activeFriend.name}>
                {this.props.activeFriend.name}
              </option>
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

export default Main;
