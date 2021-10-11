import React from "react";
import CheckLine from "../CheckLine/CheckLine";
import "./CheckLists.css"
function CheckLists() {

		let checkListItems = [
			{
				label: "Drink coffee",
				important: true,
				done: false
			},
			{
				label: "Make awesome app",
				important: false, 
				done: false
			},
			{
				label: "Pet the Cat",
				important: true,
				done: true
			},
			{
				label: "love myself",
				important: false,
				done: true
			}
		];

		let checkLine = checkListItems.map(item => {
			return <CheckLine label={item.label} important={item.important} done={item.done}/> //вызвали функцию(компонент) CheckLine с аргументами props.label и props.important 
		})

		/** мы можем использовать в jsx кавычки "" для передачи строк, а так же {} для передачи js кода в important передастся результат выполнения кода */
    return (
        <div className = "checkLists">
					{ checkLine }
        </div>
    )
}
export default CheckLists;