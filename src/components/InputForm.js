import InputField from './InputField'
import InputColor from './InputColor'

const inputForm = () => {
  return (
    <div className="col-span-2 p-6 grid gap-4">
      <InputField />
      <InputColor />

      <button
        // disabled={!inputValue.url}
        // onClick={handleSubmit}
        className="bg-zinc-800 max-w-xs ml-auto px-4 py-2 text-white rounded-sm mt-4 hover:bg-zinc-500 disabled:bg-gray-700"
      >
        Generate QrCode
      </button>
    </div>
  )
}

export default inputForm
