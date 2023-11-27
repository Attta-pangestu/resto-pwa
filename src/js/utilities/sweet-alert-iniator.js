import Swal from 'sweetalert2';

const initSuccessSWAL = () => {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });
}

export {
    initSuccessSWAL
};