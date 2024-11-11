import useFormInput from "../hooks/useFormInput";

export default function FormPage() {
  const firstNameProps = useFormInput("");
  const lastNameProps = useFormInput("");
  return (
    <div className="max-w-md  mx-auto mt-10 p-4 rounded shadow-lg border-2">
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstname"
        {...firstNameProps}
        className="border m-1 p-1"
      />
      <br />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastname"
        {...lastNameProps}
        className="border m-1 p-1"
      />

      <p className="text-center m-2">
        {firstNameProps.value && (
          <b>
            Hello {firstNameProps.value} {lastNameProps.value}.
          </b>
        )}
      </p>
    </div>
  );
}
