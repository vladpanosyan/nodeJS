class Datas {
    userLIst: Array<{ id: number, name: string, age: number }> = Array(
        { "id": 0, "name": "Adam", age:31 },
        { "id": 1, "name": "John", age:37 },
        { "id": 2, "name": "lucy", age:35 },
        { "id": 3, "name": "Ann", age:25 },
        { "id": 4, "name": "Karen", age:15 }
    );
    productList: Array<{ id: number, name: string, price: number }> = Array(
        { "id": 0, "name": "Phone", price: 500 },
        { "id": 1, "name": "TV", price: 200 },
        { "id": 2, "name": "Fridge", price: 150 },
        { "id": 3, "name": "DVD Player", price:250 },
    );
}
export default new Datas;
