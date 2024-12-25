function CommonInput({ label, onChange, name, id, value, placeholder, type }) {
    return (
        <div>
            <label style={{color:'black', fontSize:'20px'}} htmlFor={name}>{label} : </label>
            <input  style={{fontSize: '16px', 
                width: '300px', 
                height: '30px', 
                borderRadius: '5px', 
                padding: '5px', 
                border: '1px solid #ccc',
            marginTop:'5px' }}


            
                name={name}
                type={type || "text"} // Default type is text
                id={id}
                placeholder={placeholder || 'Enter value here'}
                value={value} // Controlled component
                onChange={onChange} // Handle input changes
            />
        </div>
    );
}

export default CommonInput;
