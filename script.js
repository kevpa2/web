body {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(to right, #4b6cb7, #182848);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: #fff;
}

.container {
    width: 360px;
    height: 640px;
    background-color: #222;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    padding: 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.header h1 {
    font-size: 18px;
    margin: 0;
}

.image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.image-container img {
    width: 100px; /* Ajusta el tamaño de la imagen */
    height: auto; /* Mantén la proporción */
    border-radius: 10px; /* Opcional: añade un borde redondeado */
}

.menu {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.menu button {
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    transition: color 0.3s, transform 0.3s;
}

.menu button:hover {
    color: #ff6f61;
}

.section {
    display: none;
    transition: opacity 0.3s ease-in-out;
}

.section.active {
    display: block;
}

.input-group {
    margin-bottom: 10px;
}

.input-group input {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    margin-bottom: 10px;
    background: #333;
    color: #fff;
}

.size-entry {
    margin-bottom: 10px;
}

.size-entry input {
    margin-right: 10px;
}

.hidden {
    display: none;
}

.carga-result {
    background: #333;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 10px;
}

.carga-result p {
    margin: 0;
}

.motivational-quotes {
    margin-top: auto;
    text-align: center;
}

.motivational-quotes p {
    font-size: 16px;
}