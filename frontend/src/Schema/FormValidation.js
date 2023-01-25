import * as yup from "yup";

 export const inputSchema = yup.object().shape({
    image: yup.string().required("Enter image"),
    name: yup.string().min(5).max(20).required("Enter name"),
    value: yup.number().required("Enter value").integer("Enter integer value!").positive("Enter Positiv value!"),
});

