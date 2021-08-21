export const formatDate = (date) => {


    const tempDate = new Date(date);

    const aux = tempDate.getDate() +
        "/" + (tempDate.getMonth() + 1) +
        "/" + tempDate.getFullYear();


    return aux;

}