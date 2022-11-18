import { ListCategoriesResponse } from '../interfaces/index';

const baseUrl = 'http://localhost:3000';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxR0gySkpBSjVBSFo2OUszRlI1NFBHQkswIiwiaWF0IjoxNjY3NjE0MjMwLCJleHAiOjIyNjc2MTQyMzB9.AtiOxxHse5cL1MLpi_jjF6FEjg_ofP6a02nss37HBBM";

export class HttpClient {
    constructor() {
        console.log('hola desde la clase');
    }


    async get(endPoint = "recipes") {
        const response = await fetch(`${baseUrl}/${endPoint}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data: ListCategoriesResponse = await response.json();

        return data;
    }
}