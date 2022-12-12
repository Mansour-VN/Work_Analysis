import propTypes from 'prop-types';

export const Input = ({type, holder, onChange, value})=>{
    return(
        <input type={type} placeholder={holder} onChange={onChange} className='input' value={value} required ></input>
    )
};


Input.prototype = {
    type: propTypes.string.isRequired,
    holder: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
}