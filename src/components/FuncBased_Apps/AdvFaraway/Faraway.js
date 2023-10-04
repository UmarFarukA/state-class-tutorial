import { useReducer } from "react";
import "./Faraway.css";

const initialState = {
    list: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state.list, {
                description: action.payload.description,
                quantity: action.payload.quantity,
                packed: action.payload.packed,
                id: action.payload.id
            }]
        case 'delete':
            return
        case 'toggle':
            return
        default:
            return
    }
}


function Main() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch({
            type: 'add',
            payload: {
                description: e.target.itemName.value,
                quantity: e.target.itemNum.value,
                packed: false,
                id: Date.now()
            }
        });
        console.log(e.target.itemName.value,)
        // console.log(state.list);
    }


    return (
        <div>
            <Header />
            <Form state={state} handleAdd={handleAdd} />
            <PackingList list={state.list} />

            <Footer />
        </div>
    )
}

function Header() {
    return (
        <div className="header">
            <h1>🌳 Far Way 💼</h1>
        </div>
    )
}

function Form({ state, handleAdd }) {

    return (
        <form className="menu" onSubmit={handleAdd}>
            <p>What do you need 🥰 for your trip? </p>
            <select
                name="itenNum"
                id="itemNum"
                className="selectOption"
                value={state.list.quantity}
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
                value={state.list.description}
            />
            <div>
                <button className="btnAdd">Add</button>
            </div>
        </form>
    )

}

function PackingList({ list }) {


    return (
        <div className="container">
            <ul className="parkingList">
                {list.map((item) => (
                    <Item
                        quantity={item.quantity}
                        description={item.description}
                        key={item.id}
                        id={item.id}
                        packed={item.packed}
                    />
                ))}
            </ul>
        </div>
    )
}

function Item() {

    return (

        <div className="itemContainer">

            <li>
                <input type="checkbox" name="checkSelect" onChange={() => { }} />
                <span>{ }</span>
                <p>{ }</p>
                <span className="btn-delete" onClick={() => { }} >x</span>
            </li >

        </div>

    )
}

// function Stats() {

//     if (!list.length) {
//         return (
//             <>
//                 <p className="stats">
//                     Start adding some items to your packing list
//                 </p>
//             </>
//         )
//     }

//     const count = list.length;
//     const countToggle = list.filter(item => item.packed).length;
//     const percent = Math.floor((countToggle / count) * 100)

//     return (
//         <>

//             {
//                 percent === 100 ? (
//                     <p className="stats">You have alread packed all items</p>
//                 ) : (
//                     <p className="stats">You have {count} items on your list, and you already packed {countToggle} ({percent}%) </p>
//                 )
//             }

//         </>
//     )
// }


function Footer() {
    return (
        <div className="footer">
            <p>Copyright ©️ {new Date().getFullYear()} U-3 Technologies Inc.</p>
        </div>
    )
}

export default Main;