function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors group">
      <button
        onClick={() => onToggle(todo.id)}
        className="flex-shrink-0 w-5 h-5 rounded-md border-2 border-gray-300 hover:border-blue-500 transition-colors relative"
      >
        {todo.completed && (
          <svg className="w-full h-full text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      
      <div className="flex-1 min-w-0">
        <p className={`text-gray-900 ${todo.completed ? 'line-through text-gray-400' : ''} transition-all`}>
          {todo.text}
        </p>
      </div>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
        aria-label="Delete task"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  )
}

export default TodoItem