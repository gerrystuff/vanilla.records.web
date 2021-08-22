export const formatDate = (date) => {


    const tempDate = new Date(date);

    const aux = tempDate.getDate() +
        "/" + (tempDate.getMonth() + 1) +
        "/" + tempDate.getFullYear();


    return aux;

}

export const serializeForm = function(form) {
    var obj = {};
    var formData = new FormData(form);
    for (var key of formData.keys()) {
        obj[key] = formData.get(key);
    }
    return obj;
};