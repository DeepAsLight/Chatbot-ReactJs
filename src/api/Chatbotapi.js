import  jsonAxios from '../common-components/authorization/json-fetch'
import { getJsonHeaderWithoutToken } from '../common-components/authorization/headers';

export const fetchChatbotData = (botId,user_query,userId) => {
    
    console.log(botId,user_query,userId,"botId,user_query,userId")
    
    
    try {
        const url = `https://f2ei55geeb.execute-api.us-east-1.amazonaws.com/dev/platform/api/v1/bot/${botId}/intent/prediction?query_text=${user_query}&user_id=${userId}`;
        const response = jsonAxios.jsonAxios({
            url: url,
            method: "get",
            headers: getJsonHeaderWithoutToken(),
        });
        return response;
    } catch (err) {
        throw err;
    }
};
 

export const postChatbotData = (data) => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/`;
        const response = jsonAxios.jsonAxios({
            url: url,
            method: "post",
            data: data,
            headers: getJsonHeaderWithoutToken(),
        });
        return response;
    } catch (err) {
        throw err;
    }
}