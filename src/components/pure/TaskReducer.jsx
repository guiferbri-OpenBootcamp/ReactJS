import React, { useReducer, useContext, useState } from 'react';

// Actions
const ADD = 'ADD';
const REMOVE = 'REMOVE';
const FILTER = 'FILTER';

const myContext = React.createContext(null);

const Tasks = () => {

    const state = useContext(myContext);

    return (
        <div>
            <p>Tasks: { state.tasks.length }</p>
            { state.tasks.map((task, index) => {
                return (
                        <p key={task.id}>{task.id} - {task.title}</p>
                    )
                }
            )}
        </div>
        
    )

}


const TaskReducer = () => {

    // Initial State for Reducer
    const initialState = {
        tasks: []
    }

    // Reducer to change State
    const reducer = (state, action) => {

        switch (action.type) {
            case ADD:
                const tempTasks = [...state.tasks];
                tempTasks.push(action.payload.task);
                return {
                    tasks: tempTasks
                }
            case REMOVE:
                const tempTasksRemove = [...state.tasks];
                tempTasksRemove.pop();
                return {
                    tasks: tempTasksRemove
                }
            case FILTER:
                const tempTasksFilter = [...state.tasks];
                const filterTasks = tempTasksFilter.filter(task => task.completed === true);
                return {
                    tasks: filterTasks
                }
            default:
                return state;
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const [count, setCount] = useState(1);

    const addTask = () => {
        const action = {
            type: ADD,
            payload: {
                task: {
                    id: count,
                    title: `Tarea ${count}`,
                    completed: false 
                }
            }
        }
        setCount(count + 1);
        return dispatch(action);
    }

    const removeTask = () => {
        const action = {
            type: REMOVE
        }
        return dispatch(action);
    }

    return (
        <myContext.Provider value={state}>
            <div>
                <Tasks />
                <button onClick = {addTask}>
                    New task
                </button>
                <button onClick = {removeTask}>
                    Remove last task
                </button>
                <button onClick = {
                        () => dispatch({type: FILTER})
                    }>
                    Filter complete
                </button>
                
            </div>
        </myContext.Provider>
    );
}

export default TaskReducer;
