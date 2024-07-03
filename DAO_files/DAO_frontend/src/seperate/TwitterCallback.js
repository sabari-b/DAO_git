import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { makeApiRequest } from '../services/axiosService';

function TwitterCallback() {
    const [auhtUser, setAuthUser] = useState(false);
    const [resMessage, setResMessage] = useState('')
    useEffect(()=>{
        let params = queryString.parse(window.location.search);
        console.log("params",params,!params.code);
        let twitterCallbackFun = async () => {
            if(!params.code){
                window.location.href = "/"
            }else{
                setAuthUser(true)
                let payload = {
                    url : `callback?state=${params.state}&code=${params.code}`,
                    method : "get"
                }
                let response = await makeApiRequest(payload)
                if(response.status){
                    setResMessage(response.message)
                    localStorage.setItem('walletAddress',response.data)
                    setTimeout(() => {
                        window.close();
                    }, 3000);
                }else{
                    setResMessage(response.message)
                    setTimeout(() => {
                        window.close();
                    }, 2000);
                }
            }
        }
        twitterCallbackFun();
    },[])

  return (
    <div>
        {
            auhtUser ? (
                <>
                    <h1>{resMessage}</h1>
                </>
            ) : (
                <>
                    <h1>You are restricted..!</h1>
                </>
            )
        }
      
    </div>
  )
}

export default TwitterCallback
