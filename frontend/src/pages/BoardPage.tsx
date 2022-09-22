import React, { Fragment, useState } from 'react'
import Header from 'src/components/layouts/Header'
import { Dialog, Transition } from '@headlessui/react'
import ShowTask from 'src/components/specialized/task/ShowTask'
import EditMemo from 'src/components/specialized/memo/EditMemo'

const RIGHT_AREA_WIDTH = 500

const BoardPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='flex flex-col h-screen max-h-screen'>
      <Header />
      <main className='bg-gray-100 w-full flex-auto relative overflow-hidden'>
        <div className='flex absolute inset-0'>
          {/* list横並び */}
          <div className='flex flex-nowrap gap-x-5 p-10 overflow-x-scroll' style={{ overscrollBehaviorX: "contain" }}>
            {/* main Tasks */}
            <ShowTask onSelectMemo={() => setOpen(!open)} />
            <ShowTask onSelectMemo={() => setOpen(!open)} />
            <ShowTask onSelectMemo={() => setOpen(!open)} />
            <ShowTask onSelectMemo={() => setOpen(!open)} />
            <ShowTask onSelectMemo={() => setOpen(!open)} />
            <ShowTask onSelectMemo={() => setOpen(!open)} />
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="ease-in-out duration-500 sm:duration-700"
            enterFrom="min-w-0"
            enterTo={`min-w-[${RIGHT_AREA_WIDTH}px]`}
            leave="ease-in-out duration-500 sm:duration-700"
            leaveFrom={`min-w-[${RIGHT_AREA_WIDTH}px]`}
            leaveTo="min-w-0"
          >
            <div className='h-full' />
          </Transition>
        </div>
        <Transition
          show={open}
          as={Fragment}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className={`w-[${RIGHT_AREA_WIDTH}px] bg-gray-300 right-0 top-0 bottom-0 absolute shadow-xl`}>
            {/* memo の表示・編集エリア */}
            <EditMemo />
          </div>
        </Transition>
        <button onClick={() => setOpen(!open)} className="absolute right-0 top-0 mr-3 mt-3">{open ? ">" : "<"}</button>
      </main>
    </div>
  )
}

export default BoardPage
