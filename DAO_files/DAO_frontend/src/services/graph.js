import axios from 'axios';

export const callMsGraph = async (accessToken) => {
    const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
    };

    const userProfile = await axios.get('https://graph.microsoft.com/v1.0/me?$select=mail', { headers });

    return userProfile.data.mail;
};