const componentConfig = {
    TodoCounter: {
        id: 'counter',
        className: 'col-12',
        style: {
            textAlign:'center'
        },
    },
    TodoSearch: {
        id: 'search',
        className: 'col-12 mb-4',
        style: {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    TodoListing: {
        id: 'listing',
        className: null,
        style: {
            listStyle: 'none',
            display:'flex',
        },
    },
    TodoItem: {
        id: null,
        className: 'border row',
        style: {
            display: 'flex',
            textAlign: 'center',
            position: 'relative',
        },
    },
    CreateTodoButton: {
        id: 'todo-btn',
        className: 'btn btn-warning',
        style: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            borderRadius: "50%",
            width: '50px',
            height: '50px',
            textAlign: 'center',
            left: '50%',
            fontSize: '25px',
            transition: '0.5s ease',
            fontWeight: 'bold',
        },
    },
    Modal: {
        id: null,
        className: 'd-flex justify-content-center align-items-center position-fixed',
        style: {
            background: 'rgba(32,35,41,.8)',
            top: '-10px',
            left: '-10px',
            right: '-10px',
            bottom: '-10px',
            color: 'white',
            }
    }
}
export default componentConfig