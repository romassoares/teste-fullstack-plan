import { stringify } from "postcss";
import api from "./api";

export async function index() {
    try {
        const result = await api.get("index");
        return result.data;
    } catch (error) {
        return error;
    }
}
export async function store(data) {
    try {
        const result = await api.post("product/store", data);
        return { success: true, data: result.data };
    } catch (error) {
        return { success: false, errors: error.response.data };
    }
}
export async function update(data) {
    try {
        const result = await api.post("product/update", data);
        return { success: true, data: result.data };
    } catch (error) {
        return { success: false, errors: error.response.data };
    }
}
export async function edit(id) {
    try {
        const result = await api.get("product/edit" + id);
        return result.data;
    } catch (error) {
        return error;
    }
}
export async function del(id) {
    try {
        const result = await api.get("product/destroy/" + id);
        console.log(result);
        return result.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}
