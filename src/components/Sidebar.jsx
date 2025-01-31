import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */

export default function Sidebar({ initialMenuItems }) {
  let [newMenuItem, setNewMenuItem] = useState("")
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  //I have reused some of the comented out lines of code to acomplish goals of todo.2
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  //runs whenver it is called through button click
  let addMenuItem = useCallback(() => {
    console.log("Added menu item")
    //   // TODO: 3. Add a new menu item to the correct variable associated with this class
    //   // This involves adding a parameter and changing a class instance variable (props).

    //I have added in a conditional where trailing spaces are removed and it is not an empty string, then it will execute
    if (newMenuItem.trim()) {
      //I create a new array and new item is added at the begining and then adds in the remaining items from the already existing array
      setMenuItems([newMenuItem, ...menuItems])
      //Clears the input field
      setNewMenuItem("")
    }
  }, [menuItems, newMenuItem])

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.

  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.
  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      {/* I have modified the button to call the addMenuItem on click */}
      <button onClick={addMenuItem}>
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>

      <ul>
        {menuItems//Here I have used .map to to todo.1 with rendering an unorder list of menu items and presenting each as li element, and added the needded filter menu items which converts the serched items to lower case and compares with outputs in the array, if anything matches then it keeps that
          .filter((item) => item.toLowerCase().includes(filter.toLowerCase())) // Filter items
          .map((item, index) => (
            <li key={index}>{item}</li> // Display filtered items
          ))}
      </ul>
    </div>
  )
}
