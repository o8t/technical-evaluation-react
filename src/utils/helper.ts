import Swal from "sweetalert2";

export const showAlert = (text:any,status:any) => {
    Swal.fire({
        toast:true,
        text: text,
        icon: status,
        timer:6500,
        showConfirmButton:false,
        position:'top-right'
    })
}
