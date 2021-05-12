import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChatbotData } from "../../mocks/ChatbotComponentData";
import { fetchChatbotData, postChatbotData } from "../../api/Chatbotapi";
import "../../assests/styles/ChatbotComponent.scss";

export default function ChatbotComponent() {
  const { userId, botId } = useParams();
  const [getValue, setValue] = useState("");
  const [data, setData] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    setValue(e.target.username.value);
    console.log('this is data we need --->>> ',userId,botId,e.target.username.value);
    const userData = [...data, {sender: e.target.username.value }];
    setData(userData);
    fetchChatbotData(botId, e.target.username.value, userId).then((res) => {
      console.log("Chatbot data -->>>>> ", res.data.data.DatabaseDetail.responses[0]);
      // {app_name :res.data.data.app_name};
      console.log('thisssssssssss is apppppp name ---> ',res.data.data.app_name);
      if (res !== undefined) {
        if (res.data.status_code === 200) {
          setData([...userData, {receiver: res.data.data.DatabaseDetail.responses[0]}])
          // setData([...data, e.target.username.value]);
          console.log()
          setValue("");
        }
      }
      // getValue.reset();
    });
    //  postChatbotData(e.target.value);
  };

  useEffect(() => {}, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 chatbot_container_top">
          <div></div>
          <div>Proven Solution</div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 chatbot_container_poweredby">
          <div>powered by</div>
          <div></div>
          <div>Proven</div>
        </div>
        {/* static implementation */}

      {/*  <div className="col-lg-12 col-md-12 col-sm-12 col-12 chatbot_container_chatcontainer">
          {ChatbotData.length !== 0 ? (
            ChatbotData.map((item, i) => {
              return (
                <div key={i}>
                  <div className="receiver_wrapper">
                    <div>{item.sender}</div>
                  </div>
                  <div className="sender_wrapper">
                    <div>{item.receiver}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="empty_chatbox_wrap"></div>
          )}
        </div>
            */}
        {/* dynamic implementation */}
        
       <div className="col-lg-12 col-md-12 col-sm-12 col-12 chatbot_container_chatcontainer">
          {data.length !== 0 ? (
            data.map((item, i) => {
              return (
                <div key={i}>
                  {item.sender? 
                    <div className="sender_wrapper"><div>{item.sender}</div></div>:
                    <div className="receiver_wrapper"><div>{item.receiver}</div></div>
                  }
                </div>
              );
            })
          ) : (
            <div className="empty_chatbox_wrap"></div>
          )}
        </div>
      
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 chatbot_container_messagediv">
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <div>
              <input
                type="text"
                placeholder="Ask Something..."
                name="username"
                defaultValue={getValue}
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
