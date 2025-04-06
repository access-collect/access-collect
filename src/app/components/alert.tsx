import Swal from "sweetalert2";

export const successAlert = async (text: string) => {
  const result = await Swal.fire({
    text: text,
    position: "top",
    color: "#7F9F80",
    showClass: {
      popup: `
            animate__animated
            animate__fadeInDown
            animate__faster
          `,
    },
    hideClass: {
      popup: `
            animate__animated
            animate__fadeOutUp
            animate__faster
          `,
    },
    grow: "row",
    showConfirmButton: false,
    showCloseButton: true,
    closeButtonAriaLabel: "Fermer la pop up"
  });
  return result;
};

export const errorAlert = async (text: string) => {
  const result = await Swal.fire({
    text: text,
    position: "top",
    color: "#FFA632",
    showClass: {
      popup: `
          animate__animated
          animate__fadeInDown
          animate__faster
        `,
    },
    hideClass: {
      popup: `
          animate__animated
          animate__fadeOutUp
          animate__faster
        `,
    },
    grow: "row",
    showConfirmButton: false,
    showCloseButton: true,
    closeButtonAriaLabel: "Fermer la pop up"
  });
  return result;
};

export const confirmAlert = async (title: string, text?: string) => {
  const result = await Swal.fire({
    title: title,
    text: text,
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText: "CONFIRMER",
    cancelButtonText: "ANNULER",
    confirmButtonColor:"#7F9F80",
    confirmButtonAriaLabel: "Confirmer",
    cancelButtonAriaLabel: "Annuler",
    customClass: {
      confirmButton: "font-title",
      cancelButton: 'cancelButton', 
      title: "font-title"
    }
  })
  return result
}
