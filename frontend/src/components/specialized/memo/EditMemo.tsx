import React from 'react'

const EditMemo = () => {
  return (
    <form action="#" method="POST" className='h-full pt-12 pb-6 px-6'>
      <div className="overflow-hidden shadow sm:rounded-md flex flex-col h-full">
        <div className="bg-white px-4 py-5 sm:p-6 flex-auto">
          <div className="flex flex-col h-full">
            <div className='w-full pt-3 flex-none'>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className='w-full pt-3 flex-auto'>
              <div className="flex flex-col h-full">
                <label htmlFor="body" className="block text-sm font-medium text-gray-700 flex-none">
                  body
                </label>
                <div className="mt-1 flex-auto">
                  <textarea
                    id="body"
                    name="body"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-full"
                    placeholder="body"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 flex-none">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

export default EditMemo
