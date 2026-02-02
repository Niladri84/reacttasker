function TodoStats({ todos, onClearCompleted }) {
  const total = todos.length
  const completed = todos.filter(todo => todo.completed).length
  const active = total - completed

  if (total === 0) return null

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-6 text-sm">
          <div>
            <span className="text-gray-500">Total:</span>
            <span className="ml-2 font-semibold text-gray-900">{total}</span>
          </div>
          <div>
            <span className="text-gray-500">Active:</span>
            <span className="ml-2 font-semibold text-blue-600">{active}</span>
          </div>
          <div>
            <span className="text-gray-500">Completed:</span>
            <span className="ml-2 font-semibold text-green-600">{completed}</span>
          </div>
        </div>
        
        {completed > 0 && (
          <button
            onClick={onClearCompleted}
            className="text-sm text-gray-500 hover:text-red-600 transition-colors"
          >
            Clear completed
          </button>
        )}
      </div>
    </div>
  )
}

export default TodoStats