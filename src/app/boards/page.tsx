"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Header } from "@/app/Header";
import { Main } from "@/app/Main";

export default function Boards() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header
        actions={
          <button className="btn-primary" onClick={() => setIsOpen(true)}>
            Create a New Board
          </button>
        }
      >
        Boards Index
      </Header>
      <Main>Boards Index Page</Main>

      <Transition show={isOpen} as={Fragment}>
        <Dialog className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="fixed inset-0 bg-black/40"
          />

          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="-right-10 opacity-0"
            enterTo="right-0 opacity-100"
            leave="ease-in duration-200"
            leaveFrom="right-0 opacity-100"
            leaveTo="-right-10 opacity-0"
            className="fixed top-0 h-full p-4 w-full max-w-sm"
          >
            <Dialog.Panel className="w-full bg-white rounded p-4">
              <Dialog.Title className="text-lg pb-2 border-b mb-4">
                Create a New Board
              </Dialog.Title>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border shadow-sm p-3 sm:text-sm"
                    placeholder="you@example.com"
                    aria-describedby="name-description"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500" id="name-description">
                  Name your new board. This can change later.
                </p>
              </div>

              <button className="btn-primary w-full mt-4">Save</button>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
