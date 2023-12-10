import { useNavigate } from "react-router-dom";
const Card = (props: any) => {
  const navigation = useNavigate();
 const deletefun=(id: any)=>{
  fetch(`http://localhost:8080/todo/delete?id=${id}`,{
    method: "DELETE" ,
    headers:{
       "content-type":"application/json"
    }
  }).then(
    (val) => {
     
      
    window.location.reload();
    }      
  )
  }

  const updatefun=(id:any,title:any,description:any)=>
  {
    const data = {id, title, description};
    navigation("/updatecard", {state: {data}});
  }
  const { id,title, description, currentDate, modifiedDate } = props.data;

  return (
    <div className="max-w-md mx-4 my-8 w-96 bg-white shadow-lg rounded-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={()=> deletefun(id)}>
          Delete
        </button>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-2 rounded" onClick={()=> updatefun(id,title,description)}>
          Update
        </button>

        <div className="flex justify-between text-sm text-gray-500">
          <p>{currentDate}</p>
          <p>{modifiedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
