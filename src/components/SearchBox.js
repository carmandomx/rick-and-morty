import { useForm } from "react-hook-form";

const SearchBox = ({ onSearchLocation }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitSearch = (data) => {
    onSearchLocation(data.query);
    reset({
      query: "",
    });
  };

  return (
    <form
      style={{ width: 350, margin: "20px auto" }}
      onSubmit={handleSubmit(onSubmitSearch)}
    >
      <div style={{ marginBottom: 8 }}>
        <input
          style={{ width: "100%" }}
          name="query"
          ref={register}
          placeholder="You have to search by Location Id"
        />
      </div>
      <button>Search</button>
    </form>
  );
};

export default SearchBox;
