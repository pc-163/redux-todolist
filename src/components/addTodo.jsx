import { useState } from "react";
import { Button } from 'flowbite-react';
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoslice";

const AddTodo = () => {
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');

    const dispatch = useDispatch();

    const submitData = (e) => {
        e.preventDefault();
        if (input != 0) {
            dispatch(addTodo([input, input2]));
            setInput('');
            setInput2('');
        }
    }

    return (
        <>
            <input className="flex-grow h-8 bg-transparent focus:outline-none font-medium" type="text" placeholder="First Name" value={input} onChange={(e) => setInput(e.target.value)} />
            <input className="flex-grow h-8 bg-transparent focus:outline-none font-medium" type="text" placeholder="Last Name" value={input2} onChange={(e) => setInput2(e.target.value)} />
            <Button outline gradientDuoTone="purpleToBlue" className="w-full mt-3" type="submit" onClick={submitData}>Add Here</Button>
       
            </>
    )
}

export default AddTodo