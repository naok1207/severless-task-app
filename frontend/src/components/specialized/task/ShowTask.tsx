import React from 'react'
import DatePickerInput from 'src/components/general/DatePickerInput'

const list = {
  name: "main",
  tasks: [
    {
      id: 1,
      title: "全体的なUIを実装する",
      description: "決定した機能の皮だけを作り、開発のモチベーションを上げる。",
      activity: "tailwindを利用することにした。",
      memo: [
        "react serverless boiler の router のプルリクを参考にし、ルーティングを作成した。",
        "https://qiita.com/hirogw/items/518a0143aee2160eb2d8 tailwind 導入"
      ],
      subTasks: [
        {
          id: 2,
          parent_id: 1,
          title: "css frameworkを決定する",
          description: "bootstrap か tailwind を利用する予定",
          activity: "",
          memo: [],
        },
        {
          id: 3,
          parent_id: 1,
          title: "ui の全体像を決める",
          description: "全体像を決めてしまってから細かい部分は実装しながら決めていく",
          activity: "",
          memo: [
            "サンプルデータを考えて当てはめてみるとより全体像が見えて面白いと思う。",
          ],
        }
      ]
    }, {
      id: 4,
      title: "機能を実装する",
      description: "機能の実装に合わせてコードをコンポーネント化する。",
      activity: "",
      memo: [],
      subTasks: [],
    }
  ]
}

const ShowTask = (props: any) => {
  const onSelectMemo = () => {
    props.onSelectMemo()
  }

  return (
    <div className='min-w-[440px] max-h-full flex flex-col'>
      <p className='text-sm font-medium text-gray-700 w-full flex-none'>{list.name}</p>
      <div className='flex-auto relative'>
        <div className='absolute inset-0 overflow-y-scroll'>
          <div className='bg-white px-6 pt-10 pb-8 shadow-xl ring-gray-900/5 rounded-lg'>
            <div className='shadow flex mb-3 px-4 py-5 w-full'>
              <p className='flex-auto'>title</p>
              <button className='flex-none border border-transparent bg-amber-100 py-1 px-2 text-xs font-medium shadow-sm hover:bg-amber-200 focus:outline-none active:bg-amber-300'>started</button>
            </div>
            <form action="#" method="POST" className='mb-3'>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className='w-full pt-3'>
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

                  <div className='w-full pt-3'>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      autoComplete="status-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>none</option>
                      <option>started</option>
                      <option>finished</option>
                    </select>
                  </div>
                  <div className='w-full pt-3'>
                    <label htmlFor="toDate" className="block text-sm font-medium text-gray-700">
                      ToDate
                    </label>
                    <DatePickerInput />
                  </div>
                  <div className='w-full pt-3'>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="description"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className='w-full pt-3'>
                    <label htmlFor="activity" className="block text-sm font-medium text-gray-700">
                      activity
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="activity"
                        name="activity"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="activity"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className='w-full pt-3'>
                    <span className="block text-sm font-medium text-gray-700">
                      memo
                    </span>
                    <div className='mt-1'>
                      <p className='border px-2 py-2 mb-2 rounded-md cursor-pointer hover:bg-gray-50' onClick={() => onSelectMemo()}>memo memo memo memo memo memo</p>
                      <p className='border px-2 py-2 mb-2 rounded-md cursor-pointer hover:bg-gray-50' onClick={() => onSelectMemo()}>memo memo memo memo memo memo</p>
                    </div>
                    <div className="text-right">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-sm border border-transparent bg-indigo-600 py-1 px-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
            <div className='shadow flex mb-3 px-4 py-5'>
              <p className='flex-auto'>title</p>
              <button className='flex-none border border-transparent bg-amber-100 py-1 px-2 text-xs font-medium shadow-sm hover:bg-amber-200 focus:outline-none active:bg-amber-300'>started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowTask
