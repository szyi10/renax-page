const Spinner = () => {
  return (
    <div className="absolute left-0 top-0 w-full h-screen bg-dark flex items-center justify-center z-40">
      <div className="border-neutral-700 h-20 w-20 animate-spin rounded-full border-2 border-t-primary" />
    </div>
  )
}

export default Spinner
