import CommonInput from "../common-input"; // Import the CommonInput component

const formtypes = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'textarea'
};

function CommonForm({ formControls = [],onHandleSubmit, formData, setFormData,buttonText }) {
    function renderFormElement(getCurrentElement) {
        let content = null;

        switch (getCurrentElement?.componentType) {
            case formtypes.INPUT:
                content = (
                    <CommonInput
                        label={getCurrentElement.label}
                        name={getCurrentElement.name}
                        id={getCurrentElement.id}
                        placeholder={getCurrentElement.placeholder}
                        value={formData[getCurrentElement.name]} // Bind the value
                        type={getCurrentElement.type} // Input type (email/password)
                        onChange={(event) => setFormData({
                            ...formData,
                            [event.target.name]: event.target.value, // Update the specific field
                        })}
                    />
                );
                break;
            default:
                content = (
                    <CommonInput
                        label={getCurrentElement.label}
                        name={getCurrentElement.name}
                        id={getCurrentElement.id}
                        placeholder={getCurrentElement.placeholder}
                        value={formData[getCurrentElement.name]} // Bind the value
                        type={getCurrentElement.type} // Input type (email/password)
                        onChange={(event) => setFormData({
                            ...formData,
                            [event.target.name]: event.target.value, // Update the specific field
                        })}
                    />
                );
                break;
        }
        return content;
    }

    return (
        <form onSubmit={onHandleSubmit}>
            {
                
                formControls?.length ?
                    formControls.map(singleFormElementItem => renderFormElement(singleFormElementItem)) : null
            }
            <div style={{marginTop:'12px'}}>
                <button type="submit">{buttonText || 
                'Submit' }</button>

            </div>
        </form>
    );
}

export default CommonForm;
