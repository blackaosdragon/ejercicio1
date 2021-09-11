import React from "react"
//const numeros = [1, 2, 3, 4, 5];
const numbers = new Array(100).fill()
//console.log(numbers)
class Contador extends React.Component {
    render() {
        /*
        const lista = numeros.map(element =>
            <div key={element.toString()}>
                {element}
            </div>
        )
        */
        const list = numbers.map((element, id) => {
            switch (id % 5) {
                case 0:
                    return (<div style={{ backgroundColor: "white" }}>
                        {console.log(id + 1)}
                        {id + 1}
                    </div>)
                case 1:
                    return (<div style={{ backgroundColor: "red" }}>
                        {console.log(id + 1)}
                        {id + 1}
                    </div>)
                case 2:
                    return (<div style={{ backgroundColor: "green" }}>
                        {console.log(id + 1)}
                        {id + 1}
                    </div>)
                case 3:
                    return (<div style={{ backgroundColor: "blue" }}>
                        {console.log(id + 1)}
                        {id + 1}
                    </div>)
                case 4:
                    return (<div style={{ backgroundColor: "black", color: "white" }}>
                        {console.log(id + 1)}
                        {id + 1}
                    </div>)


            }

            /*return (<div style={{ backgroundColor: "green" }}>
                {console.log(id + 1)}
                {id + 1}
            </div>)*/
        }

        )

        return (
            <div>
                {list}
            </div>
        )
    }
}
export default Contador;