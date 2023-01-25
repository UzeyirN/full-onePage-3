import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import './Add.css'
import { inputSchema } from '../Schema/FormValidation';
import axios from 'axios'


const Add = () => {

  const [state, setState] = useState({
    image: "",
    name: "",
    value: null
  })

  const addData = () => {
    if (!state.image || !state.name || !state.value) return;
    axios.post("http://localhost:3040/flowers", state)

    setState({
      image: "",
      name: "",
      value: ""
    })
  }


  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(inputSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    addData()
  };
  return (
    <>
      <div className='add-input__wrapper'>
        <form onSubmit={handleSubmit(onSubmit)} className='add-form' action="">
          <input name='image' value={state.image} placeholder="image " {...register("image")} className='add-input' type="text" onChange={handleChange} />
          <p style={{ color: "red" }}>{errors.image?.message}</p>

          <input name='name' value={state.name} placeholder="name " {...register("name")} className='add-input' type="text" onChange={handleChange} />
          <p style={{ color: "red" }}>{errors.name?.message}</p>

          <input name='value' value={state.value} placeholder="value " {...register("value")} className='add-input' type="number" onChange={handleChange} />
          <p style={{ color: "red" }}>{errors.value?.message}</p>

          <button className='add-btn'>Add</button>
        </form>
      </div>
    </>
  )
}

export default Add