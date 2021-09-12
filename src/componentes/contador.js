import React from "react"

class Contador extends React.Component {
    state = {
        value: 1 + parseInt(this.props.valueInitial)
    }
    componentDidCatch(){
        this.setState({
            value: 1 + parseInt(this.props.valueInitial)
        })
    }
    render() {
        let numbers = new Array(100).fill()
        const list = numbers.map((element, id) => {
            switch (id % 5) {
                case 0:
                    return (<div style={{ backgroundColor: "white" }}>
                        {id + parseInt(this.props.value)}
                    </div>)
                case 1:
                    return (<div style={{ backgroundColor: "red" }}>
                        {id +  parseInt(this.props.value)}
                    </div>)
                case 2:
                    return (<div style={{ backgroundColor: "green" }}>
                        {id +  parseInt(this.props.value)}
                    </div>)
                case 3:
                    return (<div style={{ backgroundColor: "blue" }}>
                        {id +  parseInt(this.props.value)}
                    </div>)
                case 4:
                    return (<div style={{ backgroundColor: "black", color: "white" }}>
                        {id +  parseInt(this.props.value)}
                    </div>)
            }
        })
        if(isNaN(this.props.value) || this.props.value===''){
            return(
                <div>Ingrese un numero válido</div>
            )
        } else {
            return (
                <div>
                    {list}                    
                </div>
            )

        }        
    }
}
export default Contador;