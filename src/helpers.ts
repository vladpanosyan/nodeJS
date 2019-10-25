
type findObject<T> = {
    id: number;
    name: string;
    [propname:string]:any;
}

function finder(queryParam: number, entity: Array<findObject<any>>) {
    return entity.find( item => item.id === queryParam);
}
export default finder;