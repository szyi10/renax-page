import { twMerge } from "tailwind-merge"

interface PatternTypes {
  title: string
  whiteText: string
  yellowText: string
  isCenter: boolean
}

const SectionHeader = ({
  title,
  whiteText,
  yellowText,
  isCenter = true,
}: PatternTypes) => {
  return (
    <>
      <div
        className={twMerge(
          "container h-full flex flex-col justify-center",
          isCenter && "items-center"
        )}
      >
        <p className="text-small-primary mb-5">{title}</p>
        <h2 className="text-5xl font-bold leading-tight mb-4">
          {whiteText} <span className="text-primary">{yellowText}</span>
        </h2>
      </div>
    </>
  )
}

export default SectionHeader
