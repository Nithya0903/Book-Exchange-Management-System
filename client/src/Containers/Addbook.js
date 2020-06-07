import React,{useState} from 'react'
import InnerNavbar from '../Components/InnerNavbar'
import {addbook} from "../Api-requests/bookRequests"
import '../Style.css'
const Addbook = ()=>{
    const [book,setBook] =useState({
        title:'',
        author:'',
        subject:'',
        image:'',
        price:''
    })
    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        console.log(file);
        
        setBook((prev)=>{
           return {...prev, image: file}
        }   
        );
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(book)
        let bookData = new FormData();
        bookData.append('title',book.title)
        bookData.append('author',book.author)
        bookData.append('subject',book.subject)
        bookData.append('price',book.price)
        bookData.append('image',book.image)
        addbook(bookData).then((res)=>{
            if(res.status===200)
            {
                alert("Book added succesfully")
            }
            else
            {
                alert("Couldnt add book! Try again later")
            }
        })
    }
    const handleChange=(event)=>{
        const target = event.target;
        
        setBook(prev=>{      
            return {...prev,[target.name]:target.value}
        })
    }
    return(<div className="addbook">
    <InnerNavbar />
    <form onSubmit={handleSubmit}>
    <div >
    <input type="text" onChange={handleChange} value={book.title} name="title" placeholder="Title" required={true} />
    </div>
    <div >
    <input type="text" onChange={handleChange} value={book.author} name="author" placeholder="Author" required={true}/> 
    </div>
    <div >
    <input type="text" onChange={handleChange} value={book.subject} name="subject"  placeholder="Subject" required={true}/>
     </div>
     <div >
     <input type="file" onChange={handleChangeImage}  name="image" required={true} />
     </div>
     <div >
     <input type="text" onChange={handleChange} value={book.price} name="price" placeholder="Price" required={true}/>
     </div>
     <div >
     <button type="submit">Add book!!</button>
     </div>
    
    
    </form>
    </div>)
}
export default Addbook;