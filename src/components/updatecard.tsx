import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

type addTodo = {
  title: string;
  description: string;
};

const UpdateCard = () => {
  const { register, handleSubmit } = useForm<addTodo>();
  const navigation = useNavigate();
  const loc=useLocation();
  const data = loc.state?loc.state.data:null;
  const submitHandler = (d: any) => {
    const sent={
        id:data.id,
        title : d.title,
        description : d.description
    }
    fetch("http://localhost:8080/todo/update",{
      method: "PUT",
      body: JSON.stringify(sent),
      headers:{
         "content-type":"application/json"
      }
    }).then(
      (val) => {
        console.log(val.json());
        navigation("/dashboard");
      }      
    )
  };

  return (
    <form
      className="bg-white shadow-lg rounded-md overflow-hidden p-4 w-4/5 m-8"
      onSubmit={handleSubmit(submitHandler)}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Add Card</h2>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-600"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register("title")}
          className="mt-1 p-2 w-full border rounded-md"
          required
          placeholder={data.title}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-600"
        >
          Description (max 30 words)
        </label>
        <textarea
          id="description"
          {...register("description")}
          rows={3}
          className="mt-1 p-2 w-full border rounded-md"
          required
          placeholder={data.description}
        ></textarea>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Update Card
      </button>
    </form>
  );
};

export default UpdateCard;