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
            width: 'calc(100% - 62px)!important',
        },
    },
    TodoListing: {
        id: 'listing',
        className: null,
        style: {listStyle: 'none'},
    },
    TodoItem: {
        id: null,
        className: 'row mb-3 place-items-center justify-items-center',
        style: {display:'flex'},
    },
    CreateTodoButton: {
        id: null,
        className: 'btn btn-warning',
        style: {
            borderRadius: "50%",
            width: '50px',
            height: '50px',
            textAlign: 'center',
            position: 'relative',
            left: '50%',
        },
    },
}
export default componentConfig