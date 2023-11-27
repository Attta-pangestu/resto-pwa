import Swal from 'sweetalert2';

const initSuccessSWAL = () => {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });
}

const initErrorSWAL =  (message) => {
    Swal.fire({
        title: "Error happened",
        text: `${message}`,
        icon: "error",
    });
}

export {
    initSuccessSWAL, 
    initErrorSWAL,
};