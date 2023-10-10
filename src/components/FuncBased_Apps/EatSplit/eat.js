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

export default function Main() {
    return (
        <div className="container">
            <FriendsList friends={initialFriends}/>
        </div>
    )
}

function FriendsList({friends}) {
    return (
        <ul>
            {friends.map(friend=> <Friends key={friend.balance} friend={friend}/>)}
        </ul>
    )
}

function Friends({friend}) {
    return (
        <li>
            <img src={friend.image} alt={friend.name}/>
            
        </li>
    )
}

function FormAddFriends() {
    return (
        <>Hello Lists friends</>
    )
}


function BillForm(){
    return (
        <h1>Bill Section</h1>
    )
}

function Button({children}) {
    return <button>{children}</button>
}