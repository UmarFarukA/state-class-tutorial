import { useState } from "react";
import "./eat.css";

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

function Button({ children, click }) {
  return (
    <button className="btn" onClick={click}>
      {children}
    </button>
  );
}

export default function Main() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showFriend, setShowFriend] = useState(null);
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [friends, setFriends] = useState(initialFriends);
  const [billExpense, setBillExpense] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [paidBy, setPaidBy] = useState("user");

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleSetName(e) {
    setName(e.target.value);
  }

  function handleSetImage(e) {
    setImage(e.target.value);
  }

  function handleAddFriend(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = new Date();

    const newFriend = {
      name,
      image: image + `/+${id}`,
      balance: 0,
      id: id,
    };

    setFriends((prevFriends) => [...prevFriends, newFriend]);
    setImage("https://i.pravatar.cc/48");
    setName("");
    setShowAddFriend(false);
  }

  function handleFriendBill(id) {
    const searchFriend = friends.filter((friend) => friend.id === id);
    // console.log(searchFriend[0]);
    setShowFriend(searchFriend[0]);
  }

  function handleBillChange(e) {
    setBillExpense(e.target.value);
  }

  function handleUserChange(e) {
    setUserExpense(e.target.value);
  }

  const friendBalance = parseInt(billExpense) - parseInt(userExpense);

  function handlePaidBy(e) {
    setPaidBy(e.target.value);
  }

  function handlePay(id, name) {
    if (!userExpense || !billExpense) return;

    if (paidBy === "user") {
      const updatedFriends = friends.map((friend) =>
        friend.id === id
          ? { ...friend, balance: friend.balance + parseFloat(userExpense) }
          : friend
      );
      setFriends(updatedFriends);
    }

    if (paidBy === name) {
      const updatedFriends = friends.map((friend) =>
        friend.id === id
          ? { ...friend, balance: friend.balance - parseFloat(userExpense) }
          : friend
      );
      setFriends(updatedFriends);
    }

    setUserExpense("");
    setPaidBy("user");
  }

  return (
    <div className="container">
      <div className="sidebar">
        <FriendsList friends={friends} handleFriendBill={handleFriendBill} />
        {showAddFriend && (
          <FormAddFriends
            name={name}
            image={image}
            handleSetName={handleSetName}
            handleSetImage={handleSetImage}
            handleAddFriend={handleAddFriend}
          />
        )}
        <div className="btn-add">
          <Button click={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add friend"}
          </Button>
        </div>
      </div>
      {showFriend && (
        <BillForm
          friend={showFriend}
          billExpense={billExpense}
          userExpense={userExpense}
          handleBillChange={handleBillChange}
          handleUserChange={handleUserChange}
          balance={friendBalance}
          paidBy={paidBy}
          handlePaidBy={handlePaidBy}
          handlePay={handlePay}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, handleFriendBill }) {
  return (
    <ul className="friends-container">
      {friends.map((friend) => (
        <Friends
          key={friend.id}
          friend={friend}
          handleFriendBill={handleFriendBill}
        />
      ))}
    </ul>
  );
}

function Friends({ friend, handleFriendBill }) {
  return (
    <li className="friendList">
      <img src={friend.image} alt={friend.name} />
      <p>
        <h4>{friend.name}</h4>
        <p
          className={
            friend.balance < 0 ? "red" : friend.balance === 0 ? "even" : "green"
          }
        >
          {" "}
          {friend.balance < 0
            ? "You owe Clark"
            : friend.balance === 0
            ? "You and " + friend.name + " are even"
            : friend.name + ` owes you`}{" "}
          ${Math.abs(friend.balance)}
        </p>
      </p>
      <Button click={() => handleFriendBill(friend.id)}>Select</Button>
    </li>
  );
}

function FormAddFriends({
  name,
  handleSetName,
  image,
  handleSetImage,
  handleAddFriend,
}) {
  return (
    <form className="addForm" onSubmit={handleAddFriend}>
      <div className="fields">
        <label>🧑‍🤝‍🧑Friend name</label>
        <input type="text" value={name} onChange={handleSetName} />
      </div>

      <div className="fields">
        <label>🖼️Image name</label>
        <input type="text" value={image} onChange={handleSetImage} />
      </div>

      <Button>Add</Button>
    </form>
  );
}

function BillForm({
  friend,
  billExpense,
  userExpense,
  handleBillChange,
  handleUserChange,
  balance,
  paidBy,
  handlePaidBy,
  handlePay,
}) {
  return (
    <div className="bill-form">
      <form>
        <h2 className="form-title">split a Bill with {friend.name}</h2>
        <div className="fields">
          <label>💷 Bill value</label>
          <input
            type="text"
            value={Number(billExpense)}
            onChange={handleBillChange}
          />
        </div>

        <div className="fields">
          <label>🧍Your expense</label>
          <input
            type="text"
            value={Number(userExpense)}
            onChange={handleUserChange}
          />
        </div>
        <div className="fields">
          <label>🧑‍🤝‍🧑{friend.name}'s expense</label>
          <input type="text" disabled value={balance === "NaN" ? 0 : balance} />
        </div>
        <div className="fields">
          <label>😀 Who is paying the bill</label>
          <select value={paidBy} onChange={handlePaidBy}>
            <option value="user">User</option>
            <option value={friend.name}>{friend.name}</option>
          </select>
        </div>
      </form>

      <div className="btn-split">
        <Button click={(e) => handlePay(friend.id, friend.name)}>
          Split Bill
        </Button>
      </div>
    </div>
  );
}
