const findProduct = (arr, id) =>{
    return arr.filter((item) => +item.id===+id);
}
export default findProduct;