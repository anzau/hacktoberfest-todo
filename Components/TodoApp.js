import { Input } from '@supabase/ui';

export default function TodoApp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Add");
  };

  return (
    <div className="border border-gray-800 p-4 rounded-md">
      <form className="flex" onSubmit={handleSubmit}>
        <input className="bg-black p-2 border border-gray-800 border-r-0 w-full" placeholder="Todo..." />
        <button type="submit" className="bg-green-400 py-2 px-10">Add</button>
      </form>
    </div>
  )
}
