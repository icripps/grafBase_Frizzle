'use client'

import { SessionInterface } from "@/common.types"
import Image from "next/image"
import React, { ChangeEvent } from "react"


type props = {
    type: string,
    session:SessionInterface
}

const ProjectForm = ({ type, session }: props) => {
    const form = {
        image: ''
    }
    const handleSubmit = (e:React.FormEvent)=>{}
    const handleChangeImage = (e:ChangeEvent<HTMLInputElement>)=>{}
    const handleStateChange = (fieldName:string, value: string)=>{}
    return (
      <form onSubmit={handleSubmit} className="flexStart form">
            <div className="flexStart form_image-container">
                <label htmlFor="poster" className="flexCenter form_image-label">
                    {!form.image && 'Choose an image for your project'}
                </label>
                <input id="image"
                    type="file"
                    accept="image/*"
                    required={type === 'create'}
                    className="form_image-input"
                    onChange={handleChangeImage}
                />
                {form.image && <Image src={form.image}
                    className="sm:p-10 object-contain z-20"
                    alt="project poster" fill/>}
            </div>
            <FormField
                title='title'
                state={form.title}
                placeholder='Frizzle 🥴'
                setState={(value)=>handleStateChange('title',value)}
            />
    </form>
  )
}

export default ProjectForm