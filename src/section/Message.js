import { useState } from 'react';
import Module from './Message.module.css'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img6.jpg";
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const text ="Aliquam vel donec vestibulum vel diam, libero sodales.Posuere"

const peoples =[
    {id:"1",src:img1,name:"Violet Webb",text:text},
    {id:"2",src:img2,name:"Corey Burns",text:text},
    {id:"3",src:img3,name:"Cahrlie Aguilar",text:text},
    {id:"4",src:img4,name:"Florence Hardy",text:text},
    {id:"5",src:img5,name:"Elsie Clark",text:text}
]

function Message(){
    const [text, setText] = useState("")
    const [imgId,setImgId] = useState("")
    return(
        <div className={Module.newCont}>

              <div className={Module.form}>
                <div className={Module.settings}>
                    <h2>Messages</h2>
                    <SettingsSuggestIcon sx={{width:"40px",height:"35px",marginTop:"15px",display:"flex"}}  color="primary"/>
                </div>
                <div className={Module.lines}>
                   
                </div>
                <div className={Module.input}>
                <TextField sx={{
                        width: "350px", background: "#e9e4e4",
                        
                    }} placeholder="Search" onChange={(e) => {
                        setText(e.target.value)
                    }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }} />
              </div>
              <div style={{display:"flex",flexDirection:"column"}}>
                {peoples.filter((people)=> people.name.includes(text)).map((people,i)=>{
                    return(
                        <div className={Module.divImg} key={people.id}>
                            <img className={Module.IMG}  src={people.src} style={{border:imgId===i?"3px solid blue":""}} alt='' onClick={()=>[
                                setImgId(i)
                            ]}/>
                            <div style={{display:"flex",flexDirection:"column"}}>
                            <div className={Module.name}>{people.name}</div>
                            <div style={{marginLeft:"5%"}}>{people.text}</div>
                           </div>

                           
                        </div>
                    )
                })}
              </div>
              </div>
        </div>
    )
}
export default Message