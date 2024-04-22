import SectionHeader from "../components/SectionHeader"
import Separator from "../components/Separator"

const NotFound = () => {
  return (
    <>
      <SectionHeader
        isCenter={true}
        pattern="aston"
        title="404 Page"
        whiteText="Page not found"
        yellowText=""
      />
      <Separator />
      <section className="py-32">
        <div className="container">
          <div className="flex flex-col items-center">
            <h1 className="text-[150px] sm:text-[200px] leading-[180px] text-neutral-800 font-bold">
              404
            </h1>
            <h3 className="text-xl font-bold mb-4 text-center">
              Sorry, We Can't Find That Page!
            </h3>
            <p className="text-neutral-500 text-center">
              The page you are looking for was moved, removed, renamed or never
              existed.
            </p>
          </div>
        </div>
      </section>
      <Separator />
    </>
  )
}

export default NotFound
