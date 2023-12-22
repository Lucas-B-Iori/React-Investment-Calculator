export default function Input({ text, state, setState, type }) {
    function handleChange(event) {
        setState(prevState => {
            const updatedState = {...prevState, [type]: Number(event.target.value)}
            return updatedState
        })
    }
    
    return (
        <div>
            <label>{text}</label>
            <input type="number" value={state[type]} onChange={handleChange}/>
        </div>
    )
}