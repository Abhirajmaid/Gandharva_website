import React from "react";
import Form from "../../components/Form/Form";
import { useParams } from "react-router-dom";
import FormData from "../../Data/FormArrData";

const FormRender = () => {
  const { id } = useParams();
  // console.log(FormData[id]);
  const eventForm = FormData.find((form) => {
    return form.id === FormData[id].id;
  });
  console.log(eventForm);
  return (
    <>
      <div>
        <Form
          title={eventForm.title}
          formArr={eventForm.formArr}
          submitBtn={eventForm.submitBtn}
        />
      </div>
    </>
  );
};

// title={"Register Event 1"}
//           formArr={formArr}
//           submitBtn={"Register"}
//           redirect={{
//             label: "Already have an account?",
//             link: {
//               label: "Sign In",
//               to: "/signin",
//             },
//           }}
export default FormRender;
