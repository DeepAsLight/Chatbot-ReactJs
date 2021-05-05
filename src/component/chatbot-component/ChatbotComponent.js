import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import { ChatbotData } from "../../mocks/ChatbotComponentData";
import {fetchChatbotData,postChatbotData} from "../../api/Chatbotapi"
import "../../assests/styles/ChatbotComponent.scss";

export default function ChatbotComponent() {

  const {userId,botId} = useParams();
  const [getValue, setValue] = useState("");

  const onChangeHandler = (e) =>{
   setValue(e.target.value);
   fetchChatbotData(botId,getValue,userId).then((res)=>{
    console.log("Chatbot data", res)
    });
  //  postChatbotData(e.target.value);
  }

  useEffect(()=>{
 
  },[]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 chatbot_container_top">
          <div></div>
          <div>for-manju</div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 chatbot_container_poweredby">
          <div>powered by</div>
          <div></div>
          <div>Dialogflow</div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 chatbot_container_chatcontainer">
          {ChatbotData.map((item, i) => {
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
          })}
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 chatbot_container_messagediv">
          <div>
            <input type="text" placeholder="Ask Something..." onChange={(e) => onChangeHandler(e)}/>
          </div>
        </div>
      </div>
    </div>
  );
}
