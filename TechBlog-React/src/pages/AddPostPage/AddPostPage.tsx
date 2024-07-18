import { useForm } from "react-hook-form";
import Header from "../../Layout/Header/Header";
import "./AddPostPage.css";

interface FormValues {
  title: string;
  author: string;
  image: string;
  description: string;
  text: string;
  tag: string;
}

function AddPostPage() {
  const {
    register,
    watch,
    formState: { isDirty },
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
      author: "",
      image: "",
      description: "",
      text: "",
      tag: "",
    },
  });

  const placeholderImg =
    "https://seetruetechnology.com/wp-content/uploads/2022/02/BG-7.jpg";

  const watchImage = watch("image");
  const watchTitle = watch("title");
  const watchText = watch("text");
  const watchTag = watch("tag");
  const watchAuthor = watch("author");

  return (
    <section className="AddPostPage">
      <div className="add-post-form-div">
        <div className="add-post-form-heading">
          <h2>Post details</h2>
        </div>
        <form className="add-post-form-info">
          <input
            type="text"
            placeholder="Title"
            {...register("title", {
              required: { value: true, message: "Title is required" },
            })}
          />
          <input
            type="text"
            placeholder="Author"
            {...register("author", {
              required: { value: true, message: "Author is required" },
            })}
          />
          <input
            type="text"
            placeholder="Image URL"
            {...register("image", {
              required: { value: true, message: "Image URL is required" },
            })}
          />
          <textarea
            placeholder="Description (50 - 250)"
            maxLength={250}
            {...register("description", {
              required: { value: true, message: "Description is required" },
            })}
          ></textarea>
          <textarea
            placeholder="Full post text (500)"
            maxLength={1100}
            {...register("text", {
              required: { value: true, message: "Full post text is required" },
            })}
          ></textarea>
          <input
            type="text"
            placeholder="Tag"
            {...register("tag", {
              required: { value: true, message: "Tag is required" },
            })}
          />
        </form>
        <div className="add-post-form-button">
          <button className="add-post-button">Create post</button>
        </div>
      </div>
      <div className="preview-post-div">
        <div className="preview-post">
          {isDirty && (
            <>
              <Header />
              <div className="preview-post-main-container">
                <div className="post-preview-title">
                  <h2>{watchTitle}</h2>
                </div>
                <div className="post-preview-image-div">
                  <img src={watchImage || placeholderImg} alt="" />
                </div>
                <div className="post-preview-text">
                  <p>{watchText}...</p>
                  <p>Author: {watchAuthor}</p>
                  <p className="preview-span-tag">{watchTag}</p>
                  <div className="preview-post-page-button-container">
                    <button className="preview-post-page-like-button">
                      <i className="fa-regular fa-star"></i>
                    </button>
                    <button>
                      <i className="fa-solid fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default AddPostPage;
