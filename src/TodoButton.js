import "./TodoButton.css"

function TodoButton(){
    return(
        <button onClick={(event) => {
            console.log("Le diste click");
        }}></button>
    );
}

export {TodoButton};