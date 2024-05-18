import PropTypes from 'prop-types'

Input.propTypes = {
    passwordSize: PropTypes.number.isRequired,
    setPasswordSize: PropTypes.func,
    className: PropTypes.className
}

export default function Input(props) {

    return (<>
        <input 
            type="number" 
            id="passwordSize" 
            className={props.className} 
            min={8}
            value={props.passwordSize}
            onChange={(ev) => props.setPasswordSize(ev.target.value)}
        />
    </>
    )
}