export default function MainButton({ children }) {
  return (
    <button type="button" className="w-56 h-12 rounded-2xl bg-[#00c896] font-bold text-white">
      {children}
    </button>
  )
}