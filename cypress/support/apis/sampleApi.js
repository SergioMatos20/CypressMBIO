import {api} from "../base";

export default class SampleApi {

    //User Login
    login (username,password){
        
        return cy.request({
            method: 'POST',
            url: `${api}/login`,
            body: {
                "email": username,
                "password": password
            },
        })
    }

    //Generate Treum api key
    generateApiKey (username,password){

        return cy.request({
            method: 'POST',
            url: `${api}/api-key`,
            headers: {
                'Authorization': `Bearer ${JSON.parse(window.localStorage.getItem('auth')).accessToken}`,
            },
        })
    }

}
