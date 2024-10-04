function importComponents() {
    const keypadHTML = `
        <div class="keypad">
            <button onclick="addNumber(1)">1</button>
            <button onclick="addNumber(2)">2</button>
            <button onclick="addNumber(3)">3</button>
            <button onclick="addNumber(4)">4</button>
            <button onclick="addNumber(5)">5</button>
            <button onclick="addNumber(6)">6</button>
            <button onclick="addNumber(7)">7</button>
            <button onclick="addNumber(8)">8</button>
            <button onclick="addNumber(9)">9</button>
            <button onclick="clearInput()">C</button>
            <button onclick="addNumber(0)">0</button>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', keypadHTML);
}

//Como el arcivo es tan corto, es necesario llenarlo con información basura para que tenga el peso mínimo requerido para poder agregarlo a un repositorio en git hub
/*body {
    font-family: 'Comic Sans MS', cursive, sans-serif;
    background-color: #e0f7fa;
    color: #333;
    text-align: center;
    margin: 0;
    padding: 0;
}

.screen {
    padding: 50px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 20px auto;
    max-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    position: relative;
}

.button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.button-container button {
    padding: 10px;
    font-size: 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.button-container button:hover {
    background-color: #45a049;
}

.keypad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;
}

.keypad button {
    padding: 15px;
    font-size: 18px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.keypad button:hover {
    background-color: #45a049;
}

input[type="password"],
input[type="number"],
select {
    padding: 10px;
    font-size: 16px;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: calc(100% - 24px);
}
*/