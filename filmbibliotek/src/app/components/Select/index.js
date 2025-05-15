import React from 'react';
import styles from "../../page.module.css";

const Select = ({id, labelTitle, onChange, value}) => {
    return(
        <div>
        <label htmlFor={id} className="mt-3 fw-bold">{labelTitle}</label>
        <select type="text" id= {id} className = {'form-control'} onChange={onChange} value={value}>
            <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
        </select>
        </div>
    );
};

export default Select;