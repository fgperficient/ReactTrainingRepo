import React from "react";
import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProjects({ onCancelAddProject, onSaveNewProyect }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  const handleSave = () => {
    const inputTitle = title.current.value;
    const inputDescription = description.current.value;
    const inputDueDate = dueDate.current.value;

    if (
      inputTitle.trim() === "" ||
      inputDescription.trim() === "" ||
      inputDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onSaveNewProyect({
      title: inputTitle,
      description: inputDescription,
      dueDate: inputDueDate
    });
  };

  return (
    <>
      <Modal ref={modal}>
        <>
          <h2 className="text-xl font-bold text-stone-700">Invalid Input</h2>
          <p className="text-stone-600 mb-4">
            Oops ... looks like you forgot to enter a value{" "}
          </p>
          <p className="text-stone-600 mb-4">
            Please make sure you provide a valid value for every input field.
          </p>
        </>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancelAddProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label={"Title"} />
          <Input ref={description} label={"Description"} isTextArea />
          <Input type="date" ref={dueDate} label={"Due Date"} />
        </div>
      </div>
    </>
  );
}

export default NewProjects;
