import axios from "axios";

const api_url = process.env.REACT_APP_API_URL;

export const getSKUs = async() => await axios.get(api_url + "/busca-sku");
export const getProdutos = async() => await axios.get(api_url + "/busca-produto");
