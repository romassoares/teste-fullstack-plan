import React, { useState, useEffect } from "react";
import * as api from "./services/functions";

function App() {
    const [inputs, setInputs] = useState({
        name: "",
        description: "",
        voltage: "",
        brand_id: "",
    });

    const [products, setProducts] = useState(null);
    const [brands, setBrands] = useState(null);

    const itens = async () => {
        const result = await api.index();
        if (result) {
            const { products, brands } = result;
            setProducts(products);
            setBrands(brands);
        }
    };

    const handleSubmit = () => {
        const result = api.store(inputs);
        console.log(result);
    };

    useEffect(() => {
        if (products === null) {
            itens();
        }
    }, []);

    return (
        <div>
            <div>
                {products
                    ? products.map((element) => (
                          <div key={""}>
                              <div>{element.name}</div>
                              <div>{element.description}</div>
                              <div>{element.voltage}</div>
                              <div>{element.brand_id}</div>
                          </div>
                      ))
                    : "Nenhum Eletro cadastrado"}
            </div>
            <div>
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
                            onChange={(value) =>
                                setInputs({
                                    ...inputs,
                                    name: value.target.value,
                                })
                            }
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
                            value={inputs.description}
                            onChange={(value) =>
                                setInputs({
                                    ...inputs,
                                    description: value.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <input
                            name="voltage"
                            id="voltage"
                            placeholder="Voltagem do Eletro"
                            type="number"
                            value={inputs.voltage}
                            onChange={(value) =>
                                setInputs({
                                    ...inputs,
                                    voltage: value.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <select name="brand_id" id="brand_id">
                            {brands
                                ? brands.map((item) => (
                                      <option value={item.id}>
                                          {item.description}
                                      </option>
                                  ))
                                : "Nenhuma marca cadastrada"}
                        </select>
                    </div>
                </div>
                <button onClick={() => handleSubmit()}>
                    criar novo Eletro
                </button>
            </div>
        </div>
    );
}

export default App;
