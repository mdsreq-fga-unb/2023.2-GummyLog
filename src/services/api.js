import axios from "axios";

const api_url = "http://localhost:5000";

export const getSKUs = async() => await axios.get(api_url + "/busca-sku");
export const getProdutos = async() => await axios.get(api_url + "/busca-produto");