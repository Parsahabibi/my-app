import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react'
const filterData=[
  {id:1,title:'allcontact'},
  {id:2,title:'favoritecontact'},
  {id:3,title:'unfavoritecontact'}
]
function App() {
  const [contacts,setcontacts]=useState([
    {id:1,age:18,name:'parsa',email:'parsa@gmail.com' ,number:'09197401839' ,favorite:'favoritecontact' , country:'iran'},
    {id:2,age:11,name:'mamad',email:'parsa@gmail.com' ,number:'09197401839' ,favorite:'unfavoritecontact' , country:'usa'}
  ])
  const [form,setForm] = useState[{
    id:Math.floor(Math.random()*1000),
    name:'',
    age:'18',
    email:'',
    number:'',
    favorite :'',
    country:''
  }]
  const [search,setSearch] = useState('')
  const [ShowMessage,setShowMessage] = useState('none')
  const [id,setId] = useState(null)
  const handleDelete = ()=>{
    setcontacts(contacts.filter(contact=>contact.id!==id))
    setShowMessage('none')
  }
  const handleShowMessage = id=>{
    setShowMessage('flex')
    setId(id);
  }
  const handleDisMessage = ()=>{
    setShowMessage('none')
  }
  const handleSearch = e =>{
    setSearch(e.target.value)
  }
  const[filter,setFilter] = useState('allcontact')
  const handleFilterBtn = title =>{
    setFilter(title)
  }
  const handleForm = e=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit = e =>{
    e.preventDefault()
    setcontacts([...contacts,form])
    setForm({
      id:Math.floor(Math.random()*1000),
      name:'',
      age:'18',
      email:'',
      number:'',
      favorite :'',
      country:''
    })
  }
  return (
    <div>
    <div>
      <div>
        <img className={'image'}src={`https://avatars.dicebear.com/api/avataaars/:parsa.svg`}/>
      </div>
    </div>
    <div>
      <div>
        <div>add new contact</div>
        <div>
          <form onSubmit={handleSubmit}>
            <label>name:</label>
            <input name={'name'} onChange={handleForm} value={form.name}/>
            <label>age:</label>
            <input name={'age'} onChange={handleForm} value={form.age}/>
            <label>email:</label>
            <input type={'email'} name={'email'} onChange={handleForm} value={form.email}/>
            <label>number:</label>
            <input name={'number'} onChange={handleForm} value={form.number}/>
            <label>favorite:</label>
            <input name={'favorite'} onChange={handleForm} value={form.favorite}/>
            <label>country:</label>
            <input name={'contry'} onChange={handleForm} value={form.country}/>
            <button type={"submit"}>
              submit
            </button>
          </form>
        </div>
      </div>
      <div>
        search:
      </div>
      <div>
        <input onChange={handleSearch} value={search}></input>
      </div>
    </div>
      <div>
        <div>
          <div style={{display:ShowMessage}}>
            <p>
              are you sure you want to delete
            </p>
            <button onClick={handleDelete}>yes</button>
            <button onClick={handleDisMessage}>no</button>
          </div>
        </div>
        <div>filter</div>
        <div>
          {filterData.map(filterBtn =>(
            <button onClick={()=>handleFilterBtn(filterBtn.title)} style={{backgroundColor:filterBtn.title === filter ?'red':'white'}}>
              {filterBtn.title}
            </button>
          ))}
        </div>
      </div>
          {contacts.filter(contact=>contact.name.toLowerCase().includes(search.toLowerCase()) &&(filter==='allcontact'?true:contact.favorite===filter)).map(contact=>( 
      <div>
        <div>name:{contact.name}</div>
        <div>age:{contact.age}</div>
        <div>email:{contact.email}</div>
        <div>number:{contact.number}</div>
        <div>favorite:{contact.favorite ? 'favorite' : 'onfavorite'}</div>
        <div>country:{contact.country}</div>
        <button onClick={()=>handleShowMessage(contact.id)}>delete</button>
      </div>))}
    </div>
  );
}

export default App;
