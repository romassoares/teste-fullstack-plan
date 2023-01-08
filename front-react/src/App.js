import React, { useState, useEffect } from "react";
import * as api from "./services/functions";

function App() {
    const [inputs, setInputs] = useState({
        name: "",
        description: "",
        voltage: "",
        brand_id: "",
    });
    const [errors, setErrors] = useState([]);

    const [products, setProducts] = useState(null);
    const [brands, setBrands] = useState(null);
    const [typeForm, setTypeForm] = useState(false);

    const itens = async () => {
        const result = await api.index();
        if (result) {
            const { products, brands } = result;
            setProducts(products);
            setBrands(brands);
        }
    };

    const handleSubmit = async () => {
        const result = await api.store(inputs);
        if (result.success === true) {
            itens();
            setErrors([]);
        } else {
            const { errors } = result.errors;
            setErrors(errors);
        }
    };
    const handleDelete = async (id) => {
        const result = await api.del(id);
        if (result.success === true) {
            itens();
            setErrors([]);
        } else {
            const { errors } = result.errors;
            setErrors(errors);
        }
    };

    const handleEdit = async (id) => {
        console.log(id);
        const result = await api.edit(id);
        if (result) {
            const { products, brands } = result;
            setProducts(products);
            setBrands(brands);
        }
    };

    const handleUpdate = async () => {
        const result = await api.update(inputs);
        if (result.success === true) {
            itens();
            setErrors([]);
        } else {
            const { errors } = result.errors;
            setErrors(errors);
        }
    };
    useEffect(() => {
        if (products === null) {
            itens();
        }
    }, []);

    const stylesInputs = {
        width: "auto",
        margin: "0px 5px",
        padding: "5px",
    };
    const formGroup = {
        display: "flex",
        margin: "3px 5px",
    };
    const stylesError = {
        color: "red",
    };

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <div>
                    <div style={formGroup}>
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
                            style={stylesInputs}
                        />
                        <span style={stylesError}>{errors.name}</span>
                    </div>
                    <div style={formGroup}>
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
                            style={stylesInputs}
                        />
                        <span style={stylesError}>{errors.description}</span>
                    </div>
                    <div style={formGroup}>
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
                            style={stylesInputs}
                        />
                        <span style={stylesError}>{errors.voltage}</span>
                    </div>
                    <div style={formGroup}>
                        <select
                            name="brand_id"
                            id="brand_id"
                            style={stylesInputs}
                            value={inputs.brand_id}
                            onChange={(item) =>
                                setInputs({
                                    ...inputs,
                                    brand_id: item.target.value,
                                })
                            }
                        >
                            {brands
                                ? brands.map((item) => (
                                      <option key={item.id} value={item.id}>
                                          {item.description}
                                      </option>
                                  ))
                                : "Nenhuma marca cadastrada"}
                        </select>
                        <span style={stylesError}>{errors.brand_id}</span>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "5px",
                    }}
                >
                    <button onClick={() => handleSubmit()}>
                        Salvar Eletro
                    </button>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {products
                    ? products.map((item) => (
                          <div
                              key={item.id}
                              style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  flexDirection: "column",
                                  width: "300px",
                                  margin: "5px",
                                  border: "1px solid #000",
                                  borderRadius: "10px",
                                  padding: "5px",
                              }}
                          >
                              <div>
                                  {item.name} {item.brand}
                              </div>
                              <div style={{ fontSize: "12px", color: "gray" }}>
                                  {item.description}
                              </div>
                              <div style={{ fontSize: "13px", color: "black" }}>
                                  {item.voltage}v
                              </div>
                              <div
                                  style={{
                                      display: "flex",
                                  }}
                              >
                                  <button
                                      style={{ margin: "5px" }}
                                      onClick={() => handleEdit(item.id)}
                                  >
                                      Editar
                                  </button>
                                  <button
                                      style={{ margin: "5px" }}
                                      onClick={() => handleDelete(item.id)}
                                  >
                                      Excluir
                                  </button>
                              </div>
                          </div>
                      ))
                    : "Nenhum Eletro cadastrado"}
            </div>
        </div>
    );
}

export default App;
