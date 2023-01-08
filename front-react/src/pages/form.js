import React, { useState } from "react";
export default function FormLogin() {
    const [inputs, setInputs] = useState({
        name: "",
        description: "",
        voltage: "",
        brand_id: "",
    });
    return (
        <div>
            <div>
                <input
                    name="name"
                    id="name"
                    placeholder="Nome do Eletro"
                    max={100}
                    min={3}
                    type="text"
                    value={inputs.name}
                    // onChange={() => inputs.name}
                />
            </div>
            <div>
                <input
                    name="description"
                    id="description"
                    placeholder="Descrição do Eletro"
                    max={500}
                    min={3}
                    type="text"
                />
            </div>
            <div>
                <input
                    name="voltage"
                    id="voltage"
                    placeholder="Voltagem do Eletro"
                    type="number"
                />
            </div>
            <div>
                <select name="brand_id" id="brand_id">
                    <option>marcas</option>
                    <option>marcas2</option>
                    <option>marcas3</option>
                    <option>marcas4</option>
                </select>
            </div>
        </div>
    );
}
