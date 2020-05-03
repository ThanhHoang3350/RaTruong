const axios = require('axios');

export default class Axios {
   
    static getDelete(id){

        let url = `${configs.BASE_URL}artists/${id}`;
        return axios.get(url, Axios.config).catch(this.hanldeError);
    }


    static hanldeError(error){
        console.log(error);
    }

}
