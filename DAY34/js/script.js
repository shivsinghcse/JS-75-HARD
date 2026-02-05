const openDialog = () => {
    new Swal({
        html: `
            <div class="space-y-6 py-6 px-4 relative">
                <h1 class="text-xl font-semibold text-left text-black">New Task</h1>
                <form class="flex flex-col gap-8">
                    <input 
                        type="text" 
                        name="newTask" 
                        id="new-task" 
                        placeholder="Enter new task" 
                        class="border border-gray-300 rounded py-2 px-4 placeholder-slate-400 text-indigo-400 focus:outline-indigo-500"
                        required
                    /> 
                    <button class=" w-fit bg-indigo-500 py-2 px-4 text-white font-medium rounded hover:cursor-pointer hover:bg-indigo-600">Add</button>
                </form>    
            </div>    
        `,
        showConfirmButton: false,
        showCloseButton: true,
    })
}