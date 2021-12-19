import React from "react";

function InputArea(props) {

    const [inputText, setInputText] = React.useState("");

    function handleChange(event) {
        const newItem = event.target.value;
        setInputText(newItem);
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={() => {
                props.onAdd(inputText);
                setInputText("")
            }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;
