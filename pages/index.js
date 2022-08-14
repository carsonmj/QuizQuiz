import MainButton from '../components/MainButton'

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      <p className="mb-14 text-7xl text-[#00c896]">
        QUIZ QUIZ
      </p>
      <MainButton>
        퀴즈 풀기
      </MainButton>
    </div>
  )
}
