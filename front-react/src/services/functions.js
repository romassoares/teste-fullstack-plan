import api from "./api";

export async function index() {
    try {
        const result = await api.get("index");
        // console.log(result.data);
        return result.data;
    } catch (error) {
        return error;
    }
}
export async function store(data) {
    try {
        const result = await api.post("product/store", data);
        return result.data.products;
    } catch (error) {
        return error;
    }
}
