import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/common/Header'

const App = () => {
    const title = 'React Coin'

    return (
        <div>
            <Header />
            <h1>{ title }</h1>

            <p>Exibe as cotações de criptomoedas</p>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
